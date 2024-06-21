import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={6}>
      <Box maxW="7xl" mx="auto" px={6}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="lg" fontWeight="bold">
            Faith_L3S5 Mundanity
          </Text>
          <Flex>
            <IconButton
              as="a"
              href="https://github.com/FaithL3S5/todo-vite"
              aria-label="Github"
              icon={<FaGithub />}
              variant="ghost"
              color="white"
              fontSize="20px"
            />
          </Flex>
        </Flex>
        <Box mt={4}>
          <Text>
            &#9947; {new Date().getFullYear()} Faith_L3S5 Mundanity. All rights
            reserved.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
