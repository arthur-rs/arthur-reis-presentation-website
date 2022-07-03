import NextLink from "next/link";

import { Link } from "@chakra-ui/react";

const URL = `https://api.whatsapp.com/send?phone=5583988217608&text=Ol%C3%A1%2C%20estou%20interessado%20em%20em%20criar%20um%20projeto%20com%20voc%C3%AA.`

function CallMeWhatsapp() {
  return (
    <NextLink href={URL} passHref>
      <Link variant="emphasis">CHAME-ME NO WHATSAPP</Link>
    </NextLink>
  );
}

export default CallMeWhatsapp;
