import Map from "../components/map"
import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import("../components/map"), {
	loading: () => <p>Loading...</p>,
	ssr: false
})

export default function MapPage() {
	return (
		<div className="grow p-3 rounded-lg">
			<DynamicMap posix={[51.505, -0.09]} zoom={13} />
		</div>
	)
}