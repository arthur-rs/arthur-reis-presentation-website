import { ComponentStyleConfig } from "@chakra-ui/react";

export const Badge: ComponentStyleConfig = {
  variants: {
    solid: {
      textTransform: 'none',
      bg: 'primary.500',
      color: 'background.600',
      fontWeight: 'normal',
      p: '1.5'
    }
  }
};
