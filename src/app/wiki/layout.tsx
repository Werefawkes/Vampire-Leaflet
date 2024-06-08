import Link from "next/link"
import { GetCharacters, CharacterSchema } from "../components/database"

export default async function WikiLayout({
	children
}: {
	children: React.ReactNode
}) {
	const characters = await GetCharacters()
	console.log(characters)

	return (
		<div className="p-3 mx-3 flex space-x-3">
			<ul className="list-disc">
				<li>
					Characters
					<ul className="list-disc list-inside indent-4">
						{characters.map((character: CharacterSchema) => <li key={character._id}><Link href={"wiki/" + character._id}>{character.firstName} {character.lastName}</Link></li>)}
					</ul>
				</li>
			</ul>
			<div>
				{children}
			</div>
		</div>
	)
}