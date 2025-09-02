export default async function handler(req, res) {
  const champ = req.query.champion || "Ahri";
  return res.status(200).json({
    info: champ + " es un mago versátil con gran movilidad."
  });
}