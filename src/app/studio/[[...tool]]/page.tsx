/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path are handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * Learn more about the next-sanity package:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

// Force the route to use static rendering
export const dynamic = "force-static";

// Use proper metadata exports from `next-sanity/studio`
export { metadata } from "next-sanity/studio";

// Studio Page Component
export default function StudioPage() {
  return <NextStudio config={config} />;
}
