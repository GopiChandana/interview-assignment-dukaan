import React from "react";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

type HeaderProps = {};
const PaymentHeader: React.FC<HeaderProps> = () => {
  return (
    <div className="flex h-[64px] justify-between items-center w-full px-8 py-3 bg-white">
      <div className="flex items-center gap-x-2 h-fit">
        <Typography
          variant="body1"
          sx={{ fontSize: "0.938rem", fontWeight: "normal", color: "#1A181E" }}
        >
          Payments
        </Typography>
        <div className="flex gap-x-1">
          <img src="/svgs/question-outlined.svg" alt="question-outlined" />
          <Typography variant="caption" sx={{ color: "#4D4D4D" }}>
            How it works
          </Typography>
        </div>
      </div>
      <div className="flex h-[40px] bg-[#F2F2F2] border-[#F2F2F2] rounded-md w-[400px]">
        <IconButton type="button" aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search features,tutorials, etc."
          inputProps={{ "aria-label": "Search features,tutorials, etc." }}
        />
      </div>
      <div className="flex gap-x-3">
        <img src="/svgs/menu.svg" alt="menu" />
        <img src="/svgs/filled-down-arrow.svg" alt="filled-down-arrow" />
      </div>
    </div>
  );
};

export default PaymentHeader;
