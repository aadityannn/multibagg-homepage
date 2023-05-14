import React from "react";
import { Tooltip } from "react-tooltip";

function App() {
    async function handleSubmit(event) {
        const email = event.target.email.value;
        console.log("Email: ", email);
        const response = await fetch(
            "https://sore-puce-rhinoceros-cape.cyclic.app/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            }
        );
        const data = await response.json();
        return data;
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
                <p className="notification-line">
                    Get notified when we launch.
                </p>
                <form onSubmit={handleSubmit}>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter a valid email address"
                    />
                    <button type="submit">Submit</button>
                </form>
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
