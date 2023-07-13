/******MODALS******/

/***COMPONENTS***/
import Form from "./Form";
import Newsletter from "./Newsletter";

/***COMPONENT***/
/*Hide target when modal is open*/
export function getModal(data, id) {
	/*Create mailto from Json*/
	const ThatMail = "mailto:" + data.data2.nda.mail;

	/*About modal*/
	if (id.includes("1")) {
		return (
			<div>
				<h1>{data.data2 ? data.data2.apropos.titre : "loading..."}</h1>
				<p> {data.data2 ? data.data2.apropos.P1 : "loading..."}</p>
				<p> {data.data2 ? data.data2.apropos.P2 : "loading..."}</p>
				<p> {data.data2 ? data.data2.apropos.P3 : "loading..."}</p>
				<p> {data.data2 ? data.data2.apropos.P4 : "loading..."}</p>
				<p> {data.data2 ? data.data2.apropos.P5 : "loading..."}</p>
				<img
					src={
						data.data1.UimgLinks.IL0 +
						data.data1.ressources.logo1 +
						data.data1.UimgLinks.IL1B
					}
					className=" logo img-responsive page-scroll modalImg aProposImg"
					href="#page-top"
					alt={"Logo de " + data.data1.nom}
				/>{" "}
			</div>
		);
	}
	/*Contact Form modal*/
	if (id.includes("2")) {
		return (
			<div>
				<img
					src={
						data.data1.UimgLinks.IL0 +
						data.data1.ressources.logo1 +
						data.data1.UimgLinks.IL1B
					}
					className=" logo img-responsive page-scroll authorLogo"
					href="#page-top"
					alt={data.data1.nom}
				/>{" "}
				<h1>{data.data2 ? data.data2.contact.titre : "loading..."}</h1>
				<Form />
				<p>{data.data2 ? data.data2.contact.P1 : "loading..."}</p>
				<p> {data.data2 ? data.data2.contact.P2 : "loading..."}</p>
				<p> {data.data2 ? data.data2.contact.P3 : "loading..."}</p>
				<p> {data.data2 ? data.data2.contact.P4 : "loading..."}</p>
				<p> {data.data2 ? data.data2.contact.P5 : "loading..."}</p>
				{/*Newsletter*/}
				<Newsletter />
				{/* Mail*/}
				<li>
					<a href={ThatMail}>
						<p className="Pcenter">
							{data.data2 ? data.data2.nda.mail : "loading..."}
						</p>
					</a>
				</li>
				{/*Social Logo & Links*/}
				<ul className="contactList">
					<li>
						<a
							href={data.data2 ? data.data2.nda.FB : "loading..."}
							target="_blank"
							className="fb"
						>
							<i
								className={
									data.data1
										? data.data1.ressources.logoFB
										: "loading..."
								}
								aria-hidden="true"
							></i>
						</a>
					</li>

					<li>
						<a
							href={data.data2 ? data.data2.nda.TW : "loading..."}
							target="_blank"
						>
							<i
								className={
									data.data1
										? data.data1.ressources.logoTW
										: "loading..."
								}
								aria-hidden="true"
							></i>
						</a>
					</li>

					<li>
						<a
							href={data.data2 ? data.data2.nda.IG : "loading..."}
							target="_blank"
						>
							<i
								className={
									data.data1
										? data.data1.ressources.logoIG
										: "loading..."
								}
								aria-hidden="true"
							></i>
						</a>
					</li>

					<li>
						<a
							href={data.data2 ? data.data2.nda.YT : "loading..."}
							target="_blank"
						>
							<i
								className={
									data.data1
										? data.data1.ressources.logoYT
										: "loading..."
								}
								aria-hidden="true"
							></i>
						</a>
					</li>
				</ul>
			</div>
		);
	}
	/*Manuscripts & text submissions modal*/
	if (id.includes("3")) {
		return (
			<div>
				<h1>
					{data.data2 ? data.data2.manuscrits.titre : "loading..."}
				</h1>
				<p className="Pcenter">
					{data.data2 ? data.data2.manuscrits.P1 : "loading..."}
				</p>
				<p> {data.data2 ? data.data2.manuscrits.P2 : "loading..."}</p>
				<p> {data.data2 ? data.data2.manuscrits.P3 : "loading..."}</p>
				<p> {data.data2 ? data.data2.manuscrits.P4 : "loading..."}</p>
				<p> {data.data2 ? data.data2.manuscrits.P5 : "loading..."}</p>
				<img
					src={
						data.data1.UimgLinks.IL0 +
						data.data1.ressources.logo1 +
						data.data1.UimgLinks.IL1B
					}
					className=" logo img-responsive page-scroll authorLogo modalImg"
					href="#page-top"
					alt={data.data1 ? data.data1.nom : "loading..."}
				/>{" "}
			</div>
		);
	}
	/*Press modal*/
	if (id.includes("4")) {
		return (
			<div>
				<h1>{data.data2 ? data.data2.presse.titre : "loading..."}</h1>
				<p>{data.data2 ? data.data2.presse.P1 : "loading..."}</p>
				<p> {data.data2 ? data.data2.presse.P2 : "loading..."}</p>
				<p> {data.data2 ? data.data2.presse.P3 : "loading..."}</p>
				<a href={ThatMail}>
					<p className="Pcenter">
						{data.data2 ? data.data2.nda.mail : "loading..."}
					</p>
				</a>
				<p> {data.data2 ? data.data2.presse.P4 : "loading..."}</p>
				<p> {data.data2 ? data.data2.presse.P5 : "loading..."}</p>
				<img
					src={
						data.data1.UimgLinks.IL0 +
						data.data1.ressources.logo1 +
						data.data1.UimgLinks.IL1B
					}
					className=" logo img-responsive page-scroll authorLogo modalImg"
					href="#page-top"
					alt={data.data1 ? data.data1.nom : "loading..."}
				/>{" "}
			</div>
		);
	}

	if (id.includes("5")) {
		return (
			<div>
				<h1>{data.data2 ? data.data2.mentions.titre : "loading..."}</h1>
				<div className="paraMentions">
					<p>{data.data1 ? data.data1.nom : "loading..."}</p>
					<p>{data.data2 ? data.data2.mentions.P1 : "loading..."}</p>
					<p> {data.data2 ? data.data2.mentions.P2 : "loading..."}</p>
					<p> {data.data2 ? data.data2.mentions.P3 : "loading..."}</p>
				</div>
				<div className="paraMentions">
					<a href={ThatMail}>
						<p>{data.data2 ? data.data2.nda.mail : "loading..."}</p>
					</a>
					<p>{data.data2 ? data.data2.nda.tel : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<p> {data.data2 ? data.data2.mentions.P4 : "loading..."}</p>
					<p> {data.data2 ? data.data2.mentions.P5 : "loading..."}</p>
				</div>
				<div className="Pcenter2">
					<p> {data.data2 ? data.data2.mentions.P6 : "loading..."}</p>

					<span className="Pinline">
						<p className="">
							{" "}
							{data.data2 ? data.data2.mentions.P7 : "loading..."}
						</p>

						<a
							href={
								data.data2 ? data.data2.nda.Tiphs : "loading..."
							}
							target="_blank"
						>
							<p className="CreatorLink">
								{data.data2
									? data.data2.mentions.P8
									: "loading..."}
							</p>
						</a>
					</span>
				</div>
				<div className="Pcenter2 Pcenter2Bis">
					<span className="Pinline">
						<p className="">
							{" "}
							{data.data2 ? data.data2.mentions.P9 : "loading..."}
						</p>

						<a
							href={
								data.data2 ? data.data2.nda.Dev : "loading..."
							}
							target="_blank"
						>
							<p className="CreatorLink">
								{data.data2.mentions.P10 + "."}
							</p>
						</a>
					</span>
				</div>
			</div>
		);
	}
	/*Confidentiality modal*/
	if (id.includes("6")) {
		return (
			<div>
				<h1>
					{data.data2
						? data.data2.confidentiality.titre
						: "loading..."}
				</h1>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2
							? data.data2.confidentiality.T1
							: "loading..."}
					</h2>
					<p>
						{data.data2
							? data.data2.confidentiality.T1a
							: "loading..."}
					</p>
					<p>
						{data.data2
							? data.data2.confidentiality.T1b
							: "loading..."}
					</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2
							? data.data2.confidentiality.T2
							: "loading..."}
					</h2>
					<p>
						{data.data2
							? data.data2.confidentiality.T2a
							: "loading..."}
					</p>
					<p>
						{data.data2
							? data.data2.confidentiality.T2b
							: "loading..."}
					</p>
					<p>
						{data.data2
							? data.data2.confidentiality.T2c
							: "loading..."}
					</p>
					<p>
						{data.data2
							? data.data2.confidentiality.T2d
							: "loading..."}
					</p>
					<p>
						{data.data2
							? data.data2.confidentiality.T2e
							: "loading..."}
					</p>
					<p>
						{data.data2
							? data.data2.confidentiality.T2f
							: "loading..."}
					</p>
					<p>
						{data.data2
							? data.data2.confidentiality.T2g
							: "loading..."}
					</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2
							? data.data2.confidentiality.T3
							: "loading..."}
					</h2>
					<p>
						{data.data2
							? data.data2.confidentiality.T3a
							: "loading..."}
					</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2
							? data.data2.confidentiality.T4
							: "loading..."}
					</h2>
					<p>
						{data.data2
							? data.data2.confidentiality.T4a
							: "loading..."}
					</p>
					<p>
						{data.data2
							? data.data2.confidentiality.T4b
							: "loading..."}
					</p>
					<p>
						{data.data2
							? data.data2.confidentiality.T4c
							: "loading..."}
					</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2
							? data.data2.confidentiality.T5
							: "loading..."}
					</h2>
					<p>
						{data.data2
							? data.data2.confidentiality.T5a
							: "loading..."}
					</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2
							? data.data2.confidentiality.T6
							: "loading..."}
					</h2>
					<p>
						{data.data2
							? data.data2.confidentiality.T6a
							: "loading..."}
					</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2
							? data.data2.confidentiality.T7
							: "loading..."}
					</h2>
					<p>
						{data.data2
							? data.data2.confidentiality.T7a
							: "loading..."}
					</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2
							? data.data2.confidentiality.T8
							: "loading..."}
					</h2>
					<p>
						{data.data2
							? data.data2.confidentiality.T8a
							: "loading..."}
					</p>
				</div>
			</div>
		);
	}
	/*CGV modal*/
	if (id.includes("7")) {
		return (
			<div>
				<h1>{data.data2 ? data.data2.CGV.titre : "loading..."}</h1>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T1 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T1a : "loading..."}</p>
					<p>{data.data2 ? data.data2.CGV.T1b : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T2 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T2a : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T3 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T3a : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T4 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T4a : "loading..."}</p>
					<p>{data.data2 ? data.data2.CGV.T4b : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T5 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T5a : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T6 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T6a : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T7 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T7a : "loading..."}</p>
					<p>{data.data2 ? data.data2.CGV.T7b : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T8 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T8a : "loading..."}</p>
					<p>{data.data2 ? data.data2.CGV.T8b : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T9 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T9a : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T10 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T10a : "loading..."}</p>
					<p>{data.data2 ? data.data2.CGV.T10b : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T11 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T11a : "loading..."}</p>
				</div>

				<div className="paraMentions">
					<h2 className="leftTitle">
						{data.data2 ? data.data2.CGV.T12 : "loading..."}
					</h2>
					<p>{data.data2 ? data.data2.CGV.T12a : "loading..."}</p>
				</div>
			</div>
		);
	}
}
