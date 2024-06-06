import dynamic from "next/dynamic";
import { useMemo } from "react";
import Navbar from "./components/Navbar";

// Thanks to this article for helping me get Leaflet to work:
// https://andresprieto-25116.medium.com/how-to-use-react-leaflet-in-nextjs-with-typescript-surviving-it-21a3379d4d18

export default async function Page() {
    const Map = useMemo(() => dynamic(
        () => import('./components/map'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])

    return (
        <div>
        </div>
    )
}