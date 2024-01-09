import React from "react";
import Button from "@mui/material/Button";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";

const TransactionTableHeader: React.FC = () => {
  return (
    <div className="flex h-fit justify-between items-center w-full bg-white p-6">
      <div className="flex h-[40px] border-2 border-[#F2F2F2] rounded-md w-[248px]">
        <IconButton type="button" aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search by Order ID..."
          inputProps={{ "aria-label": "Search by Order ID" }}
        />
      </div>
      <div className="flex gap-x-3">
        <Button
          sx={{
            backgroundColor: "white",
            color: "#4D4D4D",
            border: "2px solid #F2F2F2",
            borderRadius: "4px",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
          variant="contained"
          disableElevation
          onClick={(e) => console.log({ e })}
          endIcon={
            <SyncAltOutlinedIcon
              style={{ transform: "rotate(90deg)", height: "17px" }}
            />
          }
        >
          Sort
        </Button>
        <div className="border-2 border-[#F2F2F2] rounded-md flex items-center text-grey-700 px-2 cursor-pointer">
          <VerticalAlignBottomIcon sx={{ color: "#4d4d4d", height: "20px" }} />
        </div>
      </div>
    </div>
  );
};

export default TransactionTableHeader;
