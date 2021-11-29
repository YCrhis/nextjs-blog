import { ChakraProvider } from '@chakra-ui/react'
import Content from '../components/layout'
import '../public/styles.css'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
    console.log(router.route)
    return (
        <ChakraProvider>
            <Content>
                <AnimatePresence exitBeforeEnter initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Content>
        </ChakraProvider>
    )
}