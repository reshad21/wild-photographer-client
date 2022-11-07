import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="my-5">
                <h3 className='font-bold text-base'>Difference between SQL and NoSQL</h3>
                <p>SQL is the programming language used to interface with relational databases.Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div className='my-5'>
                <h3 className='font-bold text-base'>What is JWT, and how does it work?</h3>
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).Token-Based Authentication · A user logs in to an application with a username and password, or otherwise proves her identity</p>
            </div>
            <div className="my-5">
                <h3 className='font-bold text-base'>What is the difference between javascript and NodeJS?</h3>
                <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div className="my-5">
                <h3 className='font-bold text-base'>How does NodeJS handle multiple requests at the same time?</h3>
                <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
        </div>
    );
};

export default Blog;