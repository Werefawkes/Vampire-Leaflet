'use client'

import { CharacterFormProps } from "@/app/components/database"
import { useState } from "react"
import NavButton from "./NavButton"


export default function CharacterForm({ 
	onSubmit, 
	characterValues,
	characterId = ""
}: { 
	onSubmit: (formData: FormData) => void, 
	characterValues: CharacterFormProps,
	characterId?: string
}) {

	const [creatureType, setCreatureType] = useState('Human')

	return (
		<div>
			<form action={onSubmit}>
			<div>
					<fieldset>
						<input type="radio" required id="human" name="creature" value={"Human"} defaultChecked onChange={e => setCreatureType(e.target.value)} className="bg-red-950 rounded m-1"/>
						<label htmlFor="human">Human</label>

						<input type="radio" required id="kindred" name="creature" value={"Kindred"} onChange={e => setCreatureType(e.target.value)} className="bg-red-950 rounded m-1"/>
						<label htmlFor="kindred">Kindred</label>
					</fieldset>
				</div>

				<div>
					<input type="text" required name="firstName" defaultValue={characterValues.firstName} className="bg-red-950 rounded m-1"/>
					<label htmlFor="firstName">First Name</label>
				</div>
				<div>
					<input type="text" required name="lastName" defaultValue={characterValues.lastName} className="bg-red-950 rounded m-1"/>
					<label htmlFor="lastName">Last Name</label>
				</div>
				{
					creatureType == "Kindred" ? 
					<>
						<div>
							<input type="text" required name="generation" defaultValue={characterValues.generation} className="bg-red-950 rounded m-1"/>
							<label htmlFor="generation">Generation</label>
						</div>

						<div>
							<input type="number" min={1} required name="apparentAge" defaultValue={characterValues.apparentAge} className="bg-red-950 rounded m-1"/>
							<label htmlFor="apparentAge">Apparent Age</label>
						</div> 
					</>: 
					<></>
					}
				<div>
					<input type="number" min={1} required name="trueAge" defaultValue={characterValues.trueAge} className="bg-red-950 rounded m-1"/>
					<label htmlFor="trueAge">{creatureType == "Kindred" ? "True Age" : "Age"}</label>
				</div>
				<div>
					<input type="text" required name="bio" defaultValue={characterValues.bio} className="form-textarea bg-red-950 rounded m-1"/>
					<label htmlFor="bio">Biography</label>
				</div>
				<div>
					<button type="submit" className="mx-1 my-2 text-lg px-3 pt-1 pb-2 rounded-md bg-red-950 shadow-lg transition hover:bg-red-900">Submit</button>
					<NavButton className="mx-1 my-2 inline-block" url={"/wiki/" + characterId}>Cancel</NavButton>
				</div>
			</form>
		</div>
	)
}