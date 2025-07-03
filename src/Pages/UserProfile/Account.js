import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BaseUrl} from "../../consistents";

const Account = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userID = localStorage.getItem('userID');
    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get(`${BaseUrl}user/${userID}/`, {
            headers: {
                Authorization: `Token ${token}`,
            }
        })
            .then(res => {
                setProfile(res.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to load profile.");
                setLoading(false);
            });
    }, [userID, token]);

    if (loading) return <p className="text-center mt-10 text-gray-500">Loading profile...</p>;
    if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

    return (
        <div>
            <div className="max-w-4xl mx-auto p-6  bg-white shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Profile</h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            value={profile.username}
                            disabled
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-700"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={profile.email || ""}
                            disabled
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-700"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Registered At</label>
                        <input
                            type="text"
                            value={new Date(profile.registered_at).toLocaleString()}
                            disabled
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-700"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Last Login</label>
                        <input
                            type="text"
                            value={profile.last_login ? new Date(profile.last_login).toLocaleString() : "First login"}
                            disabled
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-700"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Evaluation Credits</label>
                        <input
                            type="number"
                            value={profile.evaluation_credits}
                            disabled
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-700"
                        />
                    </div>
                </form>

            </div>

            <div className="max-w-4xl mx-auto p-6 mt-10  bg-white shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Password</h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Change Password</label>
                        <input
                            type="password"
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  text-gray-700"
                        />
                    </div>


                    <div>

                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">New Password</label>
                        <input
                            type="password"
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  text-gray-700"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                             type="password"
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  text-gray-700"
                        />
                    </div>

                    <div>
                        <button className=" text-white px-4 py-2 rounded-md hover:bg-rose-800">
                            Submit
                        </button>
                    </div>

                </form>

            </div>
        </div>

    );
};

export default Account;
