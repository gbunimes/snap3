/******FOOTER MODULE******/

/***GENERAL***/
import React, { useState } from "react";
import { Modal } from "react-responsive-modal";

/***COMPONENTS***/
import { HideThis, DisplayThis } from "./Appendix";
import { getModal } from "./Modals";

/***COMPONENT***/
export default function Footer(data) {
  /*Toggle modal*/
  const modal5 = "modal5";
  const modal6 = "modal6";
  const modal7 = "modal7";
  const [open5, setOpen5] = useState(false);
  const onOpenModal5 = () => setOpen5(true);
  const onCloseModal5 = () => setOpen5(false);
  const [open6, setOpen6] = useState(false);
  const onOpenModal6 = () => setOpen6(true);
  const onCloseModal6 = () => setOpen6(false);
  const [open7, setOpen7] = useState(false);
  const onOpenModal7 = () => setOpen7(true);
  const onCloseModal7 = () => setOpen7(false);

  /*DOM*/
  return (
    <div>
      <footer id="footer">
        <ul className="menuF">
          {/*Mentions button & modal*/}
          <li>
            <div>
              <button
                className="modalButton footB footMentions"
                onClick={() => {
                  onOpenModal5();
                  HideThis();
                }}
              >
                {data.data2 ? data.data2.mentions.titre : "loading..."}
              </button>
              <Modal
                className="myModal"
                open={open5}
                onClose={() => {
                  onCloseModal5();
                  DisplayThis();
                }}
                center
              >
                {/*Get modal details*/}
                {getModal(data, modal5)}
              </Modal>
            </div>
          </li>

          {/*Confidentiality button & modal*/}
          <li>
            <div>
              <button
                className="modalButton footB footConf"
                onClick={() => {
                  onOpenModal6();
                  HideThis();
                }}
              >
                {data.data2
                  ? data.data2.confidentiality.abrtitre
                  : "loading..."}
              </button>
              <Modal
                className="myModal"
                open={open6}
                onClose={() => {
                  onCloseModal6();
                  DisplayThis();
                }}
                center
              >
                {/*Get modal details*/}
                {getModal(data, modal6)}
              </Modal>
            </div>
          </li>
          {/*CGV button & modal*/}
          <li>
            <div>
              <button
                className="modalButton footB footcgv"
                onClick={() => {
                  onOpenModal7();
                  HideThis();
                }}
              >
                {data.data2 ? data.data2.CGV.abrtitre : "loading..."}
              </button>
              <Modal
                className="myModal"
                open={open7}
                onClose={() => {
                  onCloseModal7();
                  DisplayThis();
                }}
                center
              >
                {/*Get modal details*/}
                {getModal(data, modal7)}
              </Modal>
            </div>
          </li>

          {/*Socials buttons & links*/}
          {/*Facebook*/}
          <li>
            <a
              href={data.data2 ? data.data2.nda.FB : "loading..."}
              target="_blank"
              className="fb"
            >
              <i
                className={
                  data.data1 ? data.data1.ressources.logoFB : "loading..."
                }
                aria-hidden="true"
              ></i>
            </a>
          </li>
          {/*Twitter*/}
          <li>
            <a
              href={data.data2 ? data.data2.nda.TW : "loading..."}
              target="_blank"
            >
              <i
                className={
                  data.data1 ? data.data1.ressources.logoTW : "loading..."
                }
                aria-hidden="true"
              ></i>
            </a>
          </li>
          {/*Instagram*/}
          <li>
            <a
              href={data.data2 ? data.data2.nda.IG : "loading..."}
              target="_blank"
            >
              <i
                className={
                  data.data1 ? data.data1.ressources.logoIG : "loading..."
                }
                aria-hidden="true"
              ></i>
            </a>
          </li>
          {/*YouTube*/}
          <li>
            <a
              href={data.data2 ? data.data2.nda.YT : "loading..."}
              target="_blank"
            >
              <i
                className={
                  data.data1 ? data.data1.ressources.logoYT : "loading..."
                }
                aria-hidden="true"
              ></i>
            </a>
          </li>
          {/*Sponsor logos*/}
          <li>
            <img
              src={
                data.data1.UimgLinks.IL0 +
                data.data1.ressources.sponso1 +
                data.data1.UimgLinks.IL1B
              }
              className="img-responsive BretagneLogo"
              alt="Sponsor 1"
            />{" "}
          </li>

          <li>
            <img
              src={
                data.data1.UimgLinks.IL0 +
                data.data1.ressources.sponso2 +
                data.data1.UimgLinks.IL1B
              }
              className="img-responsive"
              alt="Sponsor 2"
            />{" "}
          </li>
        </ul>
      </footer>
    </div>
  );
}
