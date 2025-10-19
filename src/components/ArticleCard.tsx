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

const ArticleCard = ({ id, title, excerpt, image, category, readTime }: ArticleCardProps) => {
  return (
    <div className="group rounded-xl overflow-hidden bg-card border hover:shadow-lg transition-all duration-300 animate-scale-in">
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={image}
          alt={title}
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
