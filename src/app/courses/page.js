
import CoursesList from "./CoursesList";

async function getCourses() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/courses`, {
    cache: "no-store", 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }

  return res.json();
}

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900">All Courses</h1>
      <p className="mt-2 text-gray-600">
        Browse our available courses. Use the search bar to quickly find what you are looking for.
      </p>

      <CoursesList initialCourses={courses} />
    </div>
  );
}
