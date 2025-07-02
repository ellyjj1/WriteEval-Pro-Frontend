import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {BaseUrl} from "../../consistents";

const EssayDetailPage = () => {
    const {id} = useParams();
    const [essay, setEssay] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${BaseUrl}essays/${id}`,
            headers: {
                'Authorization': `Token ${token}`,
            }
        };
        axios.request(config)
            .then(res => {
                    setEssay(res.data)
                    // console.log(res.data)

                }
            )
            .catch(err => console.error(err));
    }, [id]);

    if (!essay) return <div className="p-6">Loading...</div>;

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <button className="rounded-xl px-3 py-1 text-white text-sm  hover:cursor-pointer"
                    onClick={() => window.history.back()}>
                Back to Essays
            </button>
            <div>
                <h1 className="text-2xl font-bold mb-4 mt-4">Essay Details</h1>
                <p className="text-sm text-gray-600 mb-2">
                    <strong>Submitted:</strong> {new Date(essay.created_at).toLocaleString()}</p>
                <p className="mb-4"><strong>Topic:</strong> {essay.topic}</p>
                <p className="whitespace-pre-line mb-6"><strong>Essay:</strong> {essay.essay}</p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                        <h4 className="font-semibold">Task Response ({essay.task_response_score})</h4>
                        <p>{essay.task_response_comment}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">Coherence & Cohesion ({essay.coherence_and_cohesion_score})</h4>
                        <p>{essay.coherence_and_cohesion_comment}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">Lexical Resource ({essay.lexical_resource_score})</h4>
                        <p>{essay.lexical_resource_comment}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">Grammar & Accuracy
                            ({essay.grammatical_range_and_accuracy_score})</h4>
                        <p>{essay.grammatical_range_and_accuracy_comment}</p>
                    </div>
                </div>

                <div className="mt-4">
                    <h4 className="font-semibold text-lg">Overall Band: {essay.overall_band}</h4>
                    <p>{essay.overall_comment}</p>
                </div>
            </div>

            <button className="mt-8 rounded-xl px-3 py-1 text-white text-sm  hover:cursor-pointer"
                    onClick={() => window.history.back()}>
                Back to Essays
            </button>
        </div>
    );
};

export default EssayDetailPage;
