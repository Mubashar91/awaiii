import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const lines = content.split('\n');
    const tocItems: TOCItem[] = [];
    
    lines.forEach((line, index) => {
      if (line.startsWith('## ') || line.startsWith('### ')) {
        const level = line.startsWith('## ') ? 2 : 3;
        const title = line.replace(/^#{2,3} /, '');
        const id = `heading-${index}`;
        tocItems.push({ id, title, level });
      }
    });
    
    setHeadings(tocItems);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className="space-y-1">
      <h3 className="font-semibold text-sm mb-3 text-foreground">Table of Contents</h3>
      {headings.map((heading) => (
        <button
          key={heading.id}
          onClick={() => scrollToHeading(heading.id)}
          className={cn(
            "block w-full text-left text-sm py-1.5 transition-colors rounded-md px-2",
            heading.level === 3 && "pl-4",
            activeId === heading.id
              ? "text-primary font-medium bg-primary/10"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          )}
        >
          {heading.title}
        </button>
      ))}
    </nav>
  );
};

export default TableOfContents;
