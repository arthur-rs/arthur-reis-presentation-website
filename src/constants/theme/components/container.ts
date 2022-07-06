import { ComponentStyleConfig } from "@chakra-ui/react";

export const Container: ComponentStyleConfig = {
  defaultProps: {
    size: "lg",
  },
  sizes: {
    md: {
      maxW: ["initial", "initial", "container.sm", "container.md"],
      px: ["6", "6", "0", "0"],
    },
    lg: {
      maxW: ["initial", "initial", "container.md", "container.lg"],
      px: ["6", "6", "12", "0"],
    },
  },
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "full",
  },
};
