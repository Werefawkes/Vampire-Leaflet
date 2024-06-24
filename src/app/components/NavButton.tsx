import Link from 'next/link'

export default function NavButton({
	url,
	className,
	children
}: {
	url: string,
	className?: string,
	children: React.ReactNode
}) {
	return (
		<Link href={url} className={className + " text-lg px-3 pt-1 pb-2 rounded-md bg-red-950 shadow-lg transition hover:bg-red-900"}>{children}</Link>
	)
}