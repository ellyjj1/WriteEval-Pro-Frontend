import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BaseUrl} from "../../consistents";

const Account = () => {
        const [profile, setProfile] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);


        const [oldPassword, setOldPassword] = useState("");
        const [newPassword, setNewPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");
        const [passwordMsg, setPasswordMsg] = useState(null)

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

        const handlePasswordSubmit = async (e) => {
            e.preventDefault();

            if (!oldPassword || !newPassword || !confirmPassword) {
                setPasswordMsg("All fields are required.");
                return;
            }

            if (newPassword !== confirmPassword) {
                setPasswordMsg("New password and confirm password do not match.");
                return;
            }

            const data = {
                old_password: oldPassword,
                new_password: newPassword,
                confirm_password: confirmPassword,
            };

            try {
                const response = await axios.post(`${BaseUrl}change-password/`, data,{
                    headers: {
                        Authorization: `Token ${token}`,
                }});
                setPasswordMsg("Password changed successfully.");
                console.log(response.data);
                setOldPassword("");
                setNewPassword("");
                setConfirmPassword("");
            } catch (error) {
                console.error(error);
                setPasswordMsg("Failed to change password. Please check your old password and try again.");
            }
        };


        return (
            <div>
                <div className="max-w-4xl mx-auto p-6  bg-white shadow rounded-lg">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">User Profile</h2>

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
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Change Password</h2>

                    <form
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        onSubmit={handlePasswordSubmit}
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Old Password</label>
                            <input
                                type="password"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  text-gray-700"
                                name="old_password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                            />
                        </div>

                        <div name="takeThePlaceDoNotDelete"></div>


                        <div>
                            <label className="block text-sm font-medium text-gray-700">New Password</label>
                            <input
                                type="password"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  text-gray-700"
                                name="new_password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input
                                type="password"
                                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  text-gray-700"
                                name="confirm_password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword((e.target.value))}
                            />
                        </div>

                        <div>
                            <button
                                className=" text-white px-4 py-2 rounded-md hover:bg-rose-800"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                        {passwordMsg && (
                            <p className="text-sm text-left text-red-600 col-span-2"> {passwordMsg}</p>
                        )}

                    </form>

                </div>
            </div>

        );
    }
;

export default Account;
