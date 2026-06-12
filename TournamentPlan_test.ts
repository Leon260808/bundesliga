import { assertEquals, assertNotEquals } from "@std/assert";
import {createTournamentPlan} from "./TournamentPlan.ts";
import {FussballTeam, Tournament} from "./interfaces.ts";

Deno.test("createTournamentPlan erstellt alle Matches", () => {

    //Arrange
    const teams: FussballTeam[] = [
        { name: "FC Bayern München", strength: 10 },
        { name: "Borussia Dortmund", strength: 9 },
        { name: "RB Leipzig", strength: 8 },
        { name: "Bayer 04 Leverkusen", strength: 7 },
        { name: "Eintracht Frankfurt", strength: 6 },
        { name: "VfB Stuttgart", strength: 5 },
        { name: "Hamburger SV", strength: 4 },
        { name: "FC Schalke 04", strength: 3 },
        { name: "Werder Bremen", strength: 2 },
        { name: "1. FC Köln", strength: 1 }
    ]

    //Act
    const tournament: Tournament = createTournamentPlan(teams);

    //Assert
    assertEquals(tournament.matches.length, (teams.length -1) * teams.length)

});

Deno.test("kein Team spielt gegen sich selbst", () => {
    //Arrange
    const teams: FussballTeam[] = [
        { name: "FC Bayern München", strength: 10 },
        { name: "Borussia Dortmund", strength: 9 },
        { name: "RB Leipzig", strength: 8 },
        { name: "Bayer 04 Leverkusen", strength: 7 },
        { name: "Eintracht Frankfurt", strength: 6 },
        { name: "VfB Stuttgart", strength: 5 },
        { name: "Hamburger SV", strength: 4 },
        { name: "FC Schalke 04", strength: 3 },
        { name: "Werder Bremen", strength: 2 },
        { name: "1. FC Köln", strength: 1 }
    ]

    //Act
    const tournament: Tournament = createTournamentPlan(teams);

    //Assert
    for (const match of tournament.matches){
        assertNotEquals(match.homeTeam, match.guestTeam)
    }
});
