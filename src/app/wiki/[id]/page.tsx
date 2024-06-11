import NavigationButton from "@/app/components/NavigationButton"
import { GetCharacterForID } from "@/app/components/database"
import Link from "next/link"


export default async function Page({ params }: { params: { id: string } }) {
	const character = await GetCharacterForID(params.id)

	return (
		<div className="px-4">
			<div className="text-3xl">{character.firstName} {character.lastName}</div>
			<div className="font-extralight">{character.generation ? character.generation : "Unknown"} Generation Kindred</div>
			<div className="font-extralight">Estimated Age: {character.trueAge}. Appears {character.apparentAge}.</div>
			<div className="text-2xl">Biography</div>
			<div className="indent-4">{character.bio}</div>

			<NavigationButton url={params.id + "/edit"}>Edit</NavigationButton>
		</div>
	)
}