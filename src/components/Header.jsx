/******HEADER MODULE******/

/***GENERAL***/
import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import { Link } from "react-router-dom";

/***COMPONENTS***/
import { HideThis, DisplayThis } from "./Appendix";
import { getModal } from "./Modals";

/***COMPONENT***/
export default function Header(data) {
  /*Toggle modals*/
  const [open1, setOpen1] = useState(false);
  const onOpenModal1 = () => setOpen1(true);
  const onCloseModal1 = () => setOpen1(false);
  const [open2, setOpen2] = useState(false);
  const onOpenModal2 = () => setOpen2(true);
  const onCloseModal2 = () => setOpen2(false);
  const [open3, setOpen3] = useState(false);
  const onOpenModal3 = () => setOpen3(true);
  const onCloseModal3 = () => setOpen3(false);
  const [open4, setOpen4] = useState(false);
  const onOpenModal4 = () => setOpen4(true);
  const onCloseModal4 = () => setOpen4(false);

  /*DOM*/
  return (
    <header id="header">
      <nav role="navigation" className="top-nav primary-navigation Hheader">
        <div>
          {/*Site Logo*/}
          <a href="/accueil">
            <img
              fetchpriority="high"
              src={
                data.data1.UimgLinks.IL0 +
                data.data1.ressources.logo1 +
                data.data1.UimgLinks.IL1B
              }
              className=" logo img-responsive page-scroll authorLogo"
              href="#page-top"
              alt={data.data1 ? data.data1.nom : "loading..."}
            />{" "}
          </a>
        </div>
        {/*Responsive Burger Menu*/}
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button" />
        </label>
        {/*Menu*/}
        <ul className="menu">
          {/*1 - Accueil*/}
          <li>
            <a
              href={data.data1 ? data.data1.links.menu1L : "loading..."}
              className="page-scroll"
            >
              {data.data1 ? data.data1.menu.menu1 : "loading..."}
            </a>
          </li>
          {/*2 - Univers*/}
          <li>
            <a
              href={data.data1 ? data.data1.links.menu2L : "loading..."}
              className="page-scroll thatULink"
            >
              <p>{data.data1 ? data.data1.menu.menu2 : "loading..."}</p>
            </a>
            {/*2b - Univers sub menu2 */}
            <ul className="subList">
              {/*Dynamic creation from Json data*/}
              {data.data2.univers.map(
                (univers) => (
                  {
                    /*Univers subNav links*/
                  },
                  (
                    <li key={univers.link}>
                      <a href={univers.link} className="page-scroll">
                        {univers.name}
                      </a>
                    </li>
                  )
                )
              )}
            </ul>
          </li>
          {/*2.5 - Lecture en ligne*/}
          <li className="StoryLink">
            <a href={data.data1 ? data.data1.links.menu5L : "loading..."}>
              {data.data1 ? data.data1.menu.menu2b : "loading..."}
            </a>
          </li>
          {/*3 - Créateurs*/}
          <li>
            <a
              href={data.data1 ? data.data1.links.menu3L : "loading..."}
              className="page-scroll"
            >
              {data.data1 ? data.data1.menu.menu3 : "loading..."}
            </a>
          </li>
          {/*4 - à propos + modal*/}
          <li>
            <button
              className="modalButton"
              onClick={() => {
                onOpenModal1();
                HideThis();
              }}
            >
              {" "}
              <p>{data.data1 ? data.data1.menu.menu4 : "loading..."}</p>
            </button>
            <Modal
              id="aProposModal"
              className="myModal"
              open={open1}
              onClose={() => {
                onCloseModal1();
                DisplayThis();
              }}
              center
            >
              {getModal(data, "modal1")}
            </Modal>
          </li>
          {/*5 - Contact*/}

          <li>
            <p className="noClick">
              {data.data1 ? data.data1.menu.menu5 : "loading..."}
            </p>
            {/*5b - Contact sub menu2 */}
            <ul className="subList">
              {/*5b - 1 - Contact Form & Modal */}
              <li>
                <button
                  className="modalButton"
                  onClick={() => {
                    onOpenModal2();
                    HideThis();
                  }}
                >
                  {" "}
                  {data.data1 ? data.data1.menu.menu5a : "loading..."}
                </button>
                <Modal
                  className="myModal"
                  open={open2}
                  onClose={() => {
                    onCloseModal2();
                    DisplayThis();
                  }}
                  center
                >
                  {getModal(data, "modal2")}
                </Modal>
              </li>
              {/*5b - 2 - Manuscripts & text submissions + modal*/}
              <li>
                <button
                  className="modalButton"
                  onClick={() => {
                    onOpenModal3();
                    HideThis();
                  }}
                >
                  {" "}
                  {data.data1 ? data.data1.menu.menu5b : "loading..."}
                </button>
                <Modal
                  className="myModal"
                  open={open3}
                  onClose={() => {
                    onCloseModal3();
                    DisplayThis();
                  }}
                  center
                >
                  {getModal(data, "modal3")}
                </Modal>
              </li>
              {/*5b - 3 - Press + modal*/}
              <li>
                <button
                  className="modalButton"
                  onClick={() => {
                    onOpenModal4();
                    HideThis();
                  }}
                >
                  {" "}
                  {data.data1 ? data.data1.menu.menu5c : "loading..."}
                </button>
                <Modal
                  className="myModal"
                  open={open4}
                  onClose={() => {
                    onCloseModal4();
                    DisplayThis();
                  }}
                  center
                >
                  {getModal(data, "modal4")}
                </Modal>
              </li>
              {/*5b - 4 - Media kit download link (PDF)*/}
              <li>
                <Link
                  to={
                    data.data1 ? data.data1.ressources.kitMédia : "loading..."
                  }
                  target="_blank"
                >
                  {" "}
                  {data.data1 ? data.data1.menu.menu5d : "loading..."}
                </Link>
              </li>
            </ul>
          </li>
          {/*6 Blog link*/}
          <li>
            <a
              href={data.data2 ? data.data2.nda.blog : "loading..."}
              target="_blank"
              className="page-scroll"
            >
              {data.data1 ? data.data1.menu.menu6 : "loading..."}
            </a>
          </li>
          {/*7 Shop link*/}
          <li>
            <a
              href={data.data2 ? data.data2.nda.boutique : "loading..."}
              target="_blank"
              className="page-scroll"
            >
              {data.data1 ? data.data1.menu.menu7 : "loading..."}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
