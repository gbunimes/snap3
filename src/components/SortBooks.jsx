/******Sort Books******/

/***Check if Reviews links are available and display them***/
export function SetReviews(props, i) {
	if (props != 0) {
		return (
			<a
				href={props}
				target="_blank"
				key={"aKey" + i}
				data-tip
				data-for={"UtipReview"}
			>
				<i className="fa fa-book" aria-hidden="true"></i>
			</a>
		);
	}
}

/***Check if Buy links are available and display them && Check if object is a book or a game***/
export function SetBuyLinks(props) {
	if (props.format === "Jeu PC") {
		if (props.buyPaper != 0 && props.buyEbook == 0) {
			return (
				<div className="buyLinks">
					<a href={props.buyPaper} target="_blank">
						🛒 Achat
					</a>
				</div>
			);
		} else if (props.buyEbook != 0 && props.buyPaper == 0) {
			return (
				<div className="buyLinks">
					<a href={props.buyEbook} target="_blank">
						⇩ Démo
					</a>
				</div>
			);
		} else if (props.buyEbook != 0 && props.buyPaper != 0) {
			return (
				<div className="buyLinks">
					<a href={props.buyPaper} target="_blank">
						🛒 Achat
					</a>
					<a href={props.buyEbook} target="_blank">
						⇩ Démo
					</a>
				</div>
			);
		}
	} else if (props.format === "Livre audio") {
		if (props.buyAudio != 0) {
			return (
				<div className="buyLinks">
					<a href={props.buyAudio} target="_blank">
						🛒 Achat
					</a>
				</div>
			);
		}
	} else if (props.format === "Nouvelle") {
		if (props.buyPaper != 0 && props.buyEbook == 0) {
			return (
				<div className="buyLinks">
					<a href={props.buyPaper} target="_blank">
						⇩ Télécharger
					</a>
				</div>
			);
		} else if (props.buyEbook != 0 && props.buyPaper == 0) {
			return (
				<div className="buyLinks">
					<a href={props.buyEbook} target="_blank">
						⇩ Télécharger
					</a>
				</div>
			);
		} else if (props.buyEbook != 0 && props.buyPaper != 0) {
			return (
				<div className="buyLinks">
					<a href={props.buyPaper} target="_blank">
						⇩ Télécharger
					</a>
					<a href={props.buyEbook} target="_blank">
						⇩ Télécharger
					</a>
				</div>
			);
		}
	} else {
		if (props.buyPaper != 0 && props.buyEbook == 0) {
			return (
				<div className="buyLinks">
					<a href={props.buyPaper} target="_blank">
						🛒 Version papier
					</a>
				</div>
			);
		} else if (props.buyEbook != 0 && props.buyPaper == 0) {
			return (
				<div className="buyLinks">
					<a href={props.buyEbook} target="_blank">
						🛒 E-book
					</a>
				</div>
			);
		} else if (props.buyEbook != 0 && props.buyPaper != 0) {
			return (
				<div className="buyLinks">
					<a href={props.buyPaper} target="_blank">
						🛒 Version papier
					</a>
					<a href={props.buyEbook} target="_blank">
						🛒 E-book
					</a>
				</div>
			);
		}
	}
}

/***Check if Litterary Proze are available and display them***/
export function SetPrize(props, i) {
	if (props.sousTitre != 0) {
		/*Check if it is an audiobook*/
		if (props.sousTitre.includes("Audible")) {
			return (
				<a
					href={"/recherche#" + props.sousTitre}
					className="page-scroll audiobook"
					key={props.sousTitre + "Link"}
				>
					<h2 key={"tag tagAudiobook" + i} className="sousTitre">
						{props.sousTitre}
					</h2>
				</a>
			);
		} else {
			return <h2 className="sousTitre">{props.sousTitre}</h2>;
		}
	}
}

/***Check if  Sample is available and display it***/
export function SetSample(props, i) {
	if (props.extrait != 0) {
		return (
			<a className="AExtrait" href={props.extrait} target="_blank">
				<div className="extrait">
					<p>➔ Extrait</p>
				</div>
			</a>
		);
	}
}

/***Check if tags are available and display them***/
export function SetTags(props, i) {
	if (props != 0) {
		return (
			<a
				href={"/recherche#" + props}
				className="page-scroll"
				key={props + "Link"}
			>
				<p className="tag" key={"tag" + i}>
					{props}
				</p>
			</a>
		);
	}
}

/***Sort Book position***/
export function dateSort(a, b) {
	return new Date(b.date) - new Date(a.date);
}

export function dateSortInvert(a, b) {
	return new Date(a.date) - new Date(b.date);
}

