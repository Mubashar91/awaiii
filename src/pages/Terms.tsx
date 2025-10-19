import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Shield, Cookie } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20 animate-fade-in">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Policies</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding how we protect and respect your information
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Terms of Service */}
              <div className="animate-slide-up">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Terms of Service</h2>
                </div>
                <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
                  <p>
                    Welcome to CognitHub. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Use of Content</h3>
                  <p>
                    All content on CognitHub, including articles, images, and design elements, is protected by copyright. You may read and share our articles, but reproduction without permission is prohibited.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">User Conduct</h3>
                  <p>
                    Users must not engage in any activity that disrupts or interferes with our services. This includes attempting to access unauthorized areas or distributing harmful content.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Liability</h3>
                  <p>
                    While we strive for accuracy, CognitHub is not liable for any errors or omissions in our content. Information is provided "as is" without warranties of any kind.
                  </p>
                </div>
              </div>

              {/* Privacy Policy */}
              <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Privacy Policy</h2>
                </div>
                <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
                  <p>
                    At CognitHub, we are committed to protecting your privacy and ensuring the security of your personal information.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Information We Collect</h3>
                  <p>
                    We may collect email addresses when you subscribe to our newsletter and analytical data about your visit to improve our services.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How We Use Your Information</h3>
                  <p>
                    Your information is used solely to provide you with content updates and improve your browsing experience. We never sell or share your personal data with third parties for marketing purposes.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Data Security</h3>
                  <p>
                    We implement industry-standard security measures to protect your information from unauthorized access, disclosure, or destruction.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Your Rights</h3>
                  <p>
                    You have the right to access, modify, or delete your personal information at any time. Contact us to exercise these rights.
                  </p>
                </div>
              </div>

              {/* Cookie Policy */}
              <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                    <Cookie className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Cookie Policy</h2>
                </div>
                <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
                  <p>
                    CognitHub uses cookies to enhance your browsing experience and understand how you interact with our website.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What Are Cookies?</h3>
                  <p>
                    Cookies are small text files stored on your device that help us remember your preferences and improve our services.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Types of Cookies We Use</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Managing Cookies</h3>
                  <p>
                    You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect website functionality.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border animate-fade-in">
                <h3 className="text-xl font-bold mb-3">Questions About Our Policies?</h3>
                <p className="text-muted-foreground mb-4">
                  If you have any questions or concerns about our terms and policies, please don't hesitate to reach out.
                </p>
                <a href="/contact" className="text-primary hover:underline font-medium">
                  Contact Us →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
