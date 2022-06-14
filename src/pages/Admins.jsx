import {  Flex, Center, Stack, Table, Thead, Tr, Th, useColorModeValue,} from '@chakra-ui/react';
import { CallToActionWithAnnotation } from '../components/Title';

export function Admins(){
    return (
        <>
            <Flex grow={1} direction={'column'} bg={useColorModeValue('gray.50', 'gray.800')} textAlign="center" fontSize="s">
                <CallToActionWithAnnotation title={'Lista de usuarios'}/>
                <Center>
                    <Stack direction='column' spacing={2} align='center'>
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th>Nombres</Th>
                                    <Th>Opciones</Th>
                                </Tr>
                            </Thead>
                        </Table>
                    </Stack>
                </Center>
            </Flex>
        </>
    )
}