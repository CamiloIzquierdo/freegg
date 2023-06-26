interface Props {
    graphics: string;
    memory: string;
    os: string;
    processor: string;
    storage: string;
}

export const Specs: React.FC<Props> = ({
    graphics,
    memory,
    os,
    processor,
    storage,
}) => {
    return (
        <div className="items-center justify-center h-fit w-full grid md:grid-cols-2 lg:gap-3 gap-2 lg:px-20 ">
            <div className="flex gap-4 items-center justify-start px-2 bg-slate-600 lg:h-28 h-32">
                <img src="/card.svg" className="lg:w-14 w-8" alt="" />
                <div className="flex flex-col">
                    <span>Graphics : </span>
                    <span className="max-w-[250px]">{graphics}</span>
                </div>
            </div>
            <div className="flex gap-4 items-center justify-start px-2 bg-slate-600 lg:h-28 h-32">
                <img src="/ram.svg" className="lg:w-14 w-8" alt="" />
                <div className="flex flex-col">
                    <span>Memory : </span>
                    <span className="max-w-[250px]">{memory}</span>
                </div>
            </div>
            <div className="flex gap-4 items-center justify-start px-2 bg-slate-600 lg:h-28 h-32">
                <img src="/win.svg" className="lg:w-14 w-8" alt="" />
                <div className="flex flex-col">
                    <span>OS : </span>
                    <span className="max-w-[250px]">{os}</span>
                </div>
            </div>
            <div className="flex gap-4 items-center justify-start px-2 bg-slate-600 lg:h-28 h-32">
                <img src="/proce.svg" className="lg:w-14 w-8" alt="" />
                <div className="flex flex-col">
                    <span>Processor : </span>
                    <span className="max-w-[250px]">{[processor]}</span>
                </div>
            </div>
            <div className="flex gap-4 items-center justify-start px-2 bg-slate-600 lg:h-28 h-32">
                <img src="/storage.svg" className="lg:w-14 w-8" alt="" />
                <div className="flex flex-col">
                    <span>Graphics : </span>
                    <span className="max-w-[250px]">{storage}</span>
                </div>
            </div>
        </div>
    );
};
