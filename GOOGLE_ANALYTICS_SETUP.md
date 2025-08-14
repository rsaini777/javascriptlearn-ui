# Google Analytics Setup Guide

This project has been configured with Google Analytics 4 (GA4) integration.

## Setup Steps

### 1. Get Your Google Analytics Tracking ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or select an existing one
3. Go to Admin → Data Streams → Web
4. Create a new web stream or select existing one
5. Copy your Measurement ID (starts with "G-")

### 2. Set Environment Variable

Create a `.env.local` file in your project root and add:

```bash
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual tracking ID.

### 3. Restart Your Development Server

After adding the environment variable, restart your development server:

```bash
npm run dev
```

## Usage

### Automatic Tracking

The following events are automatically tracked:
- Page views
- Basic user interactions

### Manual Event Tracking

You can track custom events using the utility functions:

```typescript
import { trackButtonClick, trackFormSubmission, trackEngagement } from '@/lib/gtag';

// Track button clicks
trackButtonClick('Sign Up Button', 'Header');

// Track form submissions
trackFormSubmission('Contact Form');

// Track custom engagement
trackEngagement('video_play', 'content', 'tutorial_video');
```

### Available Functions

- `trackButtonClick(buttonName, location?)` - Track button clicks
- `trackFormSubmission(formName)` - Track form submissions
- `trackEngagement(action, category, label?)` - Track custom engagement
- `trackEvent(eventName, parameters?)` - Track custom events
- `trackPageView(url)` - Track page views

## Testing

1. Open your website
2. Open Google Analytics Real-Time reports
3. Perform actions on your site
4. Check if events appear in real-time

## Privacy Considerations

- Ensure compliance with GDPR/CCPA if applicable
- Consider adding a cookie consent banner
- Review Google Analytics data retention settings

## Troubleshooting

- Make sure your tracking ID is correct
- Check browser console for any errors
- Verify the environment variable is loaded
- Ensure you're not blocking analytics in development
