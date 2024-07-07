// Example data structure of participants
const participants = [
    { id: 1, name: 'Alice', testCasesPassed: 5, timeTaken: 120 },   
    { id: 2, name: 'Bob', testCasesPassed: 4, timeTaken: 110 },
    { id: 3, name: 'Charlie', testCasesPassed: 6, timeTaken: 130 },
];

// Function to calculate rankings based on testCasesPassed and timeTaken
const calculateRankings = (participants) => {
    // Sort participants by a combined score based on timeTaken and testCasesPassed
    participants.sort((a, b) => {
        // Calculate combined score (lower is better)
        const scoreA = a.timeTaken + (10 - a.testCasesPassed); // Adjust weight as needed
        const scoreB = b.timeTaken + (10 - b.testCasesPassed); // Adjust weight as needed

        return scoreA - scoreB; // Sort by combined score (lower is better)
    });

    // Assign ranks based on the sorted order
    participants.forEach((participant, index) => {
        participant.rank = index + 1; // Rank starts from 1
    });

    return participants;
};

// Example usage
const rankedParticipants = calculateRankings(participants);
console.log(rankedParticipants);
