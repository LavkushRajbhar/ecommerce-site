import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        subject: '',
        msg: ''
    });

    const data = (e) => {
        const { name, value } = e.target; // Destructuring event properties for clarity
        setUser({ ...user, [name]: value });
    };

    const send = (e) => {
        e.preventDefault(); // Prevent form reload
        const { name, email, subject, msg } = user;

        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, subject, msg })
        };

        fetch(
            'https://react-ecommerce-contact-f6cad-default-rtdb.firebaseio.com/Message.json',
            option
        )
            .then((response) => {
                if (response.ok) {
                    alert('Message Sent')
                    setUser({ name: '', email: '', subject: '', msg: '' });
                } else {
                    alert('Error Occurred: Message send failed');
                }
            })
            .catch((error) => {
                alert('An error occurred: ' + error.message);
            });
    };

    return (
        <div className="contact">
            <div className="container">
                <div className="form">
                    <h2># Contact US</h2>
                    <form onSubmit={send}>
                        <div className="box">
                            <div className="label">
                                <h4>Name :</h4>
                            </div>
                            <div className="input">
                                <input
                                    type="text"
                                    value={user.name}
                                    name="name"
                                    onChange={data}
                                    placeholder="Enter Your Name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="box">
                            <div className="label">
                                <h4>Email :</h4>
                            </div>
                            <div className="input">
                                <input
                                    type="email"
                                    value={user.email}
                                    name="email"
                                    onChange={data}
                                    placeholder="Enter Your Email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="box">
                            <div className="label">
                                <h4>Subject :</h4>
                            </div>
                            <div className="input">
                                <input
                                    type="text"
                                    value={user.subject}
                                    name="subject"
                                    onChange={data}
                                    placeholder="Enter Your Subject"
                                    required
                                />
                            </div>
                        </div>
                        <div className="box">
                            <div className="label">
                                <h4>Message :</h4>
                            </div>
                            <div className="input">
                                <textarea
                                    name="msg"
                                    value={user.msg}
                                    onChange={data}
                                    placeholder="Enter Your Message"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
