import React from "react";
import TransactionTableHeader from "./TransactionTableHeader";
import TransactionData from "./TransactionData";
import Paper from "@mui/material/Paper";

type OverViewAndOrdersProps = {};
const TransactionTable: React.FC<OverViewAndOrdersProps> = () => {
  return (
    <Paper
      sx={{
        width: "95%",
        display: "flex",
        margin: "auto",
        flexDirection: "column",
        paddingY: "30px",
      }}
    >
      <TransactionTableHeader />
      <TransactionData />
    </Paper>
  );
};

export default TransactionTable;
