import React from 'react';
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

type ScoreCardProps = {
    quizResult: {
        score: number;
        correctAnswers: number;
        wrongAnswers: number;
    };
    questions: { id: number; text: string }[];
    name: string;
};

const ScoreCard: React.FC<ScoreCardProps> = ({ quizResult, questions, name }) => {
    const passPercentage = 60;

    const percentage = (quizResult.score / (questions.length * 5)) * 100;
    const status = percentage >= passPercentage ? 'Pass' : 'Fail';

    return (
        <>
            <div className='card p-4'>
                <h3>Hello, {name}. Here is your Result Analysis</h3>
                <table className='table'>
                    <tbody>
                        <tr>
                            <td>Total Questions:</td>
                            <td>{questions.length}</td>
                        </tr>
                        <tr>
                            <td>Total Score:</td>
                            <td>{quizResult.score}</td>
                        </tr>
                        <tr>
                            <td>Correct Answers:</td>
                            <td>{quizResult.correctAnswers}</td>
                        </tr>
                        <tr>
                            <td>Wrong Answers:</td>
                            <td>{quizResult.wrongAnswers}</td>
                        </tr>
                        <tr>
                            <td>Percentage:</td>
                            <td>{percentage.toFixed(2)}%</td>
                        </tr>
                        <tr>
                            <td>Status:</td>
                            <td>{status}</td>
                        </tr>
                    </tbody>
                </table>
                <button
                    onClick={() => window.location.reload()}
                    className='btn btn-primary mt-3'
                >
                    Restart
                </button>
                <div style={{ display: 'flex', gap: '20px' }}>
                    {/* GitHub Icon */}
                    <Link href="https://github.com/KamranYT" target="_blank" rel="noopener noreferrer">
                        <IoLogoGithub
                            size={40}
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '50px', // Max width to ensure responsiveness
                                color: '#000', // Default color for GitHub
                                transition: 'transform 0.3s ease, color 0.3s ease', // Smooth transition for hover effect
                            }}
                        />
                    </Link>

                    {/* LinkedIn Icon */}
                    <Link href="https://github.com/KamranYT" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin
                            size={40}
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '50px', // Max width to ensure responsiveness
                                color: '#0077b5', // Default color for LinkedIn (LinkedIn blue)
                                transition: 'transform 0.3s ease, color 0.3s ease', // Smooth transition for hover effect
                            }}
                        />
                    </Link>

                    <style jsx>{`
        // Hover effect to change the color when the user hovers over the icon
        a:hover svg {
          transform: scale(1.1); // Slightly increase the size when hovered
        }

        a:hover svg:nth-child(1) {
          color: #0077b5; // Change GitHub icon to LinkedIn blue on hover
        }

        a:hover svg:nth-child(2) {
          color: #000; // Change LinkedIn icon to GitHub color on hover
        }
      `}</style>
                </div>

            </div>
        </>
    );
};

export default ScoreCard;
