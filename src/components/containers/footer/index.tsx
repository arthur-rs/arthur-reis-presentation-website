import { Center, Container, Flex, HStack, Stack, Text } from "@chakra-ui/react";

import SayMe from "@app/components/containers/footer/partials/say-me";
import Information from "@app/components/containers/footer/partials/information";
import Logo from "@app/components/containers/header/partials/logo";
import Social from "@app/components/containers/footer/partials/social";

function Footer() {
  return (
    <Center
      id="contato"
      as="footer"
      flexDir="column"
      bg="background.600"
      py={["8", "8", "18"]}
    >
      <Container justifyContent="space-between" size={["md", "md", "md", "lg"]}>
        <Flex
          direction={["column", "column", "column", "row"]}
          w="full"
          justify="space-between"
        >
          <SayMe />
          <Information />
        </Flex>
      </Container>
      <Container
        justifyContent="space-between"
        mt="12"
        size={["md", "md", "md", "lg"]}
      >
        <Stack
          direction={["column", "column", "column", "row"]}
          w="full"
          justify="space-between"
          align="center"
          spacing={["6", "6", "6", "0"]}
        >
          <Stack
            direction={["column", "column", "row"]}
            spacing={["3", "3", "12"]}
            align="center"
          >
            <Logo />
            <Text as="small" fontSize="xs" opacity={0.65}>
              &copy; 2022 - Todos os direitos reservados.
            </Text>
          </Stack>
          <Social />
        </Stack>
      </Container>
    </Center>
  );
}

export default Footer;
