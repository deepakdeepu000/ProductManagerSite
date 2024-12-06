// Brand Card Component
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BrandCard = ({ brand, onClick }) => {
  return (
  <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
    <CardHeader>
      <img
        src={brand.logo}
        alt={brand.name}
        className="w-16 h-16 object-cover rounded-lg mb-2"
      />
      <CardTitle>{brand.name}</CardTitle>
      <CardDescription>{brand.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-500">
        {brand.products.length} Product{brand.products.length !== 1 ? 's' : ''}
      </p>
    </CardContent>
  </Card>
  );
};

export default BrandCard;