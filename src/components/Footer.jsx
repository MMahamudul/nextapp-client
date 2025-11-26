// src/components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold">
              Course<span className="text-blue-600">Camp</span>
            </h2>
            <p className="mt-3 max-w-xs text-lg text-gray-600">
              Course Camp is a modern learning platform where you can explore,
              manage, and publish online courses with secure authentication.
            </p>
          </div>

          {/* Links - Explore */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Explore</h3>
            <ul className="mt-4 space-y-2 text-lg text-gray-600">
              <li>
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-blue-600">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Links - Account */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Account</h3>
            <ul className="mt-4 space-y-2 text-lg text-gray-600">
              <li>
                <Link href="/login" className="hover:text-blue-600">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-blue-600">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/add-course" className="hover:text-blue-600">
                  Add Course
                </Link>
              </li>
              <li>
                <Link href="/manage-courses" className="hover:text-blue-600">
                  Manage Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Follow us</h3>
            <div className="mt-4 flex gap-4">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              >
                F
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              >
                T
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              >
                I
              </a>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Follow us on social media for updates and new courses.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 text-lg text-gray-600 md:flex-row">
          <p>
            © {year} Course Camp. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
