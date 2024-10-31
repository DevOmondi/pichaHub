/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./components/ui/Loading";
import { User, Album } from "lucide-react";

import HomeNav from "./components/ui/HomeNav";

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

async function getAlbums() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch albums");
  return res.json();
}

const UsersList = async () => {
  const [users, albums] = await Promise.all([getUsers(), getAlbums()]);

  const userAlbumCounts = albums.reduce((acc, album) => {
    acc[album.userId] = (acc[album.userId] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {users?.map((user) => (
          <li key={user.id}>
            <Link
              href={`/home/user/${user.id}`}
              className="block hover:bg-gray-50"
            >
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User
                      className="h-6 w-6 text-gray-400 mr-3"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-medium text-primaryColor truncate">
                      {user.name}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Album
                      className="h-5 w-5 text-gray-400 mr-2"
                      aria-hidden="true"
                    />
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {userAlbumCounts[user.id] || 0} albums
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      @{user.username}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>{user.email}</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main HomePage component
const HomePage = async () => {
  return (
    <>
      <HomeNav />
      <div className="p-4">
        <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              User Album List
            </h1>
            <Suspense fallback={<Loading />}>
              <UsersList />
            </Suspense>
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
