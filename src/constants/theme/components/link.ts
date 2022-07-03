import { ComponentStyleConfig } from "@chakra-ui/react";

export const Link: ComponentStyleConfig = {
  defaultProps: {
    variant: 'default'
  },
  variants: {
    emphasis: {
      fontSize: 'lg',
      textDecoration: 'underline',
      transition: "color .2s",
      color: 'primary.500',
      _hover: {
        color: 'primary.600',
      }
    },
    default: {
      position: "relative",
      transition: "color .2s",
      fontWeight: "light",
      "&:after": {
        content: '""',
        position: "absolute",
        left: "0",
        bottom: "0",
        width: "full",
        height: "2px",
        borderRadius: "full",
        bg: "primary.500",
        transform: "scaleX(0)",
        transition: "transform .2s ease-out",
      },
      "&:hover": {
        color: "primary.500",
        textDecoration: "none",
        "&:after": {
          transform: "scaleX(1)",
        },
      },
    },
  },
};
