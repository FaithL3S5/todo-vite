import React, { useEffect, useState } from "react";
import {
  VStack,
  Button,
  Text,
  Box,
  Heading,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const fetchData = async (pageNumber: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=10`
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setData(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, 5));
  };

  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const alignItems = useBreakpointValue({ base: "flex-start", md: "center" });
  const textAlign = useBreakpointValue({ base: "left", md: "center" });

  return (
    <VStack spacing={4} width="100%">
      <Flex
        width="100%"
        direction={flexDirection}
        justifyContent="space-between"
        alignItems={alignItems}
      >
        <Heading as="h2" size="lg" mb={4} textAlign={textAlign}>
          Most Recent Posts
        </Heading>
        <HStack spacing={4} mt={flexDirection === "column" ? 4 : 0}>
          <Button
            onClick={handlePreviousPage}
            isDisabled={page === 1}
            colorScheme="teal"
          >
            Previous
          </Button>
          <Text>Page {page} of 5</Text>
          <Button
            onClick={handleNextPage}
            isDisabled={page === 5}
            colorScheme="teal"
          >
            Next
          </Button>
        </HStack>
      </Flex>
      {error && <Text color="red.500">Error: {error}</Text>}
      {!loading && !error && (
        <VStack spacing={2} align="stretch" width="100%">
          {data.map((item) => (
            <Box key={item.id} p={2} borderWidth={1} borderRadius="md">
              <Text>{item.title}</Text>
            </Box>
          ))}
        </VStack>
      )}
    </VStack>
  );
};

export default DataFetcher;
