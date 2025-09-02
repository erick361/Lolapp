export default async function handler(req, res) {
  try {
    const r = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
    const data = await r.json();
    return res.status(200).json({ patch: data[0] });
  } catch (err) {
    return res.status(500).json({ error: "Error obteniendo parche" });
  }
}