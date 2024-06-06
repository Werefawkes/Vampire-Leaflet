import dynamic from "next/dynamic";
import { useMemo } from "react";
import Navbar from "./components/Navbar";


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