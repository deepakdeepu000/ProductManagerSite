import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";


const CartPanel = ({ items }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="h-full flex flex-col">
      <SheetHeader>
        <SheetTitle>Shopping Cart</SheetTitle>
        <SheetDescription>
          {items.length} items in your cart
        </SheetDescription>
      </SheetHeader>

      <div className="flex-1 overflow-auto py-4">
        {items.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            Your cart is empty
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>

      {items.length > 0 && (
        <div className="border-t pt-4 space-y-4">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Button className="w-full">Checkout</Button>
        </div>
      )}
    </div>
  );
};

const CartItem = ({ item }) => {
  return ( 
  <div className="flex items-center space-x-4">
    <img
      src={item.image}
      alt={item.name}
      className="w-16 h-16 object-cover rounded"
    />
    <div className="flex-1">
      <h3 className="font-medium">{item.name}</h3>
      <p className="text-sm text-gray-500">
        ${item.price} × {item.quantity}
      </p>
    </div>
    <Button variant="ghost" size="sm">
      <Trash2 size={16} />
    </Button>
  </div>
);
};

export default CartPanel;