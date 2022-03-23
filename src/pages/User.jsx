import React from "react";
import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';

export function User(){
    let { id } = useParams();

    return (
        <>
            <ColorModeSwitcher justifySelf="flex-end" />
            <Box>
                <Text>
                    {id}
                </Text>
            </Box>
        </>
    )
}