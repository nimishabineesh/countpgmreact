import { useState } from "react";
function Counter(){
    const [count, setCount] = useState(0);
    function increase(){
    setCount ( count + 1 );
    }
    function decrease(){
        setCount (count - 1);
    }
    function reset(){
        setCount (0);
    }

return(
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 bg-amber-100">
        
        <h1 className="text-4xl font-bold text-blue-500">
            Count: {count}
        </h1>
        
        <div className="flex gap-3">
            <button onClick={increase} className="bg-amber-950 text-white px-4 py-2 rounded">
                Increase
                </button>
            <button onClick={decrease} className="bg-red-800 text-white px-4 py-2 rounded">
                Decrease
                </button>    
            <button onClick={reset} className="bg-blue-500 text-white px-4 py-2 rounded">
                Reset
                </button>    

        </div>
        
    </div>

)
}
export default Counter;