let musica = document.querySelector('audio');
let indexMusica = 0;

duracaoMusica = document.querySelector('.fim');
imagemArtista = document.querySelector('img');
nomeMusica = document.querySelector('.nome-musica');
nomeBanda = document.querySelector('.nome-banda');

atualizarInfo(indexMusica);
//duracaoMusica.textContent = formatacaoMinutoSegundo(Math.floor(musica.duration)) nao precisa mais pq ela esta contifa
//nessa funcao atualizar info..



//EVENTOS
let btnPlay = document.getElementById('play').addEventListener('click',tocarMusica)

let btnPause = document.getElementById('pause').addEventListener('click',pararMusica)


//OUTRA FORMA DE DECLARAR UM EVENTO( MESMA COISA QUE O DE CIMA)!!
document.querySelector('.voltarMusica').addEventListener('click', () =>{
	indexMusica--;
	if(indexMusica<0){
		indexMusica=0
	}
	atualizarInfo(indexMusica);
	document.querySelector('progress').style.width = '0%';
})

document.querySelector('.passarMusica').addEventListener('click', () =>{
	indexMusica++;
	if(indexMusica>2){
		indexMusica=2
	}
	atualizarInfo(indexMusica);
	document.querySelector('progress').style.width = '0%';
	

})


musica.addEventListener('timeupdate', atualizarBarra);




//FUNÇÕES
function atualizarInfo(index){
	musica.setAttribute('src',listaMusicas[index].src)
	console.log(listaMusicas[index].src)
		
		musica.addEventListener('loadeddata',() =>{
			nomeBanda.textContent = listaMusicas[index].banda;
			nomeMusica.textContent = listaMusicas[index].titulo;
			imagemArtista.src = listaMusicas[index].img;
			duracaoMusica.textContent = formatacaoMinutoSegundo(Math.floor(musica.duration))


		});

}

function tocarMusica(){

	musica.play();
	document.querySelector('#pause').style.display = 'block';
	document.querySelector('#play').style.display = 'none';

}

function pararMusica(){
	musica.pause();
	document.querySelector('#pause').style.display = 'none';
	document.querySelector('#play').style.display = 'block';
}

function atualizarBarra(){
	let barra = document.querySelector('progress');//seleciona a tag progress (<progress> .....</progress>)


	let tempoTotal = musica.duration; // duration pega a suracao do audio em segundos

	let estadoAtual = musica.currentTime; //currentTime pega a minutagem momentanea da musica 

	let porcentagem_progresso = (estadoAtual/tempoTotal)*100;// pegamos a porcentagem da musica ja percorrida

	console.log(porcentagem_progresso)
	
	barra.style.width = (porcentagem_progresso)+"%";

	let tempoDecorrido = document.querySelector('.inicio')

	tempoDecorrido.textContent = formatacaoMinutoSegundo(Math.floor(musica.currentTime));
}


function formatacaoMinutoSegundo(segundos){
	let campoMinutos = Math.floor(segundos/60);
	let campoSegundos = segundos%60;

	if(campoSegundos<10){
		campoSegundos = '0'+campoSegundos;
	}

	return campoMinutos + ':' +campoSegundos

}

