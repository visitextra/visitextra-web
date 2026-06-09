# Mobile Travel Companion Website Development Project

The project name is VisitExtra. The primary objective is to design a professional, modern, and engaging "Coming Soon" landing page website for a mobile application currently under development and soon to be launched. The website's purpose is to generate interest among potential users and business partners pre-launch, collect email newsletter subscribers, and establish brand awareness.

The primary goals of the website are:

- To build brand awareness and anticipation before the official launch.
- To capture email leads from potential users and business partners.
- To showcase the upcoming mobile app's features and interface.

Design Philosophy: The design must be "mobile-centric," explicitly emphasizing that the core product is a mobile application. Themes of trust, technology, comfort, and professionalism should be paramount.
Color Palette:

- Primary Background & Dark Theme Color (Midnight Blue): #0e223a
- Accent & Button Color (Golden Yellow): #f1cc3e
- Text & Card Background Colors: White (#FFFFFF) and light grey tones.
  Typography: Utilize a highly legible, modern, and elegant sans-serif font family (e.g., Montserrat, Lato, Poppins).

The website must support three languages: Turkish (TR), English (EN), and Arabic (AR). A prominent language selector menu must be designed in the header for easy switching.
The website must clearly state that the application will be available on iOS, Android, and Huawei platforms. Include the respective marketplace logos accompanied by "Coming Soon" or "Available Soon" text.

The website structure should include:

- HEADER:
  - Left: VisitExtra Logo.
  - Center: Navigation menu: Homepage | About Us | Partnership Opportunities | FAQ | Contact.
  - Right: Language Selector Menu (TR/EN/AR).
- HOMEPAGE:
  - Hero Section: A high-resolution, professional image depicting a modern car interior or a nighttime city skyline, evoking trust and technology.
  - Main Headline: "Redefining Personalized Travel Experience"
  - Sub-headline: "Find your reliable private driver with VisitExtra and enjoy your journey. Coming very soon!"
  - Button: An eye-catching button labeled "Stay Updated."
  - Mobile App Introduction Section: Showcase the provided mobile application screenshots within modern phone mockups.
  - Platform Logos: Include the respective app store logos along with text such as "Coming Soon to App Store, Google Play, and AppGallery."
  - Features Section: Design four distinct cards, each featuring an icon and a brief description highlighting a key benefit:
    - Verified Driver Profiles
    - Seamless In-App Communication
    - Flexible & Diverse Options
    - Multi-lingual Support
  - Partnership Opportunities Section: Headline: "Value-Adding Solutions for Hotels & Travel Agencies"
  - "Become a Driver, Boost Your Earnings" Section: A call to action targeted at professional drivers.
- ABOUT US PAGE: Provide detailed information about VisitExtra's mission, vision, and establishment purpose.
- PARTNERSHIP OPPORTUNITIES PAGE: Detail the future partnership models:
  - Client Referrals
  - In-App Promotion
  - Special Agreements
  - Include a contact form specifically for partnership inquiries, and list the email address bilgi@visitextra.com and phone number +90 532 789 4347.
- FAQ PAGE: Craft questions and answers appropriate for a "coming soon" application:
  - Q: What is VisitExtra, and when will it be available?
  - Q: On which mobile platforms will the app be launched?
  - Q: How can I join as a driver?
  - Q: How can my hotel or agency partner with VisitExtra?
- CONTACT PAGE: A general contact form for inquiries (Name, Email, Message). Contact information: bilgi@visitextra.com.
- FOOTER:
  - Email Newsletter Subscription: Headline: "Be the First to Hear All the News!" Description: "Subscribe to not miss our launch date, special offers, and new features."
  - Section 2: Site Map & Social Media: Quick links and social media icons.
  - Section 3: Copyright: Text: " 2025 VisitExtra. All Rights Reserved."

Made with QataSoft.

# Instructions

For security reasons, the `env.json` file is not pre-populated — you will need to generate or retrieve the values yourself.

For **JWT secrets**, generate a value with:

```
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Then paste the generated value into the appropriate field.

For the **QataSoft Database**, download your database content as a pg_dump from the cog icon in the database view (right pane -> data -> QataSoft data base -> cog icon on the left of the name), upload it to your own PostgreSQL database, and then fill in the connection string value.

**Note:** QataSoft OAuth will not work in self-hosted environments.

For other external services, retrieve your API keys and fill in the corresponding values.

Once everything is configured, you can build and start the service with:

```
npm install -g pnpm
pnpm install
pnpm vite build
pnpm tsx server.ts
```
