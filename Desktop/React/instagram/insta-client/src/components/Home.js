import React from "react";
import "./Home.css"

const Home = () => {
    return(
        <div className="home">
            <div className="logo">
                <img
                    src="data:image/jpeg;base64,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"
                />
            </div>
            <div className="homepage">
                <h1>Welcome to Instagram</h1>
                <h2>already a user ? <button className="signIn"><a href="signin">signIn</a></button></h2>
                <h2>new user. <button className="signUp"><a href="signup">signUp</a></button></h2>
            </div>
        </div>
    )
}

export default Home;