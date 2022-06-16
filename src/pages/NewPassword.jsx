import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Container,
  Heading,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { postData } from "../hooks/Context";

export function NewPassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ clave1, clave2 }) => {
    if (clave1 != clave2) {
      alert("Las contraseñas ingresadas no son iguales");
    }
    const user = localStorage.getItem("name");
    postData("https://emcare-api.vercel.app/update-password", {
      username: user,
      password: clave1,
    }).then((data) => {
      if (!data.error) {
        alert("Contraseña actualizada correctamente");
        reset();
      } else {
        alert(data.error);
      }
    });
  };
  return (
    <>
      <Flex
        grow={1}
        direction={"column"}
        textAlign="center"
        fontSize="s"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={4} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Heading fontSize={"4xl"} margin={4} textAlign={"center"}>
            Cambiar contraseña
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="username">Nueva contraseña</FormLabel>
                <Input
                  placeholder="Nueva contraseña"
                  {...register("clave1", {
                    required: true,
                    minLength: 6,
                    message: "Ingrese una contraseña",
                  })}
                  type="password"
                />
                {errors.clave1 && (
                  <div className="invalid-feedback">
                    {errors.clave1.message}
                  </div>
                )}
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="password">
                  Confirmar nueva contraseña
                </FormLabel>
                <Input
                  placeholder="Nueva contraseña"
                  {...register("clave2", {
                    required: true,
                    minLength: 6,
                    message: "Ingrese una contraseña",
                  })}
                  type="password"
                />
                {errors.clave2 && (
                  <div className="invalid-feedback">
                    {errors.clave2.message}
                  </div>
                )}
              </FormControl>
              <Stack spacing={5}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                ></Stack>
                <Button
                  type="submit"
                  bg={"purple.500"}
                  color={"white"}
                  _hover={{
                    bg: "purple.300",
                  }}
                >
                  Cambiar
                </Button>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </>
  );
}
