"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CourseDetailsClient({ id }) {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/courses/${id}`
        );

        if (!res.ok) {
          throw new Error("Failed to load course");
        }

        const data = await res.json();
        setCourse(data);
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchCourse();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-lg text-gray-600">Loading course...</p>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 space-y-4">
        <Link
          href="/courses"
          className="inline-flex items-center text-lg text-blue-600 hover:text-blue-700"
        >
          ← Back to courses
        </Link>
        <p className="text-lg text-red-600">
          {error || "Course not found."}
        </p>
      </div>
    );
  }

  const {
    title,
    short_description,
    price,
    image,
  } = course;

  return (
    <div className="bg-gray-50">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-200 to-indigo-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center">
          <div className="flex-1 space-y-3 text-white">
            <p className="text-xs font-semibold uppercase tracking-wide text-black">
              Course details
            </p>
            <h1 className="text-3xl font-bold md:text-4xl text-black">{title}</h1>
            <p className="max-w-xl text-lg text-black">
              {short_description}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-lg">
              <span className="rounded-full bg-white px-3 py-1 font-semibold text-black">
                ${price}
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1">
            <div className="overflow-hidden rounded-2xl border border-white/30 bg-white/10">
              <img
                src={
                  image ||
                  "https://via.placeholder.com/600x320.png?text=Course+Image"
                }
                alt={title}
                className="h-56 w-full object-cover md:h-64"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Link
          href="/courses"
          className="inline-flex items-center text-lg text-blue-600 hover:text-blue-700"
        >
         Back to courses
        </Link>

        <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">
            About this course
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-700">
            {short_description}
          </p>
        </div>
      </div>
    </div>
  );
}
