interface Props {
    title: string;
    developer: string;
    publisher: string;
    release: string;
    genre: string;
    platform: string;
}

export const Additional: React.FC<Props> = ({
    title,
    developer,
    publisher,
    platform,
    release,
    genre,
}) => {
    return (
        <div className="grid grid-cols-3 gap-5 max-w-xl justify-center">
            <div className="flex flex-col gap-1">
                <span className="text-gray-500">Title</span>
                <span>{title}</span>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-gray-500">Developer</span>
                <span>{developer}</span>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-gray-500">Publisher</span>
                <span>{publisher}</span>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-gray-500">Release Date</span>
                <span>{release}</span>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-gray-500">Genre</span>
                <span>{genre}</span>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-gray-500">Platform</span>
                <span>{platform}</span>
            </div>
        </div>
    );
};
