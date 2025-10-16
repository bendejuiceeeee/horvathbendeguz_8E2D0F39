const teams = [
    {    id: 1,    name: "Kispest",    points: 19,    gFor: 19,    gAg: 8,    wins: 6,  hAN: "Csontos Dominik", hA: 8.09,   tScN: "Zuigéber Ákos",  tScG: 5, manager: "Feczkó Tamás"},
    {    id: 2,    name: "Vasas",    points: 19,    gFor: 18,    gAg: 12,    wins: 6,  hAN: "Urblik József", hA: 7.79,   tScN: "Pethő Bence",  tScG: 4, manager: "Erős Gábor"},
    {    id: 3,    name: "Mezőkövesd",    points: 17,    gFor: 16,    gAg: 10,    wins: 5,  hAN: "Keresztes Bence", hA: 7.54,   tScN: "Szalai József",  tScG: 6, manager: "Csertői Aurél"},
    {    id: 4,    name: "Kecskemét",    points: 16,    gFor: 15,    gAg: 12,    wins: 5,  hAN: "Banó-Szabó Bence", hA: 7.59,   tScN: "Pálinkás Gergő",  tScG: 4, manager: "Tímár Krisztián"},
    {    id: 5,    name: "Aqvital Csákvár",    points: 16,    gFor: 13,    gAg: 7,    wins: 4,  hAN: "Lehoczki Bendegúz", hA: 7.68,   tScN: "Magyar Zsolt",  tScG: 4, manager: "Tóth Balázs"},
    {    id: 6,    name: "Szeged-Csanád GA",    points: 15,    gFor: 11,    gAg: 8,    wins: 4,  hAN: "Novák Csanád", hA: 7.70,   tScN: "Novák Csanád",  tScG: 5, manager: "Aczél Zoltán"},
    {    id: 7,    name: "Karcag",    points: 15,    gFor: 11,    gAg: 12,    wins: 4,  hAN: "Girsik Áron-Róbert", hA: 7.71,   tScN: "Pap Zsolt",  tScG: 3, manager: "Varga Attila"},
    {    id: 8,    name: "Ajka",    points: 10,    gFor: 6,    gAg: 11,    wins: 3,  hAN: "Szabados István", hA: 7.54,   tScN: "Katona István",  tScG: 2, manager: "Csábi József"},
    {    id: 9,    name: "Videoton",    points: 10,    gFor: 11,    gAg: 10,    wins: 2,  hAN: "Varga Roland", hA: 7.46,   tScN: "Varga Roland",  tScG: 4, manager: "Bóér Gábor"},
    {    id: 10,   name: "Szentlőrinc",    points: 9,    gFor: 11,    gAg: 12,    wins: 2,  hAN: "Nagy Richárd", hA: 7.46,   tScN: "Nagy Richárd",  tScG: 3, manager: "Waltner Róbert"},
    {    id: 11,   name: "Békéscsaba",    points: 9,    gFor: 11,    gAg: 14,    wins: 2,  hAN: "Borsos Filip", hA: 7.10,   tScN: "Borsos Filip",  tScG: 5, manager: "Csató Sándor"},
    {    id: 12,   name: "Soroksár",    points: 9,    gFor: 13,    gAg: 17,    wins: 2,  hAN: "Kundrák Norbert", hA: 7.23,   tScN: "Kundrák Norbert",  tScG: 4, manager: "Lipcsei Péter"},
    {    id: 13,   name: "Budafok",    points: 9,    gFor: 7,    gAg: 12,    wins: 2,  hAN: "Hajdú Roland", hA: 7.03,   tScN: "Hajdú Roland",  tScG: 3, manager: "Mészöly Géza"},
    {    id: 14,   name: "Tiszakécske",    points: 9,    gFor: 9,    gAg: 16,    wins: 2,  hAN: "Lucas", hA: 7.44,   tScN: "Myke Bouard Ramos",  tScG: 4, manager: "Pintér Csaba"},
    {    id: 15,   name: "BVSC-Zugló",    points: 7,    gFor: 8,    gAg: 10,    wins: 2,  hAN: "Csernik Kornél", hA: 7.28,   tScN: "Csernik Kornél",  tScG: 3, manager: "Dragan Vukmir"},
    {    id: 16,   name: "Kozármisleny",    points: 7,    gFor: 6,    gAg: 14,    wins: 1,  hAN: "Lékai Soma", hA: 6.99,   tScN: "Babinszky Bence/Kocsis Dominik",  tScG: 2, manager: "Pinezits Máté"},
]

