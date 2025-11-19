import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // TODO: re-enable cache-handler
  // cacheHandler: require.resolve("./cache-handler.mjs"),
  // cacheMaxMemorySize: 0, // disable default in-memory caching
};

export default nextConfig;
