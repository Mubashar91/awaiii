import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Link2, Mail } from "lucide-react";
import { toast } from "sonner";

interface ShareButtonsProps {
  title: string;
  url: string;
}

const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : url;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copied to clipboard!");
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl)}`
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground">Share:</span>
      <div className="flex gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 hover:bg-blue-50 hover:text-blue-600"
          onClick={() => window.open(shareLinks.twitter, '_blank')}
        >
          <Twitter className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 hover:bg-blue-50 hover:text-blue-700"
          onClick={() => window.open(shareLinks.facebook, '_blank')}
        >
          <Facebook className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 hover:bg-blue-50 hover:text-blue-600"
          onClick={() => window.open(shareLinks.linkedin, '_blank')}
        >
          <Linkedin className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 hover:bg-gray-50 hover:text-gray-700"
          onClick={() => window.open(shareLinks.email)}
        >
          <Mail className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 hover:bg-primary/10 hover:text-primary"
          onClick={copyToClipboard}
        >
          <Link2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ShareButtons;
