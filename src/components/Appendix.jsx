/******APPENDIX******/

/******COMPONENTS******/
import { DustAnim, MainAnim } from "../components/UniversAnim";
import { dateSortInvert, LastBooks } from "../components/SortBooks";

/******Background object toggling******/
/*Hide target when modal is open*/
export function HideThis() {
	if (thisToggle != null || thisToggle != undefined) {
		thisToggle.style.visibility = "hidden";
	}
}
/*Display target when modal is closed*/
export function DisplayThis() {
	if (thisToggle != null || thisToggle != undefined) {
		thisToggle.style.visibility = "visible";
	}
}

/*Get all book's tags*/
export function getAllTags(data) {
	let allBookTags = [];
	let allThoseBooks = data.Livres;
	for (let i in allThoseBooks) {
		let thisOne = allThoseBooks[i];
		for (let i in thisOne.genres) {
			if (
				!allBookTags.includes(thisOne.genres[i]) &&
				!thisOne.genres[i] == "" &&
				!thisOne.genres[i].includes("12") &&
				!thisOne.genres[i].includes("Rétro") &&
				!thisOne.genres[i].includes("Point") &&
				!thisOne.genres[i].includes("ticle") &&
				!thisOne.genres[i].includes("views")
			) {
				allBookTags.push(thisOne.genres[i]);
			}
		}
	}
	console.log(allBookTags);
	/*
	Randomize array
	let newTagArray = allBookTags.sort(() => 0.5 - Math.random());
	console.log(newTagArray);
	*/
}

/*Alphabetical sorting*/
export function alphabetical(a, b) {
	if (a.name2 < b.name2) {
		return -1;
	}
	if (a.name2 > b.name2) {
		return 1;
	}
	return 0;
}

/***Select background image according to selected universe***/
export function SetUniverse() {
	const thisUniverse = document.getElementById("thisUniverse");

	if (thisUniverse != null || thisUniverse != undefined) {
		if (window.location.pathname.indexOf("memoria") != -1) {
			thisUniverse.classList.add("MemoriaU");
		} else if (window.location.pathname.indexOf("futuria") != -1) {
			thisUniverse.classList.add("FuturiaU");
		} else if (window.location.pathname.indexOf("onyria") != -1) {
			thisUniverse.classList.add("OnyriaU");
		} else if (window.location.pathname.indexOf("urbana") != -1) {
			thisUniverse.classList.add("UrbanaU");
		} else if (window.location.pathname.indexOf("rouge") != -1) {
			thisUniverse.classList.add("RougeU");
		} else if (window.location.pathname.indexOf("folie") != -1) {
			thisUniverse.classList.add("FolieU");
		} else if (window.location.pathname.indexOf("fleur") != -1) {
			thisUniverse.classList.add("FleurU");
		} else if (window.location.pathname.indexOf("chrysalis") != -1) {
			thisUniverse.classList.add("ChrysalisU");
		} else if (window.location.pathname.indexOf("pousse") != -1) {
			thisUniverse.classList.add("PousseU");
		} else if (window.location.pathname.indexOf("hors") != -1) {
			thisUniverse.classList.add("HorsCollecU");
		}
	}
}

/***Select background animation according to selected universe***/
export function SetBackground() {
	const thisUniverse = document.getElementById("thisUniverse");
	if (thisUniverse != null || thisUniverse != undefined) {
		if (
			window.location.pathname.indexOf("memoria") != -1 ||
			window.location.pathname.indexOf("onyria") != -1 ||
			window.location.pathname.indexOf("chrysalis") != -1 ||
			window.location.pathname.indexOf("pousse") != -1 ||
			window.location.pathname.indexOf("hors") != -1 ||
			window.location.pathname.indexOf("urbana") != -1 ||
			window.location.pathname.indexOf("folie")
		) {
			return (
				<div>
					{DustAnim()}
					{MainAnim()}
				</div>
			);
		} else if (window.location.pathname.indexOf("futuria") != -1) {
			return (
				<div>
					{DustAnim()}
					{FuturiaAnim()}
				</div>
			);
		} else if (
			window.location.pathname.indexOf("rouge") != -1 ||
			window.location.pathname.indexOf("fleur") != -1
		) {
			return (
				<div>
					{DustAnim()}
					{FleurRougeAnim()}
				</div>
			);
		}
	}
}

/*Collapsible toggling according to window width*/
export function checkWidth() {
	if (window.innerWidth >= "740") {
		return "true";
	}
}

/*Number of books diplayed in intro component depending on window width*/
export function checkWidth2(data) {
	if (window.innerWidth >= "1874") {
		let ThoselastBooks = data.data3.Livres.sort(dateSortInvert).slice(-5);
		/*Dynamic creation from Json data*/

		return (
			<div>
				<h2>Dernières Sorties </h2>
				<div className="introBooks">
					{ThoselastBooks.map((thatBook, i) =>
						LastBooks(thatBook, i, data)
					)}
				</div>
			</div>
		);
	} else {
		let ThoselastBooks = data.data3.Livres.sort(dateSortInvert).slice(-3);
		/*Dynamic creation from Json data*/
		return (
			<div>
				<h2>Dernières Sorties </h2>
				<div className="introBooks">
					{ThoselastBooks.map((thatBook, i) =>
						LastBooks(thatBook, i, data)
					)}
				</div>
			</div>
		);
	}
}
