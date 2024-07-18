import Link from "next/link"
import NavButton from "./NavButton"

export default function Navbar() {
	return (
		<div className="flex justify-start gap-2 bg-slate-900">
			{[
				["London Shadows", "/"],
				["Map", "/map"],
				["Wiki", "/wiki"]
			].map(([title, url]) => (
				<NavButton className="ml-3 my-2 " disabled={title == "Wiki"} key={title} url={url}>{title}</NavButton>
			))}
		</div>
		)
}