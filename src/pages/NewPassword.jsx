import {FormControl, FormLabel, Input, Stack, Button, Container, Heading, Box} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export function NewPassword(){
    const { handleSubmit, formState: { errors } } = useForm();

    return (
        <>
            <Container >
                <Heading>Cambiar contraseña</Heading>
                
                <Stack spacing={6} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <form onSubmit={handleSubmit()}>
                        <FormControl isRequired>
                            <FormLabel htmlFor='username'>Nueva contraseña</FormLabel>
                            <Input id='first-name' placeholder='Nueva contraseña' type='password' />
                        </FormControl>
                        <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}
                        >
                        </Stack>
                        <FormControl isRequired>
                            <FormLabel htmlFor='password'>Confirmar nueva contraseña</FormLabel>
                            <Input id='password' placeholder='Nueva contraseña' type='password'/>
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}
                            >
                            
                            </Stack>
                            <Button type="submit"
                                bg={'purple.500'}
                                color={'white'}
                                _hover={{
                                    bg: 'purple.300',
                                }}
                                >
                                Cambiar
                            </Button>
                        </Stack>
                    </form>
                </Stack >
            </Container >
        </>
    )
}