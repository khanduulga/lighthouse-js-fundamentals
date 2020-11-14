//new judging system on the best tomatoes on their redness OR their plumpness
function judgeVegetable(veggies, char) {
  let bestChar = 0;
  let winner = '';
  veggies.forEach(function(veg) {
    if(veg[char] > bestChar) {
      bestChar = veg[char]
      winner = veg.submitter;
    }
  })
  return winner;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 15,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 25,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)