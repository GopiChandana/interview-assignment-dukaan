import React from "react";
import SideBarHeader from "./SideBarHeader";
import SideBarMenu from "./SideBarMenu";
import SideBarFooter from "./SideBarFooter";

type DashboardSideNavBarProps = {};
const DashboardSideNavBar: React.FC<DashboardSideNavBarProps> = () => {
  return (
    <div className="w-56 bg-blue-100 h-screen px-2.5 py-4 text-white flex justify-start flex-col gap-y-4 relative">
      <SideBarHeader />
      <SideBarMenu />
      <SideBarFooter />
    </div>
  );
};
export default DashboardSideNavBar;
