import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Dog from '../lib/Dog'
import Light from './light';
import { Box } from '@chakra-ui/layout';

const DogModel = () => {


    return (
        <Box h="65vh" pt={90} w="80%" m="auto">
            <Canvas camera={{ position: [4, 4, 5] }}>
                <Suspense fallback={null}>
                    <Light />
                    <Dog />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </Box >

    )
}
export default DogModel;