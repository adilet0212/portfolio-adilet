/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-adilet.vercel.app",
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "monthly",
      priority: path === "/" ? 0.9 : 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
};