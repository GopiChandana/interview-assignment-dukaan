import React from "react";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";
import CustomPagination from "../CustomPagination";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export const DataGridMockColumnData: GridColDef[] = [
  {
    field: "id",
    headerName: "Order ID",
    flex: 1,
    renderCell: (params: GridCellParams) => {
      return <div className="text-[#146EB4]">{params.row.id}</div>;
    },
  },
  {
    field: "orderDate",
    flex: 1,
    renderHeader: () => {
      return (
        <div className="font-medium">
          Order Date
          <ArrowDropDownIcon />
        </div>
      );
    },
  },
  {
    field: "orderAmount",
    headerName: "Order Amount",
    flex: 1,
    type: "number",
  },
  {
    field: "transactionFees",
    flex: 1,
    type: "number",
    renderHeader: () => {
      return (
        <div className="font-medium">
          Transaction Fees
          <InfoOutlinedIcon
            sx={{ width: "18px", height: "18px", paddingX: "2px" }}
          />
        </div>
      );
    },
  },
];
export const DataGridMockRowData = Array.from({ length: 20 }, (_, index) => ({
  id: `#${281209 + index + 1}`,
  orderDate: "7 July, 2023",
  orderAmount: "₹1278.23",
  transactionFees: "₹22",
}));

const TransactionData: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-5 w-full px-6">
      <DataGrid
        hideFooter={true}
        disableColumnMenu
        disableRowSelectionOnClick
        disableColumnSelector
        columns={DataGridMockColumnData}
        rows={DataGridMockRowData}
      />
      <div className="flex justify-center w-full px-6">
        <CustomPagination />
      </div>
    </div>
  );
};

export default TransactionData;
