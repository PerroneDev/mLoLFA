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
      const legendaryItemNames = [
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
        legendaryItemNames.includes(item.name)
      );

      const buildIndex2 = Math.floor(Math.random() * itemLendario1.length);
      const itemLendario1Final = itemLendario1[buildIndex2];

      const buildElement2 = document.getElementById("item-lendario-1");
      buildElement2.style.backgroundImage = `url('https://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${itemLendario1Final.image.full}')`;
    }
  });
}
