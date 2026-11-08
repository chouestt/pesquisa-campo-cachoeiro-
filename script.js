const API =
"https://script.google.com/macros/s/AKfycbyQIjaKeePKqQjchfLqqPBOZCbbseQZfZtFyzxZ-un-TP6t3B6av3OuQh6hg2k0-mFkpw/exec";

const META = 5;

const locais = {

estrela: {
nome: "Campo Estrela – Estádio Mário Monteiro (Sumaré)",
imagem: "https://files.ndeal.app/api/images/proxy?format=webp&quality=100&src=https://www.netdeal.com.br/api/images/producao.spayce.com.br/1774892941411_2021_09_02_estadio_do_sumare_pode_ir_a_leilao_em_cachoeiro_595145_article.jpg",
texto: `
O Estrela do Norte Futebol Clube é uma das instituições esportivas mais tradicionais de Cachoeiro de Itapemirim.

Fundado em 16 de janeiro de 1916, o clube construiu uma história marcada pela paixão pelo futebol e pela identificação com a cidade.

Seu estádio, conhecido como Sumaré, é um símbolo dessa trajetória e palco de importantes momentos do futebol cachoeirense.
`
},

palacio: {
nome: "Palácio Bernardino Monteiro",
imagem: "https://cdn.esbrasil.com.br/wp-content/uploads/2025/10/palacio-bernardino-monteiro-1.jpg",
texto: `
Inaugurado em 1913 para abrigar o Grupo Escolar Bernardino Monteiro, o edifício é um dos patrimônios arquitetônicos mais importantes de Cachoeiro de Itapemirim.

Com sua arquitetura imponente, o palácio testemunhou diferentes períodos da história da cidade, tendo servido também como sede da Prefeitura Municipal.

Atualmente, é um espaço dedicado à cultura, à memória e à preservação da história cachoeirense.
`
},

mercado: {
nome: "Mercado Municipal",
imagem: "https://diaadiaes.com.br/wp-content/uploads/2021/02/mercado-municipal.jpg",
texto: `
O Mercado Municipal faz parte da memória comercial de Cachoeiro de Itapemirim.

Com sua construção marcada pela data de 1921 na fachada, o espaço representa uma época em que os mercados tinham papel fundamental no abastecimento e na movimentação econômica das cidades.

Ao longo de sua história, tornou-se parte da identidade do centro cachoeirense, preservando a lembrança das relações comerciais e do cotidiano de seus moradores.
`
},

gilberto: {
nome: "Praça Gilberto Machado",
imagem: "https://espiritosantonoticias.com.br/wp-content/uploads/2020/07/sdgsdgd-1.jpg",
texto: `
A Praça Gilberto Machado é um dos espaços de convivência de Cachoeiro de Itapemirim e também possui um significado especial para a comunidade Pokémon GO.

Ao longo dos anos, tornou-se ponto de encontro de treinadores para participar de eventos, batalhas e grandes caçadas.

Mais do que reunir jogadores, o local foi cenário de amizades, conversas, risadas e momentos que ultrapassaram o universo do jogo.

São encontros que transformaram um espaço da cidade em parte da história e das memórias da nossa comunidade.
`
},

jeronimo: {
nome: "Praça Jerônimo Monteiro",
imagem: "https://www.ferias.tur.br/imgs/1839/cachoeirodeitapemirim/g_praca-jeronimo-monteiro-em-cachoeiro-de-itapemirim-es-fotoricardo-louzada.jpg",
texto: `
A Praça Jerônimo Monteiro é um dos lugares mais tradicionais de Cachoeiro de Itapemirim e ocupa um espaço especial na história da PoGo Cachoeiro.

Há mais de quatro anos, o local reúne treinadores durante os Dias Comunitários, em encontros marcados por capturas, trocas, muitas risadas e boas resenhas.

Também foi palco de diversas Lure Parties, que transformaram tardes comuns em momentos de diversão e integração.

Entre um Pokémon e outro, foram construídas amizades e lembranças que fazem desse espaço muito mais do que um ponto de encontro: fazem dele parte da história da nossa comunidade.
`
},

luz: {
nome: "Mural Luz del Fuego",
imagem: "https://caminhagente.com.br/wp-content/uploads/2020/10/DSC_0266.jpg",
texto: `
Dora Vivacqua, conhecida artisticamente como Luz del Fuego, nasceu em Cachoeiro de Itapemirim, em 1917, e tornou-se uma mulher à frente de seu tempo.

Artista, dançarina, escritora e defensora do naturismo e dos direitos dos animais, enfrentou preconceitos e rompeu padrões sociais em uma época em que a liberdade feminina era bastante limitada.

Sua personalidade forte, sua coragem e sua luta por aquilo em que acreditava fizeram dela uma figura marcante da história brasileira.

Em 2019, sua memória foi eternizada em um grande mural na Rua Rui Barbosa, obra do artista Rudson Costa, celebrando uma cachoeirense que nunca teve medo de ser diferente.
`
},
teatro: {
nome: "Teatro Rubem Braga",
imagem: "https://esbrasil.com.br/wp-content/uploads/2020/04/teatro.jpg",
texto: `
O Teatro Municipal Rubem Braga é um importante espaço cultural de Cachoeiro de Itapemirim, dedicado à valorização das artes e da cultura.

Com seu nome em homenagem ao famoso cronista cachoeirense Rubem Braga, o teatro recebe apresentações artísticas, espetáculos e eventos culturais, contribuindo para a vida cultural do município.
`
},

estacao: {
nome: "Estação Ferroviária de Cachoeiro de Itapemirim",
imagem: [
  "https://www.estacoesferroviarias.com.br/efl_rj_litoral/fotos/cachoeiro9501.jpg",
  "https://www.estacoesferroviarias.com.br/efl_rj_litoral/fotos/cachoeiro052.jpg"
],
texto: `
A Estação Ferroviária de Cachoeiro de Itapemirim teve papel importante no desenvolvimento econômico e urbano da cidade.

A chegada da ferrovia facilitou o transporte de pessoas e mercadorias, contribuindo especialmente para o crescimento da economia cafeeira e para a ligação de Cachoeiro com outras regiões do Espírito Santo.
`
}

};

