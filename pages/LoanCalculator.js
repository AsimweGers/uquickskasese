import Head from "next/head";
import React from "react";
import { LoanCalculator } from "../components";

const Loans = () => (
  <>
    <Head>
      <title>Loan Calculator</title>
      <meta name="keywords" content="Loan Calculator, quick loans, " />
      <meta
        name="description"
        content="Loan Calculator is a uqicks tool that calculates all your loan interests over years of payback"
      />
      <meta property="og:title" content="Loan Calculator" />
      <link rel="icon" href="/gleanassist.png" />
    </Head>

    <div className="p-2">
      <div className="products-heading">
        <h2>Loan Calculator</h2>
      </div>

      <div className="products-container">
        <LoanCalculator />
      </div>
    </div>
  </>
);

export default Loans;
