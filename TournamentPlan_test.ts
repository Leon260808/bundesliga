import { assertEquals, assertNotEquals } from "@std/assert";
import {createTournamentPlan} from "./TournamentPlan.ts";
import {FussballTeam, Tournament} from "./interfaces.ts";

Deno.test("createTournamentPlan erstellt alle Matches", () => {

    //Arrange
    const teams: FussballTeam[] = [
        { name: "FC Bayern München" },
        { name: "Borussia Dortmund" },
        { name: "RB Leipzig" },
        { name: "Bayer 04 Leverkusen" },
        { name: "Eintracht Frankfurt" },
        { name: "VfB Stuttgart" },
        { name: "Hamburger SV" },
        { name: "FC Schalke 04" },
        { name: "Werder Bremen" },
        { name: "1. FC Köln" }
    ]

    //Act
    const tournament: Tournament = createTournamentPlan(teams);

    //Assert
    assertEquals(tournament.matches.length, (teams.length -1) * teams.length)

});

Deno.test("kein Team spielt gegen sich selbst", () => {
    //Arrange
    const teams: FussballTeam[] = [
        { name: "FC Bayern München" },
        { name: "Borussia Dortmund" },
        { name: "RB Leipzig" },
        { name: "Bayer 04 Leverkusen" },
        { name: "Eintracht Frankfurt" },
        { name: "VfB Stuttgart" },
        { name: "Hamburger SV" },
        { name: "FC Schalke 04" },
        { name: "Werder Bremen" },
        { name: "1. FC Köln" }
    ]

    //Act
    const tournament: Tournament = createTournamentPlan(teams);

    //Assert
    for (const match of tournament.matches){
        assertNotEquals(match.homeTeam, match.guestTeam)
    }
});
