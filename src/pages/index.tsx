import Header from "@app/components/containers/header";
import IntroductionSection from "@app/components/sections/introduction";
import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Desenvolvedor Arthur Reis" />
        <meta property="og:site_name" content="Desenvolvedor Arthur Reis" />
        <meta property="og:url" content="https://arthurreis.dev" />
        <meta
          property="og:description"
          content="Olá, meu nome é Arthur Reis e eu sou desenvolvedor Full-Stack, conheça mais um pouco sobre acessando o meu site."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="" />
        <meta
          name="description"
          content="Olá, meu nome é Arthur Reis e eu sou desenvolvedor Full-Stack, conheça mais um pouco sobre acessando o meu site."
        />
        <title>Desenvolvedor Arthur Reis</title>
      </Head>
      <Header />
      <IntroductionSection />
    </>
  );
}

export default HomePage;
