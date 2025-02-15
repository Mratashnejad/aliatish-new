
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    workerThreads: false,
    // cpus: 2, // Matches your 2-core CPU
  },
  async rewrites(){
    return [
      {
        source:'/sitemap.xml',
        destination:'/api/sitemap',
      }
    ]
  }
};

export default nextConfig;