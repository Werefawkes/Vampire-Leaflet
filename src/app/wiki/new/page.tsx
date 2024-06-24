import CharacterForm from "@/app/components/CharacterForm"
import { CharacterDefaults, NewCharacter } from "@/app/components/database"

export default async function Page() {

	return (
		<div>
			<CharacterForm onSubmit={NewCharacter} characterValues={CharacterDefaults}/>
		</div>
	)
}