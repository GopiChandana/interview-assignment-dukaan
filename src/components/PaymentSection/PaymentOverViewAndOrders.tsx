import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Paper from "@mui/material/Paper";
type OverViewAndOrdersProps = {};
const PaymentOverViewAndOrders: React.FC<OverViewAndOrdersProps> = () => {
  return (
    <div>
      {" "}
      <div className="flex h-[64px] justify-between items-center w-full px-8 py-3">
        <Typography
          variant="body1"
          sx={{ fontSize: "0.938rem", fontWeight: "normal", color: "#1A181E" }}
        >
          Overview
        </Typography>
        <Button
          sx={{
            backgroundColor: "white",
            color: "#4D4D4D",
            border: "2px solid #D9D9D9",
            borderRadius: "4px",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "white",
            },
          }}
          variant="contained"
          disableElevation
          onClick={(e) => console.log({ e })}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Last Month
        </Button>
      </div>
      <div className="px-8 py-3 grid grid-cols-2 gap-x-[20px]">
        <Paper
          sx={{ padding: "20px", height: "118px", position: "relative" }}
          elevation={3}
        >
          <div className="text-[#4D4D4D] text-base ">Online Orders</div>
          <div className="text-[#4D4D4D] text-[32px] absolute bottom-2">
            231
          </div>
        </Paper>
        <Paper
          sx={{ padding: "20px", height: "118px", position: "relative" }}
          elevation={3}
        >
          <div className="text-[#4D4D4D] text-base ">Amount Received</div>
          <div className="text-[#4D4D4D] text-[32px] absolute bottom-2">
            <span>&#8377;</span>23,92,312.19
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default PaymentOverViewAndOrders;
