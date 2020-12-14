import React from 'react'
import { Link } from "react-router-dom";
import logo from '../img/logo.svg';

export default function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="Market Data" className="mt-5 mb-5 logo" />
    </Link>
  )
}
