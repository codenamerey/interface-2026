/**
 * DATA STRUCTURE GUIDE FOR INTERFACE 2026
 * 
 * This directory contains all static content and configuration data for the INTERFACE 2026 website.
 * This structure enables frontend components to render from organized content data instead of 
 * scattered hard-coded text, as requested in the project scope.
 */

/**
 * ========================================
 * FILE OVERVIEW
 * ========================================
 */

/*
1. speakers.js
   - Contains all speaker information
   - Each speaker has: id, name, role, company, topic, image, and pending fields
   - IMPORT IN: Speakers.jsx component
   - PENDING FIELDS: bio, linkedinUrl

2. agenda.js
   - Contains morning and afternoon session schedules
   - Organized by session periods for easy navigation
   - Each event has: id, time, event name, subtitle, icon identifier
   - IMPORT IN: Agenda.jsx component
   - PENDING FIELDS: None - all schedule data is complete

3. venue.js
   - Contains physical and virtual venue information
   - Includes maps embed URL, registration details, and facilities
   - Organized into sections: physical, virtual, registration, facilities
   - IMPORT IN: Venue.jsx component
   - PENDING FIELDS: Multiple facility details, parking, accessibility, wifi, streaming URLs

4. registration.js
   - Contains registration CTA copy and configuration
   - Includes attendance type details and eligibility info
   - Supports environment variable for Luma URL
   - IMPORT IN: Registration.jsx component
   - PENDING FIELDS: Registration details, deadlines, eligibility requirements

5. siteConfig.js
   - Global site-wide configuration and branding
   - Contains social links, colors, SEO metadata, and organizer info
   - Single source of truth for site branding and structure
   - IMPORT IN: Navbar.jsx, Footer.jsx, layout.js, and other layout components
   - PENDING FIELDS: Multiple social links, SEO metadata, analytics IDs

/**
 * ========================================
 * QUICK START - FOR COMPONENT REFACTORING
 * ========================================
 */

// Example: Updating Speakers.jsx to use centralized data

// BEFORE (current hardcoded approach):
// const SPEAKERS = [ { id: 1, name: "...", ... } ]

// AFTER (centralized data approach):
import { speakers } from '@/data/speakers';

export default function Speakers() {
  return (
    <section id="speakers" className="...">
      <div className="...">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker) => (
            // Component JSX using speaker data
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * ========================================
 * MARKING PENDING CONTENT
 * ========================================
 */

/*
All fields that require organizer input are marked with:
  "[PENDING: Description of what is needed]"

EXAMPLES:
  - "[PENDING: Speaker bio and background]"
  - "[PENDING: WiFi network details and login info]"
  - "[PENDING: Google Analytics tracking ID if applicable]"

SEARCHING FOR PENDING FIELDS:
  - Search the files for "[PENDING:" to find all incomplete content
  - Search in terminal: grep -r "PENDING:" src/data/
  - Easy to identify what content organizers still need to supply
*/

/**
 * ========================================
 * KEY BENEFITS OF THIS STRUCTURE
 * ========================================
 */

/*
✓ CENTRALIZED: All content in one clear location
✓ MAINTAINABLE: Update speaker info once, it reflects everywhere
✓ SCALABLE: Easy to add new data types or fields
✓ VISIBILITY: Pending content clearly marked and searchable
✓ COORDINATION: Frontend team can build components independently
✓ NO BACKEND NEEDED: Pure static data, compatible with static Next.js builds
*/

/**
 * ========================================
 * NEXT STEPS FOR THE TEAM
 * ========================================
 */

/*
1. Speakers (Speakers.jsx):
   - Import: import { speakers } from '@/data/speakers'
   - Replace: SPEAKERS array with imported speakers
   - Remove: duplicate hardcoded data from component

2. Agenda (Agenda.jsx):
   - Import: import { morningSession, afternoonSession } from '@/data/agenda'
   - Replace: MORNING and AFTERNOON arrays with imports
   - Remove: duplicate hardcoded data from component

3. Venue (Venue.jsx):
   - Import: import { venueInfo } from '@/data/venue'
   - Extract: physical location from venueInfo.physical
   - Extract: virtual info from venueInfo.virtual
   - Remove: hardcoded values

4. Registration (Registration.jsx):
   - Import: import { registrationConfig } from '@/data/registration'
   - Use: registrationConfig.cta for heading/description/buttonText
   - Note: Luma URL still uses environment variable (NEXT_PUBLIC_LUMA_URL)

5. Navbar/Footer (Navbar.jsx, Footer.jsx):
   - Import: import { siteConfig } from '@/data/siteConfig'
   - Use: siteConfig.social for social links
   - Use: siteConfig.event and siteConfig.organizer for branding

/**
 * ========================================
 * ORGANIZING COMMITTEE TODO
 * ========================================
 */

/*
Search for "[PENDING:" in each file and provide:

SPEAKERS.JS:
  ☐ Speaker bios and backgrounds
  ☐ LinkedIn profile URLs for each speaker

VENUE.JS:
  ☐ Parking information and instructions
  ☐ Accessibility features and accommodations
  ☐ WiFi network details
  ☐ Restroom and facility locations
  ☐ Food/beverage options
  ☐ Facebook Live streaming URL (before event day)
  ☐ Recording URL (after event day)

REGISTRATION.JS:
  ☐ Eligibility requirements
  ☐ Required documents/ID requirements
  ☐ Number of on-site slots available
  ☐ Number of hybrid slots available
  ☐ Registration deadlines
  ☐ Technical requirements for virtual attendees

SITECONFIG.JS:
  ☐ Event tagline/subtitle
  ☐ Exact event date and time
  ☐ Department name
  ☐ Committee contact email and phone
  ☐ Social media URLs (Twitter, Instagram, LinkedIn)
  ☐ Favicon URL
  ☐ SEO meta description
  ☐ SEO keywords
  ☐ Open Graph image URL
  ☐ Google Analytics ID (if using)
  ☐ Facebook Pixel ID (if using)

/**
 * ========================================
 * ENVIRONMENT VARIABLES
 * ========================================
 */

/*
Create or update your .env.local file with:

  NEXT_PUBLIC_LUMA_URL=https://lu.ma/your-event-id

The Registration component will use this environment variable for the Luma link.
NEXT_PUBLIC_ prefix makes it available to the browser.
*/

/**
 * ========================================
 * COMPATIBILITY
 * ========================================
 */

/*
✓ Static Next.js Build: All files are pure JavaScript/JSON
✓ No Database Required: Just import and use
✓ No API Calls: Everything is local
✓ Zero Dependencies: Uses only what's already in the project
✓ Environment Variables: Supported via .env.local
✓ Performance: No runtime overhead vs. hardcoded data
*/
