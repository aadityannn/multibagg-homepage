import React from "react";
import { Tooltip } from "react-tooltip";

function App() {
    return (
        <div className="App">
            <div className="header">
                <div className="header-left">
                    <i
                        class="fa-solid fa-bars"
                        style={{ fontSize: "24px" }}
                    ></i>
                    <p>MULTIBAGG</p>
                </div>
                <div className="header-right">
                    <i
                        class="fa-brands fa-linkedin header-link"
                        data-tooltip-content="Coming soon"
                    />
                    <i
                        class="fa-brands fa-twitter header-link"
                        data-tooltip-content="Coming soon"
                    />
                    <i
                        class="fa-brands fa-instagram-square header-link"
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
                <form>
                    <input
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
