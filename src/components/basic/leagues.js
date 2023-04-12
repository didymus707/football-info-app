/* eslint-disable object-curly-newline */
/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const Leagues = () => (
  <Stack>
    <Flex>
      <Text>Leagues</Text>
      <Button>...</Button>
    </Flex>
    <Box>
      <Box as="button">
        {/* Icon */}
        <Flex>
          <Text>League Name</Text>
          <Text>League Country</Text>
        </Flex>
      </Box>
    </Box>
  </Stack>
);
