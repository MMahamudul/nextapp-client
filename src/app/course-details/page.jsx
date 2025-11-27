"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function CourseDetailsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      setError("No course ID provided.");
      setLoading(false);
      return;
    }

    const fetchCourse = async () => {
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
        setError("Unable to load course details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-sm text-gray-600">Loading course details...</p>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 space-y-4">
        <Link
          href="/courses"
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
        >
          ← Back to courses
        </Link>
        <p className="text-sm text-red-600">{error || "Course not found."}</p>
      </div>
    );
  }

  const { title, short_description, full_description, price, level, image } =
    course;

  return (
    <div className="bg-gray-50">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center">
          <div className="flex-1 space-y-3 text-white">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-100">
              Course details
            </p>
            <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
            <p className="max-w-xl text-sm text-blue-100">
              {short_description}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-white px-3 py-1 font-semibold text-blue-700">
                ${price}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1">
                Level:{" "}
                <span className="font-semibold">
                  {level || "Not specified"}
                </span>
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

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Link
          href="/courses"
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
        >
          ← Back to courses
        </Link>

        <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">
            About this course
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 whitespace-pre-line">
            {full_description || short_description}
          </p>
        </div>
      </div>
    </div>
  );
}
