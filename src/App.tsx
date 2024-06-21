import React from "react";
import { VStack, Box, StackDivider } from "@chakra-ui/react";
import TodoApp from "./components/TodoApp";
import DataFetcher from "./components/DataFetcher";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <VStack
        bg="white"
        spacing={8}
        py={8}
        px={{ base: 12, md: 16, lg: 20 }}
        width="100%"
        minHeight="100vh"
        maxWidth="800px"
        mx="auto"
        divider={<StackDivider borderColor="gray.200" />}
      >
        <TodoApp />
        <DataFetcher />
      </VStack>
      <Box bg="bisque" width="100%" maxWidth="800px" mx="auto">
        <Footer />
      </Box>
    </Box>
  );
};

export default App;
