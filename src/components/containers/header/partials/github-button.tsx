import { useCallback } from "react";

import NextLink from "next/link";

import { logEvent, getAnalytics } from "firebase/analytics";
import { app } from "@app/providers/firebase";

import { HStack, Text } from "@chakra-ui/react";

import GithubIcon from "@app/assets/icons/github.svg";

function GithubButton() {
  const handleHoverButton = useCallback(() => {
    const analytics = getAnalytics(app);
    logEvent(analytics, "hover_github");
  }, []);

  const handleClickButton = useCallback(() => {
    const analytics = getAnalytics(app);
    logEvent(analytics, "click_github");
  }, []);

  return (
    <NextLink href="https://github.com/arthur-rs" passHref>
      <HStack
        as="a"
        spacing="3"
        target="_blank"
        rel="noopener"
        aria-label="Ir para o meu Github."
        transition="all .2s"
        _hover={{ opacity: 0.6 }}
        onMouseEnter={handleHoverButton}
        onClick={handleClickButton}
      >
        <GithubIcon />
        <Text display={["initial", "initial", "none", "initial"]} fontSize="sm">
          Github
        </Text>
      </HStack>
    </NextLink>
  );
}

export default GithubButton;
