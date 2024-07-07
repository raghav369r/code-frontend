import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you use axios for HTTP requests
import { NavLink } from 'react-router-dom';

const UserContest = () => {
    // const [contest, setContest] = useState(null); // Initialize contest state with null
    const [contest, setContest] = useState({
        id:1,
        name: "Rgukt Contest-1",
        organization: "organization",
        number: "contest-100"
    });

    // useEffect(() => {
    //     axios.get('/api/contest') // Replace with your API endpoint
    //         .then(response => setContest(response.data))
    //         .catch(error => console.error('Error fetching contest details:', error));
    // }, []);

    // Handle case where contest is still fetching or not available
    if (!contest) return null; 

    return (
        <NavLink to={`/contest/${contest.id}`} className="bg-gradient-to-br hover:scale-95 from-blue-200 to-blue-300 rounded-lg shadow-lg p-6 w-80 block">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">{contest.name}</h2>
            <p className="text-sm text-gray-700 mb-2">{contest.organization}</p>
            <p className="text-sm text-gray-700">{contest.number}</p>
            <div className="mt-4">
                {/* <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out">
                    Join Contest
                </button> */}
            </div>
        </NavLink>
    );
};

export default UserContest;
