import { Text, Link, Button, Tr, Td } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export function SimplePacientCard({ name, id }) {
  return (
    <Tr>
      <Td>
        <Text fontSize="xl" fontWeight="bold">
          {name}
        </Text>
      </Td>
      <Td>
        <Button ml="3" fontSize="0.8em" colorScheme="purple">
          <NavLink
            to={{ pathname: `/pacient/${id.trim()}` }}
            state={{ username: name }}
          >
            Ver emociones
          </NavLink>
        </Button>
      </Td>
    </Tr>
  );
}
