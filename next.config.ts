import type { NextConfig } from "next";

// 部署到 GitHub Pages 時，網站會位於 https://<帳號>.github.io/<repo名稱>/
// 如果你的 repo 名稱不是 "cunren-website"，請把下面這個值改成你的 repo 名稱
const REPO_NAME = "cunren-website";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${REPO_NAME}` : "",
  assetPrefix: isGithubPages ? `/${REPO_NAME}/` : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
