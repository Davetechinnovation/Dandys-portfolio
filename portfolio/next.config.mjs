// @ts-check

const nextConfig = {
  // The parent folder holds a separate reference project with its own lockfile —
  // pin the workspace root here so Next doesn't infer the wrong one.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
