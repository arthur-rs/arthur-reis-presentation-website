import NavigationLink from "@app/components/containers/header/partials/navigation-link";

import { Flex, FlexProps, List, ListItem } from "@chakra-ui/react";

function NavigationList(props: FlexProps) {
  return (
    <Flex as="nav" {...props}>
      <List
        display="flex"
        spacing={["3", "3", "0"]}
        flexDir={["column", "column", "row"]}
      >
        <ListItem
          display={["initial", "initial", "none"]}
          mr={["0", "0", "3", "6"]}
        >
          <NavigationLink href="#">Home</NavigationLink>
        </ListItem>
        <ListItem mr={["0", "0", "3", "6"]}>
          <NavigationLink href="#servicos">Serviços</NavigationLink>
        </ListItem>
        <ListItem mr={["0", "0", "3", "6"]}>
          <NavigationLink href="#depoimentos">Depoimentos</NavigationLink>
        </ListItem>
        <ListItem>
          <NavigationLink href="#contato">Contato</NavigationLink>
        </ListItem>
      </List>
    </Flex>
  );
}

export default NavigationList;
