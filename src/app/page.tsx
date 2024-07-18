import NavButton from "./components/NavButton";

export default async function Page() {
    return (
        <div className="m-3 p-3">
            <div className="text-3xl">London Shadows</div>
            <div className="text-xl">A Vampire: The Masquerade Campaign</div>
            <hr className="p-2"></hr>
            <NavButton className="m-1" url="/map">See the map of 1853 London</NavButton>
            <NavButton className="m-1" url="/wiki" disabled>See info about the characters</NavButton>
        </div>
    )
}