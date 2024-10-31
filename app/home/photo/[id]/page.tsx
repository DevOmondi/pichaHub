import Image from "next/image";
import { notFound } from "next/navigation";
import { Camera, User, Album } from "lucide-react";
// import EditPhotoTitle from './edit-photo-title'

async function getPhoto(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return undefined;
  return res.json();
}

async function getAlbum(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch album");
  return res.json();
}

async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}

export default async function PhotoPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const photo = await getPhoto(id);

  if (!photo) {
    notFound();
  }

  const album = await getAlbum(photo.albumId);
  const user = await getUser(album.userId);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <Camera
                className="h-8 w-8 text-indigo-600 mr-3"
                aria-hidden="true"
              />
              Photo Details
            </h1>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:p-6">
              <div className="mb-6">
                <Image
                  src={photo.url}
                  alt={photo.title}
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              {/* <EditPhotoTitle initialTitle={photo.title} photoId={photo.id} /> */}
              <dl className="mt-6 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <User
                      className="h-5 w-5 text-gray-400 mr-2"
                      aria-hidden="true"
                    />
                    Uploaded by
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">{user.name}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <Album
                      className="h-5 w-5 text-gray-400 mr-2"
                      aria-hidden="true"
                    />
                    Album
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">{album.title}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}