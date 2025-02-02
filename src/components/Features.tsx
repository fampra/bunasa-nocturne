import { Server, Cloud, Shield, Code } from 'lucide-react';

const features = [
  {
    icon: Server,
    title: "Free Hosting",
    description: "Deploy your applications with zero cost. Unlimited projects, unlimited potential."
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "Secure and scalable storage solutions for all your development needs."
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security features included in all plans, free or premium."
  },
  {
    icon: Code,
    title: "Developer Tools",
    description: "Comprehensive development tools and resources at your fingertips."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">Features</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Everything You Need
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Powerful features to accelerate your development workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:translate-y-[-4px] transition-all duration-300 group"
            >
              <div className="mb-4 relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <feature.icon className="w-12 h-12 text-primary relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;