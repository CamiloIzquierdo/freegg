"use client";
import { getOneGame } from "@/services/calls";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Additional } from "./additional";
import { Specs } from "./specs";
import { GameImages } from "./gameImages";

interface Screenshots {
    id: number;
    image: string;
}

interface MinimunSystem {
    graphics: string;
    memory: string;
    os: string;
    processor: string;
    storage: string;
}
interface GameData {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    screenshots: Screenshots[];
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    minimum_system_requirements: MinimunSystem;
}

interface Props {
    params: { id: string };
}

const OneGame: React.FC<Props> = ({ params }) => {
    const [data, setData] = useState<GameData | undefined>(undefined);
    const { id } = params;
    useEffect(() => {
        const fetchData = async () => {
            const result = await getOneGame({ id });
            setData(result.data);
        };

        fetchData();
    }, []);
    return (
        <div className="w-full h-full px-2 bg-blue-950">
            {data && (
                <>
                    <div className="w-full h-full flex flex-col py-11 gap-10">
                        <div className="items-center justify-center flex ">
                            <h1 className="font-bold text-3xl">{data.title}</h1>
                        </div>
                        <div className="w-full h-fit flex xl:flex-row flex-col items-start gap-10 lg:gap-0">
                            <div className="xl:w-1/2 w-full items-center justify-center flex-col flex">
                                <GameImages data={data.screenshots} />
                                {data.minimum_system_requirements ? (
                                    <Specs
                                        graphics={
                                            data.minimum_system_requirements
                                                .graphics
                                        }
                                        memory={
                                            data.minimum_system_requirements
                                                .memory
                                        }
                                        os={data.minimum_system_requirements.os}
                                        processor={
                                            data.minimum_system_requirements
                                                .processor
                                        }
                                        storage={
                                            data.minimum_system_requirements
                                                .storage
                                        }
                                    />
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="xl:w-1/2 w-full items-start justify-center flex flex-col gap-4 px-3 lg:px-0">
                                <span className="text-slate-500">
                                    About {data.title}
                                </span>
                                <span className="max-w-2xl text-xl">
                                    {data.description}
                                </span>
                                <Additional
                                    title={data.title}
                                    developer={data.developer}
                                    publisher={data.publisher}
                                    platform={data.platform}
                                    release={data.release_date}
                                    genre={data.genre}
                                />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default OneGame;
