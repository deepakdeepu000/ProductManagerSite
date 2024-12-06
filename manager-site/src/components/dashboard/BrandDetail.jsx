// Brand Detail Component
import React, { useState } from 'react';
import { Plus, Edit2, Trash2, ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/dashboard/ProductCard";
import AddProductForm from './AddProductForm';

const BrandDetail = ({ brand, onBack, onUpdate, onDelete, onAddToCart, isMobileView }) => {
  const [showAddProduct, setShowAddProduct] = useState(false);

  const handleProductAdded = (newProduct) => {
    // Update the brand's products list
    onUpdate({
      ...brand,
      products: [...brand.products, newProduct]
    });
  };

  // Handle dialog close
  const handleCloseDialog = () => {
    setShowAddProduct(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="bg-white rounded-lg border p-4 mb-6 flex flex-wrap items-center gap-4">
        <Button variant="outline" onClick={onBack} className="rounded-full">
          <ChevronLeft size={20} />
          {!isMobileView && <span className="ml-2 hidden md:inline">Back to Brands</span>}
        </Button>
        <h2 className="text-1xl font-semibold">{brand.name}</h2>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" className="rounded-full">
            <Edit2 size={20} />
            <span className="ml-2 hidden md:inline">Edit Brand</span>
          </Button>
          <Button variant="destructive" onClick={() => onDelete(brand.id)} className="rounded-full">
            <Trash2 size={20} />
            <span className="ml-2 hidden md:inline">Delete Brand</span>
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <Button onClick={() => setShowAddProduct(true)} className="rounded-full">
          <Plus size={20} />
          <span className="ml-2 hidden md:inline">Add Product</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 sm:gap-6">
        {brand.products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product}
            onAddToCart={() => onAddToCart(product)}
            className="w-full h-full"
          />
        ))}
      </div>

      {/* Add Product Form Dialog */}
      <AddProductForm 
        isOpen={showAddProduct}
        onClose={handleCloseDialog}
        onProductAdded={handleProductAdded}
      />

    </div>
  );
};
export default BrandDetail;