"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function AddCoursePage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [price, setPrice] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState(""); // success/error message
  const [submitting, setSubmitting] = useState(false);

  
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // While checking auth, or redirecting – avoid flashing form
  if (loading || (!loading && !user)) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-lg text-gray-600">Checking access...</p>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setSubmitting(true);

    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          short_description: shortDescription,
          full_description: fullDescription,
          price: Number(price),
          level,
          image,
          createdAt: new Date(),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to add course");
      }

      setStatus("Course added successfully ");
      setTitle("");
      setShortDescription("");
      setFullDescription("");
      setPrice("");
      setLevel("Beginner");
      setImage("");
    } catch (err) {
     
      setStatus("Something went wrong while adding the course ");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-2xl font-bold text-gray-900">Add a New Course</h1>
      <p className="mt-2 text-lg text-gray-600">
        Fill in the course information below. This page is protected – only logged-in users can access it.
      </p>

      {status && (
        <div className="mt-4 rounded-lg border px-4 py-2 text-lg text-gray-800">
          {status}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Title */}
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="mt-1 w-full rounded-lg border px-3 py-2 text-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Short description */}
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Short description <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={2}
            className="mt-1 w-full rounded-lg border px-3 py-2 text-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            required
          />
        </div>

        {/* Full description */}
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Full description
          </label>
          <textarea
            rows={4}
            className="mt-1 w-full rounded-lg border px-3 py-2 text-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={fullDescription}
            onChange={(e) => setFullDescription(e.target.value)}
          />
        </div>

        {/* Price + Level */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Price (USD) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              min="0"
              step="1"
              className="mt-1 w-full rounded-lg border px-3 py-2 text-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">
              Level
            </label>
            <select
              className="mt-1 w-full rounded-lg border px-3 py-2 text-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Image URL (optional)
          </label>
          <input
            type="url"
            className="mt-1 w-full rounded-lg border px-3 py-2 text-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://example.com/course-image.jpg"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 w-full rounded-lg bg-blue-600 py-2 text-lg font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {submitting ? "Adding course..." : "Add Course"}
        </button>
      </form>
    </div>
  );
}
