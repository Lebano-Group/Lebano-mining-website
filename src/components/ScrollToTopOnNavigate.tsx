import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

/** Scrolls the window to the top whenever the route pathname changes. */
export function ScrollToTopOnNavigate() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
