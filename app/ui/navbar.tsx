import Link from "next/link";

export default function Nav() {
    return (
        <div className="navbar bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm">
            <div className="flex-1">
                <Link href="/" className="md:ml-5 btn btn-ghost text-xl">Muebles</Link>
            </div>
            <div className="flex-none">
                <div className="flex-none hidden md:block">
                    <ul className="menu menu-horizontal px-1 text-base antialiased font-sans font-semibold">
                        <li><Link href="/catalogo">Catálogo</Link></li>
                        <li><Link href="/nosotros">Nosotros</Link></li>
                        <li><Link href="/contactanos">Contáctanos</Link></li>
                    </ul>
                </div>
                <div className="flex-none drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer-4" className="flex-none btn btn-square btn-ghost md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-5 w-5 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            <Link href="/" className="md:ml-4 btn btn-ghost text-xl">Muebles</Link>
                            <div className="divider"></div>
                            <li className="text-base antialiased font-sans font-medium"><Link href="/catalogo">Catálogo</Link></li>
                            <li className="text-base antialiased font-sans font-medium"><Link href="/nosotros">Nosotros</Link></li>
                            <li className="text-base antialiased font-sans font-medium"><Link href="/contactanos">Contáctanos</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}