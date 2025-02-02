import { useEffect, useState } from 'react';

const CursorFollow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      setTrails(prev => [
        { x: e.clientX, y: e.clientY, id: Date.now() },
        ...prev.slice(0, 5),
      ]);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: position.x - 16,
          top: position.y - 16,
          transform: 'translate(0, 0)',
        }}
      >
        <div className="w-full h-full rounded-full bg-primary/50 backdrop-blur-sm" />
      </div>
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="fixed w-4 h-4 pointer-events-none z-40 animate-cursor-animate"
          style={{
            left: trail.x - 8,
            top: trail.y - 8,
          }}
        >
          <div className="w-full h-full rounded-full bg-accent/30" />
        </div>
      ))}
    </>
  );
};

export default CursorFollow;