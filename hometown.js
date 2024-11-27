function getWords(type) {
  // Return words of a given type, or all words if type is 'WORD'
  let words = [
    {type: 'PHASE', value: 'Warmly Welcome To Ruby Land'},
    {type: 'PHASE', value: 'Explore The GemsLand'},
    {type: 'PHASE', value: 'Paradise on Earth'},
    
  ];
  return words.filter(word => type === 'WORD' || word.type === type).map(word => word.value);
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


let element_phase = document.getElementById('phase');
element_adjective.innerText = 'Warmly Welcome To Ruby Land ';


let element_phase2 = document.getElementById('phase');
element_adjective2.innerText = randomMember(getWords('PHASE'));



