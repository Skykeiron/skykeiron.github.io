const gearData = {
  magic: {
    helmet: { name: 'Virtus Mask', obtained: false, image: 'https://runescape.wiki/images/Virtus_mask.png?03dea' },
    weapon: { name: 'Noxious Staff', obtained: false, image: 'https://runescape.wiki/images/Noxious_staff.png?aa951' }
  },
  ranged: {
    helmet: { name: 'Pernix Cowl', obtained: false, image: 'https://runescape.wiki/images/Pernix_cowl.png?cdf2c' },
    weapon: { name: 'Noxious Longbow', obtained: false, image: 'https://runescape.wiki/images/Noxious_longbow.png?d4e2c' }
  },
  melee: {
    helmet: { name: 'Torva Full Helm', obtained: false, image: 'https://runescape.wiki/images/Torva_full_helm.png?62a9e' },
    weapon: { name: 'Noxious Scythe', obtained: false, image: 'https://runescape.wiki/images/Noxious_Scythe.png' }
  },
  necromancy: {
    helmet: { name: 'Deathwarden Helm', obtained: false, image: 'https://runescape.wiki/images/Deathwarden_hood_%28tier_90%29.png?01560' },
    weapon: { name: 'Necromantic Focus', obtained: false, image: 'https://runescape.wiki/images/Death_guard_%28tier_90%29.png?6fda9' }
  }
};

const savedData = localStorage.getItem('gearData');
if (savedData) Object.assign(gearData, JSON.parse(savedData));

function renderTab(tab) {
  const container = document.getElementById(tab);
  container.innerHTML = '';
  const slots = gearData[tab];
  for (const slot in slots) {
    const item = slots[slot];
    const slotDiv = document.createElement('div');
    slotDiv.className = 'slot' + (item.obtained ? ' obtained' : '');
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.onclick = () => toggleObtained(tab, slot);
    const label = document.createElement('div');
    label.textContent = item.name;
    slotDiv.appendChild(img);
    slotDiv.appendChild(label);
    container.appendChild(slotDiv);
  }
}

function toggleObtained(tab, slot) {
  gearData[tab][slot].obtained = !gearData[tab][slot].obtained;
  localStorage.setItem('gearData', JSON.stringify(gearData));
  renderTab(tab);
}

function switchTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById(tab).classList.add('active');
  [...document.querySelectorAll('nav button')].find(btn => btn.textContent.toLowerCase() === tab).classList.add('active');
  renderTab(tab);
}

// Initial render
['magic', 'ranged', 'melee', 'necromancy'].forEach(renderTab);
