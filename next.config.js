module.exports = {
  env: {
    NEXT_PUBLIC_BASE_URL: "https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "669f704cb132e2c136fdd9a0.mockapi.io",
        pathname: "/api/v1/retreats/**",
      },
      {
        protocol: "https",
        hostname: "cdn.midjourney.com",
        pathname: "/**",
      },
    ],
  },
};
