import NavButton from "./components/NavButton";

export default async function Page() {
    return (
        <div className="m-3 p-3">
            <div className="text-3xl">London Shadows</div>
            <div className="text-xl my-1">A Vampire: The Masquerade Campaign</div>
            <NavButton className="m-1" url="/map">View the map of 1853 London</NavButton>
            <NavButton className="m-1" url="/wiki">Read info about the characters</NavButton>
            <hr className="p-2 my-3"></hr>
        </div>
    )
}