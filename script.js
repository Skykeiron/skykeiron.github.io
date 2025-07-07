const slotOrder = [
  'empty1', 'helmet', 'pocket',
  'cape', 'amulet', 'ammo',
  'weapon', 'body', 'offhand',
  'empty2', 'legs', 'empty3',
  'gloves', 'boots', 'ring'
];

const gearData = {
  magic: {
    empty1: null,
    helmet: { name: 'Elite Tectonic Mask', obtained: false, image: 'https://runescape.wiki/images/Elite_tectonic_mask.png?19656' },
    pocket: { name: 'Erethdor's grimoire', obtained: false, image: 'https://runescape.wiki/images/Erethdor%27s_grimoire_%28token%29.png?d18a8' },
    cape: { name: 'Erethdor's grimoire', obtained: false, image: 'https://runescape.wiki/images/Igneous_Kal-Ket.png?e34c7' },
    amulet: null,
    ammo: null,
    weapon: { name: 'Fractured Staff of Armadyl', obtained: false, image: 'https://runescape.wiki/images/Fractured_Staff_of_Armadyl.png?50e28' },
    body: null,
    offhand: null,
    empty2: null,
    legs: null,
    empty3: null,
    gloves: null,
    boots: null,
    ring: null
  },
  ranged: {
    empty1: null,
    helmet: { name: 'Pernix Cowl', obtained: false, image: 'https://runescape.wiki/images/Pernix_cowl.png?cdf2c' },
    pocket: null,
    cape: null,
    amulet: null,
    ammo: { name: 'Broad Bolts', obtained: false, image: 'https://runescape.wiki/images/Broad_bolts.png' },
    weapon: { name: 'Noxious Longbow', obtained: false, image: 'https://runescape.wiki/images/Noxious_longbow.png?d4e2c' },
    body: null,
    offhand: null,
    empty2: null,
    legs: null,
    empty3: null,
    gloves: null,
    boots: null,
    ring: null
  },
  melee: {
    empty1: null,
    helmet: { name: 'Torva Full Helm', obtained: false, image: 'https://runescape.wiki/images/Torva_full_helm.png?62a9e' },
    pocket: null,
    cape: null,
    amulet: null,
    ammo: null,
    weapon: { name: 'Noxious Scythe', obtained: false, image: 'https://runescape.wiki/images/Noxious_Scythe.png' },
    body: null,
    offhand: null,
    empty2: null,
    legs: null,
    empty3: null,
    gloves: null,
    boots: null,
    ring: null
  },
  necromancy: {
    empty1: null,
    helmet: { name: 'Deathwarden Hood', obtained: false, image: 'https://runescape.wiki/images/Deathwarden_hood_%28tier_90%29.png?01560' },
    pocket: null,
    cape: null,
    amulet: null,
    ammo: null,
    weapon: { name: 'Death Guard', obtained: false, image: 'https://runescape.wiki/images/Death_guard_%28tier_90%29.png?6fda9' },
    body: null,
    offhand: null,
    empty2: null,
    legs: null,
    empty3: null,
    gloves: null,
    boots: null,
    ring: null
  }
};

const savedData = localStorage.getItem('gearData');
if (savedData) Object.assign(gearData, JSON.parse(savedData));

function renderTab(tab) {
  const container = document.getElementById(tab);
  container.innerHTML = '';
  const slots = gearData[tab];

  slotOrder.forEach(slot => {
    const item = slots[slot];
    const slotDiv = document.createElement('div');

    if (item) {
      slotDiv.className = 'slot' + (item.obtained ? ' obtained' : '');
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;
      img.title = `Click to mark as ${item.obtained ? 'unobtained' : 'obtained'}`;
      img.onclick = () => toggleObtained(tab, slot);
      const label = document.createElement('div');
      label.textContent = item.name;
      slotDiv.appendChild(img);
      slotDiv.appendChild(label);
    } else {
      slotDiv.className = 'slot placeholder';
      const img = document.createElement('img');
      img.src = 'https://via.placeholder.com/80?text=Empty';
      img.alt = 'Empty slot';
      const label = document.createElement('div');
      // Make nice label for empty slots or use slot name with capitalization
      label.textContent = slot.startsWith('empty') ? '' : slot.charAt(0).toUpperCase() + slot.slice(1);
      slotDiv.appendChild(img);
      slotDiv.appendChild(label);
    }

    container.appendChild(slotDiv);
  });
}

function toggleObtained(tab, slot) {
  gearData[tab][slot].obtained = !gearData[tab][slot].obtained;
  localStorage.setItem('gearData', JSON.stringify(gearData));
  renderTab(tab);
}

function switchTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tabs li').forEach(li => li.classList.remove('active'));
  document.getElementById(tab).classList.add('active');
  document.querySelector(`.tabs li[data-tab="${tab}"]`).classList.add('active');
  renderTab(tab);
}

document.querySelectorAll('.tabs li').forEach(li => {
  li.addEventListener('click', () => {
    switchTab(li.getAttribute('data-tab'));
  });
});

// Initial render
renderTab('magic');
