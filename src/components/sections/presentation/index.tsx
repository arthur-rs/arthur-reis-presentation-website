import {
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

import Presentation from "@app/components/sections/presentation/partials/presentation";
import TechnologySkill from "@app/components/sections/presentation/partials/technology-skill";
import Technologies from "@app/components/sections/presentation/partials/technologies";
import Metrics from "@app/components/sections/presentation/partials/metrics";

function IntroductionSection() {
  return (
    <Center
      as="section"
      flexDir="column"
      bg="background.500"
      py={["8", "8", "18"]}
    >
      <Container size="md">
        <Flex
          flexDir={["column", "column", "column", "row"]}
          w="full"
          justify="space-between"
        >
          <Presentation />
          <Technologies />
        </Flex>
      </Container>
      <Container justifyContent="flex-start" size="md" mt={["8", "8", "18"]}>
        <Metrics />
      </Container>
    </Center>
  );
}

export default IntroductionSection;
