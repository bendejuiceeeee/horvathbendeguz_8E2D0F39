# Az oldal bemutatása - Dokumentáció

Röviden, a weboldal a **Merkantil Bank Liga 2025/2026**-os szezon első harmadának állásával foglalkozik, igaz 1 meccs híján első harmadával, mivel a 10. forduló a határidő előtt 2 órával rajtol csak el.

A cél egy áttekinthető, interaktív felület létrehozása, ahol a látogató megtekintheti:
- A tabellát
- A 10. forduló összecsapásait
- A legjobb játékosokat, góllövőket csapatonként + a vezetőedzőket
- valamint a csapatok egyes statisztikáit

## Felhasznált technológiák
- HTML: az oldal szerkezete, a fő elemek elrendezése
- CSS + Bootstrap – a megjelenésért felel: színek, betűtípusok, reszponzív elrendezés és formázás.
- JavaScript – az interaktív elemek működését biztosítja: adatok megjelenítése, listák rendezése, táblázat feltöltése.
- Külső források: [Adatbank](https://adatbank.mlsz.hu), [SofaScore](https://www.sofascore.com)

## Főbb részek, funkciók

### HTML
- Fejléc: cím
- Navigációssáv: 3 JS függvényt hívhatunk meg velük
- Fő tartalom – három hasábban:
 - Tabella
 - Következő/10. forduló
- Statisztika szekció: egyes csapatok adatai jelennek meg itt, amikor a felhasználó a csapat nevére kattint.

### CSS
- Alapszínek: táblázat háttér, betűszín stb...
- Kiemelések: feljutás/kiesés
- Reszponzív elrendezés: Bootstrap
- Egységes stílus: kerekített sarkok, középre igazított címek stb...

## JavaScript
- fullTl()
 - automatikusan feltölti a tabellát a "teams" tömb által
 - a nevekre kattintva megjelennek a statisztikák
 - jelöli a feljutó/kieső csapatokat
- highAvgList()
 - rendezett listát készít a játékosok átlagos értékelései alapján
 - a legjobb játékos nevére kattintva betölt róla egy rövid (kicsit összecsapott) oldalt
- managersList()
 - megjeleníti a vezetőedzők listáját, valamint az edzők csapatainak meccsenkénti pontátlagát
- topScorersList()
 - házi gólkirályok góllövő listája
 - a gólkirálynak külön (szintén összecsapott) oldala van, kattintással elérhető
- swTeamSt()
 - egy adott csapat részletes statisztikáját jeleníti meg
 - a tabellában szereplő csapatnévre kattintva hívódik meg

## ChatGPT használata

### 1. használat

- Prompt: "sorting of players via highest average rating"

- Output (A felkiátó jeles sort használtam fel) :
```js
    function highestAverageList() {
  // create a list of players with their averages and teams
  const highestAvg = teams.map(team => ({
    averageRating: team.averageRating,
    playerName: team.playerName
  }));

 highestAvg.sort((a, b) => b.averageRating - a.averageRating); // !!!

 // build the HTML output
  for (let i = 0; i < highestAvg.length; i++) {
    html += `<p>${highestAvg[i].playerName} (${highestAvg[i].averageRating.toFixed(2)})</p>`;
  }
  html += "</ol>";

  // display it on the page
  document.getElementById("highestAvgList").innerHTML = html;
    }
```

### 2. használat

- Prompt: display teams stats when i click on them

- Output (A felkiáltó jeles sorokat használtam):

```js
    // Example data
const teams = {
  (teamName: Liverpool,  played: 10, wins: 7, draws: 2, losses: 1, points: 23 ),
  (teamName: Arsenal, played: 10, wins: 6, draws: 3, losses: 1, points: 21 ),
  (teamName: Chelsea, played: 10, wins: 4, draws: 3, losses: 3, points: 15 )
};

// Function that displays stats
function showTeamStats(teamName) { // !!!
  const team = teams.find(t => t.teamName == teamName); // !!!
  if (!team) return; // !!!

  document.getElementById("teamStats").innerHTML = `
    <h3>${teamName}</h3>
    <ul>
      <li>Played: ${team.played}</li>
      <li>Wins: ${team.wins}</li>
      <li>Draws: ${team.draws}</li>
      <li>Losses: ${team.losses}</li>
      <li>Points: ${team.points}</li>
    </ul>
  `;
}
```
