import { Box, Flex, IconButton, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={6}>
      <Box maxW="7xl" mx="auto" px={6}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="lg" fontWeight="bold">
            Faith_L3S5 Mundanity
          </Text>
          <Flex>
            {/* <IconButton
              as="a"
              href="#"
              aria-label="Facebook"
              icon={<FaFacebook />}
              variant="ghost"
              color="white"
              fontSize="20px"
              mr={2}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter />}
              variant="ghost"
              color="white"
              fontSize="20px"
              mr={2}
            /> */}
            <IconButton
              as="a"
              href="#"
              aria-label="Instagram"
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
