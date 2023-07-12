import { useState, useEffect } from "react";
import stockImage1 from "../../Utils/Images/stockimage1.png";
import logo from "../../Utils/Images/navlogo.png";
import { useAuth } from "../../Utils/useContext";

const TriggerMessages = [
  "What is your end goal?",
  "What are your aspirations?",
  "Are you giving your all?",
];

const LandingPage = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentMessageIndex((prevIndex) =>
          prevIndex === TriggerMessages.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

    const { changeSignin, changeSignup } = useAuth();

  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-2 h-[70vh] items-center w-full">
        <div className="flex flex-col items-center h-full">
          <div className="flex flex-col w-3/4 mt-10">
            <div className="grid grid-cols-2 items-center justify-between w-full">
              <img
                className="p-2 w-24 object-contain"
                src={logo}
                alt="navbar logo"
              />
              <div className="flex items-center justify-end gap-3">
                <button className="text-black hover:text-orange-500 capitalize px-4 py-2 text-lg" onClick={changeSignin}>
                  Login
                </button>
                <button className="text-white bg-black px-4 py-2 capitalize text-lg" onClick={changeSignup}>
                  Signup
                </button>
              </div>
            </div>
            <div className="py-20 flex flex-col gap-5">
              <p
                className={`${
                  isAnimating ? "animate-slide-up" : ""
                } text-4xl font-bold text-slate-700 transition-transform`}
              >
                {TriggerMessages[currentMessageIndex]}
              </p>
              <p className="text-2xl font-light text-slate-600">
                Maybe we could be your answer.
              </p>
              <p className="text-7xl font-extrabold mt-12 self-end">
                Open Talk Platform
              </p>
              {/* <p className="text-4xl font-black self-end text-slate-500 italic drop-shadow-lg">
                - Connecting Interdisciplinarity
              </p> */}
            </div>
          </div>
        </div>
        <div className="flex w-full h-[70vh] bg-gray-200 object-contain">
          <img
            src={stockImage1}
            alt="group of people"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-40 bg-[#572B30]"></div>
    </div>
  );
};

export default LandingPage;
