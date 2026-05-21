/**
 * Static venue and access information for INTERFACE 2026
 * 
 * Fields marked with [PENDING: ...] require organizer input
 * Update this file to modify venue details across all components
 */

export const venueInfo = {
  // Physical venue details
  physical: {
    location: "CEA Room 315",
    description: "State-of-the-art environment for physical networking and collaborative learning sessions.",
    address: "Polytechnic University of the Philippines - College of Engineering and Architecture",
    city: "Manila",
    country: "Philippines",
    coordinates: {
      latitude: 14.598994500000002,
      longitude: 121.00538239999997,
    },
    // Google Maps embed URL - already configured
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.0014260670996!2d121.00538239999997!3d14.598994500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9e67d3d0725%3A0x2160f756c20106e1!2sPolytechnic%20University%20of%20the%20Philippines%20-%20College%20of%20Engineering%20and%20Architecture!5e0!3m2!1sen!2sph!4v1779174765173!5m2!1sen!2sph",
    parking: "[PENDING: Parking information and instructions]",
    accessibility: "[PENDING: Accessibility features and accommodations]",
  },

  // Virtual/Hybrid access details
  virtual: {
    enabled: true,
    platform: "Facebook Live",
    description: "The Facebook Live link will be broadcasted and shared through our Facebook Page.",
    liveStreamUrl: "[PENDING: Facebook Live stream URL - will be provided on event day]",
    recordingUrl: "[PENDING: Recording URL - will be available after event]",
  },

  // Registration and entry
  registration: {
    onSiteRegistration: true,
    registrationStartTime: "09:00 AM",
    registrationEndTime: "09:45 AM",
    requirements: "[PENDING: Required documents or ID for registration]",
  },

  // Additional venue info
  facilities: {
    wifi: "[PENDING: WiFi network details and login info]",
    restrooms: "[PENDING: Restroom locations and facilities]",
    cafeteria: "[PENDING: Food and beverage options available]",
    seating: "[PENDING: Seating capacity and arrangement]",
  },
};

export default venueInfo;
