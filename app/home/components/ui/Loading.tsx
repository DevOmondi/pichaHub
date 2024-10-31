import React from "react";

const Loading = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {[...Array(5)].map((_, index) => (
          <li key={index} className="block">
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse mr-3" />
                  <div className="h-4 w-48 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="flex items-center">
                  <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse mr-2" />
                  <div className="h-5 w-20 bg-gray-200 rounded-full animate-pulse" />
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="mt-2 flex items-center sm:mt-0">
                  <div className="h-4 w-36 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Loading;
