import Link from "next/link";

import { IconButton } from "@chakra-ui/react";

import MailIcon from "@app/assets/icons/mail.svg";

function MailButton() {
  return (
    <Link href="mailto:arthurreis074@gmail.com" passHref>
      <IconButton as="a" variant="ghost" aria-label="Enviar um E-mail">
        <MailIcon />
      </IconButton>
    </Link>
  );
}

export default MailButton;