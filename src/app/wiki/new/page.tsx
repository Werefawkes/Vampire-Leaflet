import { CharacterForm, PostCharacter } from "@/app/components/database"


export default async function Page({ params }: { params: { id: string } }) {
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

		const data: CharacterForm = {
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


	return (
		<div>
			<form action={createCharacter}>
				<div>
					<input type="text" name="firstName" className="bg-red-950 rounded m-1"/>
				</div>
				<div>
					<input type="text" name="lastName" className="bg-red-950 rounded m-1"/>
				</div>
				<div>
					<input type="number" name="apparentAge" className="bg-red-950 rounded m-1"/>
				</div>
				<div>
					<input type="number" name="trueAge" className="bg-red-950 rounded m-1"/>
				</div>
				<div>
					<input type="text" name="generation" className="bg-red-950 rounded m-1"/>
				</div>
				<div>
					<input type="text" name="bio" className="form-textarea bg-red-950 rounded m-1"/>
				</div>
				<div>
					<fieldset>
						<legend>Creature</legend>
						<input type="radio" id="human" name="creature" value={"Human"} className="bg-red-950 rounded m-1"/>
						<label htmlFor="human">Human</label>

						<input type="radio" id="kindred" name="creature" value={"Kindred"} className="bg-red-950 rounded m-1"/>
						<label htmlFor="kindred">Kindred</label>

					</fieldset>
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	)
}