// usePageTracking.js
import { useLocation } from "react-router-dom";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Trigger the first pageview manually
    TagManager.dataLayer({
      dataLayer: {
        event: "pageview",
        page: window.location.pathname + window.location.search,
      },
    });
  }, [location]);
};
