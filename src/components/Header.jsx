/******HEADER MODULE******/

/***GENERAL***/
import React, { useState } from "react";
import { Link } from "react-router-dom";

/***COMPONENT***/
export default function Header(data) {
  /*DOM*/
  return (
    <header id="header">
      <nav role="navigation" className="top-nav primary-navigation Hheader">
        <div className="siteBanner">
          {/*Site Logo*/}
          <a href="/accueil">
            <img
              fetchpriority="high"
              src={"img/" + data.data1.ressources.logo1 + ".webp"}
              className=" logo img-responsive page-scroll authorLogo"
              href="#page-top"
              alt={data.data1 ? data.data1.nom : "loading..."}
            />{" "}
          </a>
          <h1>{data.data1 ? data.data1.snap.description : "loading..."}</h1>
          <p className="shortTitle">SNAP</p>
        </div>
        {/*Responsive Burger Menu*/}
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button" />
        </label>
        {/*Menu*/}
        <ul className="menu">
          {/*1 - Accueil*/}
          {/*<li>
                      <a
                        href={data.data1 ? data.data1.links.menu1L : "loading..."}
                        className="page-scroll"
                      >
                        {data.data1 ? data.data1.menu.menu1 : "loading..."}
                      </a>
                    </li>*/}
          {/*2*/}
          <li>
            <a
              href={data.data1 ? data.data1.links.menu2L : "loading..."}
              className="page-scroll"
            >
              {data.data1 ? data.data1.menu.menu2 : "loading..."}
            </a>
          </li>
          {/*3*/}
          <li>
            <a
              href={data.data1 ? data.data1.links.menu3L : "loading..."}
              className="page-scroll"
            >
              {data.data1 ? data.data1.menu.menu3 : "loading..."}
            </a>
          </li>
          {/*4*/}
          <li>
            <a
              href={data.data1 ? data.data1.links.menu4L : "loading..."}
              className="page-scroll"
            >
              {data.data1 ? data.data1.menu.menu4 : "loading..."}
            </a>
          </li>
          {/*5*/}
          <li>
            <a
              href={data.data1 ? data.data1.links.menu5L : "loading..."}
              className="page-scroll"
            >
              {data.data1 ? data.data1.menu.menu5 : "loading..."}
            </a>
          </li>
            {/*6*/}
          <li className="lastLink">
            <a
              href={data.data1 ? data.data1.links.menu6L : "loading..."}
              className="page-scroll"
            >
              {data.data1 ? data.data1.menu.menu6 : "loading..."}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
