import * as React from "react";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

const CustomPagination = () => {
  const { items } = usePagination({
    count: 10,
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <Button
                sx={{
                  minWidth: "40px",
                  marginX: "2px",
                  backgroundColor: selected ? "#146EB4" : "white",
                  color: selected ? "white" : "#4D4D4D",
                  "&:hover": {
                    backgroundColor: selected ? "#146EB4" : "white",
                    color: selected ? "white" : "#4D4D4D",
                  },
                }}
                variant="contained"
                disableElevation
                type="button"
                {...item}
              >
                {page}
              </Button>
            );
          } else {
            children = (
              <Button
                sx={{
                  backgroundColor: "white",
                  marginX: "2px",
                  color: "#4D4D4D",
                  border: "1px solid #D9D9D9",
                  borderRadius: "4px",
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                variant="contained"
                disableElevation
                type="button"
                {...item}
                endIcon={type === "next" ? <ChevronRightIcon /> : <></>}
                startIcon={type === "previous" ? <ChevronLeftIcon /> : <></>}
              >
                {type}
              </Button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
};

export default CustomPagination;
