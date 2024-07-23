'use client'

import { useEffect, useState } from "react"

export default function Error({
	error,
	reset
}: {
	error: Error & { digest?: string },
	reset: () => void
}) {
	useEffect(() => {
		console.log(error)
	}, [error])

	const [showInfo, setShowInfo] = useState(false)

	const errorInfo = <div className="font-mono p-2 rounded bg-slate-800">
		{error.stack}
	</div>

	return (
		<div className="m-5">
			<div className="text-4xl">An error has occured</div>
			<div className="text-xl font-mono">{error.name}: {error.message}</div>
			<div>
				<button className="my-2 px-3 pt-1 pb-2 rounded-md bg-gray-800 transition hover:bg-slate-700 shadow-lg" onClick={() => setShowInfo(!showInfo)}>{ showInfo ? 'Hide' : 'Show more'}</button>
			</div>
			{ showInfo ? errorInfo : null}
			<div>
				<button className="my-2 text-lg px-3 pt-1 pb-2 rounded-md bg-red-950 shadow-lg transition hover:bg-red-900" onClick={() => reset()}>Try again</button>
			</div>
		</div>
	)
}