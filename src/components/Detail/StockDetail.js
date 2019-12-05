import React from "react";
import { Table } from "reactstrap";

//Components
import StockDetailPrice from "./StockDetailPrice";
import StockDetailPercent from "./StockDetailPercent";
import StockDetailClose from "./StockDetailClose";
import StockDetailPE from "./StockDetailPE";
import StockDetailYTD from "./StockDetailYTD";
import StockDetail52Low from "./StockDetail52Low";
import StockDetail52High from "./StockDetail52High";
import StockDetailUpdate from "./StockDetailUpdate";

const StockDetail = props => {
  return (
    <div className="row">
      <Table>
        <tbody>
          <StockDetailPrice {...props} />
          <StockDetailPercent {...props} />
          <StockDetailClose {...props} />
          <StockDetailPE {...props} />
          <StockDetailYTD {...props} />
          <StockDetail52Low {...props} />
          <StockDetail52High {...props} />
          <StockDetailUpdate {...props} />
        </tbody>
      </Table>
    </div>
  );
};

export default StockDetail;
