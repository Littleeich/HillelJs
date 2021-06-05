const sports = [
	['🤺','fencing'],
	['⛸','figure skating'],
	['⛷','skier'],
	['🏂','snowboarder'],
	['🏌','golfing'],
	['🚣','rowing boat'],
	['🏊','swimming'],
	['🤸','gymnastics'],
	['🤾','handball']
];

const winners = [
	['fencing','gold','fr'],
	['fencing','silver','it'],
	['fencing','bronze','us'],

	['figure skating','gold','ca'],
	['figure skating','silver','ru'],
	['figure skating','bronze','us'],

	['skier','gold','no'],
	['skier','silver','ru'],
	['skier','bronze','fr'],

	['snowboarder','gold','us'],
	['snowboarder','silver','jp'],
	['snowboarder','bronze','au'],

	['golfing','gold','gb'],
	['golfing','silver','se'],
	['golfing','bronze','us'],

	['rowing boat','gold','us'],
	['rowing boat','silver','gb'],
	['rowing boat','bronze','ro'],

	['swimming','gold','us'],
	['swimming','silver','gb'],
	['swimming','bronze','au'],

	['gymnastics','gold','ru'],
	['gymnastics','silver','ru'],
	['gymnastics','bronze','ua'],

	['handball','gold','dk'],
	['handball','silver','fr'],
	['handball','bronze','de'],
];

const olympic = ['blue','black','red','yellow','green'];
const olympicNames = ['Europe', 'Africa', 'The Americas', 'Asia','Oceania'];

const medals = [
	['🥇','gold'],
	['🥈','silver'],
	['🥉','bronze'],
];

const continents = [
	['fr','Europe'],
	['it','Europe'],
	['us','The Americas'],
	['ca','The Americas'],
	['ru','Europe'],
	['no','Europe'],
	['jp','Asia'],
	['au','Oceania'],
	['gb','Europe'],
	['se','Europe'],
	['ro','Europe'],
	['ua','Europe'],
	['dk','Europe'],
	['de','Europe']
];

const flags = [
	['fr','🇫🇷'],
	['it','🇮🇹'],
	['us','🇺🇸'],
	['ca','🇨🇦'],
	['ru','🇷🇺'],
	['no','🇳🇴'],
	['jp','🇯🇵'],
	['au','🇦🇺'],
	['gb','🇬🇧'],
	['se','🇸🇪'],
	['ro','🇷🇴'],
	['ua','🇺🇦'],
	['dk','🇩🇰'],
	['de','🇩🇪']
];

document.write('<div class="continentsLine"><div class="zeroBlock"></div>')
for (let i = 0; i < olympic.length; i++) {
  document.write(`
  <div class="continent">
  <div class="circle" style="background:${olympic[i]}"></div>
  </div>`)
}
document.write('</div>')


for(let i =0; i<sports.length; i++) {
  document.write(`<div class="sportLine"> <div class="sportImg">${sports[i][0]}</div>`)
  let thisSportWins = getWinners(sports[i][1])
  
  for(let j=0; j<olympic.length; j++) {
    let winnersData = ''
    for(let sportMedal of thisSportWins) {
       if(findContinent(sportMedal[2]) == j) {
         winnersData += `<div class="${sportMedal[1]}"> ${getMedal(sportMedal[1])} - ${findFlag(sportMedal[2])}</div>`
       }
    }
    
    document.write(`<div class="winBlocks" data-info=${i}${j}>${winnersData}</div>`)
  }
  document.write('</div>')
}

function findContinent(country) {
  let continentName = ''
  for(let continentPair of continents) {
    if(continentPair[0] == country) {
      continentName = continentPair[1];
      break;
    }
  }
  return olympicNames.indexOf(continentName)
}

function findFlag(country) {
  for(let flagPair of flags) {
    if(flagPair[0] == country) {
      return flagPair[1]
    }
  }
}

function getWinners(sport) {
  let tempArr = []
  for(let win of winners) {
    if(win[0] == sport) {
      tempArr.push(win)
    }
  }
  return tempArr;
}

function getMedal(medal) {
  for(let pair of medals) {
    if(pair[1] == medal) {
      return pair[0]
    }
  }
}