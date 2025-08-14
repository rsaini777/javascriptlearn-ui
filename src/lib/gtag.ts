// Google Analytics utility functions

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID!, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, string | number | boolean | undefined>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track page views
export const trackPageView = (url: string) => {
  pageview(url);
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  event({
    action: 'click',
    category: 'button',
    label: `${buttonName}${location ? ` - ${location}` : ''}`,
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  event({
    action: 'submit',
    category: 'form',
    label: formName,
  });
};

// Track user engagement
export const trackEngagement = (action: string, category: string, label?: string) => {
  event({
    action,
    category,
    label,
  });
};
