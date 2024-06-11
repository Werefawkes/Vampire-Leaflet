import CharacterForm from "@/app/components/CharacterForm"
import { EditCharacter, GetCharacterForID } from "@/app/components/database"


export default async function Page({ params }: { params: { id: string } }) {
	const character = await GetCharacterForID(params.id)

	return (
		<div className="px-4">
			<CharacterForm onSubmit={EditCharacter} characterValues={character} />
		</div>
	)
}