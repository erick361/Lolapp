const PATCH = "14.17.1";
const CDN_URL = `https://ddragon.leagueoflegends.com/cdn/${PATCH}`;
async function initApp() {
    const tierContainer = document.getElementById('tier-list-container');
    const champResponse = await fetch(`${CDN_URL}/data/en_US/champion.json`);
    const allChampions = (await champResponse.json()).data;
    tierContainer.innerHTML = '<h2>Champions Loaded: ' + Object.keys(allChampions).length + '</h2>';
    console.log(allChampions);
}
window.addEventListener('DOMContentLoaded', initApp);