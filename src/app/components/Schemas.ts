export interface CharacterSchema {
	_id: string,
	firstName: string,
	lastName: string,
	title: string,
	apparentAge: number,
	trueAge: number,
	generation: number,
	bio: string,
	creature: string
}

export interface CharacterFormProps {
	firstName: string,
	lastName: string,
	title: string,
	apparentAge: number,
	trueAge: number,
	generation: number,
	bio: string,
	creature: string
}

export const CharacterDefaults: CharacterFormProps = {
	firstName: "",
	lastName: "",
	title: "",
	apparentAge: 0,
	trueAge: 0,
	generation: 0,
	bio: "",
	creature: "Human"
}
