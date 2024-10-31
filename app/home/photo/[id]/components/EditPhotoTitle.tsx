"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function EditPhotoTitle({
  initialTitle,
  photoId,
}: {
  initialTitle: string;
  photoId: string;
}) {
  const [title, setTitle] = useState(initialTitle);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${photoId}`,
        {
          method: "PATCH",
          body: JSON.stringify({ title }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (!response.ok) throw new Error("Failed to update title");
      setIsEditing(false);
      router.refresh(); // Refresh the page to show the updated title
    } catch (error) {
      console.error("Failed to update title:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isEditing) {
    return (
      <div className="flex items-center justify-between mt-[1rem]">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <Button onClick={() => setIsEditing(true)} variant="outline" size="sm">
          Edit Title
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full"
        placeholder="Enter new title"
      />
      <div className="flex justify-end space-x-2">
        <Button
          type="button"
          onClick={() => setIsEditing(false)}
          variant="outline"
          size="sm"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
          size="sm"
          className="bg-primaryColor"
        >
          {isSubmitting ? "Saving..." : "Save"}
        </Button>
      </div>
    </form>
  );
}
