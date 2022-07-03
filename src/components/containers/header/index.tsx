import { useRef } from "react";

import { Center, Container, HStack } from "@chakra-ui/react";

import NavigationList from "@app/components/containers/header/partials/navigation-list";
import GithubButton from "@app/components/containers/header/partials/github-button";
import MailButton from "@app/components/containers/header/partials/mail-button";
import Logo from "@app/components/containers/header/partials/logo";
import MenuButton from "@app/components/containers/header/partials/menu-button";
import DrawerMenu, {
  DrawerMenuHandlers,
} from "@app/components/containers/header/partials/drawer-menu";

function Header() {
  const drawerRef = useRef<DrawerMenuHandlers>(null);

  return (
    <>
      <DrawerMenu ref={drawerRef} />
      <Center as="header" bg="background.500" h="24">
        <Container justifyContent="space-between">
          <HStack spacing={["0", "0", "12", "18"]}>
            <Logo />
            <NavigationList display={["none", "none", "flex"]} />
          </HStack>
          <HStack
            display={["none", "none", "flex"]}
            spacing={["0", "0", "6", "12"]}
          >
            <GithubButton />
            <MailButton />
          </HStack>
          <MenuButton onClick={() => drawerRef.current?.open()} />
        </Container>
      </Center>
    </>
  );
}

export default Header;
