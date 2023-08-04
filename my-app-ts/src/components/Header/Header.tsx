import {  } from 'react-router-dom'
import './Header.css'
import * as Chakra from '@chakra-ui/react'

export const Header = ()=>{
   

    return(
        <>
            <Chakra.HStack >
                <h1> <strong>Dio Bank</strong></h1>
                <Chakra.Image src='/logo.png'  height='10vh'></Chakra.Image>
                <Chakra.Center>
                    <Chakra.Breadcrumb >
                        <Chakra.BreadcrumbItem >
                            <Chakra.Link padding='20px'>HOME</Chakra.Link>
                            <Chakra.Link padding='20px'>SOBRE</Chakra.Link>
                            <Chakra.Link padding='20px'>BLOG</Chakra.Link>
                        </Chakra.BreadcrumbItem>
                    </Chakra.Breadcrumb >
                </Chakra.Center>
            
            </Chakra.HStack>
        </>
    )
}