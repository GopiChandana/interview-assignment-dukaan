import React from "react";
import Typography from "@mui/material/Typography";
import TransactionTable from "./TransactionTable";

const PaymentTransactions: React.FC = () => {
  return (
    <div>
      {" "}
      <div className="flex h-[64px] justify-between items-center w-full px-8 py-3">
        <Typography
          variant="body1"
          sx={{ fontSize: "1.25rem", fontWeight: "normal", color: "#1A181E" }}
        >
          Transactions | This Month
        </Typography>
      </div>
      <TransactionTable />
    </div>
  );
};

export default PaymentTransactions;
