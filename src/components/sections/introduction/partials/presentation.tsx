import { Stack, Text, Heading, Flex } from "@chakra-ui/react";

import CallMeWhatsapp from "@app/components/sections/introduction/partials/call-me-whatsapp";
import Badge from "@app/components/sections/introduction/partials/badge";

function Presentation() {
  return (
    <Stack spacing="12">
      <Stack spacing="6">
        <Badge />
        <Stack spacing="3">
          <Heading as="h1" fontSize={["2xl", "2xl", "3xl"]}>
            Falar é fácil. <br />
            Mostre-me o código.
          </Heading>
          <Flex flexDir="column" >
            <Text opacity={0.65}>Desenvolvo código simple e funcional.</Text>
            <Text opacity={0.65}>E eu amo o que eu faço.</Text>
          </Flex>
        </Stack>
      </Stack>
      <CallMeWhatsapp />
    </Stack>
  );
}

export default Presentation;
