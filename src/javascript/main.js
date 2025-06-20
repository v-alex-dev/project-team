// Récupération du footer
const footer = document.getElementById('footer');

// 💡 Citations financières aléatoires
const citations = [
  "💰 L’argent travaille plus quand tu dors.",
  "📈 Investir, c’est choisir la patience.",
  "🧠 La finance récompense l’intelligence émotionnelle, pas la précipitation.",
  "💸 Gagner de l'argent est un art, le garder est un talent.",
  "📊 Les marchés sont faits d’opportunités, pas de certitudes."
];

// 🎯 Afficher une citation aléatoire au clic sur le footer
footer.addEventListener('click', () => {
  const randomQuote = citations[Math.floor(Math.random() * citations.length)];
  alert(randomQuote);
});

// 🎨 Animation légère au survol
footer.addEventListener('mouseenter', () => {
  footer.style.transition = 'all 0.3s ease';
  footer.style.backgroundColor = '#1c1c1c';
  footer.style.color = '#4fc3f7';
});
footer.addEventListener('mouseleave', () => {
  footer.style.backgroundColor = '';
  footer.style.color = '';
});
