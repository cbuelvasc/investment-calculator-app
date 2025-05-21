import { number, object } from "prop-types";
import { formatter, calculateTotalInterest } from "../util/investment";

function TableRow({ yearData, initialInvestment }) {
  const totalInterest = calculateTotalInterest(yearData, initialInvestment);
  const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

  return (
    <tr key={yearData.year}>
      <td>{yearData.year}</td>
      <td>{formatter.format(yearData.valueEndOfYear)}</td>
      <td>{formatter.format(yearData.interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(totalAmountInvested)}</td>
    </tr>
  );
}

TableRow.propTypes = {
  yearData: object.isRequired,
  initialInvestment: number.isRequired,
};

export default TableRow;
