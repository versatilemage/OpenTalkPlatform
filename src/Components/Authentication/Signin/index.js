import { loginFormContent } from "../../../Utils/staticData";

const Signin = () => {
    return (
        <div className="flex w-11/12 h-[70%] self-center bg-slate-200">
            <div className="flex flex-col items-start p-20 bg-slate-400 w-2/4 gap-6">
                <h1 className="text-3xl font-semibold">Login</h1>
                <div className="flex flex-row items-center gap-3">
                    <p className="text-xl font-semibold">New User?</p>
                    <a className="text-xl font-semibold" href="/">Register</a>
                </div>
                <form className="flex flex-col items-start gap-8 w-2/4">
                    {loginFormContent.map((i) => {
                        return (
                            <input className="w-full h-14 px-3 rounded-sm focus:outline-none focus:ring focus:ring-slate-300" key={i.placeholder} placeholder={i.placeholder} type={i.type} name={i.name}/>
                        )
                    })}
                </form>
            </div>
            <div className="p-20 w-2/4 flex items-center justify-center">
                <div className="bg-slate-400 w-3/5 h-full"></div>
            </div>
        </div>
    )
}

export default Signin;
