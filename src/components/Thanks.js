import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function Thanks() {
    return (
        <div className="thanks-container">
            <p className="thanks-message animated-fast bounceIn">
                Thanks for subscribing!
            </p>
            <p className="thanks-message animated-fast bounceIn">
                You'll be notified when we launch our product.
            </p>
            <FaCheckCircle className="thanks-icon animated-slow bounceIn" />
        </div>
    );
}

export default Thanks;
