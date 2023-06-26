import Link from "next/link";

interface Props {
    linkImg: string;
    img: string;
    title: string;
    shortDescription: string;
    genre: string;
    platform: string;
    linkGenre: string;
    linkPlatform: string;
}

export const Card: React.FC<Props> = ({
    linkImg,
    img,
    title,
    shortDescription,
    genre,
    platform,
    linkGenre,
    linkPlatform,
}) => {
    return (
        <div className="flex flex-col gap-1 p-5 bg-slate-600  h-[450px] rounded-xl ">
            <Link href={linkImg}>
                <img
                    src={img}
                    alt={`Portada del videojuego ${title}`}
                    className="rounded-xl"
                />
            </Link>
            <div className="flex flex-col justify-around h-full">
                <span className="font-bold ">{title}</span>
                <span className="max-w-xs overflow-ellipsis overflow-hidden max-h-[120px]">
                    {shortDescription}
                </span>
                <div className="flex gap-3 items-center">
                    <Link
                        href={linkGenre}
                        className="hover:bg-blue-500 rounded-lg"
                    >
                        <span className="border p-1 rounded-lg text-xs">
                            {genre}
                        </span>
                    </Link>
                    <Link href={linkPlatform}>
                        <span className="border p-1 rounded-lg text-xs hover:bg-blue-500">
                            {platform}
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
