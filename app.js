document.addEventListener("DOMContentLoaded", async () => {
  const tierlistEl = document.getElementById("tierlist");
  const draftEl = document.getElementById("draft");
  const champEl = document.getElementById("champion");

  async function loadTierList() {
    const res = await fetch("/api/tierlist");
    const data = await res.json();
    tierlistEl.innerHTML = "<h2>Tier List</h2>" + 
      data.tiers.map(t => `<h3>${t.tier}</h3><ul>${t.champions.map(c => `<li>${c}</li>`).join("")}</ul>`).join("");
  }

  async function loadDraftHelper() {
    const res = await fetch("/api/draft_helper");
    const data = await res.json();
    draftEl.innerHTML = "<h2>Draft Helper</h2><p>" + data.recommendation + "</p>";
  }

  async function loadChampionInfo(champion="Ahri") {
    const res = await fetch("/api/champion_info?champion=" + champion);
    const data = await res.json();
    champEl.innerHTML = `<h2>${champion}</h2><p>${data.info}</p>`;
  }

  await loadTierList();
  await loadDraftHelper();
  await loadChampionInfo();
});