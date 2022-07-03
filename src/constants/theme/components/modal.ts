import { ComponentStyleConfig } from "@chakra-ui/react";

export const Modal: ComponentStyleConfig = {
  baseStyle: {
    overlay: {
      backdropFilter: "blur(2px)",
    },
    dialog: {
      mx: ['6', '6', '0'],
    },
    header: {
      fontWeight: 'normal',
      p: '6'
    },
    body: {
      p: '6',
      bg: 'background.500'
    },
    footer: {
      p: '6',
    },
  },
};
