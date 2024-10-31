import { Camera, User, Album } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 animate-pulse">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-3xl font-bold text-gray-300 flex items-center">
              <Camera
                className="h-8 w-8 text-gray-300 mr-3"
                aria-hidden="true"
              />
              <div className="h-8 bg-gray-300 rounded w-48"></div>
            </h1>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:p-6">
              <div className="mb-6">
                <div className="w-full h-96 bg-gray-300 rounded-lg"></div>
              </div>
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
              <dl className="mt-6 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-300 flex items-center">
                    <User
                      className="h-5 w-5 text-gray-300 mr-2"
                      aria-hidden="true"
                    />
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </dt>
                  <dd className="mt-1 h-4 bg-gray-300 rounded w-32"></dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-300 flex items-center">
                    <Album
                      className="h-5 w-5 text-gray-300 mr-2"
                      aria-hidden="true"
                    />
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </dt>
                  <dd className="mt-1 h-4 bg-gray-300 rounded w-32"></dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
