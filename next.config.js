module.exports = {
  // Add experimental config to resolve bcryptjs and mongoose issues
  //experimental: {
    serverComponentsExternalPackages: ["bcryptjs", "mongoose"],
    //esmExternals: "loose",
 // },
  // Optional: Add image domain config if needed (already in your code)
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};
