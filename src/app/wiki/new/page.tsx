import CharacterForm from "@/app/components/CharacterForm"
import { CharacterDefaults, CharacterFormProps, PostCharacter } from "@/app/components/database"
import { useState } from "react"


export default async function Page() {
	async function createCharacter(formData: FormData) {
		'use server'

		const raw = {
			firstName: formData.get('firstName')?.toString(),
			lastName: formData.get('lastName')?.toString(),
			apparentAge: formData.get('apparentAge')?.toString(),
			trueAge: formData.get('trueAge')?.toString(),
			generation: formData.get('generation')?.toString(),
			bio: formData.get('bio')?.toString(),
			creature: formData.get('creature')?.toString()
		}

		const data: CharacterFormProps = {
			firstName: raw.firstName ? raw.firstName : "FirstName",
			lastName: raw.lastName ? raw.lastName.toString() : "LastName",
			apparentAge: raw.apparentAge ? Number.parseInt(raw.apparentAge) : 0,
			trueAge: raw.trueAge ? Number.parseInt(raw.trueAge) : 0,
			generation: raw.generation ? raw.generation : "Generation",
			bio: raw.bio ? raw.bio : "Bio",
			creature: raw.creature ? raw.creature : "Creature"
		}

		PostCharacter(data)
	}
	// const [isKindred, setIsKindred] = useState(true)

	return (
		<div>
			<CharacterForm onSubmit={createCharacter} characterValues={CharacterDefaults}/>
		</div>
	)
}