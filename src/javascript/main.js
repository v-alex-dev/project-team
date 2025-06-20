/* -------- FOOTER -------- */
// Récupération des éléments du footer
const footer = document.getElementById('footer');
const citations = document.getElementById('citation')

// 💡 Citations financières aléatoires
const citations = [
  "💰 L’argent travaille plus quand tu dors.",
  "📈 Investir, c’est choisir la patience.",
  "🧠 La finance récompense l’intelligence émotionnelle, pas la précipitation.",
  "💸 Gagner de l'argent est un art, le garder est un talent.",
  "📊 Les marchés sont faits d’opportunités, pas de certitudes."
];


// 🎯 Afficher une citation aléatoire au clic sur le bouton
citationBtn.addEventListener('click', () => {
  const randomQuote = citations[Math.floor(Math.random() * citations.length)];
  alert(randomQuote);
});
/* -------- FOOTER -------- */