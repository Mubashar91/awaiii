import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import NewsletterSection from "@/components/NewsletterSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";
import { ArrowRight, TrendingUp, Users, BookOpen, Award, Clock, Zap, Shield, Globe, Star, MessageSquare, Target, Lightbulb, Heart, CheckCircle, BookmarkPlus, Sparkles, FileText, PenTool, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [latestIndex, setLatestIndex] = useState(0);
  
  const featuredArticles = articles.slice(0, 9); // Show 9 articles in slider
  const latestArticles = articles.slice(9, 18); // Show next 9 articles
  const categories = ["Technology", "Development", "Lifestyle", "Design", "Sports", "News"];
  
  const articlesPerPage = 3;
  const maxFeaturedIndex = Math.ceil(featuredArticles.length / articlesPerPage) - 1;
  const maxLatestIndex = Math.ceil(latestArticles.length / articlesPerPage) - 1;
  
  const handleFeaturedNext = () => {
    setFeaturedIndex((prev) => (prev < maxFeaturedIndex ? prev + 1 : 0));
  };
  
  const handleFeaturedPrev = () => {
    setFeaturedIndex((prev) => (prev > 0 ? prev - 1 : maxFeaturedIndex));
  };
  
  const handleLatestNext = () => {
    setLatestIndex((prev) => (prev < maxLatestIndex ? prev + 1 : 0));
  };
  
  const handleLatestPrev = () => {
    setLatestIndex((prev) => (prev > 0 ? prev - 1 : maxLatestIndex));
  };
  
  const currentFeaturedArticles = featuredArticles.slice(
    featuredIndex * articlesPerPage,
    (featuredIndex + 1) * articlesPerPage
  );
  
  const currentLatestArticles = latestArticles.slice(
    latestIndex * articlesPerPage,
    (latestIndex + 1) * articlesPerPage
  );
  
  const stats = [
    { icon: BookOpen, value: "500+", label: "Articles Published" },
    { icon: Users, value: "50K+", label: "Monthly Readers" },
    { icon: Globe, value: "120+", label: "Countries Reached" },
    { icon: Award, value: "95%", label: "Reader Satisfaction" }
  ];
  
  const benefits = [
    { 
      icon: Zap, 
      title: "Fresh Content Daily", 
      description: "New articles published regularly to keep you informed and engaged with the latest trends and insights."
    },
    { 
      icon: Shield, 
      title: "Expert Writers", 
      description: "Content created by industry professionals and subject matter experts with years of experience."
    },
    { 
      icon: Clock, 
      title: "Quick Reads", 
      description: "Concise, well-structured articles designed to deliver maximum value in minimum time."
    },
    { 
      icon: TrendingUp, 
      title: "Trending Topics", 
      description: "Stay ahead with articles covering the most relevant and trending topics across all categories."
    }
  ];
  
  const trendingTopics = [
    { name: "Artificial Intelligence", count: "45 articles" },
    { name: "Web Development", count: "38 articles" },
    { name: "Digital Marketing", count: "32 articles" },
    { name: "Cybersecurity", count: "28 articles" },
    { name: "Data Science", count: "25 articles" },
    { name: "Cloud Computing", count: "22 articles" }
  ];
  
  const platformFeatures = [
    {
      icon: BookmarkPlus,
      title: "Bookmark & Save",
      description: "Save your favorite articles and create personalized reading lists for later."
    },
    {
      icon: MessageSquare,
      title: "Engage & Discuss",
      description: "Join the conversation with comments and discussions on every article."
    },
    {
      icon: Sparkles,
      title: "Personalized Feed",
      description: "Get article recommendations tailored to your interests and reading history."
    },
    {
      icon: Calendar,
      title: "Never Miss Updates",
      description: "Stay informed with our newsletter and get notified about new content."
    }
  ];
  
  const contentHighlights = [
    {
      icon: FileText,
      title: "In-Depth Analysis",
      description: "Comprehensive articles that dive deep into complex topics with thorough research and expert insights.",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: PenTool,
      title: "Creative Writing",
      description: "Engaging narratives and creative perspectives that bring stories and ideas to life.",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Target,
      title: "Practical Guides",
      description: "Step-by-step tutorials and actionable advice you can implement immediately.",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Lightbulb,
      title: "Thought Leadership",
      description: "Forward-thinking perspectives on industry trends and future innovations.",
      color: "from-orange-500/20 to-yellow-500/20"
    }
  ];
  
  const readerBenefits = [
    {
      icon: CheckCircle,
      title: "Ad-Free Reading Experience",
      description: "Enjoy distraction-free reading without intrusive advertisements."
    },
    {
      icon: Globe,
      title: "Access Anywhere",
      description: "Read on any device - desktop, tablet, or mobile with full responsiveness."
    },
    {
      icon: Heart,
      title: "Community Driven",
      description: "Content shaped by reader feedback and community engagement."
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "Every article reviewed and edited by our expert editorial team."
    }
  ];
  
  const faqs = [
    {
      question: "How often is new content published?",
      answer: "We publish new articles daily across various categories including technology, lifestyle, development, design, sports, and news to keep you informed and engaged."
    },
    {
      question: "Can I contribute articles to my blogs?",
      answer: "Yes! We welcome contributions from experienced writers and subject matter experts. Contact us through our contact page to learn more about our submission guidelines."
    },
    {
      question: "Is there a subscription fee?",
      answer: "my blogs is completely free to access. We believe quality content should be available to everyone without paywalls or subscription fees."
    },
    {
      question: "How can I stay updated with new articles?",
      answer: "Subscribe to our newsletter to receive regular updates about new articles, trending topics, and exclusive content directly in your inbox."
    },
    {
      question: "Can I request specific topics?",
      answer: "Absolutely! We value reader feedback and suggestions. Use our contact form to suggest topics you'd like to see covered, and we'll do our best to create relevant content."
    },
    {
      question: "Are articles fact-checked and reviewed?",
      answer: "Yes, every article goes through a thorough review process by our editorial team to ensure accuracy, quality, and adherence to our content standards."
    }
  ];
  
  const commitments = [
    {
      title: "Accuracy First",
      description: "Every piece of content is thoroughly researched and fact-checked to ensure you receive reliable, trustworthy information.",
      icon: CheckCircle
    },
    {
      title: "Reader-Centric",
      description: "We prioritize your needs, interests, and feedback in shaping our content strategy and editorial decisions.",
      icon: Heart
    },
    {
      title: "Continuous Improvement",
      description: "We constantly evolve our platform and content based on industry trends and reader suggestions.",
      icon: TrendingUp
    },
    {
      title: "Diverse Perspectives",
      description: "Our team of diverse writers brings varied viewpoints and expertise to create well-rounded, inclusive content.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20 md:py-32 animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-in-left">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Welcome to{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    my blogs
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dive into insightful articles on technology, lifestyle, development, design, sports, and global news. Explore, learn, and grow with curated content written with passion.
                </p>
                <Link to="/blogs">
                  <Button size="lg" className="gradient-primary group">
                    Explore Articles
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              <div className="relative animate-scale-in">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-6 border border-primary/10">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                    alt="People reading and learning"
                    className="relative rounded-2xl shadow-2xl w-full object-cover"
                  />
                  
                  {/* Floating Card 1 */}
                  <div className="absolute -bottom-4 -left-4 bg-card border shadow-xl rounded-xl p-4 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-sm">New Article</div>
                        <div className="text-xs text-muted-foreground">Published Today</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Card 2 */}
                  <div className="absolute -top-4 -right-4 bg-card border shadow-xl rounded-xl p-4 animate-float" style={{ animationDelay: '0.5s' }}>
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-sm">Top Rated</div>
                        <div className="text-xs text-muted-foreground">5.0 ★★★★★</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 border-y bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scrolling Categories */}
        <section className="py-6 border-y bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 overflow-hidden">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...categories, ...categories, ...categories].map((category, index) => (
              <Link
                key={index}
                to={`/blogs?category=${category.toLowerCase()}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-card border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all hover:scale-105"
              >
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {category}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Articles</h2>
                <p className="text-muted-foreground">
                  Discover our most popular and insightful content
                </p>
              </div>
              <Link to="/blogs">
                <Button variant="outline" className="group hidden md:flex">
                  Explore All Articles
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex-1"></div>
                
                <div className="flex gap-2">
                  {Array.from({ length: maxFeaturedIndex + 1 }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setFeaturedIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === featuredIndex 
                          ? 'w-8 bg-primary' 
                          : 'w-2 bg-primary/30 hover:bg-primary/50'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                
                <div className="flex-1 flex justify-end gap-3">
                  <Button
                    onClick={handleFeaturedPrev}
                    variant="outline"
                    size="icon"
                    className="rounded-full h-12 w-12 hover:scale-110 transition-transform"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  
                  <Button
                    onClick={handleFeaturedNext}
                    variant="outline"
                    size="icon"
                    className="rounded-full h-12 w-12 hover:scale-110 transition-transform"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              
              {/* Articles Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentFeaturedArticles.map((article, index) => (
                  <div 
                    key={article.id} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ArticleCard {...article} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose my blogs?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your trusted source for quality content across multiple domains
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="p-6 rounded-2xl border bg-card hover:shadow-xl transition-all animate-scale-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Articles Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Latest Articles</h2>
                <p className="text-muted-foreground">Fresh content just for you</p>
              </div>
              <Link to="/blogs">
                <Button variant="outline" className="group hidden md:flex">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex-1"></div>
                
                <div className="flex gap-2">
                  {Array.from({ length: maxLatestIndex + 1 }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLatestIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === latestIndex 
                          ? 'w-8 bg-primary' 
                          : 'w-2 bg-primary/30 hover:bg-primary/50'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                
                <div className="flex-1 flex justify-end gap-3">
                  <Button
                    onClick={handleLatestPrev}
                    variant="outline"
                    size="icon"
                    className="rounded-full h-12 w-12 hover:scale-110 transition-transform"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  
                  <Button
                    onClick={handleLatestNext}
                    variant="outline"
                    size="icon"
                    className="rounded-full h-12 w-12 hover:scale-110 transition-transform"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              
              {/* Articles Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentLatestArticles.map((article, index) => (
                  <div 
                    key={article.id} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ArticleCard {...article} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commitment to Excellence</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at my blogs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {commitments.map((commitment, index) => (
                <div
                  key={commitment.title}
                  className="p-6 rounded-2xl bg-card border hover:shadow-2xl transition-all animate-scale-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <commitment.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{commitment.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{commitment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Topics Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Topics</h2>
              <p className="text-muted-foreground">Explore the most popular subjects on our platform</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {trendingTopics.map((topic, index) => (
                <div
                  key={topic.name}
                  className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:shadow-lg transition-all cursor-pointer group animate-slide-in-left"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{topic.name}</h3>
                    <p className="text-xs text-muted-foreground">{topic.count}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Highlights Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Content You'll Love</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Diverse content formats designed to educate, inspire, and engage readers of all interests
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {contentHighlights.map((highlight, index) => (
                <div
                  key={highlight.title}
                  className="group p-8 rounded-2xl border bg-card hover:shadow-2xl transition-all animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <highlight.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Platform Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need for an exceptional reading experience
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platformFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all animate-slide-up group"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 gradient-hero">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-slide-up">
              Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <Link
                  key={category}
                  to={`/blogs?category=${category.toLowerCase()}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className="animate-scale-in"
                >
                  <Button
                    variant="outline"
                    className="w-full h-20 text-lg font-semibold bg-card hover:shadow-lg hover:scale-105 transition-all"
                  >
                    {category}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Reader Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Readers Like You</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We've designed every aspect of our platform with your reading experience in mind
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {readerBenefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="text-center p-6 rounded-2xl border bg-gradient-to-br from-card to-muted/20 hover:shadow-xl transition-all animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Readers Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join thousands of satisfied readers who trust my blogs for quality content
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border animate-slide-in-left hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "The articles are insightful, detailed, and really help me stay updated with the latest trends. my blogs has become my daily read!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <h4 className="font-semibold">John Davis</h4>
                    <p className="text-sm text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/5 to-primary/5 border animate-slide-up hover:shadow-xl transition-all" style={{ animationDelay: '100ms' }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "I love the variety and quality of content here. It's my go-to place for blogs. The writing is professional and engaging!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white font-bold">
                    SP
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Parker</h4>
                    <p className="text-sm text-muted-foreground">Marketing Director</p>
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border animate-scale-in hover:shadow-xl transition-all" style={{ animationDelay: '200ms' }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "Exceptional content across all categories. The depth of research and clarity of writing sets my blogs apart from other platforms."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    MC
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">Data Analyst</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Got questions? We've got answers. Learn more about my blogs and how we serve our readers.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <h3 className="font-bold text-lg mb-3 flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 items-center justify-center flex-shrink-0 text-primary font-bold text-sm">
                      {index + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-11">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 animate-fade-in">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="group">
                  Contact Our Team
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-24 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Learning Journey Today
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join our community of curious minds and stay informed with quality content delivered regularly. Explore articles that matter, written by experts who care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/blogs">
                  <Button size="lg" className="gradient-primary group w-full sm:w-auto">
                    Browse All Articles
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
