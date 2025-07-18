const gearData = {
  magic: {
    empty1: null,
    helmet: { obtained: false, image: 'https://runescape.wiki/images/Elite_tectonic_mask.png?19656' },
    pocket: { obtained: false, image: "https://runescape.wiki/images/Erethdor%27s_grimoire_%28token%29.png?d18a8" },
    cape: { obtained: false, image: "https://runescape.wiki/images/Igneous_Kal-Ket.png?e34c7" },
    amulet: { obtained: false, image: 'https://runescape.wiki/images/Essence_of_Finality_amulet_%28blue%29.png?77834' },
    ammunition: null,
    weapon: { obtained: false, image: 'https://runescape.wiki/images/Roar_of_Awakening.png?02126' },
    weapon2: { obtained: false, image: 'https://runescape.wiki/images/Fractured_Staff_of_Armadyl.png?50e28' },
    body: { obtained: false, image: 'https://runescape.wiki/images/Elite_tectonic_robe_top.png?c2107' },
    offhand: { obtained: false, image: 'https://runescape.wiki/images/Ode_to_Deceit.png?cc319' },
    empty2: null,
    legs: { obtained: false, image: 'https://runescape.wiki/images/Elite_tectonic_robe_bottom.png?c2107' },
    empty3: null,
    gloves: { obtained: false, image: 'https://runescape.wiki/images/Masterwork_magic_gloves.png?a406e' },
    gloves2: { obtained: false, image: 'https://runescape.wiki/images/Cinderbane_gloves.png?99549' },
    boots: { obtained: false, image: 'https://runescape.wiki/images/Masterwork_magic_boots.png?08a82' },
    ring: { obtained: false, image: "https://runescape.wiki/images/Reaver%27s_ring.png?973ed" },
    ring2: { obtained: false, image: "https://runescape.wiki/images/Channeller%27s_ring.png?36cdc" }
  },
  ranged: {
    empty1: null,
    helmet: { obtained: false, image: 'https://runescape.wiki/images/Elite_Dracolich_coif.png?2d88b' },
    pocket: { obtained: false, image: "https://runescape.wiki/images/Erethdor%27s_grimoire_%28token%29.png?d18a8" },
    cape: { obtained: false, image: "https://runescape.wiki/images/Igneous_Kal-Ket.png?e34c7" },
    amulet: { obtained: false, image: 'https://runescape.wiki/images/Essence_of_Finality_amulet_%28blue%29.png?77834' },
    ammunition: { obtained: false, image: 'https://runescape.wiki/images/Pernix%27s_quiver.png?ba280' },
    weapon: { obtained: false, image: 'https://runescape.wiki/images/Bow_of_the_Last_Guardian.png?3590a' },
    weapon2: { obtained: false, image: 'https://runescape.wiki/images/Eldritch_crossbow.png?1c815' },
    body: { obtained: false, image: 'https://runescape.wiki/images/Elite_Dracolich_hauberk.png?5e7d5' },
    offhand: null,
    empty2: null,
    legs: { obtained: false, image: 'https://runescape.wiki/images/Elite_Dracolich_chaps.png?11a80' },
    empty3: null,
    gloves: { obtained: false, image: 'https://runescape.wiki/images/Elite_Dracolich_vambraces.png?aeaf6' },
    gloves2: { obtained: false, image: 'https://runescape.wiki/images/Cinderbane_gloves.png?99549' },
    boots: { obtained: false, image: 'https://runescape.wiki/images/Elite_Dracolich_boots.png?67618' },
    boots1: { obtained: false, image: 'https://runescape.wiki/images/Enhanced_fleeting_boots.png?8cac6' },
    ring: { obtained: false, image: "https://runescape.wiki/images/Reaver%27s_ring.png?973ed" },
    ring2: { obtained: false, image: "https://runescape.wiki/images/Stalker%27s_ring.png?d41c1" }
  },
  melee: {
    empty1: null, empty2: null, empty3: null,
    helmet: { name: 'Torva Full Helm', obtained: false, image: 'https://runescape.wiki/images/Torva_full_helm.png?62a9e' },
    weapon: { name: 'Noxious Scythe', obtained: false, image: 'https://runescape.wiki/images/Noxious_Scythe.png' }
  },
  necromancy: {
    empty1: null,
    helmet: { obtained: false, image: 'https://runescape.wiki/images/Crown_of_the_First_Necromancer.png?09787' },
    pocket: { obtained: false, image: "https://runescape.wiki/images/Erethdor%27s_grimoire_%28token%29.png?d18a8" },
    cape: { obtained: false, image: "https://runescape.wiki/images/Igneous_Kal-Ket.png?e34c7" },
    amulet: { obtained: false, image: 'https://runescape.wiki/images/Essence_of_Finality_amulet_%28blue%29.png?77834' },
    ammunition: null,
    weapon: { obtained: false, image: 'https://runescape.wiki/images/Omni_guard.png?c184b' },
    body: { obtained: false, image: 'https://runescape.wiki/images/Robe_top_of_the_First_Necromancer.png?09787' },
    offhand: { obtained: false, image: 'https://runescape.wiki/images/Soulbound_lantern.png?fbe1b' },
    empty2: null,
    legs: { obtained: false, image: 'https://runescape.wiki/images/Robe_bottom_of_the_First_Necromancer.png?09787' },
    empty3: null,
    gloves: { obtained: false, image: 'https://runescape.wiki/images/Hand_wrap_of_the_First_Necromancer.png?09787' },
    gloves2: { obtained: false, image: 'https://runescape.wiki/images/Cinderbane_gloves.png?99549' },
    boots: { obtained: false, image: 'https://runescape.wiki/images/Foot_wraps_of_the_First_Necromancer.png?09787' },
    ring: { obtained: false, image: "https://runescape.wiki/images/Occultist%27s_ring.png?d6304" }
  }
};

const savedData = localStorage.getItem('gearData');
if (savedData) Object.assign(gearData, JSON.parse(savedData));

// Define strict slot order to match RS equipment layout
const slotOrder = [
  'empty1', 'empty2', 'helmet', 'pocket', 'empty3',
  'empty4','cape', 'amulet', 'ammunition', 'empty5',
  'weapon2','weapon', 'body', 'offhand', 'empty6',
  'empty7','empty8', 'legs', 'empty9', 'empty10',
  'gloves2', 'gloves', 'boots', 'ring', 'ring2',
  'empty11', 'empty12', 'boots1', 'empty13', 'empty14'

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
