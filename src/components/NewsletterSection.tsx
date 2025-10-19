import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <section className="py-16 gradient-hero animate-fade-in">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Subscribe to Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Newsletter</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get the latest articles, updates, and tips straight to your inbox.
        </p>
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-2">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Enter your Gmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 h-12"
              required
            />
          </div>
          <Button type="submit" size="lg" className="gradient-primary px-8">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
