import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import EssayDetail from './EssayDetailPage';
import {useNavigate} from 'react-router-dom';
import {BaseUrl} from "../../consistents";



function EssaysHistory(props) {
    const userID = localStorage.getItem('userID')
    const token = localStorage.getItem('token')
    const [essayList, setEssayList] = useState([])
    const [selectedEssay, setSelectedEssay] = useState(null);

    const navigate = useNavigate();


    useEffect(() => {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${BaseUrl}essays/?user_id=${userID}`,
            headers: {
                'Authorization': `Token ${token}`,
            }
        };

        axios.request(config)
            .then((response) => {
                // const data = JSON.parse(JSON.stringify(response.data.results));
                setEssayList(response.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [userID, token]);

    const bandClass = (band) => {
        if (band >= 7) {
            return 'bg-green-100 text-green-700';
        } else if (band >= 5) {
            return 'bg-yellow-100 text-yellow-700';
        } else {
            return 'bg-red-100 text-red-700';
        }
    };


    return (
        <div>
            <div className="px-4">
                <div className="bg-white shadow-md rounded-xl overflow-hidden">
                    <div className="p-4 flex justify-between items-center">
                        <div>
                            <h2 className="text-lg font-semibold">Essays</h2>
                            <p className="text-sm text-gray-500">Your submitted IELTS essays and evaluations</p>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-700">
                            <thead className="bg-gray-100 text-xs uppercase text-gray-500">
                            <tr>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Topic</th>
                                <th className="px-6 py-3">Essay</th>
                                <th className="px-6 py-3">Band</th>
                                <th className="px-6 py-3">Details</th>
                            </tr>
                            </thead>
                            <tbody>

                            {essayList.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center py-6 text-gray-500">
                                        No essays evaluated.
                                    </td>
                                </tr>
                            ) : (essayList.map((essay) => {
                                    return (
                                        <tr key={essay.id} className="border-b hover:bg-gray-50">
                                            <td className="px-6 py-4 font-xs text-gray-500">{new Date(essay.created_at).toLocaleDateString()}</td>
                                            <td className="px-6 py-4 font-xs text-gray-500">{essay.topic}</td>
                                            <td className="px-6 py-4 font-xs text-gray-500">{essay.essay}</td>
                                            <td className="px-6 py-4 font-semibold">
                                                <span
                                                    className={`px-4 py-1 rounded-xl ${bandClass(essay.overall_band)}`}> {essay.overall_band || '-'}</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    className="text-white bg-[#4e0317] rounded-xl  px-2 py-1  "
                                                    onClick={() => navigate(`/essays/${essay.id}`)}
                                                >
                                                    Details
                                                </button>
                                            </td>
                                        </tr>
                                    );

                                })
                            )}


                            </tbody>
                        </table>
                    </div>
                    {/*{selectedEssay && (*/}
                    {/*    <EssayDetail selectedEssay={selectedEssay} setSelectedEssay={setSelectedEssay}/>*/}
                    {/*)}*/}
                </div>
            </div>

        </div>
    );
}

export default EssaysHistory;