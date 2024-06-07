import Map from "../components/map"

export default function MapPage() {
	return (
		<div className="grow p-3 rounded-lg">
			<Map posix={[51.505, -0.09]} zoom={13} />
		</div>
	)
}