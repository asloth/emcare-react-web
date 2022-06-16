import { Text, Button, Tr, Td } from "@chakra-ui/react";
import { FaBan, FaCheck, FaTrash } from "react-icons/fa";
import React, { useState } from "react";
import { postData } from "../hooks/Context";

export function AdminRow({ username, admin, state }) {
  async function deleteUser(username) {
    postData("https://emcare-api.vercel.app/delete-admin", {
      username: username,
    }).then((data) => {
      if (!data.error) {
        alert("Usuario eliminado correctamente");
      } else {
        alert(data.error);
      }
    });
  }

  async function updateUserState(username, newState) {
    postData("https://emcare-api.vercel.app/update-state", {
      username: username,
      newstate: newState,
    }).then((data) => {
      if (!data.error) {
        alert("Estado actualizado correctamente");
      } else {
        alert(data.error);
      }
    });
  }

  return (
    <Tr>
      <Td>
        <Text fontSize="md">{username}</Text>
      </Td>
      <Td>
        <Text fontSize="md">{admin ? "Administrador" : "Normal"}</Text>
      </Td>
      <Td>
        <Text fontSize="md">{state ? "Activo" : "Desactivado"}</Text>
      </Td>
      <Td>
        <Button
          type="button"
          rightIcon={<FaTrash />}
          colorScheme="purple"
          variant="outline"
          onClick={() => {
            deleteUser(username);
          }}
        >
          Eliminar
        </Button>
      </Td>
      <Td>
        {state ? (
          <Button
            type="button"
            rightIcon={<FaBan />}
            colorScheme="red"
            variant="outline"
            onClick={() => {
              updateUserState(username, false);
            }}
          >
            Banear
          </Button>
        ) : (
          <Button
            type="button"
            rightIcon={<FaCheck />}
            colorScheme="green"
            variant="outline"
            onClick={() => {
              updateUserState(username, true);
            }}
          >
            Activar
          </Button>
        )}
      </Td>
    </Tr>
  );
}
