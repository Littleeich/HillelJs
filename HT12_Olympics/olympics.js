const sports = [
	['ðĪš','fencing'],
	['âļ','figure skating'],
	['â·','skier'],
	['ð','snowboarder'],
	['ð','golfing'],
	['ðĢ','rowing boat'],
	['ð','swimming'],
	['ðĪļ','gymnastics'],
	['ðĪū','handball']
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

const olympic = [['blue', 'Europe'], ['black' , 'Africa'], ['red', 'The Americas'], ['yellow', 'Asia'], ['green', 'Oceania']];

const medals = [
	['ðĨ','gold'],
	['ðĨ','silver'],
	['ðĨ','bronze'],
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
	['fr','ðŦð·'],
	['it','ðŪðđ'],
	['us','ðšðļ'],
	['ca','ðĻðĶ'],
	['ru','ð·ðš'],
	['no','ðģðī'],
	['jp','ðŊðĩ'],
	['au','ðĶðš'],
	['gb','ðŽð§'],
	['se','ðļðŠ'],
	['ro','ð·ðī'],
	['ua','ðšðĶ'],
	['dk','ðĐð°'],
	['de','ðĐðŠ']
];

document.write('<div class="continentsLine"><div class="zeroBlock"></div>')
for (let i = 0; i < olympic.length; i++) {
  document.write(`
  <div class="continent">
  <div class="circle" style="background:${olympic[i][0]}"></div>
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
  return getIndexOfContinent(continentName)
}

function findFlag(country) {
  for(let flagPair of flags) {
    if(flagPair[0] == country) {
      return flagPair[1]
    }
  }
}

function getWinners(sport) {
  return winners.filter( function(el) {
	  return el[0] == sport
  })
}

function getMedal(medal) {
  for(let pair of medals) {
    if(pair[1] == medal) {
      return pair[0]
    }
  }
}

function getIndexOfContinent(conName) {
	for(let i=0; i<olympic.length; i++) {
		if(olympic[i][1] == conName) {
			return i
		}
	}
}