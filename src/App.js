import React from "react";
import { Tooltip } from "react-tooltip";
import EmailForm from "./components/EmailForm";
import Thanks from "./components/Thanks";

function App() {
    const [submitted, setSubmitted] = React.useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
        const email = event.target.email.value;
        const response = await fetch(
            "https://sore-puce-rhinoceros-cape.cyclic.app/",
            {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            }
        );
        // const data = await response.json();
        // console.log(data);
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
                ) : (
                    <EmailForm handleSubmit={handleSubmit} />
                )}
            </div>
            <div className="footer">
                <p className="footer">
                    © Copyright 2023. Made with ❤️ in India.
                </p>
            </div>
        </div>
    );
}

export default App;
