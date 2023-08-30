async function obterDadosCampeoes() {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/champion.json"
  );
  const data = await response.json();
  const campeoes = Object.values(data.data);
  return campeoes;
}

async function obterDadosItens() {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.13.1/data/en_US/item.json"
  );
  const data = await response.json();
  const itens = Object.values(data.data);
  return itens;
}

function randomizar() {
  obterDadosCampeoes().then((campeoes) => {
    const campeaoIndex = Math.floor(Math.random() * campeoes.length);
    const campeao = campeoes[campeaoIndex];
    const campeaoElement = document.getElementById("campeao");
    campeaoElement.style.backgroundImage = `url('https://ddragon.leagueoflegends.com/cdn/13.13.1/img/champion/${campeao.image.full}')`;
    const nomeCampeaoElement = document.getElementById("nome-campeao");
    nomeCampeaoElement.textContent = campeao.name;
  });

  obterDadosItens().then((itens) => {
    // Filtrar apenas os itens míticos
    const itensMiticos = itens.filter((item) =>
      item.description.includes("rarityMythic")
    );

    const buildIndex1 = Math.floor(Math.random() * itensMiticos.length);
    const item = itensMiticos[buildIndex1];

    const buildElement1 = document.getElementById("item-mitico");
    buildElement1.style.backgroundImage = `url('https://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${item.image.full}')`;

    if (item.description.includes("Attack Damage")) {
      const legendaryAdItemNames = [
        "Axiom Arc",
        "Black Cleaver",
        "Blade of the Ruined King",
        "Bloodthirster",
        "Chempunk Chainsword",
        "Death's Dance",
        "Edge of Night",
        "Essence Reaver",
        "Guardian Angel",
        "Hextech Gunblade",
        "Hullbreaker",
        "Immortal Shieldbow",
        "Kraken Slayer",
        "Lord Dominik's Regards",
        "Manamune",
        "Maw of Malmortius",
        "Mercurial Scimitar",
        "Mortal Reminder",
        "Phantom Dancer",
        "Prowler's Claw",
        "Rapid Firecannon",
        "Ravenous Hydra",
        "Runaan's Hurricane",
        "Serpent's Fang",
        "Serylda's Grudge",
        "Silvermere Dawn",
        "Spear of Shojin",
        "Statikk Shiv",
        "Sterak's Gage",
        "Stormrazor",
        "The Collector",
        "Titanic Hydra",
        "Umbral Glaive",
        "Wit's End",
        "Zephyr",
      ];

      const itemLendario1 = itens.filter((item) =>
        legendaryAdItemNames.includes(item.name)
      );

      const buildIndex2 = Math.floor(Math.random() * itemLendario1.length);
      const itemLendario1Final = itemLendario1[buildIndex2];

      const buildElement2 = document.getElementById("item-lendario-1");
      buildElement2.style.backgroundImage = `url('https://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${itemLendario1Final.image.full}')`;
    }

    //Ap
    if (item.description.includes("Ability Power")) {
      const legendaryApItemNames = [
        "Archangel's Staff",
        "Ardent Censer",
        "Banshee's Veil",
        "Chemtech Putrifier",
        "Cosmic Drive",
        "Demonic Embrace",
        "Hextech Gunblade",
        "Horizon Focus",
        "Imperial Mandate",
        "Lich Bane",
        "Mejai's Soulstealer",
        "Mikael's Blessing",
        "Morellonomicon",
        "Nashor's Tooth",
        "Rabadon's Deathcap",
        "Redemption",
        "Rylai's Crystal Scepter",
        "Shadowflame",
        "Staff of Flowing Water",
        "Void Staff",
        "Zhonya's Hourglass",
      ];

      const itemLendario2 = itens.filter((item) =>
        legendaryApItemNames.includes(item.name)
      );

      console.log(itemLendario2);

      const generated = new Map();

      function gerarNovoIndice(max = 10) {
        const newId = Math.floor(Math.random() * max);

        if (generated.get(newId)) {
          return gerarNovoIndice(max);
        }
      }
    }

    // Vida
    if (item.description.includes("Health", "Armor", "Magic Resist")) {
      const legendaryTankItemNames = [
        "Abyssal Mask",
        "Anathema's Chains",
        "Dead Man's Plate",
        "Force of Nature",
        "Frozen Heart",
        "Gargoyle Stoneplate",
        "Hullbreaker",
        "Knight's Vow",
        "Randuin's Omen",
        "Redemption",
        "Silvermere Dawn",
        "Spirit Visage",
        "Sterak's Gage",
        "Sunfire Aegis",
        "Thornmail",
        "Titanic Hydra",
        "Turbo Chemtank",
        "Vigilant Wardstone",
        "Warmog's Armor",
        "Winter's Approach",
        "Zeke's Convergence",
        "Zephyr",
      ];

      const itemLendario3 = itens.filter((item) =>
        legendaryTankItemNames.includes(item.name)
      );

      /** Cria uma "tabela" para lembrar os itens já gerados */
      const generated = new Map();

      /** Gera um novo id randômico entre 0 e max. */
      function gerarNovoIndice(max = 10) {
        const newId = Math.floor(Math.random() * max);
        /** Verifica se o item gerado já existe na tabela */
        if (generated.get(newId)) {
          /**
        Se o item gerado for duplicado, tenta gerar um novo.
        Faz isso recursivamente até gerar um item ainda não gerado.
        Isso é chamado de função recursiva.
        */
          return gerarNovoIndice(max);
        }
        /**
         * Se não existir, inclui na tabela e retorna como um item válido.
         * Não preciso utilizar "else" pois o "return" dentro do "if"
         * já interrompe o fluxo.
         */
        generated.set(newId, newId);
        return newId;
      }

      /**
        Executa o processo 4 vezes (de 0 a 3)
        Como o nome dos elemtos html segue uma sequência, nós geramos o nome do item utilizando o índice,
        mas como o índice começa em 0 e os elemtnso em 1 (item-lendario-1), sempre acresnetamos 1 ao índice
        ao fazer a concatenação `item-lendario-${index + 1}`. Também poderia ser "item-lendario-" + index + 1.
        Uma string entre "backticks", dessa forma: `alguma_coisa` é conhecido como Template Literals.
    */
      for (let index = 0; index < 4; index++) {
        const item =
          itemLendario3[gerarNovoIndice(legendaryTankItemNames.length)];
        const el = document.getElementById(`item-lendario-${index + 1}`);
        el.style.backgroundImage = `url('https://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${item.image.full}')`;
      }
    }
  });
}