function fullTl() // fgv 1
{
    out=""
    t=""
    for (let i = 0; i < teams.length; i++) { // ciklus
        if (teams[i].id == 1 || teams[i].id == 2) { // elagazas
           t=`<tr>
            <td class="promotion" style="text-align: center;">${teams[i].id}.</td>
            <td>${teams[i].name}</a></td>
            <td style="text-align: center;">${teams[i].points} pont</td>
            </tr>` 
        }
        else if (teams[i].id == 15 || teams[i].id == 16) {
           t=`<tr>
            <td class="relegation" style="text-align: center;">${teams[i].id}.</td>
            <td>${teams[i].name}</td>
            <td style="text-align: center;">${teams[i].points} pont</td>
            </tr>` 
        }
        else
        {
        t=`<tr>
        <td style="text-align: center;">${teams[i].id}.</td>
        <td>${teams[i].name}</td>
        <td style="text-align: center;">${teams[i].points} pont</td>
        </tr>`
        }
       out+=t
}
document.getElementById("tb").innerHTML+=out
}

// ------------------------------------------------------------------------------------------

function highAvgList() // fgv 2
{
    const highestAvg = []
    for (let i = 0; i < teams.length; i++) {
        highestAvg.push(
            {
                hA: teams[i].hA,
                hAN: teams[i].hAN,
                hATeam: teams[i].name
            }
        )
        highestAvg.sort((a, b) => b.hA - a.hA); // mr gpt - prompt: sorting of players via highest average rating
    }

    html = "<h3>Top Játékosok</h3><ol>"; //  mr gpt - prompt: display h3 title and ol inside function

    for (let i = 0; i < highestAvg.length; i++) {
        html+="<li>"+highestAvg[i].hAN+" ("+highestAvg[i].hA+")"+"<br>"+highestAvg[i].hATeam+"</li>"
    }
    html+="</ol>";
    document.getElementById("valtC").innerHTML=html;
}

// ------------------------------------------------------------------------------------------

function managersList() // fgv 3
{
    const managers = []
    for (let i = 0; i < teams.length; i++) {
        managers.push(
            {
                manager: teams[i].manager,
                PpM: teams[i].points / 9.0, // meccsenkenti pontatlag: pont / fordulo (jelenleg 9)
                managerT: teams[i].name
            }
        )
    }

    html = "<h3>Vezetőedzők</h3><ol>"; //

    for (let i = 0; i < managers.length; i++) {
        html+="<li>"+managers[i].manager+" ("+managers[i].PpM.toFixed(2)+" p/m)"+"<br>"+managers[i].managerT+"</li>"
    }
    html+="</ol>";
    document.getElementById("valtC").innerHTML=html;
}

// ------------------------------------------------------------------------------------------

function topScorersList() // fgv 4
{
    const topScorers = []
    for (let i = 0; i < teams.length; i++) {
        topScorers.push(
            {
                player: teams[i].tScN,
                goals: teams[i].tScG,
                playerT: teams[i].name
            }
        )
        topScorers.sort((a, b) => b.goals - a.goals)
    }

    html = "<h3>Góllövő lista</h3><ol>"; //

    for (let i = 0; i < topScorers.length; i++) {
        html+="<li>"+topScorers[i].player+" ("+topScorers[i].goals+" gól)"+"<br>"+topScorers[i].playerT+"</li>"
    }
    html+="</ol>";
    document.getElementById("valtC").innerHTML=html;
}


