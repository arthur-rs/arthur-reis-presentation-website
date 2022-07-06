import { Stack, Divider, HStack, Avatar, Flex, Text } from "@chakra-ui/react";

function TestimonialCard() {
  return (
    <Stack
      w="full"
      spacing="6"
      bg="background.400"
      borderRadius="6px"
      p={["6", "6", "12"]}
    >
      <Text>
        &#8220;Entende o que faz, sempre disposto a aprender algo novo.<br/>
        Jovem, mas muito responsável!&#8221;
      </Text>
      <Divider />
      <HStack spacing="3">
        <Avatar name="Fabiano Reis" bg="primary.500" />
        <Flex flexDir="column">
          <Text>Fabiano Reis</Text>
          <Text fontSize="xs" >
            Chefe da{" "}
            <Text as="span" color="primary.500">
              Metrocomm, Asdacomm e Payco
            </Text>
          </Text>
        </Flex>
      </HStack>
    </Stack>
  );
}

export default TestimonialCard;
