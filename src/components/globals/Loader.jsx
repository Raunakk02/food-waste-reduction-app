import { Center, Spinner } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Center width="100" height="100vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="brand.blue"
        size="xl"
      />
    </Center>
  );
};

export default Loader;
