import Head from "next/head";

import Footer from "@app/components/containers/footer";
import Header from "@app/components/containers/header";
import IntroductionSection from "@app/components/sections/presentation";
import ServicesSection from "@app/components/sections/services";
import TestimonialsSection from "@app/components/sections/testimonials";

function HomePage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Desenvolvedor Arthur Reis" />
        <meta property="og:site_name" content="Desenvolvedor Arthur Reis" />
        <meta property="og:url" content="https://arthurreis.dev" />
        <meta
          property="og:description"
          content="Olá, meu nome é Arthur Reis e eu sou desenvolvedor Full-Stack, conheça mais um pouco sobre min acessando o meu site."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="/og-image.png" />
        <meta
          name="description"
          content="Olá, meu nome é Arthur Reis e eu sou desenvolvedor Full-Stack, conheça mais um pouco sobre min acessando o meu site."
        />
        <title>Desenvolvedor Arthur Reis</title>
      </Head>
      <Header />
      <IntroductionSection />
      <ServicesSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}

export default HomePage;
