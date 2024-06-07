import { Marker, Polygon, Tooltip } from "react-leaflet";
import { icon, LatLng, LatLngExpression, LatLngLiteral, LatLngTuple } from "leaflet";

interface PolygonProps {
	positions: LatLngExpression[],
	color: string
}


export default function (props: PolygonProps) {
	const { positions, color } = props
	
	return (
		<Polygon pathOptions={{ color: color }} positions={positions}/>
	)
}