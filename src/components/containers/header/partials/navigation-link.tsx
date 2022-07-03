import { Link } from "@chakra-ui/react";
import NextLink, { LinkProps } from "next/link";

export type NavigationLinkProps = LinkProps & {
  children: React.ReactNode;
};

function NavigationLink({ children, ...props }: NavigationLinkProps) {
  return (
    <NextLink {...props} passHref>
      <Link>{children}</Link>
    </NextLink>
  );
}

export default NavigationLink
