import { revalidatePath } from "next/cache"
import { RedirectType, redirect } from "next/navigation"

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

async function PostCharacter(data: CharacterFormProps): Promise<CharacterSchema> {	
	const res = await fetch(URL + 'characters/', {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'},
		body: JSON.stringify(data)
	})

	return await res.json()
}

async function PutCharacter(data: CharacterFormProps, id: string) {
	const res = await fetch(URL + 'characters/' + id, {
		method: "PUT",
		headers: {
			'Content-Type': 'application/json'},
		body: JSON.stringify(data)
	})
}

async function DelCharacter(id: string) {
	const res = await fetch(URL + 'characters/' + id, {
		method: "DELETE"
	})
}

export async function NewCharacter(formData: FormData) {
	'use server'

	const char = await PostCharacter(await CharacterPropsFromForm(formData))
	revalidatePath('/wiki', 'layout')
	redirect('/wiki/' + char._id)
}

export async function EditCharacter(id: string, formData: FormData) {
	'use server'

	await PutCharacter(await CharacterPropsFromForm(formData), id)
	
	revalidatePath('/wiki', 'layout')
	redirect('/wiki/' + id)
}

export async function DeleteCharacter(id: string, formData: FormData) {
	'use server'

	await DelCharacter(id)

	revalidatePath('/wiki', 'layout')
	redirect('/wiki/')
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