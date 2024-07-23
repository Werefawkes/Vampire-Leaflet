import CharacterForm from "@/app/components/CharacterForm"
import { NewCharacter } from "@/app/components/database"
import { CharacterDefaults } from "@/app/components/Schemas"

export default async function Page() {

	return (
		<div>
			<CharacterForm onSubmit={NewCharacter} characterValues={CharacterDefaults}/>
		</div>
	)
}