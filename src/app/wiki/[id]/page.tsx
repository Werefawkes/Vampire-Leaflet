import NavButton from "@/app/components/NavButton"
import { GetCharacterForID } from "@/app/components/database"

export default async function Page({ params }: { params: { id: string } }) {
	const character = await GetCharacterForID(params.id)
	const isHuman = character.creature == "Human"

	return (
		<div className="px-4">
			<div className="m-4">
				<div>
					<span className="text-3xl">{character.title} {character.firstName} {character.lastName}</span>
				</div>
				{ isHuman ? "" : <div className="font-light">{character.generation ? character.generation : "Unknown"} Generation Kindred</div>}
				<div className="font-extralight">Estimated {character.trueAge} years old{isHuman ? "." : `; appears ${character.apparentAge}`}</div>
				<div className="text-2xl">Notes</div>
				<div className="indent-4">{character.bio}</div>
			</div>
			<NavButton url={params.id + "/edit"}>Edit</NavButton>
		</div>
	)
}