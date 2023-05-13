import React from "react";
import { Tooltip } from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faTwitter,
    faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
    return (
        <div className="App">
            <div className="header">
                <div className="header-left">
                    <FontAwesomeIcon icon={faBars} fontSize="24px" />
                    <p>MULTIBAGG</p>
                </div>
                <div className="header-right">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className="header-link"
                        data-tooltip-content="Coming soon"
                    />
                    <FontAwesomeIcon
                        icon={faTwitter}
                        className="header-link"
                        data-tooltip-content="Coming soon"
                    />
                    <FontAwesomeIcon
                        icon={faInstagramSquare}
                        className="header-link"
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
