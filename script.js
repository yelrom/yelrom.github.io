(function newFact() {
  var facts = ['I do not dictate to an artist or creative, but seek only to enourage them to follow their own intuition and develop their creative power.', 'Simplicity lies not in omission, but in synthesis.', 'The primary mission is to give practical and appropriate forms to all work and then to make these unique and valuable through pleasing qualities and harmonious experiences.', 'The materials, the tools, and sometimes the machine are my only means of expression.'];
  var randomFact = Math.floor(Math.random() * facts.length);
  document.getElementById('factDisplay').innerHTML = facts[randomFact];
})();