const params = new URLSearchParams(window.location.search);
const localId = params.get("local");
const local = locais[localId];

if (local) {

  document.getElementById("conteudo").innerHTML = `
    <h2>${local.nome}</h2>
    <img src="${local.imagem}" alt="${local.nome}">
    <p>${local.texto.trim().replace(/\n\s*\n/g, "</p><p>")}</p>
  `;

} else {

  document.getElementById("conteudo").innerHTML = `
    <h2>🔬 Pesquisa de Campo</h2>
    <p>Escaneie um QR Code para iniciar sua Pesquisa de Campo.</p>
  `;

}

function registrar() {

  if (!local) {
    alert("Abra a página através de um QR Code válido.");
    return;
  }

  const nick = document.getElementById("nick").value.trim();

  if (!nick) {
    alert("Digite seu Nick Pokémon GO.");
    return;
  }

  const msg = document.getElementById("msg");
  msg.innerHTML = "⏳ Registrando...";

  fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify({
      nick: nick,
      local: local.nome
    })
  })
  .then(r => r.json())
  .then(d => {

    if (d.status === "erro") {
      msg.innerHTML = "❌ Erro: " + d.mensagem;
      return;
    }

    if (d.status === "duplicado") {
      msg.innerHTML = "⚠️ Você já registrou este local.";
      return;
    }

    if (d.concluido) {
      msg.innerHTML = `
        🎉 Pesquisa de Campo Concluída!<br><br>
        Você visitou ${META} locais históricos.<br><br>
        Apresente esta tela à organização para ganhar seu giro na roleta.
      `;
    } else {
      msg.innerHTML = `
        ✅ Pesquisa registrada!<br><br>
        Progresso: ${d.pontos}/${META}
      `;
    }

  })

  .catch(err => {
    console.error(err);
    msg.innerHTML = "❌ Erro ao registrar pesquisa.";
  });

}