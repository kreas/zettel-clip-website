import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

const withMDX = createMDX({
  // Add markdown plugins here if needed (remark-gfm, rehype-slug, etc.)
});

export default withMDX(nextConfig);
