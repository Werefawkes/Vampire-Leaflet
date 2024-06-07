import Link from "next/link"

export default function WikiLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className="p-3 mx-3 flex space-x-3">
			<ul className="list-disc">
				<li>
					Characters
					<ul className="list-disc list-inside indent-4">
						<li><Link href={"#/anabeltaylor"}>Anabel Taylor</Link></li>
					</ul>
				</li>
			</ul>
			<div>
				{children}
			</div>
		</div>
	)
}