import type { NextConfig } from 'next';

const githubPages = process.env.GITHUB_PAGES_EXPORT === '1';

const nextConfig: NextConfig = {
  basePath: githubPages ? '/931-the-lake-website-concept' : '',
  images: { unoptimized: true },
};

export default nextConfig;
