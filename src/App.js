import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import EmailForm from "./components/EmailForm";
import Thanks from "./components/Thanks";
import BounceLoader from "react-spinners/BounceLoader";

function App() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        const email = event.target.email.value;
        await fetch("https://sore-puce-rhinoceros-cape.cyclic.app/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });
        setLoading(false);
        setSubmitted(true);
    }

    return (
        <div className="App">
            <div className="header">
                <div className="header-left">
                    <i className="fa-solid fa-bars"></i>
                    <p>MULTIBAGG</p>
                </div>
                <div className="header-right">
                    <i
                        className="fa-brands fa-linkedin header-link"
                        data-tooltip-content="Coming soon"
                    />
                    <i
                        className="fa-brands fa-twitter header-link"
                        data-tooltip-content="Coming soon"
                    />
                    <i
                        className="fa-brands fa-instagram-square header-link"
                        data-tooltip-content="Coming soon"
                    />
                    <Tooltip
                        effect="solid"
                        anchorSelect=".header-link"
                        className="tooltip"
                    />
                </div>
            </div>
            <div className="main">
                <p className="brand">MULTIBAGG</p>
                <p className="tagline">
                    We are building an AI powered platform to help you find your
                    next{" "}
                    <span style={{ letterSpacing: "2px" }}>MULTIBAGGER</span>{" "}
                    stock.
                </p>
                {submitted ? (
                    <Thanks />
                ) : loading ? (
                    <BounceLoader />
                ) : (
                    <EmailForm handleSubmit={handleSubmit} />
                )}
            </div>
            <div className="footer">
                <p className="footer">
                    © Copyright 2023. Made with 🖤 in India.
                </p>
            </div>
        </div>
    );
}

export default App;
