import { useEffect } from "react";

import { logEvent, getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import { app } from "@app/providers/firebase";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { ChakraProvider } from "@chakra-ui/react";

import Theme from "@app/constants/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const routers = useRouter();

  useEffect(() => {
    getPerformance(app);

    const logUrlEvent = (url: string) => {
      const analytics = getAnalytics(app);
      logEvent(analytics, "screen_name", {
        firebase_screen: url,
      });
    };

    routers.events.on("routeChangeComplete", logUrlEvent);
    logUrlEvent(window.location.pathname);

    return () => {
      routers.events.off("routeChangeComplete", logUrlEvent);
    };
  }, [routers.events]);

  return (
    <ChakraProvider theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
