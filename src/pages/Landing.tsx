import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Landing = () => {
  const pages = [
    { name: "Home", path: "/home", description: "Explore our blog articles" },
    { name: "Blogs", path: "/blogs", description: "Browse all articles" },
    { name: "About", path: "/about", description: "Learn about us" },
    { name: "Contact", path: "/contact", description: "Get in touch" },
    { name: "Terms", path: "/terms", description: "Policies & terms" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      {/* Header Section */}
      <div className="w-full py-16 md:py-24 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            my blogs
          </h1>
          <p className="text-lg md:text-xl text-slate-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore quality content across multiple domains
          </p>
        </div>
      </div>

      {/* Pages Grid */}
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto space-y-6">
          {pages.map((page, index) => (
            <Link
              key={page.path}
              to={page.path}
              className="block animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Button
                className="w-full h-20 text-xl font-semibold bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                size="lg"
              >
                {page.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="w-full py-6 bg-slate-900/50 text-center">
        <p className="text-slate-400 text-sm">
          © 2025 my blogs — All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Landing;
