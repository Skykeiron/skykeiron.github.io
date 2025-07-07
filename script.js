// Sample gear data; replace image names as needed
const gearData = {
  magic: [
    { slot: "Helmet", name: "Virtus Mask", img: "virtus_mask.png" },
    { slot: "Staff", name: "Virtus Wand", img: "virtus_wand.png" }
  ],
  ranged: [
    { slot: "Helmet", name: "Zaryte Helm", img: "zaryte_helm.png" },
    { slot: "Bow", name: "Zaryte Bow", img: "zaryte_bow.png" }
  ],
  melee: [
    { slot: "Helmet", name: "Torva Helm", img: "torva_helm.png" },
    { slot: "Chest", name: "Torva Platebody", img: "torva_chest.png" }
  ],
  necromancy: [
    { slot: "Helmet", name: "Sliske Hood", img: "sliske_hood.png" },
    { slot: "Staff", name: "Sliske Staff", img: "sliske_staff.png" }
  ]
};

let state = JSON.parse(localStorage.getItem("runeTrackerState")) || {};

// Render a tab
function renderTab(tab) {
  const content = document.getElementById("content");
  content.innerHTML = "";

  gearData[tab].forEach(item => {
    const key = `${tab}_${item.name}`;
    const obtained = state[key] || false;

    const slotDiv = document.createElement("div");
    slotDiv.className = "slot " + (obtained ? "obtained" : "unobtained");

    const img = document.createElement("img");
    img.src = obtained ? `images/${item.img}` : `images/${item.img.replace(/\.png$/, '_grey.png')}`;
    img.alt = item.name;
    img.addEventListener("click", () => {
      state[key] = !state[key];
      localStorage.setItem("runeTrackerState", JSON.stringify(state));
      renderTab(tab);
    });

    const label = document.createElement("div");
    label.className = "slot-name";
    label.textContent = item.slot;

    slotDiv.appendChild(img);
    slotDiv.appendChild(label);
    content.appendChild(slotDiv);
  });
}

// Tab-switching logic
document.querySelectorAll(".tabs li").forEach(tabEl => {
  tabEl.addEventListener("click", () => {
    document.querySelector(".tabs .active").classList.remove("active");
    tabEl.classList.add("active");
    renderTab(tabEl.dataset.tab);
  });
});

// Initial load
renderTab("magic");
