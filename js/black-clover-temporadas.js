function mudar(valor) {
	if (valor == 0) {
		var no = document.getElementsByClassName("eps");
		if (no.parentNode) {
  			no.parentNode.removeChild(no);
		}

	} if (valor == 1) {
		var episodios = document.getElementById('episodios')

		var ep1 = document.createElement('div')
		ep1.setAttribute("class", "eps")

		var link1 = document.createElement('a')
		link1.setAttribute("id", "ep1")
		link1.setAttribute("href", "../animes/blackclover/t01e01.html")

		var tabela1 = document.createElement('table')
		var tr1 = document.createElement('tr')
		var td1 = document.createElement('td')
		var td01 = document.createElement('td')

		var img1 = document.createElement('img')
		img1.setAttribute("src", "../img/black-clover.jpg")

		var p1 = document.createElement('p')
		p1.innerHTML = "Black Clover - Episódio 01 Legendado HD"

		episodios.appendChild(ep1)
		ep1.appendChild(link1)
		link1.appendChild(tabela1)
		tabela1.appendChild(tr1)
		tr1.appendChild(td1)
		td1.appendChild(img1)
		tr1.appendChild(td01)
		td01.appendChild(p1)
	}
}