import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ArticleCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime?: string;
}

const toUnsplash = (src: string, fallbackQuery: string, sig: number) =>
  src.startsWith("/")
    ? `https://source.unsplash.com/featured/800x500?${encodeURIComponent(fallbackQuery)}&sig=${sig}`
    : src;

const queryForCategory = (category: string, title: string) => {
  const map: Record<string, string> = {
    Technology: "technology,computer,code",
    Development: "programming,developer,code,laptop",
    Lifestyle: "lifestyle,home,minimalist,wellness",
    Design: "design,ui,ux,creative,workspace",
    Sports: "sports,stadium,football,cricket",
    News: "news,newspaper,press,media",
  };
  return map[category] || title;
};

const ArticleCard = ({ id, title, excerpt, image, category, readTime }: ArticleCardProps) => {
  return (
    <div className="group rounded-xl overflow-hidden bg-card border hover:shadow-lg transition-all duration-300 animate-scale-in">
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={toUnsplash(image, queryForCategory(category, title), id)}
          alt={title}
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
          width={800}
          height={500}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.onerror = null;
            target.src = `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80`;
          }}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <h3 className="font-bold text-xl group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
          {excerpt}
        </p>
        <div className="flex items-center justify-between pt-2">
          {readTime && (
            <span className="text-xs text-muted-foreground">{readTime}</span>
          )}
          <Link to={`/blog/${id}`}>
            <Button
              variant="default"
              size="sm"
              className="gradient-primary group/btn"
            >
              Read More
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
