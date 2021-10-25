import React, { useMemo } from 'react';
import * as THREE from 'three';
import { Physics } from '@react-three/cannon';
import Char from './components/char';
import Plane from './components/plane';
import Kanit from './fonts/kanit.json';

const Wrapper = ({ text }) => {
    const font = new THREE.FontLoader().parse(Kanit);
    const config = useMemo(() => ({
        font,
        size: 20,
        height: 2,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 1,
        bevelOffset: 0.0,
        bevelSegments: 5
    }), [font]);

    return (
        <>
            <ambientLight />
            <spotLight penumbra={0.5} angle={0.5} intensity={1.5} position={[-400, 200, 50]} castShadow />

            <Physics gravity={[0, -30, 0]} step={0.024}>
                {
                    text.split('').reverse().map((char, i) => {
                        return (
                            <Char key={`${char}-${i}`} char={char} i={i} config={config} />
                        )
                    })
                }

                <Plane position={[0, 0, 0]} />
            </Physics>
        </>
    )
}

Wrapper.defaultProps = {
    text: '',
}

export default Wrapper;