/***display secondary Book informations***/
function SetSecondary(thatBook) {
	if (thatBook.prix != 0 && thatBook.pages != 0 && thatBook.ISBN != 0) {
		return (
			<div className="secondaryInfos">
				<p>
					{thatBook.prix + " € - "}
					{thatBook.pages + " pages"}
				</p>
				<p>{"ISBN : " + thatBook.ISBN}</p>
			</div>
		);
	} else if (
		thatBook.prix != 0 &&
		thatBook.pages == 0 &&
		thatBook.ISBN == 0
	) {
		if (!thatBook.titre.includes("Jeu")) {
			console.log(
				"page's number and ISBN missing in " +
					thatBook.titre +
					thatBook.titre2
			);
		}
		return (
			<div className="secondaryInfos">
				<p>{thatBook.prix + " €"}</p>
			</div>
		);
	} else if (
		thatBook.prix != 0 &&
		thatBook.pages == 0 &&
		thatBook.ISBN != 0
	) {
		console.log(
			"page's number missing in " + thatBook.titre + thatBook.titre2
		);
		return (
			<div className="secondaryInfos">
				<p>{thatBook.prix + " €"}</p>
				<p>{"ISBN : " + thatBook.ISBN}</p>
			</div>
		);
	} else if (thatBook.durée != 0 && thatBook.durée != undefined) {
		return (
			<div className="secondaryInfos">
				<p>{"Lu par " + thatBook.lu}</p>
				<p>{"Durée : " + thatBook.durée}</p>
			</div>
		);
	} else {
		if (!thatBook.titre.includes("Cernunnos")) {
			console.log(
				"All secondary infos missing in " +
					thatBook.titre +
					thatBook.titre2
			);
		}
	}
}

/***Set Names***/
function SetNames(props, props0, i) {
	let lastName = props0.slice(-1);
	if (props != lastName) {
		return (
			<a href={"/recherche#" + props} key={props + "Link"} target="_self">
				<h3 className="bAuthor" key={"author" + i}>
					{props + ","}
				</h3>
			</a>
		);
	} else {
		return (
			<a href={"/recherche#" + props} key={props + "Link"} target="_self">
				<h3 className="bAuthor" key={"author" + i}>
					{props}
				</h3>
			</a>
		);
	}
}

/***Check if Book come from a litterary series***/
function SetTome(thatBook, i) {
	if (thatBook.tome >= 0) {
		if (thatBook.versions == "oui") {
			return (
				<a
					href={"/recherche#" + thatBook.Série}
					className="page-scroll pSérie"
					key={thatBook.Série + "Link"}
				>
					<p className="tag" key={"tag" + thatBook.Série + i}>
						{" "}
						{"➔  Versions "}
					</p>
				</a>
			);
		} else {
			return (
				<a
					href={"/recherche#" + "Univers " + thatBook.Série}
					className="page-scroll pSérie"
					key={thatBook.Série + "Link"}
				>
					<p className="tag" key={"tag" + thatBook.Série + i}>
						{" "}
						{"➔  Univers " + thatBook.Série}
					</p>
				</a>
			);
		}
	}
}

