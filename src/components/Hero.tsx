
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24 pb-16 flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Hero Content Container */}
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Caption */}
          <div
            className={cn(
              "inline-flex items-center rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm px-4 py-1.5 mb-6 transition-standard",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            <span className="text-sm font-medium text-gray-900">Introducing Aero 1.0</span>
          </div>

          {/* Heading */}
          <h1
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="block">Design with precision.</span>
            <span className="block text-primary">Build with confidence.</span>
          </h1>

          {/* Description */}
          <p
            className={cn(
              "text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            A revolutionary design platform that combines simplicity with power.
            Create stunning interfaces with pixel-perfect precision.
          </p>

          {/* Call to action */}
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "400ms" }}
          >
            <button className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-standard focus-ring shadow-lg shadow-primary/25">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 font-medium hover:bg-white transition-standard focus-ring">
              Watch Demo
            </button>
          </div>

          {/* Hero Image */}
          <div
            className={cn(
              "w-full mt-16 relative",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl border border-white/20">
              <div className="w-full h-8 bg-gray-100 flex items-center px-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="bg-gray-50 w-full aspect-[16/10] relative">
                {/* Placeholder for dashboard/app UI */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center">
                  <div className="text-3xl font-bold text-gray-400">Interface Preview</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
