import React from "react";
import Typography from "@mui/material/Typography";

type HeaderProps = {};
const SideBarHeader: React.FC<HeaderProps> = () => {
  return (
    <div className="flex gap-x-1 h-fit justify-between w-full gap-x-3">
      <div className="flex gap-x-3">
        <img src="/static/assets/dashboard-profile.svg" alt="dashboard-profile" />
        <div className="w-full">
          <Typography variant="body1" sx={{ fontSize: "0.9375rem" }}>
            Nishyan
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "0.813rem",
              textDecoration: "underline",
              cursor: "pointer",
              opacity: "0.8",
            }}
          >
            Visit store
          </Typography>
        </div>
      </div>
      <div className="my-auto cursor-pointer">
        <img src="/static/assets/down-arrow.svg" alt="down-arrow" />
      </div>
    </div>
  );
};

export default SideBarHeader;