/***Sort books from Json according to selected Universe and display them***/
export function SortBooks(thatBook, i, data) {
	let target0 = window.location.pathname;
	let targetB = target0.replace(new RegExp(/[-]/g), " ");
	let targetBa = thatBook.univers.toLowerCase();
	let targetBb = "/" + targetBa;
	let targetBb2 = targetBb.replace(new RegExp(/[']/g), " ");
	let targetBc = targetBb2.replace(new RegExp(/[èéêë]/g), "e");
	if (targetBc === targetB) {
		return (
			<div
				key={`${thatBook.titre}-${i}`}
				className="col-sm-12 col-md-12 col-lg-12 book"
			>
				<div className="bookLeft">
					<div className="imgWrap">
						<img
							className="img-responsive creatora"
							src={
								data.data1.UimgLinks.IL3 +
								thatBook.lien +
								data.data1.UimgLinks.IL1B
							}
							alt={"Couverture de " + thatBook.titre}
						/>
						{SetSample(thatBook)}
					</div>

					<div className="ReviewLinks">
						{thatBook.reviews.map((R, i) => SetReviews(R, i))}
					</div>
					{SetSecondary(thatBook)}
					{SetBuyLinks(thatBook)}
				</div>

				<div className="bookRight">
					<h2>
						{thatBook.titre} {thatBook.titre2}
					</h2>
					<div className="authorList">
						{thatBook.par.map((par, i) =>
							SetNames(par, thatBook.par, i)
						)}
					</div>
					{SetPrize(thatBook)}
					<div className="subTitle">
						{/*Check if it is an audiobook*/}
						{(() => {
							if (thatBook.format == "Livre audio") {
								return (
									<a
										href={"/recherche#" + thatBook.format}
										className="page-scroll audioTag"
										key={thatBook.format + "Link"}
									>
										<p>{thatBook.format}</p>
									</a>
								);
							} else {
								<a
									href={"/recherche#" + thatBook.format}
									className="page-scroll coucou"
									key={thatBook.format + "Link"}
								>
									<p>{thatBook.format}</p>
								</a>;
							}
						})()}

						{thatBook.genres.map((tag, i) => SetTags(tag, i))}
					</div>
					<p key={"resum1" + thatBook.titre}>{thatBook.résumé}</p>
					<p key={"resum2" + thatBook.titre}>{thatBook.résumé2}</p>
					<p key={"resum3" + thatBook.titre}>{thatBook.résumé3}</p>
					{SetTome(thatBook, i)}
				</div>
			</div>
		);
	}
}

/***Sort books from Json according to target and display them***/
export function SortTargetedBooks(thatBook, i, target, data) {
	if (
		thatBook.genres.includes(target) ||
		thatBook.par.includes(target) ||
		thatBook.titre.includes(target) ||
		thatBook.format.includes(target) ||
		target.includes(thatBook.Série)
	) {
		return (
			<div
				key={`${thatBook.titre}-${i}`}
				className="col-sm-12 col-md-12 col-lg-12 book"
			>
				<div className="bookLeft">
					<div className="imgWrap">
						<img
							className="img-responsive creatora"
							src={
								data.data1.UimgLinks.IL3 +
								thatBook.lien +
								data.data1.UimgLinks.IL1B
							}
							alt={"Couverture de " + thatBook.titre}
						/>
						{SetSample(thatBook)}
					</div>

					<div className="ReviewLinks">
						{thatBook.reviews.map((R, i) => SetReviews(R, i))}
					</div>
					{SetSecondary(thatBook)}
					{SetBuyLinks(thatBook)}
				</div>

				<div className="bookRight">
					<h2>
						{thatBook.titre} {thatBook.titre2}
					</h2>
					<div className="authorList">
						{thatBook.par.map((par, i) =>
							SetNames(par, thatBook.par, i)
						)}
					</div>
					{SetPrize(thatBook)}
					<div className="subTitle">
						{/*Check if it is an audiobook*/}
						{(() => {
							if (thatBook.format == "Livre audio") {
								return (
									<a
										href={"/recherche#" + thatBook.format}
										className="page-scroll audioTag"
										key={thatBook.format + "Link"}
									>
										<p>{thatBook.format}</p>
									</a>
								);
							} else {
								<a
									href={"/recherche#" + thatBook.format}
									className="page-scroll coucou"
									key={thatBook.format + "Link"}
								>
									<p>{thatBook.format}</p>
								</a>;
							}
						})()}
						{thatBook.genres.map((tag, i) => SetTags(tag, i))}
					</div>

					<p key={"resum1" + thatBook.titre}>{thatBook.résumé}</p>
					<p key={"resum2" + thatBook.titre}>{thatBook.résumé2}</p>
					<p key={"resum3" + thatBook.titre}>{thatBook.résumé3}</p>
					{SetTome(thatBook, i)}
				</div>
			</div>
		);
	}
}

/***Sort books from Json according to selected Universe and display them***/
export function LastBooks(thatBook, i, data) {
	if (thatBook.durée != null && thatBook.durée != undefined) {
		return (
			<a
				href={"/recherche#" + thatBook.titre}
				className="page-scroll bL"
				key={thatBook.lien + "Link"}
			>
				<img
					className="img-responsive"
					src={
						data.data1.UimgLinks.IL3 +
						thatBook.lien +
						data.data1.UimgLinks.IL1B
					}
					alt={"Couverture de " + thatBook.titre}
					key={thatBook.lien + "intro"}
				/>
				<div className="overImg">{thatBook.univers}</div>
				<p className="newTag">{thatBook.format}</p>
			</a>
		);
	} else {
		return (
			<a
				href={"/recherche#" + thatBook.titre}
				className="page-scroll bL"
				key={thatBook.lien + "Link"}
			>
				<img
					className="img-responsive"
					src={
						data.data1.UimgLinks.IL3 +
						thatBook.lien +
						data.data1.UimgLinks.IL1B
					}
					alt={"Couverture de " + thatBook.titre}
					key={thatBook.lien + "intro"}
				/>
				<div className="overImg">{thatBook.univers}</div>
				<p className="newTag">
					{thatBook.format + " " + thatBook.genres[0]}
				</p>
			</a>
		);
	}
}
