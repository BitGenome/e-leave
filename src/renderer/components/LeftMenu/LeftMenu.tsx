import { NavLink } from "react-router-dom";
import { LeftMenuIcons } from "./LeftMenuIcons";

export default function LeftMenu() {
  return (
    <div className="bg-white w-14 h-screen py-5">
      <div className=" h-full flex flex-col items-center gap-4">
        {LeftMenuIcons.map((menu, _index) => (
          <NavLink key={`${_index}-${menu}`} to={menu.link}>
            {({ isActive }) => (
              <span key={`${_index}-${menu.name}`}>{menu.icon(isActive)}</span>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
