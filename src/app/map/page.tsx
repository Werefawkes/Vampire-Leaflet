import Map from "../components/map"

export default function MapPage() {
	return (
		<div className="h-full">
			<Map posix={[51.505, -0.09]} zoom={13} />
		</div>
	)
}