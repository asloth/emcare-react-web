import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  
  Stack,
  Link,
  
  Heading,
  Text,
  useColorModeValue,
  
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import {useContext} from 'react';
import { AppContext } from '../hooks/Context';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';

export function Login() {
  const userContext = useContext(AppContext);

  const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = ({usuario, clave}) => {
      userContext.signin(usuario, clave);
    }
   

  return (
    
      <>
      <ColorModeSwitcher justifySelf="flex-end" />
        <Box textAlign="center" fontSize="s">
          <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
          >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack align={'center'}>
                  <Heading fontSize={'4xl'}>Sign to your account</Heading>
                  <Text fontSize={'lg'} color={'gray.600'}>
                    to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                  </Text>
                </Stack>
                <Box
                  rounded={'lg'}
                  bg={useColorModeValue('white', 'gray.700')}
                  boxShadow={'lg'}
                  p={8}
                >
                  <Stack spacing={4}>
                    <FormControl >
                      <FormLabel>Nombre de usuario</FormLabel>
                      <input {...register("usuario",{
            required: {
              value: true,
              message: 'Ingrese un usuario',
            },
          })}/>
                {errors.usuario && (
          <div className='invalid-feedback'>
            {errors.usuario.message}
          </div>
        )}
                    </FormControl>
                    <FormControl>
                      <FormLabel>Contraseña</FormLabel>
                      <input {...register("clave", { required: true })} type="password" />
                    </FormControl>
                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}
                      >
                        
                      </Stack>
                      <button type="submit"
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                          bg: 'blue.500',
                        }}
                      >
                        Iniciar sesión
                      </button>
                    </Stack>
                  </Stack>
                </Box>
              </form>
            </Stack>
          </Flex>
        </Box >
      </>
  );

}