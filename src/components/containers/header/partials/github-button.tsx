import NextLink from "next/link";

import { HStack, Text } from "@chakra-ui/react";

import GithubIcon from "@app/assets/icons/github.svg";

function GithubButton() {
  return (
    <NextLink href="https://github.com/arthur-rs" passHref>
      <HStack
        as="a"
        spacing="3"
        target="__blank"
        aria-label="Ir para o meu Github."
        transition="all .2s"
        _hover={{ opacity: 0.6 }}
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
