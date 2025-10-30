import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { useParams, Link } from "react-router-dom";
import { articles } from "@/data/articleList";
import { useMemo } from "react";
import { useSEO } from "@/hooks/useSEO";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const toSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const Author = () => {
  const { name } = useParams();

  const { author, authored } = useMemo(() => {
    const list = articles.filter(a => toSlug(a.author) === name);
    const first = list[0];
    return { author: first, authored: list };
  }, [name]);

  useSEO({
    title: author ? `${author.author} — Author at Blog Keeper` : `Author — Blog Keeper`,
    description: author ? author.authorBio : `Articles written by our authors at Blog Keeper`,
    url: author ? `https://blogkeeper.site/author/${name}` : undefined
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="gradient-hero py-16">
          <div className="container mx-auto px-4">
            <Link to="/blogs">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to Articles
              </Button>
            </Link>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-3">{author ? author.author : "Author"}</h1>
              {author && (
                <p className="text-muted-foreground">{author.authorBio}</p>
              )}
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Articles by {author ? author.author : "this author"}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {authored.map((a) => (
                <ArticleCard key={a.id} id={a.id} title={a.title} excerpt={a.excerpt} image={a.image} category={a.category} readTime={a.readTime} />
              ))}
              {authored.length === 0 && (
                <div className="text-muted-foreground">No articles found.</div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Author;
