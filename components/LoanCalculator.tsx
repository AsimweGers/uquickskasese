import LoanJS from "loanjs";
import { useState } from "react";

export default function LoanCalculator() {
  const [values, setValues] = useState({
    "loan-amount": 0,
    "loan-term": 0,
    "interest-rate": 0,
  });
  const [installments, setInstallments] = useState([]);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    calculate(
      values["loan-amount"],
      values["loan-term"],
      values["interest-rate"]
    );
  };

  const calculate = (amount: number, years: number, rate: number) => {
    const loan = new LoanJS.Loan(amount, years * 12, rate);

    setInstallments(loan.installments);
  };

  const amountFormat = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

  return (
    <div className="text-2xl w-72 align-left border-4">
      <h1>Loan Calculator</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex align-ceenter justify-between border-t-2 border-gray-300 p-4">
          <label htmlFor="loan-amount">Loan Amount</label>
          <div className="relative">
            <input
              type="number"
              name="loan-amount"
              placeholder="0"
              value={values["loan-amount"]}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex align-ceenter justify-between border-t-2 border-gray-300 p-4">
          <label htmlFor="interest-rate">Interest Rate</label>
          <div className="relative">
            <input
              type="number"
              name="interest-rate"
              placeholder="0"
              value={values["interest-rate"]}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="loan-term">Loan Term (Years)</label>
          <div className="relative">
            <input
              type="number"
              name="loan-term"
              placeholder="0"
              value={values["loan-term"]}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="font-bold h-20">
          <input
            type="submit"
            value="Calculate"
            className="bg-blue-300 color-white cursor-pointer hover:"
          ></input>
        </div>
      </form>

      {!!installments?.length && (
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Payment Amount</th>
              <th>Interest Paid</th>
              <th>Principal Paid</th>
              <th>Remain</th>
            </tr>
          </thead>

          <tbody>
            {installments.map((i: any, ind: number) => (
              <tr key={ind}>
                <td>{ind}</td>
                <td>{amountFormat(i.installment)}</td>
                <td>{amountFormat(i.interest)}</td>
                <td>{amountFormat(i.capital)}</td>
                <td>{amountFormat(i.remain)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
