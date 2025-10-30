import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { articleList } from "@/data/articleList";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";

const Blogs = () => {
  useSEO({
    title: "Blog Keeper — Browse articles by category",
    description: "Discover insightful articles across technology, development, lifestyle, design, sports, and news.",
    url: "https://blogkeeper.site/blogs",
  });
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFilter || "all");

  const categories = ["all", "technology", "development", "lifestyle", "design", "sports", "news"];

  const filteredArticles = selectedCategory === "all"
    ? articleList
    : articleList.filter(article => article.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="gradient-hero py-16 animate-fade-in">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
              Explore Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Blogs</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Discover insightful articles across various categories
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`capitalize transition-smooth hover-scale ${
                    selectedCategory === category ? "gradient-primary" : ""
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <div 
                  key={article.id} 
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ArticleCard {...article} />
                </div>
              ))}
            </div>
            {filteredArticles.length === 0 && (
              <div className="text-center py-16 animate-fade-in">
                <p className="text-muted-foreground text-lg">
                  No articles found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;
