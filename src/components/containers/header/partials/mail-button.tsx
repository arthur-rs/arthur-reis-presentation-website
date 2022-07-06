import { useCallback } from "react";
import Link from "next/link";

import { logEvent, getAnalytics } from "firebase/analytics";
import { app } from "@app/providers/firebase";

import { IconButton } from "@chakra-ui/react";

import MailIcon from "@app/assets/icons/mail.svg";

function MailButton() {
  const handleHoverButton = useCallback(() => {
    const analytics = getAnalytics(app);
    logEvent(analytics, "hover_github");
  }, []);

  const handleClickButton = useCallback(() => {
    const analytics = getAnalytics(app);
    logEvent(analytics, "click_github");
  }, []);

  return (
    <Link href="mailto:contato@arthurreis.dev" passHref>
      <IconButton
        as="a"
        variant="ghost"
        aria-label="Enviar um E-mail"
        onMouseEnter={handleHoverButton}
        onClick={handleClickButton}
      >
        <MailIcon />
      </IconButton>
    </Link>
  );
}

export default MailButton;
