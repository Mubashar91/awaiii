import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const Privacy = () => {
  useSEO({
    title: "Privacy Policy — Blog Keeper",
    description: "How Blog Keeper collects, uses, and protects your information.",
    url: "https://blogkeeper.site/privacy"
  });
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Your privacy matters. This page explains what data we collect and how we use it.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">Overview</h2>
              </div>
              <p className="text-muted-foreground">We collect minimal data necessary to operate and improve Blog Keeper, such as analytics and newsletter subscriptions if you opt in. We do not sell personal data.</p>
              <h3 className="text-xl font-semibold">Information We Collect</h3>
              <p className="text-muted-foreground">Contact information you choose to submit, and aggregated analytics to understand site usage.</p>
              <h3 className="text-xl font-semibold">How We Use Information</h3>
              <p className="text-muted-foreground">To deliver content, respond to inquiries, improve site experience, and send optional updates you request.</p>
              <h3 className="text-xl font-semibold">Your Choices</h3>
              <p className="text-muted-foreground">You can request access or deletion of your personal data by contacting us at contact@blogkeeper.site.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
