import { useEffect } from "react";
import { site } from "../content/site";

// Sets the page title and meta description for the current page.
export function useMeta(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} | ${site.name}`;
    const el = document.querySelector('meta[name="description"]');
    if (el) el.setAttribute("content", description);
    for (const [p, v] of [["og:title", `${title} | ${site.name}`], ["og:description", description]]) {
      document.querySelector(`meta[property="${p}"]`)?.setAttribute("content", v);
    }
  }, [title, description]);
}
