const gearData = {
  magic: {
    empty1: null,
    helmet: { obtained: false, image: 'https://runescape.wiki/images/Elite_tectonic_mask.png?19656' },
    pocket: { obtained: false, image: "https://runescape.wiki/images/Erethdor%27s_grimoire_%28token%29.png?d18a8" },
    cape: { obtained: false, image: "https://runescape.wiki/images/Igneous_Kal-Ket.png?e34c7" },
    amulet: { obtained: false, image: 'https://runescape.wiki/images/Essence_of_Finality_amulet_%28blue%29.png?77834' },
    ammunition: null,
    weapon: { obtained: false, image: 'https://runescape.wiki/images/Fractured_Staff_of_Armadyl.png?50e28' },
    body: { obtained: false, image: 'https://runescape.wiki/images/Elite_tectonic_robe_top.png?c2107' },
    offhand: null,
    empty2: null,
    legs: { obtained: false, image: 'https://runescape.wiki/images/Elite_tectonic_robe_bottom.png?c2107' },
    empty3: null,
    gloves: { obtained: false, image: 'https://runescape.wiki/images/Masterwork_magic_gloves.png?a406e' },
    boots: { obtained: false, image: 'https://runescape.wiki/images/Masterwork_magic_boots.png?08a82' },
    ring: { obtained: false, image: "https://runescape.wiki/images/Reaver%27s_ring.png?973ed" }
  },
  ranged: {
    empty1: null, empty2: null, empty3: null,
    helmet: { name: 'Pernix Cowl', obtained: false, image: 'https://runescape.wiki/images/Pernix_cowl.png?cdf2c' },
    weapon: { name: 'Noxious Longbow', obtained: false, image: 'https://runescape.wiki/images/Noxious_longbow.png?d4e2c' }
  },
  melee: {
    empty1: null, empty2: null, empty3: null,
    helmet: { name: 'Torva Full Helm', obtained: false, image: 'https://runescape.wiki/images/Torva_full_helm.png?62a9e' },
    weapon: { name: 'Noxious Scythe', obtained: false, image: 'https://runescape.wiki/images/Noxious_Scythe.png' }
  },
  necromancy: {
    empty1: null,
    helmet: { name: 'Elite tectonic mask', obtained: false, image: 'https://runescape.wiki/images/Elite_tectonic_mask.png?19656' },
    pocket: { name: "Erethdor's grimoire", obtained: false, image: "https://runescape.wiki/images/Erethdor%27s_grimoire_%28token%29.png?d18a8" },
    cape: { name: "Igneous Kal-Ket", obtained: false, image: "https://runescape.wiki/images/Igneous_Kal-Ket.png?e34c7" },
    amulet: { name: 'Essence of Finality', obtained: false, image: 'https://runescape.wiki/images/Essence_of_Finality_amulet_%28blue%29.png?77834' },
    ammunition: null,
    weapon: { name: 'Fractured Staff of Armadyl', obtained: false, image: 'https://runescape.wiki/images/Fractured_Staff_of_Armadyl.png?50e28' },
    body: { name: 'Elite tectonic robe top', obtained: false, image: 'https://runescape.wiki/images/Elite_tectonic_robe_top.png?c2107' },
    offhand: null,
    empty2: null,
    legs: { name: 'Elite robe bottom', obtained: false, image: 'https://runescape.wiki/images/Elite_tectonic_robe_bottom.png?c2107' },
    empty3: null,
    gloves: { name: 'Masterwork magic gloves', obtained: false, image: 'https://runescape.wiki/images/Masterwork_magic_gloves.png?a406e' },
    boots: { name: 'Masterwork magic boots', obtained: false, image: 'https://runescape.wiki/images/Masterwork_magic_boots.png?08a82' },
    ring: { name: "Reaver's ring", obtained: false, image: "https://runescape.wiki/images/Reaver%27s_ring.png?973ed" }
  }
};

const savedData = localStorage.getItem('gearData');
if (savedData) Object.assign(gearData, JSON.parse(savedData));

// Define strict slot order to match RS equipment layout
const slotOrder = [
  'empty1', 'helmet', 'pocket',
  'cape', 'amulet', 'ammunition',
  'weapon', 'body', 'offhand',
  'empty2', 'legs', 'empty3',
  'gloves', 'boots', 'ring'
];

function renderTab(tab) {
  const container = document.getElementById(tab);
  container.innerHTML = '';
  const slots = gearData[tab];

  slotOrder.forEach(slot => {
    const slotDiv = document.createElement('div');
    slotDiv.className = 'slot';

    const item = slots?.[slot];
    if (item) {
      slotDiv.classList.add(item.obtained ? 'obtained' : 'unobtained');

      const img = document.createElement('img');
      img.src = item.image;
      img.onclick = () => toggleObtained(tab, slot);

      slotDiv.appendChild(img);
    } else {
      slotDiv.classList.add('empty');
    }

    container.appendChild(slotDiv);
  });
}

function toggleObtained(tab, slot) {
  gearData[tab][slot].obtained = !gearData[tab][slot].obtained;
  localStorage.setItem('gearData', JSON.stringify(gearData));
  renderTab(tab);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tabs li').forEach(li => {
    li.addEventListener('click', () => {
      const tab = li.getAttribute('data-tab');
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tabs li').forEach(l => l.classList.remove('active'));

      document.getElementById(tab).classList.add('active');
      li.classList.add('active');
      renderTab(tab);
    });
  });

  ['magic', 'ranged', 'melee', 'necromancy'].forEach(tab => renderTab(tab));
});
