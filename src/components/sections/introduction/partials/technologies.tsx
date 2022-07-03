import { Stack, Grid, Text } from "@chakra-ui/react";

import TechnologySkill from "@app/components/sections/introduction/partials/technology-skill";

function Technologies() {
  return (
    <Stack spacing={["6", "6", "12"]} w="fit-content" mt={["12", "12", "0"]}>
      <Text>Tecnologias que trabalho</Text>
      <Grid gridTemplateColumns="repeat(4, 1fr)" gridGap="3">
        <TechnologySkill technology="nextjs" />
        <TechnologySkill technology="react" />
        <TechnologySkill technology="chakra" />
        <TechnologySkill technology="typescript" />
        <TechnologySkill technology="nodejs" />
        <TechnologySkill technology="nestjs" />
        <TechnologySkill technology="adonisjs" />
        <TechnologySkill technology="aws" />
      </Grid>
    </Stack>
  );
}

export default Technologies;
