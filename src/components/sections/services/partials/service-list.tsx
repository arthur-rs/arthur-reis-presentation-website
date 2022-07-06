import { List, ListItem } from "@chakra-ui/react";

import Service from "@app/components/sections/services/partials/service";

import MobileIcon from "@app/assets/icons/mobile.svg";
import ComputerIcon from "@app/assets/icons/computer.svg";
import ServerIcon from "@app/assets/icons/server.svg";

const ServicesProps = [
  {
    title: "Mobile",
    description:
      "Desenvolvo aplicativos para dispositivos moveis com excelência e atenção aos detalhes do seu projeto.",
    icon: MobileIcon,
  },
  {
    title: "Front-end",
    description:
      "Desenvolvo aplicações para o web com tecnologias modernas, performática e otimizada para SEO.",
    icon: ComputerIcon,
  },
  {
    title: "Back-end",
    description:
      "Desenvolvo servidores modernos, seguranças e escaláveis, seguindo as sempre as melhores praticas.",
    icon: ServerIcon,
  },
];

function ServicesList() {
  return (
    <List spacing="3">
      {ServicesProps.map((service) => (
        <ListItem key={service.title}>
          <Service {...service} />
        </ListItem>
      ))}
    </List>
  );
}

export default ServicesList;
