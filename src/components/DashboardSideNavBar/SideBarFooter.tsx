import React from "react";
import Typography from "@mui/material/Typography";

type HeaderProps = {};
const SideBarFooter: React.FC<HeaderProps> = () => {
  return (
    <div className="flex gap-x-3 h-fit justify-between w-[192px] h-[54px] px-3 py-1.5 absolute bottom-4 rounded-md bg-blue-200">
      <img src="/static/assets/credits.svg" alt="credits" />
      <div className="w-full">
        <Typography
          variant="body1"
          sx={{
            fontSize: "0.813rem",
            opacity: "0.8",
            fontWeight: "normal",
          }}
        >
          Available credits
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "0.9375rem" }}>
          222.10
        </Typography>
      </div>
    </div>
  );
};

export default SideBarFooter;
