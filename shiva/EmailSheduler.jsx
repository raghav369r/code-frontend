import React, { useState } from 'react';
import axios from 'axios';

const EmailScheduler = () => {
    const [emails, setEmails] = useState('');
    const [scheduleTime, setScheduleTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailArray = emails.split(',').map(email => email.trim());
        
        try {
            const response = await axios.post('http://localhost:5001/schedule-emails', {
                emails: emailArray,
                scheduleTime
            });
            alert(response.data);
        } catch (error) {
            console.error('Error scheduling emails:', error);
            alert('Error scheduling emails');
        }
    };

    return (
        <div style={styles.container}>
            <h1>Email Scheduler</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="emails">Emails (comma-separated):</label>
                    <input
                        type="text"
                        id="emails"
                        value={emails}
                        onChange={(e) => setEmails(e.target.value)}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="scheduleTime">Schedule Time:</label>
                    <input
                        type="datetime-local"
                        id="scheduleTime"
                        value={scheduleTime}
                        onChange={(e) => setScheduleTime(e.target.value)}
                        style={styles.input}
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Schedule Emails</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f8ff',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    },
    formGroup: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '8px',
        margin: '5px 0',
        boxSizing: 'border-box',
    },
    button: {
        padding: '10px 15px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    }
};

export default EmailScheduler;
