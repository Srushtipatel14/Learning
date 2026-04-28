import React, { useCallback, useState } from 'react';

const Form = () => {

    const [val, setVal] = useState(["item1", "item2", "item3"]);
    const [data, setData] = useState({});

    const handleClick = () => {
        setVal((prev) => ["item0", ...prev])
    }
    return (
        <div className='listItem'>
            <div className='litem'>
                {val.map((item, index) => (
                    <li key={item} >
                        <input placeholder='Typing...'></input>
                        <span>{item}</span>
                    </li>
                ))}
            </div>
            <div>
                <button onClick={handleClick}>Add item</button>
            </div>
        </div>


    )
}

export default Form