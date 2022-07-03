import { extendTheme } from "@chakra-ui/react";

// Foundations
import { Colors } from "@app/constants/theme/foundations/colors";
import { Sizes } from "@app/constants/theme/foundations/sizes";
import { Config } from "@app/constants/theme/foundations/config";
import { FontSizes } from "@app/constants/theme/foundations/font-sizes";
import { Spaces } from "@app/constants/theme/foundations/spaces";

// Components
import { Container } from "@app/constants/theme/components/container";
import { List } from "@app/constants/theme/components/list";
import { Fonts } from "@app/constants/theme/foundations/fonts";
import { Link } from "@app/constants/theme/components/link";
import { Button } from "@app/constants/theme/components/button";
import { Modal } from "@app/constants/theme/components/modal";
import { Badge } from "@app/constants/theme/components/badge";
import { Heading } from "@app/constants/theme/components/heading";

const Theme = extendTheme({
  colors: Colors,
  sizes: Sizes,
  fonts: Fonts,
  config: Config,
  fontSizes: FontSizes,
  space: Spaces,
  components: {
    Link,
    List,
    Container,
    Button,
    Modal,
    Badge,
    Heading
  },
});

export default Theme;
