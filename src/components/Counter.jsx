import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-200 p-4">

            <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl">

                <h1 className="mb-2 text-3xl font-bold text-gray-800">
                    React Counter
                </h1>

                <p className="mb-6 text-sm text-gray-500">
                    Increase, decrease or reset your count
                </p>

                <div className="mb-8 rounded-xl bg-amber-50 p-6">
                    <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-500">
                        Current Count
                    </p>

                    <h2 className="text-6xl font-extrabold text-orange-600">
                        {count}
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-3">

                    <button
                        onClick={increase}
                        className="rounded-lg bg-green-500 px-4 py-3 font-semibold text-white shadow-md transition hover:bg-green-600 active:scale-95"
                    >
                        + Increase
                    </button>

                    <button
                        onClick={decrease}
                        className="rounded-lg bg-red-500 px-4 py-3 font-semibold text-white shadow-md transition hover:bg-red-600 active:scale-95"
                    >
                        - Decrease
                    </button>

                    <button
                        onClick={reset}
                        className="w-full rounded-lg bg-gray-800 px-4 py-3 font-semibold text-white shadow-md transition hover:bg-gray-700 active:scale-95"
                    >
                        ↻ Reset
                    </button>

                </div>

                <p className="mt-6 text-xs text-gray-400">
                    Built with React & Tailwind CSS
                </p>

            </div>
        </div>
    );
}

export default Counter;
