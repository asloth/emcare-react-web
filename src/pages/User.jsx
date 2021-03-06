import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  Box,
  Stack,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Container,
  Center,
  Flex,
  useColorModeValue,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import { postData } from "../hooks/Context";
import { CallToActionWithAnnotation } from "../components/Title";

export function User() {
  let { id } = useParams();
  let { state } = useLocation();
  const [emotions, setEmotions] = useState();
  let spanishEmotions = {
    joy: "Alegría",
    sad: "Tristeza",
    anger: "Enojo",
    fear: "Miedo",
    surprise: "Sorpresa",
    love: "Amor",
  };

  function custom_sort(a, b) {
    return (
      new Date(b.date._seconds * 1000).getTime() -
      new Date(a.date._seconds * 1000).getTime()
    );
  }

  let getEmotions = (userid) => {
    postData("https://emcare-api.vercel.app/get-sentiment", {
      userid: userid,
    }).then((data) => {
      console.log(data);
      if (data) {
        let sortedData = data[1].sort(custom_sort);
        setEmotions(sortedData);
      }
    });
  };

  useEffect(() => {
    getEmotions(id);
  }, []);

  return (
    <>
      <Flex
        grow={1}
        direction={"column"}
        bg={useColorModeValue("gray.50", "gray.800")}
        textAlign="center"
        fontSize="s"
      >
        <CallToActionWithAnnotation title={state?.username} />
        <Center>
          <Stack direction="column" spacing={2} align="center">
            <Table>
              <Thead>
                <Tr>
                  <Th>Fecha</Th>
                  <Th>Sentimiento</Th>
                  <Th>Porcentaje</Th>
                </Tr>
              </Thead>
              <Tbody>
                {emotions ? (
                  emotions.map((e) => {
                    let dat = new Date(e.date._seconds * 1000);
                    let max = { emotion: "", score: 0.0 };
                    for (let i in e.sentiment) {
                      if (e.sentiment[i] > max.score) {
                        max.emotion = i;
                        max.score = e.sentiment[i];
                      }
                    }
                    return (
                      <Tr key={e.date._seconds}>
                        <Td>{dat.toLocaleString()}</Td>
                        <Td>
                          {spanishEmotions[max.emotion.toLocaleLowerCase()]}
                        </Td>
                        <Td>{`${(max.score * 100).toFixed(4)} %`}</Td>
                      </Tr>
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
