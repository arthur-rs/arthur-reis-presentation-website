import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  variants: {
    ghost: {
      width: '12',
      height: '12',
      borderRadius: 'full',
      bg: 'background.400',
      transition: 'all .2s',
      '&:hover': {
        bg: 'background.300'
      }
    }
  }
};
