import NavigationLink from "@app/components/containers/footer/partials/navigation-link";

import { Flex, FlexProps, List, ListItem } from "@chakra-ui/react";

function NavigationList(props: FlexProps) {
  return (
    <Flex as="nav" {...props}>
      <List spacing="3">
        <ListItem>
          <NavigationLink href="#">Home</NavigationLink>
        </ListItem>
        <ListItem>
          <NavigationLink href="#servicos">Serviços</NavigationLink>
        </ListItem>
        <ListItem>
          <NavigationLink href="#depoimentos">Depoimentos</NavigationLink>
        </ListItem>
      </List>
    </Flex>
  );
}

export default NavigationList;
