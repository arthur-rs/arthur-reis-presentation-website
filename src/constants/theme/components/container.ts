import { ComponentStyleConfig } from "@chakra-ui/react";

export const Container: ComponentStyleConfig = {
  defaultProps: {
    size: "lg",
  },
  sizes: {
    md: {
      maxW: ["initial", "initial", "container.sm", "container.md"],
    },
    lg: {
      maxW: ["initial", "initial", "container.md", "container.lg"],
    },
  },
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: ["6", "6", "12", "0"],
    width: "full",
  },
};
