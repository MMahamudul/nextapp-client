/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",      // 🔥 this enables static export
  reactCompiler: true,   // keep your existing option
};

export default nextConfig;
