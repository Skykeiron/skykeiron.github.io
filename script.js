const slotOrder = [
  'helmet', 'cape', 'neck', 'ammo', 'weapon',
  'body', 'shield', 'legs', 'gloves', 'boots',
  'ring', 'ammo2'
];

const gearData = {
  magic: {
    helmet: { name: 'Virtus Mask', obtained: false, image: 'https://runescape.wiki/images/Virtus_mask.png?03dea' },
    cape: null,
    neck: null,
    ammo: null,
    weapon: { name: 'Noxious Staff', obtained: false, image: 'https://runescape.wiki/images/Noxious_staff.png?aa951' },
    body: null,
    shield: null,
    legs: null,
    gloves: null,
    boots: null,
    ring: null,
    ammo2: null
  },
  ranged: {
    helmet: { name: 'Pernix Cowl', obtained: false, image: 'https://runescape.wiki/images/Pernix_cowl.png?cdf2c' },
    cape: null,
    neck: null,
    ammo: { name: 'Broad Bolts', obtained: false, image: 'https://runescape.wiki/images/Broad_bolts.png' },
    weapon: { name: 'Noxious Longbow', obtained: false, image: 'https://runescape.wiki/images/Noxious_longbow.png?d4e2c' },
    body: null,
    shield: null,
    legs: null,
    gloves: null,
    boots: null,
    ring: null,
    ammo2: null
  },
  melee: {
    helmet: { name: 'Torva Full Helm', obtained: false, image: 'https://runescape.wiki/images/Torva_full_helm.png?62a9e' },
    cape: null,
    neck: null,
    ammo: null,
    weapon: { name: 'Noxious Scythe', obtained: false, image: 'https://runescape.wiki/images/Noxious_scythe.png' },
    body: null,
    shield: null,
    legs: null,
    gloves: null,
    boots: null,
    ring: null,
    ammo2: null
  },
  necromancy: {
    helmet: { name: 'Deathwarden Hood', obtained: false, image: 'https://runescape.wiki/images/Deathwarden_hood_%28tier_90%29.png?01560' },
    cape: null,
    neck: null,
    ammo: null,
    weapon: { name: 'Death Guard', obtained: false, image: 'https://runescape.wiki/images/Death_guard_%28tier_90%29.png?6fda9' },
    body: null,
    shield: null,
    legs: null,
    gloves: null,
    boots: null,
    ring: null,
    ammo2: null
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
    let slotDiv = document.createElement('div');

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
      // Placeholder for empty slots
      slotDiv.className = 'slot placeholder';
      const img = document.createElement('img');
      // Transparent pixel or generic placeholder image URL
      img.src = 'https://via.placeholder.com/80?text=Empty';
      img.alt = 'Empty slot';
      const label = document.createElement('div');
      label.textContent = slot.charAt(0).toUpperCase() + slot.slice(1);
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

// Initial render of default tab
renderTab('magic');
