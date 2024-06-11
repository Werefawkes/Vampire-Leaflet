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

export async function PostCharacter(data: CharacterFormProps) {
	const res = await fetch(URL + 'characters/', {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'},
		body: JSON.stringify(data)
	})

	console.log(res)

	return
}