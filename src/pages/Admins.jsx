import React, { useState, useEffect } from "react";
import {
  Flex,
  Center,
  Stack,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { AdminRow } from "../components/AdminRow";

export function Admins() {
  const [admins, setAdmins] = useState(undefined);

  function getAdmins() {
    fetch("https://emcare-api.vercel.app/admins", {
      method: "POST",
    })
      .then((data) => data.json())
      .then((response) => {
        setAdmins(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getAdmins();
  }, []);

  return (
    <>
      <Flex
        grow={1}
        direction={"column"}
        textAlign="center"
        fontSize="s"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Heading fontSize={"4xl"} margin={4}>
          Lista de usuarios
        </Heading>
        <Center>
          <Stack direction="column" spacing={2} align="center">
            <Table>
              <Thead>
                <Tr>
                  <Th>Nombres de usuario</Th>
                  <Th>Tipo de usuario</Th>
                  <Th>Estado</Th>
                  <Th>Eliminar</Th>
                  <Th>Estado</Th>
                </Tr>
              </Thead>
              <Tbody>
                {admins ? (
                  admins.map((e) => {
                    return (
                      <AdminRow
                        key={e.name}
                        username={e.name}
                        admin={e.admin}
                        state={e.state}
                        updateList={getAdmins}
                      ></AdminRow>
                    );
                  })
                ) : (
                  <Tr>
                    <Td>Cargando...</Td>
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
