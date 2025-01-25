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
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
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
              className="glass-card p-6 hover:translate-y-[-4px] transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
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