import { Stack, Flex, Text } from "@chakra-ui/react";

import Link from "next/link";

import NavigationList from "@app/components/containers/footer/partials/navigation-list";

function Information() {
  return (
    <Stack spacing="6" fontWeight="normal" mt={["12", "12", "0"]}>
      <Text opacity={0.65} fontSize="sm">
        Informações
      </Text>
      <Flex flexDir="column">
        <Text as="address" opacity={0.65} fontWeight="light" fontSize={["sm", "sm", "md"]}>
          João Pessoa - PB, Brasil.
        </Text>
        <Link href="mailto:contato@arthurreis.dev" passHref>
          <Text as="a" fontSize={["lg", "lg", "2xl"]}>
            contato@arthurreis.dev
          </Text>
        </Link>
      </Flex>
      <NavigationList />
    </Stack>
  );
}

export default Information;
