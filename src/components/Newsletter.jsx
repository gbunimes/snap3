/******NEWSLETTER MODULE******/

/***COMPONENT***/
export default function Newsletter() {
	/*DOM*/
	return (
		<div id="News">
			<form
				action="https://noirdabsinthe.us17.list-manage.com/subscribe/post?u=0dd60cd0d2cf0c322bea5f56e&id=957c927284"
				method="post"
				target="_blank"
				noValidate
			>
				<label>
					Inscrivez-vous à notre liste de diffusion ne manquez aucune
					information.
				</label>
				<input type="email" placeholder="E-mail" required />
				<input type="submit" value="S'inscrire" className="button" />
			</form>
		</div>
	);
}
