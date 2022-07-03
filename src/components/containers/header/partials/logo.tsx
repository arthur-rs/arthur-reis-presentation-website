import { Flex, Text } from "@chakra-ui/react";

function Logo() {
  return (
    <Flex
      userSelect="none"
      color="primary.500"
      transition="all .2s ease-in-out"
      cursor="default"
      fontSize={["lg", "lg", "md"]}
      _hover={{
        ".bracket-left": {
          transform: "translateX(-2px)",
        },
        ".bracket-right": {
          transform: "translateX(2px)",
        },
      }}
    >
      <Text as="span" className="bracket-left" transition="all .2s ease-in-out">
        &lt;
      </Text>
      <Text as="span">Arthur Reis</Text>
      <Text
        as="span"
        className="bracket-right"
        transition="all .2s ease-in-out"
      >
        /&gt;
      </Text>
    </Flex>
  );
}

export default Logo;
