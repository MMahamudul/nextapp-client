// src/app/courses/CoursesList.jsx
"use client";

import { useMemo, useState } from "react";
import CourseCard from "@/components/CourseCard";

export default function CoursesList({ initialCourses }) {
  const [search, setSearch] = useState("");

  const filteredCourses = useMemo(() => {
    return initialCourses.filter((course) => {
      const q = search.toLowerCase();
      return (
        course.title?.toLowerCase().includes(q) ||
        course.shortDescription?.toLowerCase().includes(q)
      );
    });
  }, [initialCourses, search]);

  return (
    <div className="mt-8 space-y-6">
      {/* Search bar */}
      <div>
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-full border border-gray-300 px-4 py-2 text-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Grid of cards */}
      {filteredCourses.length === 0 ? (
        <p className="text-lg text-gray-500">No courses found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}
