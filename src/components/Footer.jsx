/******FOOTER MODULE******/

/***GENERAL***/

/***COMPONENTS***/

/***COMPONENT***/
export default function Footer(data) {
  /*DOM*/
  return (
    <div>
      <footer id="footer" className="container-fluid bg-dark text-light footer mb-0 wow fadeIn" data-wow-delay="0.1s">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 subFoot col-md-6">
                <div className="footLogo">
                  <img fetchpriority="high" src="./img/LogoS2.webp" className="logo" />
                  <h4 className=" mb-4">Service Numérique &amp; Accompagnement Pédagogique</h4>
                </div>
                <p className="mb-2">
                  <i className="fa fa-map-marker me-3" /> Université de Nîmes - Site Vauban - Bat D, salle D121 - Rue du Dr Georges Salan - CS13019
                  30021 Nîmes Cedex 01
                </p>
                <p className="mb-2">
                  <i className="fa fa-phone me-3" /> 04 66 36 46 28
                </p>
                <p className="mb-2">
                  <i className="fa fa-paper-plane me-3" />
                  <a aria-label="lien cliquable" href="https://demat.unimes.fr/snap/" target="_blank">Formulaires d'assistance
                  </a>
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope me-3" />
                  <a aria-label="lien cliquable" href="mailto:snap@unimes.fr">snap@unimes.fr
                  </a>
                </p>
              </div>
              <div className="col-lg-6 subFoot col-md-6">
                <a aria-label="lien cliquable" href="https://www.unimes.fr/" target="_blank">
                  <img fetchpriority="high" src="./img/LogoL.webp" className="logo" />
                </a>
                {/* Button trigger modal */}
                
                                        <button id="true" type="button" className="btn btn-primary modalB" data-bs-toggle="modal" data-bs-target="#exampleModal">

                  Mentions légales
                </button>
                
                
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Mentions légales</h5>
                        <button id type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                      </div>
                      <div className="modal-body">
                        <div>
                          <p className="mb-2">Directeur de publication : Xavier Moulin. </p>
                          <a aria-label="lien cliquable" href="mailto:Xavier.moulin@unimes.fr">Xavier.moulin@unimes.fr</a>
                        </div>
                        <div>
                          <p className="mb-2">Administrateur Web : Gillian Brousse.</p>
                          <a aria-label="lien cliquable" href="mailto:gillian.brousse@unimes.fr">gillian.brousse@unimes.fr</a>
                        </div>
                        <div>
                          <p className="mb-2">Contributeurs : Marine Moreau, Marina O, Coralie Allanet, Tom Servière.</p>
                        </div>
                        <div>
                          <p className="mb-2">
                            Hébergeur: Université de Nîmes, Rue du Dr Georges Salan - CS13019
                            30021 Nîmes Cedex 01
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                */}
              </div>                    
            </div>
          </div>
        </footer>
        {/*BACK ARROW*/}

        <a aria-label="lien cliquable" href="#top" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up" /></a>      
    </div>
  );
}
