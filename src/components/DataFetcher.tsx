import React, { useEffect, useState } from "react";
import {
  VStack,
  Button,
  Text,
  Box,
  Heading,
  Flex,
  HStack,
  Spinner,
  ResponsiveValue,
} from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  // Function to fetch data from API based on page number
  const fetchData = async (pageNumber: number) => {
    setLoading(true); // Set loading state to true
    setError(null); // Clear any previous error

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=10`
      );
      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json(); // Parse response data
      setData(data); // Update state with fetched data
    } catch (error: any) {
      setError(error.message); // Set error state if fetch fails
    } finally {
      setLoading(false); // Set loading state to false regardless of outcome
    }
  };

  // Effect to fetch data when page number changes
  useEffect(() => {
    fetchData(page);
  }, [page]);

  // Function to handle clicking on Previous button
  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1)); // Ensure page doesn't go below 1
  };

  // Function to handle clicking on Next button
  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, 5)); // Ensure page doesn't exceed 5
  };

  // Responsive design values based on breakpoints
  const flexDirection = useBreakpointValue({
    base: "column",
    md: "row",
  }) as ResponsiveValue<"row" | "column">;

  const alignItems = useBreakpointValue({
    base: "flex-start",
    md: "center",
  }) as ResponsiveValue<"flex-start" | "center">;

  const textAlign = useBreakpointValue({
    base: "left",
    md: "center",
  }) as ResponsiveValue<"left" | "center">;

  return (
    <VStack spacing={4} width="100%">
      {/* Header with title and pagination controls */}
      <Flex
        width="100%"
        direction={flexDirection}
        justifyContent="space-between"
        alignItems={alignItems}
      >
        <Heading as="h2" size="lg" mb={4} textAlign={textAlign}>
          Most Recent Posts
        </Heading>
        {/* Pagination buttons */}
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
      {/* Display loading indicator if data is being fetched */}
      {loading && <Spinner color="teal" />}
      {/* Display error message if there's an error */}
      {error && <Text color="red.500">Error: {error}</Text>}
      {/* Display fetched data if not loading and no error */}
      {!loading && !error && (
        <VStack spacing={2} align="stretch" width="100%">
          {data.map((item) => (
            // Render each item in a Box component
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
