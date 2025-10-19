import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20 animate-fade-in">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CognitHub</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Your trusted source for insightful content across technology, lifestyle, development, design, sports, and global news.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="animate-slide-in-left">
                  <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    At CognitHub, we believe in the power of knowledge and thoughtful discourse. Our mission is to provide readers with well-researched, engaging content that informs, educates, and inspires.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We curate articles that matter, covering diverse topics to help you stay informed about the world around you.
                  </p>
                </div>
                <div className="relative animate-scale-in">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
                  <img
                    src="/our-mission.svg"
                    alt="Our Mission"
                    className="relative rounded-2xl shadow-xl w-full"
                  />
                </div>
              </div>

              {/* Values */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {[
                  { icon: Target, title: "Focus", description: "Quality content that matters" },
                  { icon: Users, title: "Community", description: "Building connections through ideas" },
                  { icon: Award, title: "Excellence", description: "Commitment to high standards" },
                  { icon: Heart, title: "Passion", description: "Written with care and dedication" }
                ].map((value, index) => (
                  <div
                    key={value.title}
                    className="p-6 rounded-2xl border bg-gradient-to-br from-primary/5 to-secondary/5 hover-lift animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <value.icon className="h-10 w-10 text-primary mb-4 transition-smooth" />
                    <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>

              {/* What We Cover */}
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-8 text-center">What We Cover</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                  {[
                    {
                      title: "Technology",
                      description: "Latest trends, innovations, and insights in the tech world"
                    },
                    {
                      title: "Development",
                      description: "Programming, tools, and best practices for developers"
                    },
                    {
                      title: "Lifestyle",
                      description: "Tips and ideas for better living and personal growth"
                    },
                    {
                      title: "Design",
                      description: "Creative inspiration and design thinking"
                    },
                    {
                      title: "Sports",
                      description: "Coverage of major sporting events and analysis"
                    },
                    {
                      title: "Global News",
                      description: "Important stories from around the world"
                    }
                  ].map((category, index) => (
                    <div
                      key={category.title}
                      className="p-6 rounded-xl border bg-card hover:shadow-md transition-shadow animate-scale-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <h3 className="font-bold text-lg mb-2 text-primary">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  From humble beginnings to becoming a trusted source of knowledge
                </p>
              </div>
              
              <div className="space-y-8 animate-fade-in">
                <div className="bg-card rounded-2xl p-8 border hover-lift">
                  <h3 className="text-xl font-bold mb-4 text-primary">The Beginning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    CognitHub was founded with a simple yet powerful vision: to create a platform where quality content meets curious minds. What started as a small blog has grown into a comprehensive knowledge hub serving thousands of readers worldwide.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 border hover-lift">
                  <h3 className="text-xl font-bold mb-4 text-primary">Our Growth</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Over the years, we've expanded our coverage to include diverse topics, partnered with expert writers, and built a community of engaged readers who value depth and accuracy in their content. Today, we publish multiple articles weekly, each crafted with care and expertise.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-8 border hover-lift">
                  <h3 className="text-xl font-bold mb-4 text-primary">Looking Forward</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    As we continue to grow, our commitment remains unchanged: delivering high-quality, insightful content that empowers our readers to learn, grow, and make informed decisions. We're constantly exploring new topics and formats to better serve our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CognitHub?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  What sets us apart in the world of online content
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6 animate-slide-in-left">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Expert Contributors</h3>
                      <p className="text-muted-foreground">
                        Our articles are written by industry professionals, experienced journalists, and subject matter experts who bring real-world knowledge and insights.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Rigorous Research</h3>
                      <p className="text-muted-foreground">
                        Every article goes through thorough fact-checking and research to ensure accuracy and reliability. We cite credible sources and verify information.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Diverse Perspectives</h3>
                      <p className="text-muted-foreground">
                        We bring together voices from different backgrounds and viewpoints to provide well-rounded coverage that considers multiple angles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 animate-slide-in-right">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Reader-Focused</h3>
                      <p className="text-muted-foreground">
                        Your needs guide our content strategy. We listen to feedback, track trending topics, and continuously improve based on what our readers want to learn.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">5</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Ad-Free Experience</h3>
                      <p className="text-muted-foreground">
                        Enjoy distraction-free reading without intrusive ads or paywalls. We believe quality content should be accessible to everyone.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">6</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Regular Updates</h3>
                      <p className="text-muted-foreground">
                        Fresh content published daily ensures you always have something new to discover and learn. Stay current with the latest developments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Process Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-slide-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Editorial Process</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  How we ensure quality and accuracy in every piece we publish
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    step: "1",
                    title: "Research",
                    description: "In-depth research from credible sources"
                  },
                  {
                    step: "2",
                    title: "Writing",
                    description: "Expert writers craft engaging content"
                  },
                  {
                    step: "3",
                    title: "Review",
                    description: "Editorial team reviews for accuracy"
                  },
                  {
                    step: "4",
                    title: "Publish",
                    description: "Final checks before publication"
                  }
                ].map((item, index) => (
                  <div
                    key={item.step}
                    className="text-center p-6 rounded-xl bg-card border hover-lift animate-bounce-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Promise Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Promise to You</h2>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 border">
                  <p className="text-lg leading-relaxed mb-6">
                    We promise to always prioritize <span className="font-bold text-primary">accuracy over speed</span>, 
                    <span className="font-bold text-primary"> quality over quantity</span>, and 
                    <span className="font-bold text-primary"> your trust over everything else</span>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Every article published on CognitHub undergoes rigorous fact-checking and editorial review. 
                    We're committed to providing you with content that's not only informative and engaging but also 
                    reliable and trustworthy. Your satisfaction and trust are the measures of our success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
