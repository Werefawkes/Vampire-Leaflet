'use client'

import { CharacterFormProps, PostCharacter } from "@/app/components/database"
import { useState } from "react"


export default function CharacterForm({ onSubmit, characterValues }: { onSubmit: (formData: FormData) => void, characterValues: CharacterFormProps }) {

	const [creatureType, setCreatureType] = useState('Human')

	return (
		<div>
			<form action={onSubmit}>
			<div>
					<fieldset>
						<legend>Creature</legend>
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
					<input type="text" required name="lastName" className="bg-red-950 rounded m-1"/>
					<label htmlFor="lastName">Last Name</label>
				</div>
				{
					creatureType == "Kindred" ? 
					<>
						<div>
							<input type="text" required name="generation" className="bg-red-950 rounded m-1"/>
							<label htmlFor="generation">Generation</label>
						</div>

						<div>
							<input type="number" min={1} required name="apparentAge" className="bg-red-950 rounded m-1"/>
							<label htmlFor="apparentAge">Apparent Age</label>
						</div> 
					</>: 
					<></>
					}
				<div>
					<input type="number" min={1} required name="trueAge" className="bg-red-950 rounded m-1"/>
					<label htmlFor="trueAge">{creatureType == "Kindred" ? "True Age" : "Age"}</label>
				</div>
				<div>
					<input type="text" required name="bio" className="form-textarea bg-red-950 rounded m-1"/>
					<label htmlFor="bio">Biography</label>
				</div>
				<div>
					<button type="submit">Submit</button>
				</div>
			</form>
		</div>
	)
}