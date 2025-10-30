import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cookie as CookieIcon } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const Cookie = () => {
  useSEO({
    title: "Cookie Policy — Blog Keeper",
    description: "Learn how Blog Keeper uses cookies and how you can control them.",
    url: "https://blogkeeper.site/cookie"
  });
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We use cookies to improve your experience and analyze site performance.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <CookieIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Types of Cookies</h2>
              </div>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Essential cookies for core functionality</li>
                <li>Analytics cookies to understand usage</li>
                <li>Preference cookies to remember settings</li>
              </ul>
              <h3 className="text-xl font-semibold">Managing Cookies</h3>
              <p className="text-muted-foreground">You can control cookies in your browser settings. Disabling some may affect site functionality.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cookie;
