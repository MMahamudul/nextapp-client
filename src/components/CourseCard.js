import Link from "next/link";

export default function CourseCard({ course }) {
  const {
    _id,
    title,             // ✅ from MongoDB
    short_description, // ✅ from MongoDB
    price,
    image,
  } = course;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      {/* Course Image */}
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={
            image ||
            "https://via.placeholder.com/400x220.png?text=Course+Image"
          }
          alt={title}
          className="h-44 w-full object-cover"
        />
      </div>

      {/* Card Body */}
      <div className="space-y-2 px-4 py-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {title}
          </h3>
          <span className="text-xs font-semibold text-blue-600">
            ${price}
          </span>
        </div>

        <p className="text-xs text-gray-600 line-clamp-2">
          {short_description}
        </p>
      </div>

      {/* Bottom Button */}
      <div className="px-4 pb-4 pt-2">
        <Link
  href={`/course-details?id=${_id}`}
  className="flex h-9 w-full items-center justify-center rounded-full border border-blue-200 text-xs font-medium text-gray-800 transition hover:bg-blue-50"
>
  View details
</Link>

      </div>
    </div>
  );
}
