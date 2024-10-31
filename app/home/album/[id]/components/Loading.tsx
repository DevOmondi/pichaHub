const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Album Details Card */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse mr-3" />
              <div className="h-8 w-64 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="mt-1 h-4 w-48 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse mr-2" />
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                  </dt>
                  <dd className="mt-1">
                    <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Photos Section */}
        <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="w-full h-40 bg-gray-200 animate-pulse" />
              <div className="p-4">
                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
