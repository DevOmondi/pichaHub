import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Camera, User, Album } from "lucide-react";
import { Suspense } from "react";
import HomeNav from "../../components/ui/HomeNav";
import Loading from "./components/Loading";
import EditPhotoTitle from "./components/EditPhotoTitle";

async function getPhoto(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return undefined;
  return res.json();
}

async function getAlbum(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch album");
  return res.json();
}

async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}

async function PhotoDetails({ id }: { id: string }) {
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
                <EditPhotoTitle initialTitle={photo.title} photoId={photo.id} />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {photo.title}
              </h2>
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
      <div className="mt-8 justify-center">
        <Link
          href={`/home/album/${user.id}`}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primaryColor hover:bg-primaryColor-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor-500"
        >
          Back to Albums
        </Link>
      </div>
    </div>
  );
}

export default async function PhotoPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return (
    <>
      <HomeNav />
      <Suspense fallback={<Loading />}>
        <PhotoDetails id={id} />
      </Suspense>
    </>
  );
}
