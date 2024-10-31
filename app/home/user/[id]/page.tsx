import { notFound } from "next/navigation";
import Link from "next/link";
import { User, Mail, Phone, Globe, Album } from "lucide-react";
import { Suspense } from "react";
import Loading from "./components/Loading";
import HomeNav from "../../components/ui/HomeNav";

async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return undefined;
  return res.json();
}

async function getUserAlbums(id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/albums`,
    {
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch user albums");
  return res.json();
}

const UserDetails = async ({ id }: { id: string }) => {
  const [user, albums] = await Promise.all([getUser(id), getUserAlbums(id)]);

  if (!user) {
    notFound();
  }

  return (
    <>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-bold text-gray-900">User Details</h1>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Personal information and albums.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <User
                  className="h-5 w-5 text-gray-400 mr-2"
                  aria-hidden="true"
                />
                Full name
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{user.name}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Mail
                  className="h-5 w-5 text-gray-400 mr-2"
                  aria-hidden="true"
                />
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Phone
                  className="h-5 w-5 text-gray-400 mr-2"
                  aria-hidden="true"
                />
                Phone
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{user.phone}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500 flex items-center">
                <Globe
                  className="h-5 w-5 text-gray-400 mr-2"
                  aria-hidden="true"
                />
                Website
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{user.website}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Albums</h2>
        <ul className="divide-y divide-gray-200 bg-white shadow overflow-hidden sm:rounded-md">
          {albums?.map((album) => (
            <li key={album.id}>
              <Link href={`/home/album/${album.id}`}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center">
                    <Album
                      className="h-5 w-5 text-gray-400 mr-3"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-medium text-primaryColor truncate">
                      {album.title}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <Link
          href="/home"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primaryColor hover:bg-primaryColor-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor-500"
        >
          Back to User List
        </Link>
      </div>
    </>
  );
};

// Main page component
export default async function UserPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <>
      <HomeNav />
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Suspense fallback={<Loading />}>
            <UserDetails id={id} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
