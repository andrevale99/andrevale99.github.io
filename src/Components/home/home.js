import React from 'react';
import { Link } from "react-router-dom";

import "../home/Profile.css"

function Header() {
  return (
    <div>
      <header>
        <div>
          Andre M.F. Vale {parseInt(Math.random() * 100)}
        </div>
      </header>
    </div>
  );
}

function Picture() {
  return (
    <div id={"Profile Picture"}>
      <img src={require("./cao-obeso3.png")} alt={"Salsicha Obeso"}
        width={250}
        height={250}
        className={"Picture"}
      />
    </div>);
}

export default function HomePage()
{
  return (
    <div>
      <Header />
      <Picture />
    </div>
  );
}