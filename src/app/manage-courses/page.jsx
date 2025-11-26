"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";

export default function ManageCoursesPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [error, setError] = useState("");

  // PROTECTION
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  // Fetch courses once user is verified
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/courses`, {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error(err);
        setError("Error loading courses");
        toast.error("Failed to load courses");
      } finally {
        setLoadingCourses(false);
      }
    };

    if (!loading && user) {
      fetchCourses();
    }
  }, [loading, user]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/courses/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        // Log more details for debugging
        const text = await res.text();
        console.error("Delete failed:", res.status, text);
        throw new Error("Failed to delete");
      }

      // Remove from state
      setCourses((prev) => prev.filter((course) => course._id !== id));
      toast.success("Course deleted successfully");
    } catch (err) {
      console.error(err);
      toast.error("Error deleting course");
    }
  };

  if (loading || (!loading && !user)) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-lg text-gray-600">Checking access...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-2xl font-bold text-gray-900">Manage Courses</h1>
      <p className="mt-2 text-lg text-gray-600">
        View and manage all courses in your system. You can quickly open
        details or delete a course.
      </p>

      {error && (
        <p className="mt-4 text-lg text-red-600">
          {error}
        </p>
      )}

      {loadingCourses ? (
        <p className="mt-6 text-lg text-gray-600">Loading courses...</p>
      ) : courses.length === 0 ? (
        <p className="mt-6 text-lg text-gray-600">No courses found.</p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-xl border bg-white">
          <table className="min-w-full text-left text-lg">
            <thead className="border-b bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Level</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr
                  key={course._id}
                  className="border-b last:border-0 hover:bg-gray-50"
                >
                  <td className="px-4 py-3 text-gray-900">
                    <div className="max-w-xs truncate">{course.title}</div>
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    ${course.price}
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    {course.level || "—"}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-2 text-xs">
                      <Link
                        href={`/courses/${course._id}`}
                        className="rounded-full border px-3 py-1 hover:bg-gray-100"
                      >
                        View
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(course._id)}
                        className="rounded-full border border-red-200 px-3 py-1 text-red-600 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
