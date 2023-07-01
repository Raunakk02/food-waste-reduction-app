import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import InputField from "../formComponents/InputField";

type FormData = {
  name: string;
  email: string;
  password: string;
};

export default function SignupCard() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField
                register={register("name", {
                  required: "Required",
                })}
                error={errors.name}
                placeholder={"John Doe"}
                type="text"
                name={"Name"}
                label={"Name"}
                required
              />
              <InputField
                register={register("email", {
                  required: "Required",
                })}
                error={errors.email}
                placeholder={"abc@gmail.com"}
                type="text"
                name={"Name"}
                label={"Name"}
                required
              />

              <InputField
                register={register("password", {
                  required: "Required",
                })}
                error={errors.password}
                placeholder={"*********"}
                type="password"
                name={"Password"}
                label={"Password"}
                required
              />

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Sign up
                </Button>
              </Stack>
            </form>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link color={"blue.400"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
