import Introduction from "@app/components/sections/services/partials/introduction";
import ServicesList from "@app/components/sections/services/partials/service-list";
import {
  Center,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

function ServicesSection() {
  return (
    <Center
      id="servicos"
      as="section"
      flexDir="column"
      bg="background.600"
      py={["8", "8", "18"]}
    >
      <Container size={["md", "md", "md", "lg"]}>
        <Stack
          direction={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
          ]}
          w="full"
          spacing={["12", "12", "12", "116px"]}
        >
          <ServicesList />
          <Introduction />
        </Stack>
      </Container>
    </Center>
  );
}

export default ServicesSection;
