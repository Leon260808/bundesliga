# Bundesliga-Simulation

Eine kleine Deno/TypeScript-Anwendung, die eine komplette Bundesliga-Saison
simuliert und die Abschlusstabelle ausgibt. Teams werden aus einer Textdatei
geladen, ein Spielplan mit Hin- und Rückrunde wird erstellt, jedes Spiel wird
unter Berücksichtigung der Team-Stärke simuliert und am Ende die sortierte
Tabelle berechnet.

## Voraussetzungen

- [Deno](https://deno.com/) (Runtime)

## Projekt starten

```bash
deno task dev
```

Simuliert eine Saison und gibt die Tabelle aus. Läuft im Watch-Modus und lädt
bei Dateiänderungen automatisch neu.

Einmaliger Lauf ohne Watch:

```bash
deno run --allow-read main.ts
```

> **Hinweis:** Das `--allow-read`-Flag ist nötig, weil die Teams aus einer Datei
> (`testfiles/even_teams.txt`) gelesen werden. Im `dev`-Task ist es bereits
> hinterlegt.

## Tests

```bash
deno test --allow-read
```

Optional mit Coverage:

```bash
deno test --allow-read --coverage=coverage
deno coverage coverage
```

## Typprüfung

```bash
deno check *.ts
```

## Projektstruktur

| Datei | Zweck |
|-------|-------|
| `main.ts` | Einstiegspunkt - verbindet alle Module (`runSeason`) |
| `Teams.ts` | Teams aus Datei laden (`fetchTeams`) |
| `TournamentPlan.ts` | Spielplan mit Hin-/Rückrunde erstellen |
| `Simulation.ts` | Spiele simulieren (mit Stärke-Bonus) |
| `Table.ts` | Tabelle berechnen und ausgeben |
| `interfaces.ts` | Gemeinsame Typdefinitionen |
| `testfiles/` | Beispiel-Teamlisten (`even_teams.txt`, `odd_teams.txt`) |

## Ablauf

```
fetchTeams → createTournamentPlan → simulateTournament → calculateStandings → createTable
```

Die Teamliste muss eine gerade Anzahl an Teams enthalten - andernfalls wirft
`fetchTeams` einen Fehler ("Odd number of teams.").
