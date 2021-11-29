import { Box } from '@chakra-ui/layout'
import Head from 'next/head'
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Article = ({ children, title }) => {
    return (
        <motion.article
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.7, type: 'easeInOut' }}
            style={{ position: 'relative' }}
        >

            <Box mt="-3">
                {title && (
                    <Head>
                        <title>{title} - Yeridi Crhis</title>
                        <link rel="shortcut icon" type="image/x-icon" href="https://assets.stickpng.com/images/580b57fcd9996e24bc43c39a.png" />
                    </Head>
                )}
                {children}
            </Box>
        </motion.article>
    )
}
export default Article