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
            Vou entregar o melhor de min pra o seu projeto, com atenção aos
            detalhes e na qualidade geral do código e da infraestrutura, sempre
            utilizando as melhores praticas de programação, como SOLID e
            hexagonal architecture com o intuito de entregar o melhor resultado
            final para alavancar o seu projeto.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Introduction;
