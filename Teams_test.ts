import {assertEquals, assertThrows} from "@std/assert";
import {fetchTeams} from "./Teams.ts"
import {FussballTeam} from "./interfaces.ts";

Deno.test("Fetch even_teams.txt", () => {
  // Arrange
  const txtPath = "./testfiles/even_teams.txt"
  const expectedTeams: FussballTeam[] = [
    { name: "FC Bayern München", strength: 9 },
    { name: "Borussia Dortmund", strength: 8 },
    { name: "RB Leipzig", strength: 7 },
    { name: "Bayer 04 Leverkusen", strength: 6 },
    { name: "Eintracht Frankfurt", strength: 5 },
    { name: "VfB Stuttgart", strength: 4 },
    { name: "Hamburger SV", strength: 3 },
    { name: "FC Schalke 04", strength: 2 },
    { name: "Werder Bremen", strength: 1 },
    { name: "1. FC Köln", strength: 0 }
  ]

  // Act
  const teams: FussballTeam[] = fetchTeams(txtPath);


  // Assert
  assertEquals(teams, expectedTeams)
})

Deno.test("Fetch odd_teams.txt throws error", () => {
  // Arrange
  const txtPath = "./testfiles/odd_teams.txt"

  // Act/Assert
  assertThrows(fetchTeams(txtPath), "Odd number of teams.")
})