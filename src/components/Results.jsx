import { object } from "prop-types";
import { calculateInvestmentResults } from "../util/investment";
import TableRow from "./TableRow";
import TableHead from "./TableHead";

function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);

  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;


  return (
    <table id="result">
      <TableHead />
      <tbody>
        {resultsData.map((yearData) => {
          return <TableRow key={yearData.year} yearData={yearData} initialInvestment={initialInvestment} />;
        })}
      </tbody>
    </table>
  );
}

Results.propTypes = {
  userInput: object.isRequired,
};

export default Results;
