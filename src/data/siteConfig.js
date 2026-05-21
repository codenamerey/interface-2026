/**
 * Static site-wide configuration and metadata for INTERFACE 2026
 * 
 * Fields marked with [PENDING: ...] require organizer input
 * Update this file to modify site branding, social links, and global settings
 */

export const siteConfig = {
  // Event branding
  event: {
    name: "INTERFACE 2026",
    tagline: "[PENDING: Event tagline or subtitle]",
    description: "A seminar series bringing together industry professionals and academic experts to discuss the core principles and future of computer engineering.",
    year: 2026,
    date: "[PENDING: Event date - e.g., 'June 15, 2026']",
    time: "[PENDING: Event time - e.g., '09:00 AM - 06:00 PM']",
  },

  // Organizing committee and contact
  organizer: {
    organization: "Polytechnic University of the Philippines",
    college: "College of Engineering and Architecture",
    department: "[PENDING: Department name if applicable]",
    committee: {
      name: "INTERFACE 2026 Organizing Committee",
      email: "[PENDING: Organizing committee email]",
      phone: "[PENDING: Organizing committee phone number]",
    },
    students: {
      section1: "BSCPE Section 4-3",
      section2: "BSCPE Section 4-6",
    },
  },

  // Branding colors (Tailwind/CSS compatible)
  colors: {
    primary: "#0B0409",
    secondary: "#280327",
    accent: {
      pink: "#FF2F8E",
      coral: "#FF5A4F",
      light: "#f2a8c5",
    },
    background: "#220021",
  },

  // Logo and visual assets
  assets: {
    logoUrl: "/interface-logo.png",
    faviconUrl: "[PENDING: Favicon URL]",
  },

  // Social media and contact links
  social: {
    facebook: {
      eventPageUrl: "https://www.facebook.com/share/1BJvTZ1Ndi/",
      orgPageUrl: "https://www.facebook.com/PUPCpEOfficial",
      label: "Follow INTERFACE 2026",
    },
    twitter: {
      url: "[PENDING: Twitter/X handle URL]",
      handle: "[PENDING: @TwitterHandle]",
    },
    instagram: {
      url: "[PENDING: Instagram profile URL]",
      handle: "[PENDING: Instagram handle]",
    },
    linkedin: {
      url: "[PENDING: LinkedIn page URL]",
    },
  },

  // Navigation configuration
  navigation: {
    sections: [
      { id: "about", label: "About" },
      { id: "speakers", label: "Speakers" },
      { id: "agenda", label: "Agenda" },
      { id: "venue", label: "Venue" },
    ],
  },

  // Footer information
  footer: {
    copyright: "© 2026 Organizing Committee.",
    additionalLinks: "[PENDING: Any additional footer links]",
  },

  // SEO and metadata
  seo: {
    title: "INTERFACE 2026 - Computer Engineering Seminar",
    metaDescription: "[PENDING: SEO meta description - 155 characters recommended]",
    keywords: "[PENDING: Comma-separated keywords for SEO]",
    ogImage: "[PENDING: Open Graph image URL for social sharing]",
    twitterCard: "[PENDING: Twitter Card image URL]",
  },

  // Analytics and tracking
  analytics: {
    googleAnalyticsId: "[PENDING: Google Analytics tracking ID if applicable]",
    facebookPixelId: "[PENDING: Facebook Pixel ID if applicable]",
  },
};

export default siteConfig;
