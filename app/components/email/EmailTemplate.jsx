import React from "react";
export const EmailTemplate = ({email, subject, message}) => (
    <>
        <h2 style={headerStyle}>Message from my site!</h2>
        <p style={propsHeaderStyle}>
            Email: <span style={propsStyle}>{email}</span>
        </p>
        <p style={propsHeaderStyle}>
            Subject: <span style={propsStyle}>{subject}</span>
        </p>
        <p style={propsHeaderStyle}>
            Message: <span style={propsStyle}>{message}</span>
        </p>
    </>
);

const headerStyle = {
    color: '#3366ff',
    fontSize: '32px',
};

const propsHeaderStyle = {
    color: '#00cbcb',
    fontSize: '22px',
};

const propsStyle = {
    color: '#000000',
    fontSize: '22px',
};