import { Link } from "react-router-dom";
import { Sparkles, Briefcase, Laptop, Camera } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Terms", path: "/terms" },
  ];

  const categories = [
    { name: "Technology", path: "/blogs?category=technology" },
    { name: "Development", path: "/blogs?category=development" },
    { name: "Lifestyle", path: "/blogs?category=lifestyle" },
    { name: "Design", path: "/blogs?category=design" },
    { name: "Sports", path: "/blogs?category=sports" },
    { name: "News", path: "/blogs?category=news" },
  ];

  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                <span className="text-lg font-bold text-white">C</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CognitHub
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              CognitHub shares insights on tech, lifestyle, and development. Learn, explore, and grow with curated content.
            </p>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                <Laptop className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
                <Camera className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.path}>
                  <Link
                    to={category.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025{" "}
            <Link to="/" className="text-primary hover:underline">
              CognitHub
            </Link>{" "}
            — All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
