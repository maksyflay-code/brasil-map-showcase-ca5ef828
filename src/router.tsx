import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Canonical URLs keep a trailing slash. This also lets the build-time
    // prerender pass render /atuacao/ etc. directly (it requests the
    // trailing-slash URL and cannot follow redirects).
    trailingSlash: "always",
  });

  return router;
};
