import React from "react";
import MainHeader from "../../Components/Header";
import Signin from "../../Components/Authentication/Signin";

const HomePage = () => {

    return (
        <div className="flex flex-col">
            <MainHeader/>
            <div className="flex items-center justify-center w-full h-[100vh]">
                <Signin/>
            </div>
        </div>
    )
}

export default HomePage;
