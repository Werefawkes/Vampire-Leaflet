import Link from 'next/link'

export default function NavButton({
	url,
	className,
	disabled,
	children
}: {
	url: string,
	className?: string,
	disabled: boolean,
	children: React.ReactNode
}) {
	if (disabled) {
		return (
			<div className={className + " text-lg text-zinc-400 px-3 pt-1 pb-2 rounded-md bg-zinc-800 shadow-lg "}>{children}</div>
		)
	}
	
	return (
		<Link href={url} className={className + " text-lg px-3 pt-1 pb-2 rounded-md bg-red-950 shadow-lg transition hover:bg-red-900"}>{children}</Link>
	)
}