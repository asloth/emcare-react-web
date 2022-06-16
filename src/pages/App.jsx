import React, { useContext, useState, useEffect } from "react";
import {
  Box,
  Stack,
  Text,
  Table,
  Thead,
  Tbody,
  Spacer,
  Flex,
  Center,
  Button,
  useColorModeValue,
  Heading,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import { CallToActionWithAnnotation } from "../components/Title";
import { SimplePacientCard } from "../components/SimpleCard";
import { Login } from "./Login";
import { User } from "./User";
import { NewUser } from "./NewUser";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "../hooks/Context";
import { LogOut } from "../components/LogOut";
import { MenuOptions } from "../components/Menu";
import { NewPassword } from "./NewPassword";
import { Admins } from "./Admins";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function App() {
  const auth = useContext(AppContext);
  return (
    <Flex minH={"100vh"} w="100%" direction={"column"}>
      <Box
        w="100%"
        p={4}
        display="flex"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <ColorModeSwitcher />
        <MenuOptions></MenuOptions>
        {auth.isLogged ? (
          <>
            <Spacer />
            <Button marginInline={4} variant="link" rightIcon={<FaHome />}>
              <NavLink to={{ pathname: `/` }}>Inicio</NavLink>
            </Button>
            <Spacer />
          </>
        ) : (
          <Spacer />
        )}
        <LogOut></LogOut>
      </Box>
      {auth.isLogged ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="pacient/:id" element={<User />} />
          <Route path="new-password" element={<NewPassword />} />
          {auth.isAdmin ? (
            <>
              <Route path="new-user" element={<NewUser />} />
              <Route path="users" element={<Admins />} />
            </>
          ) : (
            <></>
          )}
        </Routes>
      ) : (
        <Login />
      )}
    </Flex>
  );
}

export default App;

function Home({ key }) {
  const [users, setUsers] = useState(undefined);

  async function getAllUsers() {
    await fetch("https://emcare-api.vercel.app/users", {
      method: "POST",
    })
      .then((data) => data.json())
      .then((response) => {
        console.log(response);
        setUsers(response);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <Flex
        grow={1}
        direction={"column"}
        textAlign="center"
        fontSize="s"
        bg={useColorModeValue("gray.50", "gray.800")}
        h={"100%"}
      >
        <Heading fontSize={"4xl"} margin={4}>
          Estudiantes
        </Heading>
        <Center>
          <Stack direction="column" spacing={2} align="center">
            <Table>
              <Thead>
                <Tr>
                  <Th>Nombres</Th>
                  <Th>Opcion</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users ? (
                  users.map((user) => {
                    return (
                      <SimplePacientCard
                        name={user.name}
                        key={user.uid}
                        id={user.uid}
                      />
                    );
                  })
                ) : (
                  <Tr>
                    <Td>
                      <Text>Cargando...</Text>
                    </Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </Stack>
        </Center>
      </Flex>
    </>
  );
}
