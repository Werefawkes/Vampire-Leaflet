import { Marker, Tooltip } from "react-leaflet";
import { icon, LatLng, LatLngExpression, LatLngTuple } from "leaflet";

interface MarkerProps {
	position: LatLngExpression | LatLngTuple,
	tooltip: string,
	category: string
}


export default function (props: MarkerProps) {
	const { position, tooltip, category } = props
	return (
		<Marker position={position} icon={icon({iconUrl: category, iconSize: [50, 50]
		})}>
			<Tooltip>
				{tooltip}
			</Tooltip>
		</Marker>
	)
}