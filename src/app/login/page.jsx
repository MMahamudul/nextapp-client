"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);

  // ✅ Redirect only AFTER auth finishes loading
  useEffect(() => {
    if (!loading && user) {
      router.push("/");
    }
  }, [user, loading, router]);

  // ✅ Prevent flashing / disappearing page
  if (loading) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4">
        <p className="text-lg text-gray-600">Checking your login status...</p>
      </div>
    );
  }

  // ✅ Email/Password Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoadingEmail(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      setError(err.message.replace("Firebase:", ""));
    } finally {
      setLoadingEmail(false);
    }
  };

  // ✅ Google Login
  const handleGoogleLogin = async () => {
    setError("");
    setLoadingGoogle(true);

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (err) {
      console.error(err);
      setError(err.message.replace("Firebase:", ""));
    } finally {
      setLoadingGoogle(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4">
      <h1 className="mb-6 text-2xl font-bold">Login to Course Camp</h1>

      {/* ✅ Google Sign In */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={loadingGoogle}
        className="mb-4 flex w-full items-center justify-center gap-2 rounded-lg border bg-white px-4 py-2 text-lg font-medium text-gray-700 shadow-sm hover:bg-gray-50 disabled:opacity-60"
      >
        {loadingGoogle ? "Signing in..." : "Continue with Google"}
      </button>

      <div className="mb-4 flex items-center gap-2 text-xs text-gray-400">
        <span className="h-px flex-1 bg-gray-200" />
        <span>or sign in with email</span>
        <span className="h-px flex-1 bg-gray-200" />
      </div>

      {/* ✅ Email/Password Login */}
      <form onSubmit={handleEmailLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border px-4 py-2 text-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-lg border px-4 py-2 text-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <p className="text-xs text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loadingEmail}
          className="w-full rounded-lg bg-blue-600 py-2 text-lg font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {loadingEmail ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="mt-4 text-lg text-gray-600">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-blue-600 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
}
