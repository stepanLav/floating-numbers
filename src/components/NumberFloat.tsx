import React, { useState } from 'react';
import './NumberFloat.css';

const NumberFloat: React.FC = () => {
    const [numbers, setNumbers] = useState<number[]>([1]);
    const [animate, setAnimate] = useState<boolean>(false);

    const handleClick = () => {
        // Trigger the animation by updating the state
        setAnimate(true);
        setTimeout(() => setAnimate(false), 1000); // Reset animation after 1 second
    };

    return (
        <div>
            <button onClick={handleClick}>Float Numbers</button>
            <div className="number-container">
                {numbers.map((number, index) => (
                    <div key={index} className={`number ${animate ? 'float' : ''}`}>
                        {number}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NumberFloat;