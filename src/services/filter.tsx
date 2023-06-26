import { useEffect, useState } from "react";

export const Filter = () => {
    const [toggle, setToggle] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    useEffect(() => {
        const storedCategory = localStorage.getItem("category");
        if (storedCategory) {
            setSelectedItem(storedCategory);
        }
    }, []);
    const handleClick = (value: string) => {
        localStorage.setItem("category", value);
        setSelectedItem(value);
        window.location.href = `/categories/${value}`;
    };

    const handleListItemClick = (event: React.MouseEvent<HTMLLIElement>) => {
        const selectedValue = event.currentTarget.textContent;
        if (selectedValue) {
            handleClick(selectedValue);
        }
    };

    return (
        <div className="flex w-full lg:justify-end lg:items-end lg:px-60 justify-center items-center">
            <div
                className="p-1 border rounded-md cursor-pointer relative items-center justify-center flex"
                onClick={() => setToggle(!toggle)}
            >
                <span className="text-xs">Categories</span>
            </div>
            {toggle ? (
                <div className="bg-blue-700 absolute top-[111px] right-[214px]">
                    <ul className="flex flex-col gap-1 py-2 px-3">
                        <li
                            onClick={handleListItemClick}
                            className="hover:bg-blue-950"
                        >
                            MMO
                        </li>
                        <li
                            onClick={handleListItemClick}
                            className="hover:bg-blue-950"
                        >
                            Shooter
                        </li>
                        <li
                            onClick={handleListItemClick}
                            className="hover:bg-blue-950"
                        >
                            MOBA
                        </li>
                        <li
                            onClick={handleListItemClick}
                            className="hover:bg-blue-950"
                        >
                            Battle Royale
                        </li>
                        <li
                            onClick={handleListItemClick}
                            className="hover:bg-blue-950"
                        >
                            Strategy
                        </li>
                        <li
                            onClick={handleListItemClick}
                            className="hover:bg-blue-950"
                        >
                            Fantasy
                        </li>
                        <li
                            onClick={handleListItemClick}
                            className="hover:bg-blue-950"
                        >
                            Card
                        </li>
                        <li
                            onClick={handleListItemClick}
                            className="hover:bg-blue-950"
                        >
                            Racing
                        </li>
                        <li
                            onClick={handleListItemClick}
                            className="hover:bg-blue-950"
                        >
                            Fighting
                        </li>
                        <li
                            onClick={handleListItemClick}
                            className="hover:bg-blue-950"
                        >
                            Social
                        </li>
                        <li
                            onClick={handleListItemClick}
                            className="hover:bg-blue-950"
                        >
                            Sports
                        </li>
                    </ul>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};
