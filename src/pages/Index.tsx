
import React from "react";
import VegetableCart from "@/components/VegetableCart";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Vegetable Market</h1>
        <VegetableCart />
      </div>
    </div>
  );
};

export default Index;
