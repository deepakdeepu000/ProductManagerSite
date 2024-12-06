import { Search, Plus } from 'lucide-react';


const ProductList = () => {
    const products = [
      { id: 1, name: 'Nike Air Force 1 \'07 LV8', category: 'Shoes', stock: 220, price: 122.27, image: '/api/placeholder/40/40' },
      { id: 2, name: 'Nike Sportswear Heritage86 Future', category: 'Caps', stock: 999, price: 15.95, image: '/api/placeholder/40/40' },
      { id: 3, name: 'Nike Air Max Penny', category: 'Shoes', stock: 75, price: 182.50, image: '/api/placeholder/40/40' },
    ];
  
    return (
      <div className="p-4">
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 flex items-center justify-between">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search in product"
                className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
              
              <Plus className="w-5 h-5 mr-2" />
              Add Product
            </button>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50 border-y">
              <tr>
                <th className="w-8 p-4">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Product</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Category</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Stock</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="w-8 p-4">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg mr-3" />
                      <span className="text-sm font-medium text-gray-900">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{product.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{product.stock}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">${product.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default ProductList;