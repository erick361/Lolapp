export default async function handler(req, res) {
  return res.status(200).json({
    tiers: [
      { tier: "S", champions: ["Ahri", "Lee Sin", "Jhin"] },
      { tier: "A", champions: ["Lux", "Garen", "Ezreal"] },
      { tier: "B", champions: ["Teemo", "Thresh"] },
      { tier: "C", champions: ["Annie", "Kayle"] },
      { tier: "D", champions: ["Master Yi"] }
    ]
  });
}