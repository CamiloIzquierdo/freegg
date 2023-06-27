export const SkeletonCards = () => {
    return (
        <div className="flex flex-col gap-1 p-5 bg-slate-600  h-[450px] rounded-xl ">
            <div className="rounded-xl min-w-[365px] min-h-[206] w-full h-full bg-slate-400 animate-pulse duration-75" />
            <div className="flex flex-col justify-around h-full">
                <span className="min-h-[30px] w-[150px] animate-pulse duration-75 bg-slate-400 "></span>
                <span className="min-h-[96px] w-full animate-pulse duration-75 bg-slate-400"></span>
                <div className="flex gap-3 items-center">
                    <span className="p-1 rounded-lg bg-slate-400 min-h-[25px] min-w-[75px] h-full text-xs animate-pulse duration-75"></span>

                    <span className="p-1 rounded-lg bg-slate-400 text-xs min-h-[25px] min-w-[75px] h-full animate-pulse duration-75"></span>
                </div>
            </div>
        </div>
    );
};
