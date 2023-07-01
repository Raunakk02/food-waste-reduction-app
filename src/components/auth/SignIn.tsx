import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Link,
  Text
} from "@chakra-ui/react";
import InputField from "../formComponents/InputField";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase_utils";
import { useNavigate } from "react-router";
import LogoutButton from "../globals/LogoutButton";
type FormData = {
  email: string;
  password: string;
};

export default function SignInCard() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    console.log("submitted");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigate('/');
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const navigateToSignUp = () => {
    navigate('/signup');
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
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
              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Sign in
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Don't have an account? <Link color={"blue.400"} onClick={navigateToSignUp}>Sign Up</Link>
                </Text>
              </Stack>            
              <Stack pt={6}>
                <LogoutButton />
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
