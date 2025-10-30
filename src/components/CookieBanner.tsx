import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "cookie_consent_v1";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      setVisible(v !== "accepted");
    } catch (e) { void e; }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch (e) { void e; }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 z-[100] px-4">
      <div className="mx-auto max-w-3xl rounded-2xl border bg-card shadow-xl p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="text-sm text-muted-foreground">
          We use cookies to improve your experience and analyze site performance. Read our
          {" "}
          <a className="text-primary hover:underline" href="/cookie">Cookie Policy</a>
          {" "}and
          {" "}
          <a className="text-primary hover:underline" href="/privacy">Privacy Policy</a>.
        </div>
        <div className="flex gap-3 sm:ml-auto">
          <a href="/cookie" className="text-sm underline text-muted-foreground">Manage</a>
          <Button className="gradient-primary" size="sm" onClick={accept}>Accept</Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
