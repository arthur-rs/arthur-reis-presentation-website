import {
  Center,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

import TestimonialCard from "@app/components/sections/testimonials/partials/testimonial-card";

function TestimonialsSection() {
  return (
    <Center
      id="depoimentos"
      as="section"
      bg="background.500"
      py={["8", "8", "18"]}
    >
      <Container size="md">
        <Stack w="full" spacing={["8", "8", "12"]}>
          <Stack
            w="full"
            direction={["column", "column", "row"]}
            spacing={["3", "3", "12"]}
            align="baseline"
          >
            <Heading fontWeight="normal" fontSize="lg">
              Depoimentos
            </Heading>
            <Text fontSize="xs" opacity={0.65}>
              Opinião dos clientes sobre o meu trabalho.
            </Text>
          </Stack>
          <TestimonialCard />
        </Stack>
      </Container>
    </Center>
  );
}

export default TestimonialsSection;
