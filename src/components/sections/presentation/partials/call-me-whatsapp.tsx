import NextLink from "next/link";

import { logEvent, getAnalytics } from "firebase/analytics";
import { app } from "@app/providers/firebase";

import { Link } from "@chakra-ui/react";
import { useCallback } from "react";

const URL = `https://api.whatsapp.com/send?phone=5583988217608&text=Ol%C3%A1%2C%20estou%20interessado%20em%20em%20criar%20um%20projeto%20com%20voc%C3%AA.`;

function CallMeWhatsapp() {
  const handleHoverButton = useCallback(() => {
    const analytics = getAnalytics(app);
    logEvent(analytics, "hover_whatsapp_button");
  }, []);

  const handleClickButton = useCallback(() => {
    const analytics = getAnalytics(app);
    logEvent(analytics, "click_whatsapp_button");
  }, []);

  return (
    <NextLink href={URL} passHref>
      <Link
        variant="emphasis"
        onClick={handleClickButton}
        onMouseEnter={handleHoverButton}
      >
        CHAME-ME NO WHATSAPP
      </Link>
    </NextLink>
  );
}

export default CallMeWhatsapp;
