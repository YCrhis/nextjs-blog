const Light = () => {
    return (
        <>
            <ambientLight intensity={.5} />
            <directionalLight
                castShadow
                position={[0, 0, 0]}
                intensity={1}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={50}
            />
            <pointLight position={[0, 200, 0]} intensity={.9} />
        </>
    )
}
export default Light