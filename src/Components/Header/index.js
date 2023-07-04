import { NavBarData } from "../../Utils/staticData";

const MainHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between w-[100%] px-8 py-10 drop-shadow-lg fixed left-0 top-0 z-30 backdrop-blur-sm bg-white/50">
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
      </div>
    </div>
  );
};

export default MainHeader;
