import {  Text,Html, PresentationControls,  useGLTF,OrbitControls, Environment, Float, ContactShadows } from '@react-three/drei'
import { useState, useEffect } from 'react';


export default function Experience()
{
    
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    console.log(computer)

  
    
    return <>



<color args={['#241a1a']} attach="background" />
        
        
        <mesh>
           
            <meshNormalMaterial />
        </mesh>
<PresentationControls
    global
 
    rotation={[0.13,0.09, 0]}
    polar={[- 0.4 , 0.2]} 
    azimuth={[-.9,0.50]}
    config={{mass:2 , tension:400}}
    snap={{mass:4, tension:400}}
>

<Float rotationIntensity={0.4}>
<rectAreaLight
    width={2.5}
    height={1.65}
    intensity={65}
    color={'#25cffa'}
    rotation={[0.1, Math.PI, 0]}
    position={[0, 0.55, -1.15]}
/>

    <primitive 
    object={ computer.scene }
    position-y={-1.2}
    >

    <Html
        transform
        wrapperClass='htmlScreen'
        distanceFactor={1.17}
        position={[0, 1.56, -1.4]}
        rotation-x={-0.256}
    >
        <iframe src="https://www.jcportfolio.net"/>

    </Html>

    </primitive>

    <Text
        font="./bangers-v20-latin-regular.woff"
        fontSize={.99}
        position={[2, 0.75, 0.5]}
        rotation-y={-1.25}
        maxWidth={2}
        textAlign='center'
       
    >Jackson Cortez</Text>
    </Float>
    </PresentationControls>


    <ContactShadows
    position-y={-1.4}
    opacity={0.4}
    scale={5}
    blue={2.4}
/>

    </>
}