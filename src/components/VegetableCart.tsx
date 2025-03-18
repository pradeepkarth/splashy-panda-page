
import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Vegetable {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const VegetableCart = () => {
  const [vegetables, setVegetables] = useState<Vegetable[]>([
    {
      id: 1,
      name: "Tomato",
      price: 1.99,
      image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=300&h=300&fit=crop",
      quantity: 0,
    },
    {
      id: 2,
      name: "Carrot",
      price: 0.99,
      image: "https://images.unsplash.com/photo-1598170845058-33f8c1c48c5f?w=300&h=300&fit=crop",
      quantity: 0,
    },
    {
      id: 3,
      name: "Broccoli",
      price: 2.49,
      image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=300&h=300&fit=crop",
      quantity: 0,
    },
    {
      id: 4,
      name: "Bell Pepper",
      price: 1.79,
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&h=300&fit=crop",
      quantity: 0,
    },
    {
      id: 5,
      name: "Spinach",
      price: 2.29,
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=300&fit=crop",
      quantity: 0,
    },
    {
      id: 6,
      name: "Cucumber",
      price: 0.89,
      image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=300&h=300&fit=crop",
      quantity: 0,
    },
  ]);

  const handleIncrement = (id: number) => {
    setVegetables(
      vegetables.map((veg) =>
        veg.id === id ? { ...veg, quantity: veg.quantity + 1 } : veg
      )
    );
  };

  const handleDecrement = (id: number) => {
    setVegetables(
      vegetables.map((veg) =>
        veg.id === id && veg.quantity > 0
          ? { ...veg, quantity: veg.quantity - 1 }
          : veg
      )
    );
  };

  const totalItems = vegetables.reduce((sum, veg) => sum + veg.quantity, 0);
  const totalPrice = vegetables
    .reduce((sum, veg) => sum + veg.price * veg.quantity, 0)
    .toFixed(2);

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-6">Fresh Vegetables</h2>

      <div className="mb-10">
        <Carousel className="w-full">
          <CarouselContent className="py-4">
            {vegetables.map((vegetable) => (
              <CarouselItem key={vegetable.id} className="md:basis-1/3 lg:basis-1/4">
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={vegetable.image}
                      alt={vegetable.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-lg">{vegetable.name}</h3>
                      <span className="font-medium text-primary">
                        ${vegetable.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDecrement(vegetable.id)}
                        disabled={vegetable.quantity === 0}
                        className="h-8 w-8"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="mx-2 font-medium w-8 text-center">
                        {vegetable.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleIncrement(vegetable.id)}
                        className="h-8 w-8"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative static mr-2" />
            <CarouselNext className="relative static ml-2" />
          </div>
        </Carousel>
      </div>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Your Cart</h3>
        {totalItems === 0 ? (
          <p className="text-muted-foreground">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-3 mb-4">
              {vegetables.filter(v => v.quantity > 0).map((veg) => (
                <div key={veg.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img 
                      src={veg.image} 
                      alt={veg.name} 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span>{veg.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm">
                      {veg.quantity} × ${veg.price}
                    </span>
                    <span className="font-medium">
                      ${(veg.quantity * veg.price).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">
                  {totalItems} item{totalItems !== 1 ? 's' : ''}
                </p>
                <p className="font-bold text-lg">Total: ${totalPrice}</p>
              </div>
              <Button>Checkout</Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default VegetableCart;
