import { Flex, Text } from "@chakra-ui/react";

function Badge() {
  return (
    <Flex p="1.5" bg="primary.500" borderRadius="3px" w="fit-content">
      <Text color="background.600" fontSize="xs" fontWeight="medium">
        Desenvolvedor Full-Stack
      </Text>
    </Flex>
  );
}

export default Badge;
