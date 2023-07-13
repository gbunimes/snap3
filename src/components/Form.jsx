/******FORM MODULE******/

/***COMPONENT***/
export default function Form() {
  /*DOM*/
  return (
    <form
      target="_blank"
      action="https://formsubmit.co/gillian.brousse@outlook.fr"
      method="POST"
    >
      <div className="form-group">
        <div className="form-row">
          {/*Champ Nom*/}
          <div className="col">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Nom"
              required
            />
          </div>
          {/*Champ e-mail*/}
          <div className="col">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="E-mail"
              required
            />
          </div>
        </div>
      </div>
      {/*Champ texte*/}
      <div className="form-group">
        <textarea
          placeholder="Votre message"
          className="form-control"
          name="message"
          rows={10}
          required
          defaultValue={""}
        />
      </div>
      {/*Submit button*/}
      <button type="submit" className="btn btn-lg btn-dark btn-block">
        Envoyer
      </button>
    </form>
  );
}
