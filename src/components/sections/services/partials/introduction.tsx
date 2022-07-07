import { Stack, Heading, Text } from "@chakra-ui/react";

function Introduction() {
  return (
    <Stack spacing="3">
      <Text opacity={0.65}>Introdução</Text>
      <Stack spacing="6">
        <Heading as="h2">Óla! O meu nome é Arthur Reis</Heading>
        <Stack spacing="3">
          <Text fontSize="lg" fontStyle="italic">
            Sempre pronto para tirar o seu projeto do papel.
          </Text>
          <Text fontSize="sm" opacity={0.65}>
            Vou dar o meu melhor em seus projetos, com atenção aos
            detalhes e na qualidade geral do código e da infraestrutura, sempre
            utilizando as melhores práticas de programação, como SOLID e
            hexagonal architecture com o intuito de entregar o melhor resultado
            final, para assim então alavancar os seus projetos.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Introduction;
