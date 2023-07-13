/******TEAM Page******/

/***GENERAL***/
import { useState, useEffect } from "react";

/***DATA***/
let statuts =
  "https://raw.githubusercontent.com/NoirDAbsinthe/NDAAPI/master/Statuts.pdf";
let pv1 =
  "https://raw.githubusercontent.com/NoirDAbsinthe/NDAAPI/master/pv1.pdf";
let pv2 =
  "https://raw.githubusercontent.com/NoirDAbsinthe/NDAAPI/master/pv2.pdf";
let doc1 =
  "https://raw.githubusercontent.com/NoirDAbsinthe/NDAAPI/master/doc1.pdf";
let doc2 =
  "https://raw.githubusercontent.com/NoirDAbsinthe/NDAAPI/master/doc2.pdf";
let doc3 =
  "https://raw.githubusercontent.com/NoirDAbsinthe/NDAAPI/master/doc3.pdf";
let replay1 =
  "https://www.youtube.com/watch?v=3Wp3_C5UZZQ&ab_channel=Noird%27Absinthe";
let replay2 =
  "https://www.youtube.com/watch?v=DYbZ6V9pwEg&ab_channel=Noird%27Absinthe";
let replay3 =
  "https://www.youtube.com/watch?v=dWgTNCqhRHo&ab_channel=Noird%27Absinthe";

/***COMPONENT***/
export default function Team(data) {
  /*Toggle Login*/
  const [logged, setLogged] = useState(false);

  /*Login Function*/
  function Log() {
    let pass = document.getElementById("pass");
    if (pass != null && pass != undefined) {
      document.getElementById("pass").addEventListener("input", () => {
        let thisPass = pass.value;
        if (thisPass == data.data.nda.teamIn) {
          setLogged(true);
        }
      });
    }
  }

  /*DOM*/
  /*Check if user is logged*/
  if (logged) {
    /*if user is logged, return team content*/
    return (
      <div id="team">
        <h1 className="TeamTitle">Page Actionnaires</h1>
        <h2 className="TeamSub">
          Bienvenue, vous retrouverez ici tous les documents liés à l'entreprise
          Noir d'Absinthe
        </h2>
        <div className="teamWrap" id="thisToggle">
          <div className="teamLeft">
            <h2 className="secTitle">🗍 Statuts</h2>
            <a href={statuts} target="_blank">
              <p>Statuts au 10 juillet 2019</p>
            </a>
            <h2 className="secTitle">
              🖹 Procès-verbaux d'Assemblées Générales
            </h2>
            <a href={pv1} target="_blank">
              <p>AG Augmentation Capital 29/12/2020</p>
            </a>

            <a href={pv2} target="_blank">
              <p>AG Rémunération dirigeante 21/12/2020</p>
            </a>
            <h2 className="secTitle">▶ Replay Assemblées Générales</h2>
            <a href={replay3} target="_blank">
              <p>AG Ordinaire 09/12/2022</p>
            </a>
            <a href={replay2} target="_blank">
              <p>AG Ordinaire 18/11/2021</p>
            </a>
            <a href={replay1} target="_blank">
              <p>AG Extraordinaire 29/12/2020</p>
            </a>
          </div>
          <div className="teamRight">
            <h2 className="secTitle secTitleR;">🗐 Documents comptables</h2>
            <a href={doc1} target="_blank">
              <p>Liasse fiscale 2020-2021 </p>
            </a>
            <a href={doc2} target="_blank">
              <p>Liasse fiscale 2019-2020 </p>
            </a>
            <a href={doc3} target="_blank">
              <p>Liasse fiscale 2018-2019 </p>
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    /*if user isn't logged, return login form*/
    return (
      <div id="team0">
        <div className="login-wrapper" id="thisToggle">
          <label>
            {<p>Merci de rentrer votre mot de passe</p>}
            <input type="text" id="pass" />
            {Log()}
          </label>
        </div>
      </div>
    );
  }
}
