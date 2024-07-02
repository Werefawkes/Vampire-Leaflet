import Link from "next/link"
import { GetCharacters, CharacterSchema } from "../components/database"
import NavButton from "../components/NavButton"
import { Suspense } from "react"
import Loading from "../components/Loading"
import CharactersList from "../components/CharactersList"

export default async function WikiLayout({
	children
}: {
	children: React.ReactNode
}) {

	return (
		<div className="p-3 mx-3 flex space-x-3">
			<div>
				<ul className="list-disc m-2">
					<li>
						Characters
						<Suspense fallback={<Loading />}>
							<CharactersList />
						</Suspense>
					</li>
				</ul>
				<NavButton url="/wiki/new">New</NavButton>
			</div>
			<div>
				{children}
			</div>
		</div>
	)
}