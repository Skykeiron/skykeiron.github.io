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
    helmet: { name: 'Deathwarden Hood', obtained: false, image: 'https://runescape.wiki/images/Deathwarden_hood_%28tier_90%29.png?01560' },
    weapon: { name: 'Death Guard', obtained: false, image: 'https://runescape.wiki/images/Death_guard_%28tier_90%29.png?6fda9' }
  }
};

// Load saved data from localStorage if available
const savedData = localStorage.getItem('gearData');
if (savedData) Object.assign(gearData, JSON.parse(savedData));

function renderTab(tab) {
  console.log('Rendering tab:', tab);
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
    img.title = `Click to mark as ${item.obtained ? 'unobtained' : 'obtained'}`;
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
  // Remove active class from all tabs and tab content
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tabs li').forEach(li => li.classList.remove('active'));

  // Add active class to selected tab and its content
  document.getElementById(tab).classList.add('active');
  document.querySelector(`.tabs li[data-tab="${tab}"]`).classList.add('active');

  renderTab(tab);
}

// Setup event listeners for tab buttons
document.querySelectorAll('.tabs li').forEach(li => {
  li.addEventListener('click', () => {
    switchTab(li.getAttribute('data-tab'));
  });
});

// Initial render: render only the default active tab content (magic)
renderTab('magic');
