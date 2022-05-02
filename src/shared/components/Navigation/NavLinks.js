import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/introduce" exact>
          서비스 소개
        </NavLink>
      </li>
      <li>
        <NavLink to="/company">회사 소개</NavLink>
      </li>
      <li>
        <NavLink to="/another">문의하기</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
