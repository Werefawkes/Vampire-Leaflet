import { GetCharacters, CharacterSchema } from "./database"
import Link from "next/link"

export default async function CharactersList() {
	const characters = await GetCharacters()
	var List
	if (characters.length == 0) {
		List = <li>Failed to fetch characters</li>
	} else {
		List = characters.map((character: CharacterSchema) => (
			<li className="px-1 rounded transition hover:bg-slate-700" key={character._id}><Link href={"/wiki/" + character._id}>{character.firstName} {character.lastName}</Link></li>)
		)
	}

	return (
		<ul className="list-disc list-inside indent-4">
			{List}
		</ul>
	)
}