
import {FormControl, FormLabel, Input, Stack, Button, Container, Box, Heading, useColorModeValue, Checkbox, CheckboxGroup, Flex} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { postData } from '../hooks/Context';


export function NewUser(){
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    

    const onSubmit = async ({usuario, clave, isAdmin}) => {
        
        postData('https://emcare-api.vercel.app/register', { username:usuario, password:clave, admin:isAdmin })
        .then(data => {
            if (!data.error){
                alert('Usuario registrado exitosamente');
                reset();
            }else{
                alert(data.error);
            }
        });
    
    }

    return (
        <>
            <Flex 
                align={'center'}
                grow={1}
                justify={'center'}
                w={'100%'}
                h={'100%'}
            >
                    <Stack spacing={4} mx={'auto'} maxW={'lg'} py={12} px={6}>
                 <Heading  fontSize={'4xl'} margin={4}>Añadir nuevo usuario</Heading>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Stack spacing={4}>
                                <FormControl isRequired>
                                    <FormLabel htmlFor='username'>Nuevo nombre de usuario</FormLabel>
                                    <Input {...register("usuario",{
                                        required: {
                                        value: true,
                                        message: 'Ingrese un nombre de usuario',
                                        },
                                    })}/>
                                    {errors.usuario && (
                                        <div className='invalid-feedback'>
                                        {errors.usuario.message}
                                        </div>
                                    )}
                                </FormControl>
                                
                                <FormControl isRequired>
                                    <FormLabel htmlFor='password'>Contraseña</FormLabel>
                                    <Input  {...register("clave", { required: true, minLength: 6,message: 'Ingrese una contraseña' })} type="password" />
                                    {errors.clave && (
                                        <div className='invalid-feedback'>
                                        {errors.clave.message}
                                        </div>
                                    )}
                                </FormControl>
                                <FormControl >
                                    <Checkbox defaultChecked colorScheme='green' {...register("isAdmin")} >Cuenta administradora</Checkbox>

                                </FormControl>
                                <Stack spacing={5}>
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
                                        Crear
                                    </Button>
                                </Stack>
                            </Stack>
                        </form>
                        
                    </Stack >
                
            </Flex >
        </>
    )
}

