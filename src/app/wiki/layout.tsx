import Link from "next/link"
import { GetCharacters, CharacterSchema } from "../components/database"
import NavButton from "../components/NavButton"

export default async function WikiLayout({
	children
}: {
	children: React.ReactNode
}) {
	const characters = await GetCharacters()

	return (
		<div className="p-3 mx-3 flex space-x-3">
			<div>
				<ul className="list-disc m-2">
					<li>
						Characters
						<ul className="list-disc list-inside indent-4">
							{characters.map((character: CharacterSchema) => <li className="px-1 rounded transition hover:bg-slate-700" key={character._id}><Link href={"/wiki/" + character._id}>{character.firstName} {character.lastName}</Link></li>)}
						</ul>
					</li>
				</ul>
				<NavButton url="/wiki/new">New</NavButton>
			</div>
			<div>
				{children}
			</div>
		</div>
	)
}