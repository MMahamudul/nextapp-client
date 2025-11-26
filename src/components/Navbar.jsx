"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { user, loading, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Course<span className="text-blue-600">Camp</span>
        </Link>

        {/* Middle routes */}
        <div className="hidden gap-6 text-lg font-medium md:flex">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/courses" className="hover:text-blue-600">
            Courses
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Right side: auth */}
        <div className="flex items-center gap-3">
          {loading ? (
            <span className="text-lg text-gray-500">Checking...</span>
          ) : user ? (
            // Logged-in view: dropdown
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-lg font-medium hover:bg-gray-50"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-[11px] font-semibold text-white">
                  {user.email?.[0]?.toUpperCase() || "U"}
                </span>
                <span className="hidden text-lg text-gray-700 sm:inline">
                  {user.email}
                </span>
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-52 rounded-xl border bg-white p-2 text-lg shadow-lg">
                  <div className="px-3 py-2 text-lg text-gray-600">
                    Signed in as
                    <div className="truncate font-medium text-gray-900">
                      {user.email}
                    </div>
                  </div>
                  <hr className="my-1" />
                  <Link
                    href="/add-course"
                    className="block rounded-lg px-3 py-2 text-lg hover:bg-gray-50"
                    onClick={() => setOpen(false)}
                  >
                    Add Course
                  </Link>
                  <Link
                    href="/manage-courses"
                    className="block rounded-lg px-3 py-2 text-lg hover:bg-gray-50"
                    onClick={() => setOpen(false)}
                  >
                    Manage Courses
                  </Link>
                  <hr className="my-1" />
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="block w-full rounded-lg px-3 py-2 text-left text-lg text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Logged-out view
            <>
              <Link
                href="/login"
                className="rounded-full border px-4 py-1.5 text-lg font-medium hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-blue-600 px-4 py-1.5 text-lg font-medium text-white hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
