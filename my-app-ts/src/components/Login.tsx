import {
  ChakraProvider,
  Box,
  Input,
  Button
} from '@chakra-ui/react'
import { setAlert } from '../Service/setAlert'



export const Login = ()=>{

    return (
        
        <Box minHeight='100vh' background='linear-gradient( #4169E1, #4363E4, #DD4563 100%)' padding='25px'>
          <Box borderEndRadius='25px' backgroundColor='white' padding='25px'>
            <center>
              <h1>Faça Login</h1>

            </center>
              <form >
                <Input placeholder="Email"/>
                <Input placeholder='Senha' />
                <Button onClick={setAlert} colorScheme='teal' size='md' width='100%'>
                  Entrar
                </Button>
              </form>

          </Box>
        </Box>
      
    )
}