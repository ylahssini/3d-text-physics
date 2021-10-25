import React from 'react';
import { usePlane } from '@react-three/cannon';

const Plane = (props) => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));

    return (
        <mesh ref={ref} receiveShadow>
            <planeGeometry args={[1000, 1000]} />
            <meshStandardMaterial color="#f5f1f1" />
        </mesh>
    )
}

export default Plane;
