import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Album, User, Camera } from "lucide-react";

async function getAlbum(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
  if (!res.ok) return undefined;
  return res.json();
}

async function getAlbumPhotos(id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${id}/photos`
  );
  if (!res.ok) throw new Error("Failed to fetch album photos");
  return res.json();
}

async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}

export default async function AlbumPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const [album, photos] = await Promise.all([getAlbum(id), getAlbumPhotos(id)]);

  if (!album) {
    notFound();
  }

  const user = await getUser(album.userId);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <Album
                className="h-8 w-8 text-indigo-600 mr-3"
                aria-hidden="true"
              />
              {album.title}
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Album details and photos
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
                  Created by
                </dt>
                <dd className="mt-1 text-sm text-gray-900">{user.name}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500 flex items-center">
                  <Camera
                    className="h-5 w-5 text-gray-400 mr-2"
                    aria-hidden="true"
                  />
                  Number of photos
                </dt>
                <dd className="mt-1 text-sm text-gray-900">{photos.length}</dd>
              </div>
            </dl>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={photo.thumbnailUrl}
                alt={photo.title}
                width={150}
                height={150}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-700 truncate">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/user"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primaryColor hover:bg-primaryColor-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor-500"
          >
            Back to Albums
          </Link>
        </div>
      </div>
    </div>
  );
}
