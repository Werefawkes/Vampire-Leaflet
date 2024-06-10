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

export interface CharacterForm {
	firstName: string,
	lastName: string,
	apparentAge: number,
	trueAge: number,
	generation: string,
	bio: string,
	creature: string
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

export async function PostCharacter(data: CharacterForm) {
	const res = await fetch(URL + 'characters/', {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'},
		body: JSON.stringify(data)
	})

	console.log(res)

	return
}