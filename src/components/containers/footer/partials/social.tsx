import Link from "next/link";

import { Flex, IconButton, List, ListItem } from "@chakra-ui/react";

import GithubIcon from "@app/assets/icons/github.svg";
import WhatsappIcon from "@app/assets/icons/whatsapp.svg";
import FacebookIcon from "@app/assets/icons/facebook.svg";
import InstaramIcon from "@app/assets/icons/instagram.svg";
import LinkedInIcon from "@app/assets/icons/linked-in.svg";

function Social() {
  return (
    <Flex as="nav" justify={["center", "center", "initial"]}>
      <List display="flex">
        <ListItem mr={["3", "3", "3", "6"]}>
          <Link href="https://github.com/arthur-rs" passHref>
            <IconButton
              as="a"
              target="_blank"
              rel="noopener"
              variant="ghost"
              aria-label="Ir para o meu Github"
            >
              <GithubIcon />
            </IconButton>
          </Link>
        </ListItem>
        <ListItem mr={["3", "3", "3", "6"]}>
          <Link href="https://www.linkedin.com/in/arthur-rs/" passHref>
            <IconButton
              as="a"
              target="_blank"
              rel="noopener"
              variant="ghost"
              aria-label="Ir para o meu LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
          </Link>
        </ListItem>
        <ListItem mr={["3", "3", "3", "6"]}>
          <Link
            href="https://www.facebook.com/profile.php?id=100004350649471"
            passHref
          >
            <IconButton
              as="a"
              target="_blank"
              rel="noopener"
              variant="ghost"
              aria-label="Ir para o meu Facebook"
            >
              <FacebookIcon />
            </IconButton>
          </Link>
        </ListItem>
        <ListItem mr={["3", "3", "3", "6"]}>
          <Link href="https://www.instagram.com/arthurreis074/" passHref>
            <IconButton
              as="a"
              target="_blank"
              rel="noopener"
              variant="ghost"
              aria-label="Ir para o meu Instagram"
            >
              <InstaramIcon />
            </IconButton>
          </Link>
        </ListItem>
        <ListItem mr={["3", "3", "3", "6"]}>
          <Link
            href="https://api.whatsapp.com/send?phone=5583988217608&text=Ol%C3%A1%2C%20estou%20interessado%20em%20em%20criar%20um%20projeto%20com%20voc%C3%AA."
            passHref
          >
            <IconButton
              as="a"
              target="_blank"
              rel="noopener"
              variant="ghost"
              aria-label="Ir para o meu WhatsApp"
            >
              <WhatsappIcon />
            </IconButton>
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}

export default Social;
