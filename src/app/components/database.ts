export interface CharacterSchema {
	_id: string,
	firstName: string,
	lastName: string
}

export async function GetCharacters(): Promise<CharacterSchema[]> {
	const res = await fetch('http://localhost:3001/characters')

	if (!res.ok) {
		throw new Error("Failed to fetch data")
	}

	return res.json()
}