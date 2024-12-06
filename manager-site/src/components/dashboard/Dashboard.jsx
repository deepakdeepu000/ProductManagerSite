// // import React, { useState } from 'react';
// // import { Search, Plus, Edit2, Trash2, ChevronLeft, Home, ShoppingCart, User, Menu, X } from 'lucide-react';
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardFooter,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogDescription,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogTrigger,
// // } from "@/components/ui/dialog";
// // import {
// //   Sheet,
// //   SheetContent,
// //   SheetDescription,
// //   SheetHeader,
// //   SheetTitle,
// //   SheetTrigger,
// // } from "@/components/ui/sheet";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Badge } from "@/components/ui/badge";
// // import  Navigation from "@/components/dashboard/Navigation";
// // import  BrandCard from "@/components/dashboard/BrandCard";
// // import  BrandDetail from "@/components/dashboard/BrandDetail";
// // import ProductList from './ProductList';




// // const Dashboard = () => {
// //     const [brands, setBrands] = useState([
// //       {
// //         id: 1,
// //         name: "Pure Botanics",
// //         description: "Organic skincare products made from natural ingredients",
// //         logo: "/api/placeholder/100/100",
// //         products: [
// //           {
// //             id: 1,
// //             name: "Rejuvenating Face Cream",
// //             description: "Anti-aging cream with natural extracts",
// //             category: "Skincare",
// //             price: 49.99,
// //             image: "/api/placeholder/200/200"
// //           },
// //           {
// //             id: 2,
// //             name: "Hydrating Serum",
// //             description: "Deep hydration serum with hyaluronic acid",
// //             category: "Skincare",
// //             price: 39.99,
// //             image: "/api/placeholder/200/200"
// //           }
// //         ]
// //       },
// //       {
// //         id: 2,
// //         name: "Artisan Woods",
// //         description: "Handcrafted furniture with sustainable materials",
// //         logo: "/api/placeholder/100/100",
// //         products: [
// //           {
// //             id: 3,
// //             name: "Minimalist Coffee Table",
// //             description: "Solid oak coffee table with modern design",
// //             category: "Furniture",
// //             price: 299.99,
// //             image: "/api/placeholder/200/200"
// //           }
// //         ]
// //       }
// //     ]);
  
// //     // Cart state
// //     const [cartItems, setCartItems] = useState([]);
// //     const [searchTerm, setSearchTerm] = useState("");
// //     const [selectedBrand, setSelectedBrand] = useState(null);
// //     const [showAddBrand, setShowAddBrand] = useState(false);
  
// //     const addToCart = (product) => {
// //       setCartItems(prevItems => {
// //         const existingItem = prevItems.find(item => item.id === product.id);
// //         if (existingItem) {
// //           return prevItems.map(item =>
// //             item.id === product.id
// //               ? { ...item, quantity: item.quantity + 1 }
// //               : item
// //           );
// //         }
// //         return [...prevItems, { ...product, quantity: 1 }];
// //       });
// //     };
  
// //     // Filter brands and products based on search term
// //     const filteredBrands = brands.filter(brand => 
// //       brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       brand.products.some(product => 
// //         product.name.toLowerCase().includes(searchTerm.toLowerCase())
// //       )
// //     );
  
// //     return (
// //       <div className="min-h-screen bg-gray-50">
      
// //       <Navigation cartItems={cartItems} />
// //       {/* Search and Add Brand Bar */}
// //       <div className="bg-white shadow-sm">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
// //           <div className="flex justify-between items-center">
// //             <div className="relative">
// //               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
// //               <Input
// //                 type="text"
// //                 placeholder="Search brands or products..."
// //                 className="pl-10 w-64"
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //               />
// //             </div>
// //             <Button onClick={() => setShowAddBrand(true)}>
// //               <Plus className="mr-2" size={20} />
// //               Add Brand
// //             </Button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* <div className="flex-1 overflow-auto">
// //         < ProductList />
// //       </div> */}
      

