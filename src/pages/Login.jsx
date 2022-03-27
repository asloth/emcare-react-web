import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Button,
  Stack,
  Link,
  Input,
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
          <Flex
            align={'center'}
            grow={1}
            justify={'center'}
            w={'100%'}
            h={'100%'}
            bg={useColorModeValue('gray.50', 'gray.800')}
          >
            <Stack spacing={4} mx={'auto'} maxW={'lg'} py={12} px={6}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Stack align={'center'}>
                  <Heading color={'purple.500'} fontSize={'4xl'} padding={5}>Inicia sesión</Heading>
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
                      <Input {...register("usuario",{
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
                      <Input  {...register("clave", { required: true })} type="password" />
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
                        Iniciar sesión
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </form>
            </Stack>
          </Flex>
  );

}