import React from "react";
import PaymentHeader from "./PaymentHeader";
import Divider from "@mui/material/Divider";
import PaymentOverViewAndOrders from "./PaymentOverViewAndOrders";
import PaymentTransactions from "./PaymentTransactions";

type PaymentSectionProps = {};
const PaymentSection: React.FC<PaymentSectionProps> = () => {
  return (
    <div className="flex-1 bg-[#F2F2F2] h-screen overflow-scroll">
      <PaymentHeader />
      <Divider />
      <PaymentOverViewAndOrders />
      <PaymentTransactions />
    </div>
  );
};
export default PaymentSection;
