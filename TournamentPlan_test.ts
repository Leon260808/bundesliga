import { assertEquals, assertNotEquals } from "@std/assert";
import {createTournamentPlan} from "./TournamentPlan.ts";
import {FussballTeam, Tournament} from "./interfaces.ts";

Deno.test("createTournamentPlan erstellt alle Matches", () => {

    //Arrange
    const teams: FussballTeam[] = [
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

    //Act
    const tournament: Tournament = createTournamentPlan(teams);

    //Assert
    assertEquals(tournament.matches.length, (teams.length -1) * teams.length)

});

Deno.test("kein Team spielt gegen sich selbst", () => {
    //Arrange
    const teams: FussballTeam[] = [
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

    //Act
    const tournament: Tournament = createTournamentPlan(teams);

    //Assert
    for (const match of tournament.matches){
        assertNotEquals(match.homeTeam, match.guestTeam)
    }
});
