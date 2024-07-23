import NavButton from "@/app/components/NavButton"
import { GetCharacterForID } from "@/app/components/database"

export default async function Page({ params }: { params: { id: string } }) {
	const character = await GetCharacterForID(params.id)
	const isHuman = character.creature == "Human"

	var gen = ""

	if (!isHuman) {
		if (!character.generation || character.generation < 1) {
			gen = "Unknown"
		}
		else {
			let suffix = "th"
			if (character.generation == 1) suffix = "st"
			else if (character.generation == 2) suffix = "nd"
			else if (character.generation == 3) suffix = "rd"
			gen = character.generation + suffix
		}
	}

	let age = ""
	if (character.trueAge > 0) {
		age += "Estimated " + character.trueAge + " years old"
	}
	else {
		age += "Unknown age"
	}

	if (!isHuman) {
		age += "; appears " + character.apparentAge
	}

	return (
		<div className="px-4">
			<div className="m-4">
				<div>
					<span className="text-3xl">{character.title} {character.firstName} {character.lastName}</span>
				</div>
				<div className="font-light">
					{ isHuman ? "Human" : gen + " Generation Kindred"}
				</div>
				<div className="font-extralight">{age}</div>
				<div className="text-2xl">Notes</div>
				<div className="indent-4">{character.bio}</div>
			</div>
			<NavButton url={params.id + "/edit"}>Edit</NavButton>
		</div>
	)
}