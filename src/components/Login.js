import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#F8FAFC]">
      <div className="w-full max-w-md bg-[#FFFFFF] p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#222222]">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-[#222222]">Email</label>
            <input 
              type="email" 
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-[#1C5D99]" 
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#222222]">Password</label>
            <input 
              type="password" 
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-[#1C5D99]" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#1C5D99] hover:bg-[#639FAB] text-[#FFFFFF] p-2 rounded mt-4 transition-colors duration-300"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="/register" className="text-[#1C5D99] hover:text-[#639FAB] transition-colors duration-300">
            Don't have an account? Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
