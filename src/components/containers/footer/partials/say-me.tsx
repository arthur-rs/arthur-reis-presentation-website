import { Stack, Text } from "@chakra-ui/react";

function SayMe() {
  return (
    <Stack spacing="12" w={["full", "full", "433px"]}>
      <Text fontSize={["xl", "xl", "2xl"]}>
        Vamos juntos fazer algo{" "}
        <Text as="strong" color="primary.500">
          incrível
        </Text>
        .
      </Text>
      <Text fontSize={["lg", "lg", "2xl"]}>
        Comece me mandando um{" "}
        <Text as="strong" color="primary.500">
          oi
        </Text>
        !
      </Text>
    </Stack>
  );
}

export default SayMe;
