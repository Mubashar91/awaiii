import { useEffect } from "react";

interface SEOOptions {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
  if (!content) return;
  let tag = document.querySelector(`meta[${attr}='${name}']`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

export function useSEO({ title, description, url, image }: SEOOptions) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) setMeta("description", description, "name");

    if (url) {
      let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = url;
    }

    // Open Graph
    if (url) setMeta("og:url", url, "property");
    if (title) setMeta("og:title", title, "property");
    if (description) setMeta("og:description", description, "property");
    if (image) setMeta("og:image", image, "property");

    // Twitter
    if (title) setMeta("twitter:title", title);
    if (description) setMeta("twitter:description", description);
    if (image) setMeta("twitter:image", image);
    setMeta("twitter:card", image ? "summary_large_image" : "summary");
  }, [title, description, url, image]);
}
