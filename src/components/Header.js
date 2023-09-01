// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full rounded shadow-sm bg-gray-700 p-4 text-white ">
      <Link to={`/`}>
        <h1 className="text-lg text-white text-center">Movie App</h1>
      </Link>
    </header>
  );
};

export default Header;
