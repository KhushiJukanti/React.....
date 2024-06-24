import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `count: ${count}`
    }, [count])
    return (
        <div>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Inccrement</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default UseEffect
