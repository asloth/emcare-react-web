import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Box, Stack, Text, Table,
    Thead,
    Tbody,
    Tfoot,
    Container,
    Center,
    Tr,
    Th,
    Td, } from "@chakra-ui/react";
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { postData } from "../hooks/Context";
import { CallToActionWithAnnotation } from '../components/Title';

export function User(){
    let { id } = useParams();
    const [emotions, setEmotions] = useState()

    let getEmotions = (userid) => {
        postData('https://emcare-expressjs-api.herokuapp.com/get-sentiment', {userid: userid})
        .then( data => {
            console.log(data);
            if (data){
                console.log('entre')
                setEmotions(data[1])
                console.log(data[1])
            }
        })
    }

    useEffect(()=>{
        getEmotions(id);
      }, [])

    return (
        <>
            <ColorModeSwitcher justifySelf="flex-end" />
            <Box textAlign="center" fontSize="s">
                <CallToActionWithAnnotation title={id}/>
                <Center>
                    <Stack direction='column' spacing={2} align='center'>
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th>Fecha</Th>
                                    <Th>Sentimiento</Th>
                                    <Th>Porcentaje</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {emotions?emotions.map((e)=>{
                                    return <Tr>
                                        <Td>{e.date._seconds}</Td>
                                        <Td>{e.sentiment.document_tone.tones[0].tone_name}</Td>
                                        <Td>{e.sentiment.document_tone.tones[0].score}</Td>
                                    </Tr>
                                }):<Tr>
                                    <Td>Cargando...</Td>
                                    </Tr>}
                            </Tbody>
                        </Table>
                    </Stack>
                </Center>
            </Box>
        </>
    )
}