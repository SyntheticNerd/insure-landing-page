import React from "react";
import { FooterWrap } from "./FooterStyles";

export default function Footer() {
  const linksList = [
    {
      title: "OUR COMPANY",
      links: [
        { text: "HOW WE WORK", link: "#" },
        { text: "WHY INSURE?", link: "#" },
        { text: "CHECK PRICE", link: "#" },
        { text: "REVIEW", link: "#" },
      ],
    },
    {
      title: "HELP ME",
      links: [
        { text: "FAQ", link: "#" },
        { text: "TERMS OF USE", link: "#" },
        { text: "PRIVACY POLICY", link: "#" },
        { text: "COOKIES", link: "#" },
      ],
    },
    {
      title: "CONTACT",
      links: [
        { text: "SALES", link: "#" },
        { text: "SUPPORT", link: "#" },
        { text: "LIVE CHAT", link: "#" },
      ],
    },
    {
      title: "OTHERS",
      links: [
        { text: "CAREERS", link: "#" },
        { text: "PRESS", link: "#" },
        { text: "LICENSES", link: "#" },
      ],
    },
  ];
  return (
    <FooterWrap>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/dev16Images/insureImages/logo.svg"}
          alt='INSURE'
        />
        <div>
          <img
            src={
              process.env.PUBLIC_URL +
              "/dev16Images/insureImages/icon-facebook.svg"
            }
            alt=''
          />
          <img
            src={
              process.env.PUBLIC_URL +
              "/dev16Images/insureImages/icon-twitter.svg"
            }
            alt=''
          />
          <img
            src={
              process.env.PUBLIC_URL +
              "/dev16Images/insureImages/icon-pinterest.svg"
            }
            alt=''
          />
          <img
            src={
              process.env.PUBLIC_URL +
              "/dev16Images/insureImages/icon-instagram.svg"
            }
            alt=''
          />
        </div>
      </div>
      <hr />
      <ul>
        {linksList.map((list, i) => (
          <li key={list.title + i}>
            <strong>{list.title}</strong>
            <ul>
              {list.links.map((link, i) => (
                <li key={link.text + i}>
                  <p>{link.text}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </FooterWrap>
  );
}
