import { useState } from "react";
import { useAuth } from "../../Utils/useContext";

const Signin = () => {
  const { renderForm, changeSignin, changeSignup, closeAuthForm } = useAuth();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // const [error, setError] = useState("The given username and password is incorrect")

  const [signingUpData, setSigningUpData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeData = (e) => {
    const { name, value } = e.target;
    if (renderForm === "signin") {
      setLoginData((prevState) => ({ ...prevState, [name]: value }));
    } else {
      setSigningUpData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const onSubmitData = (e) => {
    e.preventDefault();

    if (renderForm === "signin") {
      console.log(loginData);
      setLoginData({
        email: "",
        password: "",
      })
    } else {
      console.log(signingUpData);
      setSigningUpData({
        email: "",
        password: "",
        confirmPassword: "",
      })
    }
  };

  const AuthenticationData =
  renderForm === "signin"
    ? [
        {
          type: "text",
          name: "email",
          placeholder: "Email / Phone Number",
          onchange: onChangeData,
          key: "email",
          value: loginData.email,
        },
        {
          type: "password",
          name: "password",
          placeholder: "Password",
          onchange: onChangeData,
          key: "password",
          value: loginData.password,
        },
        {
          type: "submit",
          name: "Submit",
          onsubmit: onSubmitData,
          key: "submit",
        },
      ]
    : [
        {
          type: "text",
          name: "email",
          placeholder: "Email",
          onchange: onChangeData,
          key: "email",
          value: signingUpData.email,
        },
        {
          type: "password",
          name: "password",
          placeholder: "Password",
          onchange: onChangeData,
          key: "password",
          value: signingUpData.password,
        },
        {
          type: "password",
          name: "confirmPassword",
          placeholder: "Confirm Password",
          onchange: onChangeData,
          key: "confirmPassword",
          value: signingUpData.confirmPassword,
        },
        {
          type: "submit",
          name: "Submit",
          onsubmit: onSubmitData,
          key: "submit",
        },
      ];

  return (
    renderForm !== "" && (
      <div className="flex w-full h-full self-center absolute z-50">
        <div
          className="p-20 w-2/4 flex items-center bg-stone-600 opacity-60 justify-center"
          onClick={closeAuthForm}
        ></div>
        <div className={`flex flex-col items-start p-20 backdrop-blur-sm bg-[#572B30]/50 w-2/4 gap-6`}>
            {/* {error && <div className=" bg-[#572B30]/90 absolute top-0 left-0 px-20 py-5 w-full flex items-center justify-between">
                <p className="text-white text-lg font-light">{error}</p>
                <p className="text-white text-lg capitalize cursor-pointer" onClick={() => setError("")}>close</p>
            </div>} */}
          <h1 className="text-3xl font-semibold text-white">
            {renderForm === "signin" ? `Login` : `Register`}
          </h1>
          <div className="flex flex-row items-center gap-3">
            <p className="text-xl font-semibold text-white">
              {renderForm === "signin" ? `New User ?` : `Already a user ?`}
            </p>
            {renderForm === "signin" ? (
              <p
                className="text-xl font-semibold cursor-pointer text-white"
                onClick={changeSignup}
              >
                Register
              </p>
            ) : (
              <p
                className="text-xl font-semibold cursor-pointer text-white"
                onClick={changeSignin}
              >
                Login
              </p>
            )}
          </div>
          <form className="flex flex-col items-start gap-8 w-2/4">
            {AuthenticationData.map((i) => {
              return i.type !== "submit" ? (
                <input
                  className="w-full h-14 px-3 rounded-sm focus:outline-none focus:ring focus:ring-slate-300"
                  key={i.key}
                  placeholder={i.placeholder}
                  type={i.type}
                  name={i.name}
                  value={i.value}
                  onChange={i.onchange}
                />
              ) : (
                <button
                  className="w-full h-14 px-3 rounded-sm focus:outline-none focus:ring bg-blue-600 text-white focus:ring-slate-100"
                  onClick={i.onsubmit}
                  key={i.key}
                >
                  {i.name}
                </button>
              );
            })}
          </form>
          <span className="flex w-2/4 items-center justify-center">
            <p className="text-white text-xl">or</p>
          </span>
        </div>
      </div>
    )
  );
};

export default Signin;
