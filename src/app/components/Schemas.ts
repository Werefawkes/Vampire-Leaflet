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
	generation: "Unknown",
	bio: "",
	creature: "Human"
}
