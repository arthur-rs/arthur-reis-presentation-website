import { Center, Icon, Tooltip } from "@chakra-ui/react";

import Link from "next/link";

import AwsIcon from "@app/assets/icons/aws.svg";
import NextJsIcon from "@app/assets/icons/next.svg";
import ReactIcon from "@app/assets/icons/react.svg";
import TypescriptIcon from "@app/assets/icons/typescript.svg";
import NodeJsIcon from "@app/assets/icons/nodejs.svg";
import NestJsIcon from "@app/assets/icons/nestjs.svg";
import AdonisJsIcon from "@app/assets/icons/adonisjs.svg";
import ChakraIcon from "@app/assets/icons/chakra.svg";

const TechnologyIcons = {
  aws: {
    title: "Amazon web services",
    href: "https://aws.amazon.com",
    icon: AwsIcon,
  },
  nextjs: {
    title: "Next.js",
    href: "https://nextjs.org/",
    icon: NextJsIcon,
  },
  react: {
    title: "React",
    href: "https://pt-br.reactjs.org/",
    icon: ReactIcon,
  },
  typescript: {
    title: "Typescript",
    href: "https://www.typescriptlang.org/",
    icon: TypescriptIcon,
  },
  nodejs: {
    title: "Node.js",
    href: "https://nodejs.org/",
    icon: NodeJsIcon,
  },
  nestjs: {
    title: "Nest.js",
    href: "https://nestjs.com/",
    icon: NestJsIcon,
  },
  adonisjs: {
    title: "Adonis.js",
    href: "https://adonisjs.com/",
    icon: AdonisJsIcon,
  },
  chakra: {
    title: "Chakra UI",
    href: "https://chakra-ui.com/",
    icon: ChakraIcon,
  },
} as const;

export type TechnologySkillProps = {
  technology: keyof typeof TechnologyIcons;
};

function TechnologySkill({ technology }: TechnologySkillProps) {
  return (
    <Tooltip
      hasArrow
      label={TechnologyIcons[technology].title}
      bg="background.300"
      color="white"
      borderRadius="3"
    >
      <Center
        bg="background.400"
        borderRadius="6px"
        transition="all .2s"
        cursor="pointer"
        w={["16", "16", "24"]}
        h={["16", "16", "24"]}
        _hover={{ bg: "background.300" }}
      >
        <Link href={TechnologyIcons[technology].href} passHref>
          <Center as="a" w="full" h="full" target="_blank">
            <Icon
              as={TechnologyIcons[technology].icon}
              w={["6", "6", "12"]}
              h={["6", "6", "12"]}
            />
          </Center>
        </Link>
      </Center>
    </Tooltip>
  );
}

export default TechnologySkill;
