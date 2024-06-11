export interface CharacterSchema {
	_id: string,
	firstName: string,
	lastName: string,
	apparentAge: number,
	trueAge: number,
	generation: string,
	bio: string,
	creature: string
}

export interface CharacterFormProps {
	firstName: string,
	lastName: string,
	apparentAge: number,
	trueAge: number,
	generation: string,
	bio: string,
	creature: string
}

export const CharacterDefaults: CharacterFormProps = {
	firstName: "",
	lastName: "",
	apparentAge: 0,
	trueAge: 0,
	generation: "",
	bio: "",
	creature: "Human"
}

const URL = 'http://localhost:3001/'

export async function GetCharacters(): Promise<CharacterSchema[]> {
	const res = await fetch(URL + 'characters')

	if (!res.ok) {
		throw new Error("Failed to fetch data")
	}

	return res.json()
}

export async function GetCharacterForID(_id:string): Promise<CharacterSchema> {
	const res = await fetch(URL + 'characters/' + _id)

	if (!res.ok) {
		throw new Error("Failed to fetch data")
	}

	return res.json()
}

async function PostCharacter(data: CharacterFormProps) {	
	const res = await fetch(URL + 'characters/', {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'},
		body: JSON.stringify(data)
	})

	console.log(res)
}

async function PutCharacter(data: CharacterFormProps, id: string) {
	const res = await fetch(URL + 'characters/' + id, {
		method: "PUT",
		headers: {
			'Content-Type': 'application/json'},
		body: JSON.stringify(data)
	})

	console.log(res)

}

export async function NewCharacter(formData: FormData) {
	'use server'

	PostCharacter(await CharacterPropsFromForm(formData))
}

export async function EditCharacter(formData: FormData) {
	'use server'

	PutCharacter(await CharacterPropsFromForm(formData))
}

export async function CharacterPropsFromForm(formData: FormData): Promise<CharacterFormProps> {
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

	return data
}