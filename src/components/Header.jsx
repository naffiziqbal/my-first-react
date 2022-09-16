import React from "react"
export default function Header() {
    return (
        <nav className="nav container">
            <div className=" logo">
                <img src="./logo192.png" />
                <h3>React Facts</h3>
            </div>
            <div>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}


