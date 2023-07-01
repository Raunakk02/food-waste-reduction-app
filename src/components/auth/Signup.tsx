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
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { auth } from "../../firebase_utils";
import InputField from "../formComponents/InputField";
import LogoutButton from "../globals/LogoutButton";

type FormData = {
  name: string;
  email: string;
  password: string;
};

export default function SignUpCard() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit = ({name,email,password}:{name:string;email:string;password:string;}) => {
    console.log("submitted");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        
        // ..
      });
  };

  const navigateToSignIn = () => {
    navigate('/signin');
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
                name={"Email"}
                label={"Email"}
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
                Already a user? <Link color={"blue.400"} onClick={navigateToSignIn}>Login</Link>
              </Text>
            </Stack>            
            <Stack pt={6}>
              <LogoutButton />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
