import { NavBarData } from "../../Utils/staticData";
import { useAuth } from "../../Utils/useContext";

const MainHeader = () => {

  const {renderForm, changeSignin, changeSignup} = useAuth();

  return (
    <div className="flex flex-row items-center justify-between w-[100%] px-20 py-10 drop-shadow-lg fixed left-0 top-0 z-30 backdrop-blur-sm bg-white/50">
      <span></span>
      <div className="flex flex-row items-center justify-between self-end gap-24">
        {NavBarData.map((i) => {
          return (
              <a
              className="text-black no-underline cursor-pointer"
              key={i.label}
              href={i.link}
            >
              {i.label}
            </a>
        );
        })}
        {renderForm === "signup" && <p onClick={changeSignin} className="text-black cursor-pointer">Signin</p>}
        {renderForm === "signin" &&<p onClick={changeSignup} className="text-black cursor-pointer">Signup</p>}
      </div>
    </div>
  );
};

export default MainHeader;
