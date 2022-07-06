import Head from "next/head";
import NextLink from "next/link";

import { Center, Heading, Link, Stack, Text } from "@chakra-ui/react";

function NotFoundPage() {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Página Não encontrada | Desenvolvedor Arthur Reis"
        />
        <meta
          property="og:site_name"
          content="Página Não encontrada | Desenvolvedor Arthur Reis"
        />
        <meta property="og:url" content="https://arthurreis.dev" />
        <meta
          property="og:description"
          content="Parece que você tentou encontrar uma página que não existe."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="/og-image.png" />
        <meta
          name="description"
          content="Parece que você tentou encontrar uma página que não existe."
        />
        <title>Página Não encontrada | Desenvolvedor Arthur Reis</title>
      </Head>
      <Center bg="background.600" h="100vh">
        <Stack w="lg" align="center" spacing="12">
          <Heading textAlign="center">Página não encontrada.</Heading>
          <Text textAlign="center">
            Parece que você tentou encontrar uma página que não existe, mas tudo
            bem, clique no link abaixo para voltar para a página inicial
          </Text>
          <NextLink href="/" passHref>
            <Link>Ir para a Página inicial</Link>
          </NextLink>
        </Stack>
      </Center>
    </>
  );
}

export default NotFoundPage;
