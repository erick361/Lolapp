export default async function handler(req, res) {
  return res.status(200).json({
    recommendation: "Recomendación: Pickea a Ahri para mid, buen counter contra Yasuo."
  });
}