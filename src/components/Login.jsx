
import React from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  useToast
} from '@chakra-ui/react';

const Login = () => {
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    toast({
      title: 'Login Successful',
      description: 'You have successfully logged in.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };
  return (
    <Container maxW="md" centerContent>
      <Stack spacing={4} w="full" maxW="md" p={6} borderWidth={1} borderRadius="md">
        <Heading textAlign="center">Login</Heading>
        <Box as="form" onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password" />
            </FormControl>
            <Button colorScheme="teal" type="submit">Log in</Button>
            <Text>
                    Don't have an account?{" "}
                    <Link color="teal.500" href="/register">
                      Register here
                    </Link>
                  </Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
