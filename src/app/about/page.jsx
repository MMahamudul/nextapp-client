export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* Page Title */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900">About Course Camp</h1>
        <p className="mt-3 text-lg text-gray-600">
          Learn more about our mission, vision, and what we offer.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        {/* Left Text Content */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Our Mission
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            Course Camp is a modern online learning platform built to help
            students and professionals access high-quality courses easily.
            Our goal is to make learning simple, affordable, and accessible
            for everyone.
          </p>

          <h2 className="mt-6 text-xl font-semibold text-gray-900">
            What We Do
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-gray-600">
            We provide a platform where instructors can publish courses and
            learners can explore, enroll, and grow their skills. Our system
            includes secure authentication, course management, and a clean,
            user-friendly interface.
          </p>

          <h2 className="mt-6 text-xl font-semibold text-gray-900">
            Why Choose Course Camp?
          </h2>
          <ul className="mt-3 list-disc pl-5 text-lg text-gray-600 space-y-2">
            <li>Simple and easy-to-use interface</li>
            <li>Secure login with Firebase authentication</li>
            <li>Real-time course management with MongoDB</li>
            <li>Modern design with responsive layout</li>
          </ul>
        </div>

        {/* Right Highlight Box */}
        <div className="rounded-2xl border bg-white p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">
            Course Camp at a Glance
          </h3>

          <div className="mt-6 grid grid-cols-2 gap-6 text-center">
            <div className="rounded-xl border p-4">
              <p className="text-2xl font-bold text-blue-600">50+</p>
              <p className="mt-1 text-lg text-gray-600">Courses</p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-2xl font-bold text-blue-600">1K+</p>
              <p className="mt-1 text-lg text-gray-600">Students</p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-2xl font-bold text-blue-600">20+</p>
              <p className="mt-1 text-lg text-gray-600">Instructors</p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-2xl font-bold text-blue-600">100%</p>
              <p className="mt-1 text-lg text-gray-600">Commitment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-16 rounded-xl border bg-gray-50 px-6 py-5 text-center">
        <p className="text-lg text-gray-700">
          This project is built as a demonstration of a full-stack application
          using Next.js, Firebase Authentication, Express, and MongoDB.
        </p>
      </div>
    </div>
  );
}