// //       {/* Main Content */}
// //       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         {selectedBrand ? (
// //           <BrandDetail
// //             brand={selectedBrand}
// //             onBack={() => setSelectedBrand(null)}
// //             onUpdate={(updatedBrand) => {
// //               setBrands(brands.map(b => 
// //                 b.id === updatedBrand.id ? updatedBrand : b
// //               ));
// //               setSelectedBrand(updatedBrand);
// //             }}
// //             onDelete={(brandId) => {
// //               setBrands(brands.filter(b => b.id !== brandId));
// //               setSelectedBrand(null);
// //             }}
// //             onAddToCart={addToCart}
// //           />
// //         ) : (
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {filteredBrands.map(brand => (
// //               <BrandCard
// //                 key={brand.id}
// //                 brand={brand}
// //                 onClick={() => setSelectedBrand(brand)}
// //               />
// //             ))}
// //           </div>
// //         )}
// //       </main>

// //       {/* Add Brand Dialog */}
// //       <Dialog open={showAddBrand} onOpenChange={setShowAddBrand}>
// //         <DialogContent>
// //           <DialogHeader>
// //             <DialogTitle>Add New Brand</DialogTitle>
// //             <DialogDescription>
// //               Create a new brand to manage its products
// //             </DialogDescription>
// //           </DialogHeader>
// //           <form className="space-y-4" onSubmit={(e) => {
// //             e.preventDefault();
// //             // Add brand logic here
// //             setShowAddBrand(false);
// //           }}>
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Brand Name</label>
// //               <Input required />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Description</label>
// //               <Input required />
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium mb-1">Logo URL</label>
// //               <Input required />
// //             </div>
// //             <div className="flex justify-end gap-2">
// //               <Button variant="outline" onClick={() => setShowAddBrand(false)}>
// //                 Cancel
// //               </Button>
// //               <Button type="submit">Create Brand</Button>
// //             </div>
// //           </form>
// //         </DialogContent>
// //       </Dialog>
// //     </div>
// //   );
// // };


// // export default Dashboard;


// import React, { useState } from 'react';
// import { Search, Plus,  ChevronLeft, Home, ShoppingCart, User, Menu, Layout, MessageCircle, Clock, BarChart, Box } from 'lucide-react';
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import BrandDetail from './BrandDetail';
// import BrandCard from './BrandCard';
// import CartPanel from "@/components/dashboard/CartPanel";
// import Navigation from './Navigation';

// const Dashboard = () => {
//   // State management
//   const [brands, setBrands] = useState([
//     {
//       id: 1,
//       name: "Pure Botanics",
//       description: "Organic skincare products made from natural ingredients",
//       logo: "/api/placeholder/100/100",
//       products: [
//         {
//           id: 1,
//           name: "Rejuvenating Face Cream",
//           description: "Anti-aging cream with natural extracts",
//           category: "Skincare",
//           price: 49.99,
//           image: "/api/placeholder/200/200"
//         },
//         {
//           id: 2,
//           name: "Hydrating Serum",
//           description: "Deep hydration serum with hyaluronic acid",
//           category: "Skincare",
//           price: 39.99,
//           image: "/api/placeholder/200/200"
//         }
//       ]
//     },
//     {
//       id: 2,
//       name: "Artisan Woods",
//       description: "Handcrafted furniture with sustainable materials",
//       logo: "/api/placeholder/100/100",
//       products: [
//         {
//           id: 3,
//           name: "Minimalist Coffee Table",
//           description: "Solid oak coffee table with modern design",
//           category: "Furniture",
//           price: 299.99,
//           image: "/api/placeholder/200/200"
//         }
//       ]
//     }
//   ]);
//   const [cartItems, setCartItems] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedBrand, setSelectedBrand] = useState(null);
//   const [showAddBrand, setShowAddBrand] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Handlers
//   const addToCart = (product) => {
//     setCartItems(prevItems => {
//       const existingItem = prevItems.find(item => item.id === product.id);
//       if (existingItem) {
//         return prevItems.map(item =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prevItems, { ...product, quantity: 1 }];
//     });
//   };

//   const filteredBrands = brands.filter(brand => 
//     brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     brand.products.some(product => 
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setSearchTerm(searchQuery);
//   }

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Left Sidebar - Hidden on mobile */}
//       <div className={`hidden md:block ${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r transition-all duration-300`}>
//       <div className="p-4">
//         <div className="flex items-center justify-between mb-8">
//         <h1 className={`text-xl font-bold ${!isSidebarOpen && 'hidden'}`}>BrandManager</h1>
//         <Button 
//           variant="ghost" 
//           size="icon"
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         >
//           {isSidebarOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
//         </Button>
//         </div>

//         <Button 
//         className="w-full mb-4"
//         onClick={() => setShowAddBrand(true)}
//         >
//         {isSidebarOpen ? (<Plus size={20} className="mr-2" />) : (<Plus size={40} />)}
//         {isSidebarOpen && 'New Brand'}
//         </Button>

//         <nav className="space-y-2">
//         {[
//           { icon: <Home size={20} />, label: 'Dashboard' },
//           { icon: <Layout size={20} />, label: 'Brands' },
//           { icon: <Box size={20} />, label: 'Products' },
//           { icon: <ShoppingCart size={20} />, label: 'Orders' },
//           { icon: <MessageCircle size={20} />, label: 'Reviews' },
//           { icon: <BarChart size={20} />, label: 'Analytics' },
//           { icon: <Clock size={20} />, label: 'Recent' },
//         ].map((item, index) => (
//           <Button
//           key={index}
//           variant="ghost"
//           className="w-full justify-start"
//           >
//           {item.icon}
//           {isSidebarOpen && <span className="ml-3">{item.label}</span>}
//           </Button>
//         ))}
//         </nav>
//       </div>
//       </div>

//       {/* Bottom Navigation for Mobile */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
//         <div className="flex items-center justify-around p-2">
//         {[
//           { icon: <Home size={24} />, label: 'Home' },
//           { icon: <Layout size={24} />, label: 'Brands' },
//           { icon: <Plus size={24} />, label: 'Add', isAdd: true },
//           { icon: <Box size={24} />, label: 'Products' },
//           { icon: <User size={24} />, label: 'Profile' },
//         ].map((item, index) => (
//           <Button
//           key={index}
//           variant="ghost"
//           className={`flex flex-col items-center p-2 ${
//             item.isAdd ? '-mt-6' : ''
//           }`}
//           onClick={() => item.isAdd && setShowAddBrand(true)}
//           >
//           {item.isAdd ? (
//             <div className="bg-primary rounded-full p-3 text-white">
//             {item.icon}
//             </div>
//           ) : (
//             item.icon
//           )}
//           <span className="text-xs mt-1">{item.label}</span>
//           </Button>
//         ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1">
//       {/* Top Navigation */}
//       <Navigation cartItems={cartItems} />
      
//       {/* Main Content Area */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16 md:mb-0">
//         {selectedBrand ? (
//         <BrandDetail
//           brand={selectedBrand}
//           onBack={() => setSelectedBrand(null)}
//           onUpdate={(updatedBrand) => {
//           setBrands(brands.map(b => 
//             b.id === updatedBrand.id ? updatedBrand : b
//           ));
//           setSelectedBrand(updatedBrand);
//           }}
//           onDelete={(brandId) => {
//           setBrands(brands.filter(b => b.id !== brandId));
//           setSelectedBrand(null);
//           }}
//           onAddToCart={addToCart}
//         />
//         ) : (
//         <div className="bg-white rounded p-4 md:p-6">
          // <div className="mb-6">
          //   <form onSubmit={handleSearch} className="relative max-w-md">
          //     <Input
          //       type="text"
          //       placeholder="Search products or brands..."
          //       value={searchQuery}
          //       onChange={(e) => setSearchQuery(e.target.value)}
          //       className="w-full pl-4 pr-10"
          //     />
          //     <Button
          //       type="submit"
          //       variant="ghost"
          //       className="absolute right-0 top-0 h-full px-3"
          //     >
          //       <Search size={20} className="text-gray-500" />
          //     </Button>
          //   </form>
          // </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {brands.map(brand => (
//               <BrandCard
//                 key={brand.id || Math.random()}
//                 brand={brand}
//                 onClick={() => setSelectedBrand(brand)}
//               />
//             ))}
//           </div>
//         </div>
//         )}
//       </main>

//       </div>

//       {/* Add Brand Dialog */}
//       <Dialog open={showAddBrand} onOpenChange={setShowAddBrand}>
//       <DialogContent>
//         <DialogHeader>
//         <DialogTitle>Add New Brand</DialogTitle>
//         <DialogDescription>
//           Create a new brand to manage its products
//         </DialogDescription>
//         </DialogHeader>
//         <form className="space-y-4" onSubmit={(e) => {
//         e.preventDefault();
//         setShowAddBrand(false);
//         }}>
//         <div>
//           <label className="block text-sm font-medium mb-1">Brand Name</label>
//           <Input required />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Description</label>
//           <Input required />
//         </div>
//         <div>
//           <label className="block text-sm font-medium mb-1">Logo URL</label>
//           <Input required />
//         </div>
//         <div className="flex justify-end gap-2">
//           <Button variant="outline" onClick={() => setShowAddBrand(false)}>
//           Cancel
//           </Button>
//           <Button type="submit">Create Brand</Button>
//         </div>
//         </form>
//       </DialogContent>
//       </Dialog>
//     </div>
//     );
// };

// export default Dashboard;

import React, { useState } from 'react';
import { Search, Plus, ChevronLeft, Home, ShoppingCart, User, Menu, Layout, MessageCircle, Clock, BarChart, Box } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import BrandDetail from './BrandDetail';
import BrandCard from './BrandCard';
import CartPanel from "@/components/dashboard/CartPanel";
import Navigation from './Navigation';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

const Dashboard = () => {
  // Existing state
  const [brands, setBrands] = useState([
    {
      id: 1,
      name: "Pure Botanics",
      description: "Organic skincare products made from natural ingredients",
      logo: "/api/placeholder/100/100",
      products: [
        {
          id: 1,
          name: "Rejuvenating Face Cream",
          description: "Anti-aging cream with natural extracts",
          category: "Skincare",
          price: 49.99,
          image: "/api/placeholder/200/200"
        },
        {
          id: 2,
          name: "Hydrating Serum",
          description: "Deep hydration serum with hyaluronic acid",
          category: "Skincare",
          price: 39.99,
          image: "/api/placeholder/200/200"
        }
      ]
    },
    {
      id: 2,
      name: "Artisan Woods",
      description: "Handcrafted furniture with sustainable materials",
      logo: "/api/placeholder/100/100",
      products: [
        {
          id: 3,
          name: "Minimalist Coffee Table",
          description: "Solid oak coffee table with modern design",
          category: "Furniture",
          price: 299.99,
          image: "/api/placeholder/200/200"
        }
      ]
    }
  ]);
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [showAddBrand, setShowAddBrand] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  
  // New state for active page
  const [activePage, setActivePage] = useState('Dashboard');

  // Navigation items array
  const navigationItems = [
    { icon: <Home size={20} />, label: 'Dashboard' },
    { icon: <Layout size={20} />, label: 'Brands' },
    { icon: <Box size={20} />, label: 'Products' },
    { icon: <ShoppingCart size={20} />, label: 'Orders' },
    { icon: <MessageCircle size={20} />, label: 'Reviews' },
    { icon: <BarChart size={20} />, label: 'Analytics' },
    { icon: <Clock size={20} />, label: 'Recent' },
  ];

  // Mobile navigation items
  const mobileNavItems = [
    { icon: <Home size={24} />, label: 'Home' },
    { icon: <Layout size={24} />, label: 'Brands' },
    { icon: <Plus size={24} />, label: 'Add', isAdd: true },
    { icon: <Box size={24} />, label: 'Products' },
    { icon: <User size={24} />, label: 'Profile' },
  ];

  // Handlers
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const filteredBrands = brands.filter(brand => 
    brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    brand.products.some(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchQuery);
  };

  // Function to render content based on active page
  const renderContent = () => {
    switch (activePage) {
      case 'Brands':
        return (
          <>
          {selectedBrand ? (
            <BrandDetail
              brand={selectedBrand}
              onBack={() => setSelectedBrand(null)}
              onUpdate={(updatedBrand) => {
                setBrands(brands.map(b => 
                  b.id === updatedBrand.id ? updatedBrand : b
                ));
                setSelectedBrand(updatedBrand);
              }}
              onDelete={(brandId) => {
                setBrands(brands.filter(b => b.id !== brandId));
                setSelectedBrand(null);
              }}
              onAddToCart={addToCart}
            />
          ) : (
            <div className="bg-white rounded-lg p-4 md:p-6">
              <div className="p-4 flex items-center justify-between">
                <div className="relative">
                  <Search className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search in brands..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-4 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
                  <Plus className="w-5 h-5 mr-2" />
                  Add Brand
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {brands.map(brand => (
                  <BrandCard
                    key={brand.id || Math.random()}
                    brand={brand}
                    onClick={() => setSelectedBrand(brand)}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      );
      case 'Products':
        return (
          // <div className="bg-white rounded p-4 md:p-6">
          //   <h2 className="text-xl font-bold mb-4">Products</h2>
          //   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          //     {brands.flatMap(brand => brand.products).map(product => (
          //       <div key={product.id} className="border rounded p-4">
          //         <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
          //         <h3 className="font-semibold">{product.name}</h3>
          //         <p className="text-gray-600">{product.description}</p>
          //         <p className="font-bold mt-2">${product.price}</p>
          //       </div>
          //     ))}
          //   </div>
          // </div>
          <>
            <ProductList />
          </>
        );
      default:
        return (
          <div className="bg-white rounded p-4 md:p-6">
            <h2 className="text-xl font-bold mb-4">Welcome to {activePage}</h2>
            <p>This is the {activePage.toLowerCase()} page content.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar - Hidden on mobile */}
      <div className={`hidden md:block ${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r transition-all duration-300`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className={`text-xl font-bold ${!isSidebarOpen && 'hidden'}`}>BrandManager</h1>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
            </Button>
          </div>

          <Button 
            className="w-full mb-4"
            onClick={() => setShowAddBrand(true)}
          >
            {isSidebarOpen ? (<Plus size={20} className="mr-2" />) : (<Plus size={40} />)}
            {isSidebarOpen && 'New Brand'}
          </Button>

          <nav className="space-y-2">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant={activePage === item.label ? "default" : "ghost"}
                className={`w-full justify-start ${activePage === item.label ? 'bg-primary text-primary-foreground' : ''}`}
                onClick={() => setActivePage(item.label)}
              >
                {item.icon}
                {isSidebarOpen && <span className="ml-3">{item.label}</span>}
              </Button>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
        <div className="flex items-center justify-around p-2">
          {mobileNavItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`flex flex-col items-center p-2 ${
                item.isAdd ? '-mt-6' : ''
              } ${activePage === item.label ? 'text-primary' : ''}`}
              onClick={() => {
                if (item.isAdd) {
                  setShowAddBrand(true);
                } else {
                  setActivePage(item.label);
                }
              }}
            >
              {item.isAdd ? (
                <div className="bg-primary rounded-full p-3 text-white">
                  {item.icon}
                </div>
              ) : (
                item.icon
              )}
              <span className="text-xs mt-1">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Navigation */}
        <Navigation cartItems={cartItems} />
        
        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16 md:mb-0">
            {renderContent()}
        </main>
      </div>

      {/* Add Brand Dialog */}
      <Dialog open={showAddBrand} onOpenChange={setShowAddBrand}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Brand</DialogTitle>
            <DialogDescription>
              Create a new brand to manage its products
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            setShowAddBrand(false);
          }}>
            <div>
              <label className="block text-sm font-medium mb-1">Brand Name</label>
              <Input required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <Input required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Logo URL</label>
              <Input required />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowAddBrand(false)}>
                Cancel
              </Button>
              <Button type="submit">Create Brand</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;