import { useEffect } from "react";

export function BotpressChat() {
  useEffect(() => {
    // 1. Inject the Botpress Webchat script
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v5.0/inject.js";
    script1.async = true;
    
    script1.onload = () => {
      // 2. Inject the Botpress config script after the first one loads
      const script2 = document.createElement("script");
      script2.src = "https://files.bpcontent.cloud/2026/08/10/17/20260810173615-SF19BEOA.js";
      script2.defer = true;
      document.body.appendChild(script2);
    };

    document.body.appendChild(script1);

    return () => {
      // Cleanup if the component unmounts (optional, but good practice)
      // Note: Botpress might leave DOM elements behind, but we only load this once at root
    };
  }, []);

  return null; // This component doesn't render any React elements itself
}
