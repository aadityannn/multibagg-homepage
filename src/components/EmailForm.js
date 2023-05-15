import React from "react";

function EmailForm(props) {
    return (
        <div>
            <p className="notification-line">Get notified when we launch.</p>
            <form onSubmit={props.handleSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="Enter a valid email address"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EmailForm;
