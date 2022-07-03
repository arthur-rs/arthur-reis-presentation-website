import { ButtonProps, IconButton } from "@chakra-ui/react";

import MenuIcon from "@app/assets/icons/menu.svg";

function MenuButton(props: ButtonProps) {
  return (
    <IconButton
      display={["flex", "flex", "none", "none"]}
      variant="ghost"
      aria-label="Abrir menu hambúrguer"
      {...props}
    >
      <MenuIcon />
    </IconButton>
  );
}

export default MenuButton;
