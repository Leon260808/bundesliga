import { runSeason } from "./main.ts";

Deno.test("runSeason läuft mit gerader Teamanzahl ohne Fehler", async () => {
  await runSeason("./testfiles/even_teams.txt");
});
