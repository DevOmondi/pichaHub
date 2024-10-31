const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* User Details Card */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-4 w-64 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse mr-2" />
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                  </dt>
                  <dd className="mt-1">
                    <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Albums Section */}
        <div className="mt-8">
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-4" />
          <ul className="divide-y divide-gray-200 bg-white shadow overflow-hidden sm:rounded-md">
            {[...Array(3)].map((_, index) => (
              <li key={index} className="px-4 py-4 sm:px-6">
                <div className="flex items-center">
                  <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse mr-3" />
                  <div className="h-4 w-64 bg-gray-200 rounded animate-pulse" />
                </div>
              </li>
            ))}
          </ul>
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
