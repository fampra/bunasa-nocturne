import { Server, Cloud, Shield, Code } from 'lucide-react';

const pricingPlans = [
  {
    icon: Server,
    title: "Free Hosting",
    description: "Deploy your applications with zero cost. Unlimited projects, unlimited potential.",
    price: "$0/month"
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "Secure and scalable storage solutions for all your development needs.",
    price: "$0/month"
  },
  {
    icon: Shield,
    title: "Security Features",
    description: "Enterprise-grade security features included in all plans, free or premium.",
    price: "$0/month"
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Comprehensive development team and resources at your fingertips.",
    price: "$0/month"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Our Pricing Plans
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the plan that best suits your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:translate-y-[-4px] transition-all duration-300 group"
            >
              <div className="mb-4 relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <plan.icon className="w-12 h-12 text-primary relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-gray-300 mb-4">{plan.description}</p>
              <p className="text-2xl font-bold text-primary">{plan.price}</p>
              <button className="w-full primary-button mt-4">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;