import NavButton from "@/app/components/NavButton";
import { DeleteCharacter, GetCharacterForID } from "@/app/components/database";

export default async function Page({ 
	params
}: { 
	params: { id: string } 
}) {
	const character = await GetCharacterForID(params.id)

	const DeleteCharacterWithId = DeleteCharacter.bind(null, params.id)

	return (
		<div>
			<p className="text-lg">Are you sure you want to delete {character.firstName} {character.lastName}? This action cannot be undone.</p>
			<form action={DeleteCharacterWithId}>
				<button type="submit" className="mx-1 my-2 text-lg px-3 pt-1 pb-2 rounded-md bg-red-950 shadow-lg transition hover:bg-red-900">Confirm Delete</button>
				<NavButton className="inline-block m-1" url={"/wiki/" + params.id}>Cancel</NavButton>
			</form>
		</div>
	)
}