import Link from "next/link"
import NavigationButton from "./NavigationButton"

export default function Navbar() {
	return (
		<div className="flex justify-start gap-2 bg-slate-900">
			{[
				["London Shadows", "/"],
				["Map", "/map"],
				["Wiki", "/wiki"]
			].map(([title, url]) => (
				<NavigationButton className="ml-3 my-2 " key={title} url={url}>{title}</NavigationButton>
			))}
		</div>
		)
}