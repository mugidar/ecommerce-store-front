import { formatter } from "@/libs/utils";
import React from "react";

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  return <div>{formatter.format(Number(value))}</div>;
};

export default Currency;
