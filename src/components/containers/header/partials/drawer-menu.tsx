import { forwardRef, Ref, useImperativeHandle } from "react";

import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  IconButton,
} from "@chakra-ui/react";

import CloseIcon from "@app/assets/icons/close.svg";

import Logo from "@app/components/containers/header/partials/logo";
import GithubButton from "@app/components/containers/header/partials/github-button";
import MailButton from "@app/components/containers/header/partials/mail-button";
import NavigationList from "@app/components/containers/header/partials/navigation-list";

export type DrawerMenuHandlers = {
  open(): void;
};

function DrawerMenu(_props: any, ref: Ref<DrawerMenuHandlers>) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useImperativeHandle(ref, () => ({
    open() {
      onOpen();
    },
  }));

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay transition=".2s" backdropFilter="blur(2px)" />
      <DrawerContent bg="background.500">
        <DrawerHeader
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
          fontWeight="normal"
          p="6"
        >
          <Logo />
          <IconButton
            variant="ghost"
            aria-label="Fechar menu hambúrguer"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </DrawerHeader>

        <DrawerBody p="6">
          <NavigationList />
        </DrawerBody>

        <DrawerFooter justifyContent="space-between" p="6">
          <GithubButton />
          <MailButton />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default forwardRef(DrawerMenu);
