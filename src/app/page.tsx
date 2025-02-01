'use client';
import { useState } from "react";
import Quiz from "../Components/Quiz";

export default function Home() {
    const [quizStarted, setQuizStarted] = useState<boolean>(false);
    const [name, setName] = useState<string>('');

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
            <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center transform transition-all duration-500 ease-in-out">
                <h1 className='text-3xl font-bold text-gray-800 mb-2 tracking-wide'>
                    MK -- GIAIC
                </h1>
                <h3 className='text-lg text-gray-600 mb-6'>Next.js Quiz App</h3>

                {quizStarted ? (
                    <Quiz name={name} />
                ) : (
                    <>
                        <div className="mb-4">
                            <label htmlFor="nameInput" className="block text-gray-700 font-semibold mb-2">
                                Enter Your Name:
                            </label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                id="nameInput"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your name..."
                            />
                        </div>
                        <button
                            onClick={() => setQuizStarted(true)}
                            className={`w-full py-2 mt-4 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out 
                                ${name.trim() ? 'bg-purple-600 hover:bg-purple-700 shadow-lg' : 'bg-gray-400 cursor-not-allowed'}`}
                            disabled={!name.trim()}
                        >
                            Start Quiz
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
