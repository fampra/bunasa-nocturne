import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type TicketStatus = "open" | "in_progress" | "resolved" | "closed";
type TicketPriority = "low" | "medium" | "high" | "urgent";

interface Ticket {
  id: string;
  title: string;
  status: TicketStatus;
  priority: TicketPriority;
  created_at: string;
  user_profiles: {
    full_name: string | null;
  }[];
}

const AdminTicketList = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchTickets = async () => {
    try {
      const { data, error } = await supabase
        .from("tickets")
        .select(`
          *,
          user_profiles (
            full_name
          )
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setTickets(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();

    // Subscribe to real-time changes
    const channel = supabase
      .channel('public:tickets')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'tickets'
        },
        () => {
          fetchTickets();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const updateTicketStatus = async (ticketId: string, status: TicketStatus) => {
    try {
      const { error } = await supabase
        .from("tickets")
        .update({ status })
        .eq("id", ticketId);

      if (error) throw error;

      setTickets(tickets.map(ticket => 
        ticket.id === ticketId ? { ...ticket, status } : ticket
      ));

      toast({
        title: "Success",
        description: "Ticket status updated",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="glass-card p-6">
      <h2 className="text-xl font-semibold mb-4">All Support Tickets</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell>{ticket.user_profiles[0]?.full_name || "Unknown"}</TableCell>
              <TableCell>{ticket.title}</TableCell>
              <TableCell>
                <Badge variant="outline">{ticket.status}</Badge>
              </TableCell>
              <TableCell>
                <Badge>{ticket.priority}</Badge>
              </TableCell>
              <TableCell>
                {new Date(ticket.created_at).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <div className="space-x-2">
                  {ticket.status !== "resolved" && (
                    <Button
                      size="sm"
                      onClick={() => updateTicketStatus(ticket.id, "resolved")}
                    >
                      Resolve
                    </Button>
                  )}
                  {ticket.status !== "in_progress" && (
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => updateTicketStatus(ticket.id, "in_progress")}
                    >
                      In Progress
                    </Button>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {tickets.length === 0 && (
        <div className="text-center py-4 text-gray-500">
          No tickets found.
        </div>
      )}
    </div>
  );
};

export default AdminTicketList;