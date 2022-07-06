export const Styles = {
  "*": {
    scrollBehavior: "smooth",
    boxSizing: 'border-box',
  },
  "*:focus": {
    outline: "0 !important",
  },
  html: {
    scrollBehavior: "smooth",
  },
  form: {
    width: "100%",
  },
  "::-webkit-scrollbar": {
    width: [undefined, undefined, "16px"],
  },
  "::-webkit-scrollbar-track": {
    background: [undefined, undefined, "background.600"],
    borderColor: [undefined, undefined, "background.400"],
  },
  "::-webkit-scrollbar-thumb": {
    boxSizing: 'content-box',
    transition: 'background .2s',
    background: [undefined, undefined, "background.500"],
    borderRadius: [undefined, undefined, "full"],
    border: [undefined, undefined, "4px solid"],
    borderColor: [undefined, undefined, "background.600"],
    ":hover": {
      background: [undefined, undefined, "primary.500"],
    },
  },
};

