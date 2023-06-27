export const Footer = () => {
    return (
        <div className="h-7 w-full bg-blue-800 items-end justify-end flex px-5 ">
            <div className="flex gap-2 items-end py-1">
                <span className="text-xs ">Developed by Camilo Izquierdo</span>

                <a
                    href="https://www.linkedin.com/in/camilo-izquierdo-99a660229/"
                    target="_blank"
                >
                    <img src="/linkedin.svg" width={20} alt="" />
                </a>
                <a
                    href="https://www.linkedin.com/in/camilo-izquierdo-99a660229/"
                    target="_blank"
                >
                    <img src="/github.svg" width={20} alt="" />
                </a>
            </div>
        </div>
    );
};
