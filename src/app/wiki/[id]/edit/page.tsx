import CharacterForm from "@/app/components/CharacterForm"
import NavButton from "@/app/components/NavButton"
import { EditCharacter, GetCharacterForID } from "@/app/components/database"


export default async function Page({ 
	params 
}: { 
	params: { id: string } 
}) {
	const character = await GetCharacterForID(params.id)

	const EditCharacterWithId = EditCharacter.bind(null, params.id)

	return (
		<div className="px-4">
			<CharacterForm onSubmit={EditCharacterWithId} characterValues={character} characterId={params.id}/>
			<hr className="m-4"/>
			<NavButton className="m-3" url={`/wiki/${params.id}/delete`}>Delete</NavButton>
		</div>
	)
}