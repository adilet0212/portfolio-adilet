import createMDX from "@next/mdx";
const withMDX = createMDX();

const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMDX(nextConfig);