import Link from "next/link"

export default function NavBar() {
    return (
        <nav>
            <ul className="flex">
                <li className="mx-5"><Link href="/">Home</Link></li>
                <li className="mx-5"><Link href="/things">The Things I Have Made</Link></li>
                <li className="mx-5"><Link href="/recipes">Recipes</Link></li>
                <li className="mx-5"><Link href="/patterns">Patterns</Link></li>
                <li className="mx-5"><Link href="/games">Games</Link></li>
            </ul>
        </nav>
    )
}