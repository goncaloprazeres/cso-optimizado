const horas = document.getElementById('horas');
const countdownNatal = document.getElementById('countdownNatal');

const CountDownToNatal = () => {
	const date = new Date();
	const now = date.getTime();
	const natal = new Date(`Dec 25, ${date.getFullYear()} 00:00:00`).getTime();
	const dataformat = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
	horas.innerHTML = `<h3><b>Data de hoje:</b> ${dataformat}</h3>`;

	const cdNatal = natal - now;
	if (cdNatal <= 0) return (countdownNatal.innerHTML = `<h2>Já estamos no natal!</h2>`);

	let days = Math.floor(cdNatal / (1000 * 60 * 60 * 24));
    let hours = Math.floor((cdNatal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((cdNatal % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((cdNatal % (1000 * 60)) / 1000);

	countdownNatal.innerHTML = `<h2>Faltam <span>${days}d:${hours}h:${minutes}m:${seconds}s</span> para o natal!</h2>`;
};

setInterval(() => {
	CountDownToNatal();
}, 1000);
