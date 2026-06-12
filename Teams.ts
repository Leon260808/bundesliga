import {FussballTeam} from "./interfaces.ts";

export async function fetchTeams(path: string): Promise<FussballTeam[]> {
  const text = await Deno.readTextFile(path)
  const teamNames = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const teams: FussballTeam[] = []
  teamNames.map((teamName, i) => {
    if (teamName === "") {
      return
    }
    teams.push({name: teamName, strength: teamNames.length-i })
  })

  if (teams.length % 2 !== 0) {
    throw new Error("Odd number of teams.")
  }

  return teams
}