/**
 * Static registration and CTA data for INTERFACE 2026
 * 
 * Fields marked with [PENDING: ...] require organizer input
 * Update this file to modify registration details across all components
 */

export const registrationConfig = {
  // Registration platform configuration
  platform: "Luma",
  
  // Luma registration URL (loaded from env var: NEXT_PUBLIC_LUMA_URL)
  // Fallback URL if env var is not set
  lumaUrlFallback: "https://lu.ma",
  
  // CTA Button text and copy
  cta: {
    heading: "Ready to Secure Your Slot?",
    description: "Attendance management is strictly handled through the Luma infrastructure. Verify your eligibility and secure your hybrid or on-site allocation below.",
    buttonText: "Register now on Luma",
    buttonAriaLabel: "Open Luma registration page in new tab",
  },

  // Registration requirements and info
  eligibility: {
    targetAudience: "[PENDING: Who is eligible to attend? (e.g., students, professionals, etc.)]",
    requirementsList: "[PENDING: List of requirements or prerequisites]",
  },

  // Attendance types
  attendanceTypes: {
    onsite: {
      name: "On-Site",
      description: "Physical attendance at CEA Room 315, PUP Manila",
      slots: "[PENDING: Number of on-site slots available]",
      requirements: "[PENDING: Any special requirements for on-site attendees]",
    },
    hybrid: {
      name: "Hybrid",
      description: "Attend physically or join virtually via Facebook Live",
      slots: "[PENDING: Number of hybrid slots available]",
      requirements: "[PENDING: Any special requirements for hybrid attendees]",
    },
    virtual: {
      name: "Virtual",
      description: "Join remotely via Facebook Live stream",
      slots: "Unlimited",
      requirements: "[PENDING: Technical requirements for virtual attendees]",
    },
  },

  // Registration deadlines
  deadlines: {
    earlyBird: "[PENDING: Early bird registration deadline]",
    regular: "[PENDING: Regular registration deadline]",
    lateRegistration: "[PENDING: Late registration deadline or cutoff date]",
  },

  // Additional registration info
  additionalInfo: "[PENDING: Any additional registration information or notes]",
};

export default registrationConfig;
