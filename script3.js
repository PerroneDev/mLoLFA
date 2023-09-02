async function obterDadosCampeoes() {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.17.1/data/en_US/champion.json"
  );
  const data = await response.json();
  const campeoes = Object.values(data.data);
  return campeoes;
}

async function obterDadosItens() {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.17.1/data/en_US/item.json"
  );
  const data = await response.json();
  const itens = Object.values(data.data);
  return itens;
}

function randomizar() {
  for (let index = 0; index < 4; index++) {
    const elSecond = document.getElementById(`item-lendario-${index + 1}`);
    const elResto = document.getElementById(`item-mitico`, `bota`);
    elSecond.style.backgroundImage = "none";
    elResto.style.backgroundImage = "none";
  }

  obterDadosCampeoes().then((campeoes) => {
    const campeaoIndex = Math.floor(Math.random() * campeoes.length);
    const campeao = campeoes[campeaoIndex];
    const campeaoElement = document.getElementById("campeao");
    campeaoElement.style.backgroundImage = `url('https://ddragon.leagueoflegends.com/cdn/13.17.1/img/champion/${campeao.image.full}')`;
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
    buildElement1.style.backgroundImage = `url('https://ddragon.leagueoflegends.com/cdn/13.17.1/img/item/${item.image.full}')`;

    const itensLendarios = [
      { nome: "Abyssal Mask", tipo: ["tank"] },
      { nome: "Anathema's Chains", tipo: ["tank", "ad"] },
      { nome: "Dead Man's Plate", tipo: ["tank"] },
      { nome: "Force of Nature", tipo: ["tank"] },
      { nome: "Frozen Heart", tipo: ["tank"] },
      { nome: "Gargoyle Stoneplate", tipo: ["tank"] },
      { nome: "Hullbreaker", tipo: ["tank", "ad"] },
      { nome: "Knight's Vow", tipo: ["tank"] },
      { nome: "Randuin's Omen", tipo: ["tank"] },
      { nome: "Redemption", tipo: ["tank", "ap"] },
      { nome: "Silvermere Dawn", tipo: ["tank", "ad"] },
      { nome: "Spirit Visage", tipo: ["tank"] },
      { nome: "Sterak's Gage", tipo: ["tank", "ad"] },
      { nome: "Sunfire Aegis", tipo: ["tank"] },
      { nome: "Thornmail", tipo: ["tank"] },
      { nome: "Titanic Hydra", tipo: ["tank", "ad"] },
      { nome: "Turbo Chemtank", tipo: ["tank"] },
      { nome: "Vigilant Wardstone", tipo: ["tank", "ad", "ap"] },
      { nome: "Warmog's Armor", tipo: ["tank"] },
      { nome: "Winter's Approach", tipo: ["tank"] },
      { nome: "Zeke's Convergence", tipo: ["tank"] },
      { nome: "Archangel's Staff", tipo: ["ap"] },
      { nome: "Ardent Censer", tipo: ["ap"] },
      { nome: "Banshee's Veil", tipo: ["tank", "ap"] },
      { nome: "Chemtech Putrifier", tipo: ["ap"] },
      { nome: "Cosmic Drive", tipo: ["ap"] },
      { nome: "Demonic Embrace", tipo: ["ap"] },
      { nome: "Horizon Focus", tipo: ["ap"] },
      { nome: "Imperial Mandate", tipo: ["ap"] },
      { nome: "Lich Bane", tipo: ["ap", "ad"] },
      { nome: "Mejai's Soulstealer", tipo: ["ap"] },
      { nome: "Mikael's Blessing", tipo: ["ap"] },
      { nome: "Morellonomicon", tipo: ["ap"] },
      { nome: "Nashor's Tooth", tipo: ["ap", "ad"] },
      { nome: "Rabadon's Deathcap", tipo: ["ap"] },
      { nome: "Rylai's Crystal Scepter", tipo: ["ap"] },
      { nome: "Shadowflame", tipo: ["ap"] },
      { nome: "Staff of Flowing Water", tipo: ["ap"] },
      { nome: "Void Staff", tipo: ["ap"] },
      { nome: "Zhonya's Hourglass", tipo: ["ap", "ad", "tank"] },
      { nome: "Axiom Arc", tipo: ["ad"] },
      { nome: "Black Cleaver", tipo: ["ad", "tank"] },
      { nome: "Blade of the Ruined King", tipo: ["ad"] },
      { nome: "Bloodthirster", tipo: ["ad"] },
      { nome: "Chempunk Chainsword", tipo: ["ad", "tank"] },
      { nome: "Death's Dance", tipo: ["ad", "tank"] },
      { nome: "Edge of Night", tipo: ["ad"] },
      { nome: "Essence Reaver", tipo: ["ad"] },
      { nome: "Guardian Angel", tipo: ["ad", "tank"] },
      { nome: "Immortal Shieldbow", tipo: ["ad"] },
      { nome: "Kraken Slayer", tipo: ["ad"] },
      { nome: "Lord Dominik's Regards", tipo: ["ad"] },
      { nome: "Manamune", tipo: ["ad"] },
      { nome: "Maw of Malmortius", tipo: ["ad"] },
      { nome: "Mercurial Scimitar", tipo: ["ad"] },
      { nome: "Mortal Reminder", tipo: ["ad"] },
      { nome: "Phantom Dancer", tipo: ["ad"] },
      { nome: "Prowler's Claw", tipo: ["ad"] },
      { nome: "Rapid Firecannon", tipo: ["ad"] },
      { nome: "Ravenous Hydra", tipo: ["ad", "tank"] },
      { nome: "Runaan's Hurricane", tipo: ["ad"] },
      { nome: "Serpent's Fang", tipo: ["ad"] },
      { nome: "Serylda's Grudge", tipo: ["ad"] },
      { nome: "Spear of Shojin", tipo: ["ad"] },
      { nome: "Statikk Shiv", tipo: ["ad"] },
      { nome: "Stormrazor", tipo: ["ad"] },
      { nome: "The Collector", tipo: ["ad", "tank", "ap"] },
      { nome: "Umbral Glaive", tipo: ["ad"] },
      { nome: "Wit's End", tipo: ["ad", "tank"] },
    ];

    if (item.description.includes("Attack Damage")) {
      const itensAdFiltrados = itensLendarios.filter((itemAd) =>
        itemAd.tipo.includes("ad")
      );
      const itemLendario = itens.filter((item) =>
        itensAdFiltrados.some((itemAd) => itemAd.nome === item.name)
      );
      const generated = new Map();

      function gerarNovoIndice(max = 10) {
        const newId = Math.floor(Math.random() * max);
        if (generated.get(newId)) {
          return gerarNovoIndice(max);
        }
        generated.set(newId, newId);
        return newId;
      }

      for (let index = 0; index < 4; index++) {
        const itemLF = itemLendario[gerarNovoIndice(itensAdFiltrados.length)];
        const el = document.getElementById(`item-lendario-${index + 1}`);
        el.style.backgroundImage = `url('https://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${itemLF.image.full}')`;
      }
    }

    if (item.description.includes("Ability Power")) {
      const itensApFiltrados = itensLendarios.filter((itemAp) =>
        itemAp.tipo.includes("ap")
      );

      const itemLendario = itens.filter((item) =>
        itensApFiltrados.some((itemAp) => itemAp.nome === item.name)
      );
      const generated = new Map();

      function gerarNovoIndice(max = 10) {
        const newId = Math.floor(Math.random() * max);
        if (generated.get(newId)) {
          return gerarNovoIndice(max);
        }
        generated.set(newId, newId);
        return newId;
      }

      for (let index = 0; index < 4; index++) {
        const itemLF = itemLendario[gerarNovoIndice(itensApFiltrados.length)];
        const el = document.getElementById(`item-lendario-${index + 1}`);
        el.style.backgroundImage = `url('https://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${itemLF.image.full}')`;
      }
    }

    if (
      item.description.includes("Base Health Regen") ||
      item.description.includes("Armor")
    ) {
      const itensTankFiltrados = itensLendarios.filter((itemTank) =>
        itemTank.tipo.includes("tank")
      );

      const itemLendario = itens.filter((item) =>
        itensTankFiltrados.some((itemAp) => itemAp.nome === item.name)
      );
      const generated = new Map();

      function gerarNovoIndice(max = 10) {
        const newId = Math.floor(Math.random() * max);
        if (generated.get(newId)) {
          return gerarNovoIndice(max);
        }
        generated.set(newId, newId);
        return newId;
      }

      for (let index = 0; index < 4; index++) {
        const itemLF = itemLendario[gerarNovoIndice(itensTankFiltrados.length)];
        const el = document.getElementById(`item-lendario-${index + 1}`);
        el.style.backgroundImage = `url('https://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${itemLF.image.full}')`;
      }
    }
  });
}
