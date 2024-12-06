// Product Card Component
import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, ChevronLeft, Home, ShoppingCart, User, Menu, X } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product, onAddToCart }) => {
  return (
  <Card>
    <CardHeader>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-2"
      />
      <CardTitle>{product.name}</CardTitle>
      <CardDescription>{product.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-lg font-semibold">${product.price}</p>
      <p className="text-sm text-gray-500">{product.category}</p>
    </CardContent>
    <CardFooter className="justify-end space-x-2">
      <Button variant="outline" size="sm">
        <Edit2 className="mr-2" size={16} />
        Edit
      </Button>
      <Button variant="destructive" size="sm">
        <Trash2 className="mr-2" size={16} />
        Delete
      </Button>
      <Button size="sm" onClick={onAddToCart}>
        <ShoppingCart className="mr-2" size={16} />
        Add to Cart
      </Button>
    </CardFooter>
  </Card>
);
};

export default ProductCard;
