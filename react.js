import React, {useState}  from 'react';
function App(){
    const[num1, setNum1] = useState(0);
    const[num2, setNum2] = useState(0);
    const[result, setResult] = useState(0);

    const add =() => {
        const sum = num1 +num2;
        setResult(sum);
    };

    return (
        <div>
            <h1>Addition</h1>
            <input type='number' placeholder='First no' value={num1} onChange={(e) =>setNum1(Number(e.target.value))}
            />
            <input type='number'placeholder='second no' value={num1} onChange={(e) =>setNum1(Number(e.target.value))}
            />

            <button onClick={add}>Add</button>
            <p>REsult : {result}</p>
        </div>
    );
}

export default App;