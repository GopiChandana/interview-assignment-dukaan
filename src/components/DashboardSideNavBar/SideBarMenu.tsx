import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { SideBarMenuOptions } from "../constants";

const SideBarMenu: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(`Payments`);
  return (
    <div className="flex flex-col h-fit justify-between gap-x-3 gap-y-1 ">
      {SideBarMenuOptions.map((item: { icon: string; title: string }) => (
        <div
          className={`flex gap-x-3 w-[208px] px-2 py-4 items-center h-9 cursor-pointer rounded-md ${
            currentSection === item?.title
              ? `shadow-xl bg-blue-200 border border-blue-200 rounded-md`
              : ``
          }`}
        >
          <img src={item.icon} alt={item.title} />
          <Typography variant="body1" sx={{ fontSize: "0.875rem" }}>
            {item.title}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default SideBarMenu;
