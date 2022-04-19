import React from "react";
import { AboutUsWrap, List } from "./AboutUsStyledComp";

export default function AboutUs() {
  return (
    <AboutUsWrap>
      <h1>We're different</h1>
      <ul>
        <li>
          <img
            src={
              process.env.PUBLIC_URL +
              "/dev16Images/insureImages/icon-snappy-process.svg"
            }
            alt='Fast'
          />
          <h2>Snappy Process</h2>
          <p>
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </li>
        <li>
          <img
            src={
              process.env.PUBLIC_URL +
              "/dev16Images/insureImages/icon-affordable-prices.svg"
            }
            alt='Affordable'
          />
          <h2>Affordable Prices</h2>
          <p>
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </li>
        <li>
          <img
            src={
              process.env.PUBLIC_URL +
              "/dev16Images/insureImages/icon-snappy-process.svg"
            }
            alt='People'
          />
          <h2>People First</h2>
          <p>
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </li>
      </ul>
    </AboutUsWrap>
  );
}
