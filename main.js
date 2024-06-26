// Selecionar a imagem pelo id 
const fortuneImage = document.getElementById('fortuneImage');

// Adicionar um ouvinte de evento de clique à imagem
  fortuneImage.addEventListener('click', () => {
    // Remove a classe hide da screen2 para exibi-la
      const screen2 = document.querySelector('.screen2');
      screen2.classList.remove('hide');

    // Adiciona a classe 'hide' a screen1 para encondê-la
      const screen1 = document.querySelector('.screen1');
      screen1.classList.add('hide')
  });

// Array de frases
  const phrases = [
    "Tudo acontece por uma razão!",
    "Nunca quebre o silêncio se não for para melhorá-lo!",
    "Não diga às pessoas seus planos, mostre seus resultados!",
    "Trabalhe de forma inteligente em silêncio, deixe o sucesso fazer barulho!",
    "O olhar é o espelho da alma!",
    "Sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Só se consagram campeões àqueles que não fogem da luta e persistem no objetivo; A disciplina é, sempre recompensada, com os resultados desejados.",
    "Qualidade é tudo aquilo que melhora o produto do ponto de vista do cliente",
    "Se o 'modelo financeiro' que existe no seu subconsciente não estiver programado para o sucesso, nada que você aprenda, saiba ou faça terá grande importância.",
    "Não é o que não sabemos que nos impede de vencer, o nosso maior obstáculo é justamente o que já sabemos.",
    "Se você não nasceu sendo, treine até se tornar!",
    "Observe seus pensamentos e só alimente àqueles que te fortalecem!" ,
    "Aquilo que você focaliza se expande!",
    "A vida é 10% o que acontece com você e 90% como você reage a isso.",
    "Dinheiro fácil é igual castelo de areia na praia,onda vem e leva!",
    "Se o atalho realmente existisse se chamaria caminho.",
    "A sorte é o encontro da oportunidade com o preparo.",
    "Não existe perda, não existe fracasso... ou você ganha, ou você aprende!",
    "Mapa não é território.",
    "Mais não é mehor, melhor é melhor.",
    "Em um local onde a convicção prevalece, não há espaço para dúvidas!"
  ];

  // Função para escolher uma frase aleatoriamente do array
  function getRandomPhrase() {
    return phrases[Math.floor(Math.random() * phrases.length)];
  }

  // Função para exibir a frase aletória escolhida na screen2
    function displayRandomPhrase() {
      const screen2Phrase = document.querySelector('.screen2 p');
      screen2Phrase.textContent = getRandomPhrase();
    }

  // Chamada inicial para exibir uma frase aleatória na screen2
    displayRandomPhrase();

  // Seleciona o botão "Abrir outro biscoito"
    const openCookieButton = document.querySelector('.screen2 button');

  // Adiciona um ouvinte de evento de clique ao botão
    openCookieButton.addEventListener('click', () => {
      // exibe uma nova frse aleatória na screen2 quando o botão for clicado
        displayRandomPhrase();
    });
