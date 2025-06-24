import React, {useState} from 'react';
import axios from "axios";
import './Evaluator.css';
import {BaseUrl} from "../consistents";
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png";
import TextareaAutosize from 'react-textarea-autosize';


const Evaluator = () => {

    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [topic, setTopic] = useState("");
    const [essay, setEssay] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const payload = JSON.stringify({essay: topic + "\n" + essay});

        try {
            const response = await axios.post(BaseUrl + "assistant/", payload, {
                headers: {'Content-Type': 'application/json'},
            });
            setResult(response.data);
        } catch (error) {
            console.error("Evaluation error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chatgpt-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="Banner"/>
            </div>
            <Navbar/>
            <p className="font-sans text-xl">Let's Evaluate Your Writing:</p>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                <TextareaAutosize
                    minRows={4}
                    className="input-textarea"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter the Topic of IETLS Writing task 2 here"
                />
                <TextareaAutosize
                    minRows={10}
                    className="input-textarea"
                    value={essay}
                    onChange={(e) => setEssay(e.target.value)}
                    placeholder="Enter Your Essay Here"
                />
                <button
                    className="bg-rose-950 text-white px-4 py-2 rounded-md hover:bg-rose-800 disabled:bg-gray-400"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>
            </form>

            <div className="response-container mt-4">
                <p className="font-sans text-xl">Feedback of your writing:</p>

                {isLoading && <div className="loading-spinner">Loading...</div>}

                {!isLoading && result && (
                    <div className="mt-4 text-left space-y-4">
                        <h2 className="text-xl font-bold">Overall Band: {result.overall_band}</h2>
                        <p><strong>Overall Comment:</strong> {result.overall_comment}</p>

                        <div>
                            <h3 className="font-semibold">Task Response (Score: {result.task_response_score})</h3>
                            <p>{result.task_response_comment}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold">Coherence and Cohesion
                                (Score: {result.coherence_and_cohesion_score})</h3>
                            <p>{result.coherence_and_cohesion_comment}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold">Lexical Resource (Score: {result.lexical_resource_score})</h3>
                            <p>{result.lexical_resource_comment}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold">Grammatical Range and Accuracy
                                (Score: {result.grammatical_range_and_accuracy_score})</h3>
                            <p>{result.grammatical_range_and_accuracy_comment}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Evaluator;
