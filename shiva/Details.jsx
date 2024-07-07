import React from 'react';
import UserContest from './components/usercontests/UserContest';


const Details = () => {
    return (
        <div >
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Future Contest Details Page</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-center">
                    <UserContest />
                    <UserContest />
                    <UserContest />
                    <UserContest />
                </div>

            </div>

            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Contest Details </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
                    <UserContest />
                    <UserContest />
                    <UserContest />
                    <UserContest />
                </div>
                
            </div>

            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8"> Past Contest Details</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
                    <UserContest />
                    <UserContest />
                    <UserContest />
                    <UserContest />
                </div>
                
            </div>
        </div>
    );
};

export default Details;