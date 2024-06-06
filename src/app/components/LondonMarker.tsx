import { Marker, Tooltip } from "react-leaflet";
import { LatLng, LatLngExpression, LatLngTuple } from "leaflet";

interface MarkerProps {
	position: LatLngExpression | LatLngTuple,
	tooltip: string
}

export default function (MarkerP: MarkerProps) {
	const { position, tooltip } = MarkerP
	return (
		<Marker position={position}>
			<Tooltip>
				{tooltip}
			</Tooltip>
		</Marker>
	)
}