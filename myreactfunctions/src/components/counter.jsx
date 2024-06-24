import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increasecount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={increasecount}>Increasecount</button>
        </div>
    )
}

export default Counter
