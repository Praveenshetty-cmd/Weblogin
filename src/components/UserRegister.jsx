import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
  Link,
  Heading,
} from "@chakra-ui/react";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Registration successful!",
      description: "You've registered successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setFormData({ username: "", email: "", password: "", mobile: "" });
  };

  return (
    <Container maxW="md" centerContent>
      <Stack
        spacing={4}
        w="full"
        maxW="md"
        p={6}
        borderWidth={1}
        borderRadius="md"
      >
        <Heading textAlign="center">User Registration</Heading>
        <Box as="form" onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </FormControl>
            <FormControl id="mobile" isRequired>
              <FormLabel>Mobile Number</FormLabel>
              <Input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
              />
            </FormControl>
            <Button colorScheme="teal" type="submit">
              Register
            </Button>
            <Text>
              Already have an account?{" "}
              <Link color="teal.500" href="/login">
                Login here
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default UserRegister;
