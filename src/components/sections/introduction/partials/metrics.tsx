import { HStack, Stack, Text } from "@chakra-ui/react";

function Metrics() {
  return (
    <HStack spacing="12">
      <HStack>
        <Text fontSize="4xl" fontWeight="medium">
          2
        </Text>
        <Stack>
          <Text fontSize="xs" opacity={0.6}>
            Anos de <br />
            experiencia
          </Text>
        </Stack>
      </HStack>
      <HStack>
        <Text fontSize="4xl" fontWeight="medium">
          3
        </Text>
        <Stack>
          <Text fontSize="xs" opacity={0.6}>
            Projetos <br />
            concluídos
          </Text>
        </Stack>
      </HStack>
    </HStack>
  );
}

export default Metrics;
