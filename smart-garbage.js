function smartGarbage(trash, bins) {
  const keys = Object.keys(bins);
  for(var i = 0; i < keys.length; i++) {
    if(keys[i] === trash) {
      bins[keys[i]] += 1;
    }
  }
}

/* could also write

bins[trash] += 1;

*/

const bins = {
  waste: 0,
  recycling: 0,
  compost: 0
}


smartGarbage('waste', bins);

console.log(bins);