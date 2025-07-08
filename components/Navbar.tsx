
import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME, HomeIcon, PlusIcon, ChurchLogoPlaceholder } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-800 shadow-lg no-print">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center text-white hover:text-blue-200 transition-colors">
            <ChurchLogoPlaceholder className="text-white fill-current w-auto h-10" />
            {/* <span className="font-bold text-2xl ml-2">{APP_NAME}</span> */}
          </Link>
          <div className="flex space-x-6 items-center">
            <Link to="/" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors">
              <HomeIcon className="w-5 h-5 mr-2" />
              Home
            </Link>
            <Link 
              to="/add" 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out flex items-center"
            >
              <PlusIcon className="w-5 h-5 mr-2" />
              Add New Record
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
