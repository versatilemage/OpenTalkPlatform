import React from "react";
import LandingPage from "../../Components/Landing";
import Signin from "../../Components/Authentication";

const HomePage = () => {

    return (
        <div className="flex flex-col">
            <LandingPage />
            <Signin/>
        </div>
    )
}

export default HomePage;
