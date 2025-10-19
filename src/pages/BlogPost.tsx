import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";
import ShareButtons from "@/components/ShareButtons";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  User, 
  Eye, 
  Printer, 
  Bookmark,
  TrendingUp,
  MessageSquare,
  Award
} from "lucide-react";
import { useEffect, useState } from "react";

const BlogPost = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate reading progress
    const interval = setInterval(() => {
      setReadingTime(prev => Math.min(prev + 1, 100));
    }, 3000);

    return () => clearInterval(interval);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <Link to="/blogs">
              <Button>Back to Blogs</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  const renderContent = () => {
    return article.content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        const title = paragraph.replace('## ', '');
        return (
          <h2 
            key={index} 
            id={`heading-${index}`}
            className="text-3xl font-bold mt-12 mb-6 scroll-mt-24 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            {title}
          </h2>
        );
      } else if (paragraph.startsWith('### ')) {
        const title = paragraph.replace('### ', '');
        return (
          <h3 
            key={index} 
            id={`heading-${index}`}
            className="text-2xl font-semibold mt-8 mb-4 scroll-mt-24 text-foreground"
          >
            {title}
          </h3>
        );
      } else if (paragraph.startsWith('- ')) {
        return (
          <ul key={index} className="list-none pl-0 my-6 space-y-3">
            <li className="flex items-start gap-3 text-foreground/90">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>{paragraph.replace('- ', '')}</span>
            </li>
          </ul>
        );
      } else if (paragraph.trim()) {
        return (
          <p key={index} className="mb-6 leading-relaxed text-[17px] text-foreground/90">
            {paragraph}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ReadingProgress />
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb & Actions */}
        <div className="border-b bg-muted/30 sticky top-16 z-40 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link to="/blogs">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">All Articles</span>
                  <span className="sm:hidden">Back</span>
                </Button>
              </Link>
              <div className="flex items-center gap-1 sm:gap-2">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Bookmark className="h-4 w-4" />
                  <span className="hidden md:inline">Save</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Printer className="h-4 w-4" />
                  <span className="hidden md:inline">Print</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <article className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-12 gap-6 md:gap-12">
                {/* Sidebar - Table of Contents */}
                <aside className="hidden lg:block lg:col-span-3">
                  <div className="sticky top-32 space-y-6">
                    <div className="p-6 rounded-2xl border bg-card shadow-sm">
                      <TableOfContents content={article.content} />
                    </div>

                    {/* Article Stats */}
                    <div className="p-6 rounded-2xl border bg-gradient-to-br from-primary/5 to-secondary/5">
                      <h3 className="font-semibold text-sm mb-4">Article Stats</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground flex items-center gap-2">
                            <Eye className="h-4 w-4" />
                            Views
                          </span>
                          <span className="font-semibold">{article.views}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground flex items-center gap-2">
                            <TrendingUp className="h-4 w-4" />
                            Popularity
                          </span>
                          <span className="font-semibold">High</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground flex items-center gap-2">
                            <MessageSquare className="h-4 w-4" />
                            Comments
                          </span>
                          <span className="font-semibold">24</span>
                        </div>
                      </div>
                    </div>

                    {/* Quality Badge */}
                    <div className="p-6 rounded-2xl border gradient-primary text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="h-6 w-6" />
                        <h3 className="font-bold">Premium Content</h3>
                      </div>
                      <p className="text-sm text-white/90">
                        This article has been verified by our editorial team for accuracy and quality.
                      </p>
                    </div>
                  </div>
                </aside>

                {/* Main Content */}
                <div className="lg:col-span-9">
                  {/* Article Header */}
                  <div className="mb-6 md:mb-8 animate-fade-in">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                      <Badge className="gradient-primary text-white px-3 sm:px-4 py-1 text-xs sm:text-sm">
                        {article.category}
                      </Badge>
                      <span className="text-xs sm:text-sm text-muted-foreground">Featured Article</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                      {article.title}
                    </h1>
                    
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8 font-medium">
                      {article.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm pb-4 sm:pb-6 border-b">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm">
                          {article.author.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-sm sm:text-base">{article.author}</div>
                          <div className="text-muted-foreground text-xs">Verified Author</div>
                        </div>
                      </div>
                      <Separator orientation="vertical" className="h-8 sm:h-10 hidden sm:block" />
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="text-xs sm:text-sm">{article.published}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="text-xs sm:text-sm">{article.readTime}</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="text-xs sm:text-sm">{article.views}</span>
                      </div>
                    </div>

                    {/* Share Buttons */}
                    <div className="mt-4 sm:mt-6">
                      <ShareButtons title={article.title} url={`/blog/${article.id}`} />
                    </div>
                  </div>

                  {/* Mobile Stats - Show on mobile only */}
                  <div className="lg:hidden mb-6 grid grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl border bg-card text-center">
                      <Eye className="h-5 w-5 mx-auto mb-2 text-primary" />
                      <div className="text-lg font-bold">{article.views}</div>
                      <div className="text-xs text-muted-foreground">Views</div>
                    </div>
                    <div className="p-4 rounded-xl border bg-card text-center">
                      <TrendingUp className="h-5 w-5 mx-auto mb-2 text-primary" />
                      <div className="text-lg font-bold">High</div>
                      <div className="text-xs text-muted-foreground">Popularity</div>
                    </div>
                    <div className="p-4 rounded-xl border bg-card text-center">
                      <MessageSquare className="h-5 w-5 mx-auto mb-2 text-primary" />
                      <div className="text-lg font-bold">24</div>
                      <div className="text-xs text-muted-foreground">Comments</div>
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div className="mb-8 md:mb-12 animate-scale-in">
                    <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  </div>

                  {/* Article Content */}
                  <div 
                    className="prose prose-sm sm:prose-base md:prose-lg max-w-none animate-fade-in mb-8 md:mb-12" 
                    style={{ animationDelay: '200ms' }}
                  >
                    {renderContent()}
                  </div>

                  {/* Tags */}
                  <div className="mb-8 md:mb-12 p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border bg-muted/30">
                    <h3 className="font-semibold mb-3 md:mb-4 text-sm sm:text-base">Topics Covered</h3>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary"
                          className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm hover:bg-primary hover:text-white transition-colors cursor-pointer"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Author Bio */}
                  <div className="mb-8 md:mb-12 p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border bg-gradient-to-br from-primary/5 to-secondary/5">
                    <h3 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6">About the Author</h3>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl sm:text-2xl flex-shrink-0">
                        {article.author.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-base sm:text-lg mb-2">{article.author}</div>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                          {article.authorBio}
                        </p>
                        <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                          <User className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Share Again */}
                  <div className="mb-8 md:mb-12 p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border bg-card text-center">
                    <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Found this article helpful?</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                      Share it with your network to help others discover quality content.
                    </p>
                    <ShareButtons title={article.title} url={`/blog/${article.id}`} />
                  </div>

                  {/* Related Articles */}
                  {relatedArticles.length > 0 && (
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold">Related Articles</h2>
                        <Link to={`/blogs?category=${article.category.toLowerCase()}`}>
                          <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                            <span className="hidden sm:inline">View All in {article.category}</span>
                            <span className="sm:hidden">View All</span>
                            <ArrowLeft className="ml-2 h-3 w-3 sm:h-4 sm:w-4 rotate-180" />
                          </Button>
                        </Link>
                      </div>
                      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                        {relatedArticles.map((related, index) => (
                          <div key={related.id} style={{ animationDelay: `${index * 100}ms` }}>
                            <ArticleCard {...related} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Comments Section Placeholder */}
                  <div className="mt-12 md:mt-16 p-6 sm:p-8 md:p-12 rounded-xl md:rounded-2xl border bg-gradient-to-br from-muted/30 to-muted/10 text-center">
                    <MessageSquare className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 text-muted-foreground" />
                    <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">Join the Discussion</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
                      Comments and discussions coming soon. We're building a premium community experience for our readers.
                    </p>
                    <Button className="gradient-primary text-sm sm:text-base">
                      Get Notified
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
