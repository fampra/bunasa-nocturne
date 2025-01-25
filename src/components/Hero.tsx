import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl animate-fade-up">
        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
          Welcome to Bunasa
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
          Development & Hosting
          <span className="text-primary"> Made Simple</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Experience seamless development and hosting solutions. Most services free, forever.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="primary-button flex items-center justify-center gap-2 group">
            Get Started Free
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="secondary-button">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;