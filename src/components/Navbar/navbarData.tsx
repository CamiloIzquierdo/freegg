import Link from "next/link";

export const NavbarData = () => {
    return (
        <>
            <li>
                <Link href={"/"}>
                    <span className="block py-2 pl-3 pr-4 text-white rounded font-semibold justify-start lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-600 lg:p-0 ">
                        Home
                    </span>
                </Link>
            </li>

            <li>
                <Link href={"/games"}>
                    <span className="block py-2 pl-3 pr-4 text-white rounded font-semibold lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-600 lg:p-0 ">
                        Games
                    </span>
                </Link>
            </li>
        </>
    );
};
