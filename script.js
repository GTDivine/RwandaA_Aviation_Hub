let facts = [
    "Rwanda's national airline is RwandAir.",
    "The Boeing 747 is known as the Queen of the Skies.",
    "Pilots use the ICAO phonetic alphabet for communication.",
    "Kigali International Airport is Rwanda's main international airport.",
    "Commercial aircraft usually fly at an altitude of about 35,000 feet."
];

function newFact() {

    let random = Math.floor(Math.random() * facts.length);

    document.getElementById("fact").innerHTML = facts[random];

}