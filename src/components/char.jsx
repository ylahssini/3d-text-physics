import React from 'react';
import { useBox } from '@react-three/cannon';
import random from 'lodash.random';

function stringToColor(str) {
    let hash = 0;

    for (let i = 0; i < str.length; i += 1) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';
    for (let i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xFF;
        color += (`00${value.toString(16)}`).substr(-2);
    }

    return color;
}

const Char = ({ config, char, i }) => {
    const inc = ['i', 'j'].includes(char) ? config.size / 2 : config.size;
    const [ref] = useBox(() => ({ mass: random(1, 5), position: [-i * inc, 100, 0] }))

    return (
        <mesh ref={ref} receiveShadow castShadow>
            <textGeometry args={[char, config]} />
            <meshStandardMaterial color={stringToColor(char + i)} />
        </mesh>
    )
}

export default Char;
