import React, { useState } from 'react';
import { Search, LayoutDashboard, Package, Users, FolderOpen, FileText, MessageSquare, Settings, LogOut, Plus } from 'lucide-react';


const ProductDashboard = () => {
    const [activeView, setActiveView] = useState('dashboard');
  
    const renderView = () => {
      switch (activeView) {
        case 'dashboard':
          return <Dashboard />;
        case 'products':
          return <ProductList />;
        case 'customers':
          return <Customers />;
        case 'categories':
          return <Categories />;
        default:
          return <Dashboard />;
      }
    };
  
    return (
      <div className="flex h-screen bg-gray-50">
  
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <div className="bg-white border-b">
            <div className="flex items-center justify-between px-8 py-4">
              <div className="flex items-center text-sm text-gray-500">
                <span>Dashboard</span>
                <span className="mx-2">/</span>
                <span className="capitalize">{activeView}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search something here"
                    className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <img src="/api/placeholder/32/32" alt="Profile" className="w-8 h-8 rounded-full" />
              </div>
            </div>
          </div>
  
          {/* Dynamic Content */}
          {renderView()}
        </div>
      </div>
    );
  };
  
  export default ProductDashboard;