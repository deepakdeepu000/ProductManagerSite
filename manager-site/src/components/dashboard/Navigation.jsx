import React, { useState } from 'react';
import { Home, ShoppingCart, User, Menu, X, Search, Trash2 } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import CartPanel from "@/components/dashboard/CartPanel";

const Navigation = ({ cartItems, onOpenCart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };


  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and Main Nav */}
          <div className="flex items-center flex-1">
            <div className="hidden md:flex items-center space-x-4">
                {/* Search Bar */}
                <div className="flex-1 max-w-xl px-4 transition-all duration-300">
                  <form onSubmit={handleSearch} className="relative group">
                    <Input
                    type="text"
                    placeholder="Search products or brands..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-5 pr-12 transition-all duration-300 focus:max-w-[600px]"
                    />
                    <Button
                    type="submit"
                    variant="ghost"
                    className="absolute right-0 top-0 h-full px-4"
                    >
                    <Search size={20} />
                    </Button>
                  </form>
                  </div>
                  <Button variant="ghost">Categories</Button>
                  <Button variant="ghost">Brands</Button>
                </div>
                </div>

                

                {/* Right Side Nav */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:flex items-center">
              <User className="mr-2" size={20} />
              Account
            </Button>
            
            {/* Cart Button with Badge */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="relative" onClick={onOpenCart}>
                  <ShoppingCart size={20} />
                  {cartItems.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full">
                      {cartItems.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <CartPanel items={cartItems} />
              </SheetContent>
            </Sheet>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <div className="px-2 pb-3">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Search products or brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10"
                />
                <Button
                  type="submit"
                  variant="ghost"
                  className="absolute right-0 top-0 h-full px-3"
                >
                  <Search size={20} />
                </Button>
              </form>
            </div>
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2" size={20} />
              Home
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Categories
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Brands
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2" size={20} />
              Account
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
