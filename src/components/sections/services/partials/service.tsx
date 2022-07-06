import { Stack, Flex, Text } from "@chakra-ui/react";

export type ServiceProps = {
  title: string;
  description: string;
  icon: React.FunctionComponent;
};

function Service({ title, description, icon: Icon }: ServiceProps) {
  return (
    <Stack
      w={["full", "full", "526px"]}
      bg="background.500"
      p="6"
      borderRadius="6px"
      transition="shadow .2s, transform .2s"
      _hover={{ shadow: "lg", transform: "scale(1.05)" }}
    >
      <Flex w="full" justify="space-between">
        <Text fontSize="lg" color="primary.500">
          {title}
        </Text>
        <Text>
          <Icon />
        </Text>
      </Flex>
      <Text fontSize="xs" opacity={0.65}>
        {description}
      </Text>
    </Stack>
  );
}

export default Service;
