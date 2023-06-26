"use client";
import Filters from "@/app/games/filters";
import { Card } from "@/components/card";
import { Loading } from "@/components/loading";
import { getGameByAll } from "@/services/calls";
import Pagination from "@/components/pagination";
import { useEffect, useState } from "react";
import { Nodata } from "@/components/nodata";

interface Props {
    params: {
        fills: any[]; // Tipo adecuado para la propiedad 'fills'
    };
}

interface Info {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    genre: string;
    platform: string;
}

const Allfilter: React.FC<Props> = ({ params }) => {
    const paramsData = params.fills;
    const [category, platform] = paramsData.slice(0, 2);
    const [data, setData] = useState<Info[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [hasData, setHasData] = useState(true);

    const PAGE_SIZE = 8;
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const currentData = data.slice(startIndex, endIndex);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getGameByAll({
                    category,
                    platform,
                });

                if (result.data.length > 0) {
                    setData(result.data);
                    setHasData(true);
                } else {
                    setHasData(false);
                }
            } catch (error) {
                setHasData(false);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="w-full flex flex-col h-full min-h-screen justify-center items-center py-3 pb-3 bg-blue-950">
            {isLoading ? (
                <Loading />
            ) : !hasData ? (
                <Nodata />
            ) : (
                <div className="flex flex-col gap-5 ">
                    <ul className="flex flex-wrap gap-5 items-center justify-center">
                        {currentData.map((item) => (
                            <li key={item.id}>
                                <Card
                                    linkImg={`/games/${item.id}`}
                                    img={item.thumbnail}
                                    title={item.title}
                                    shortDescription={item.short_description}
                                    linkGenre={`/categories/${item.genre}`}
                                    genre={item.genre}
                                    linkPlatform={`/platform/${item.platform}`}
                                    platform={item.platform}
                                />
                            </li>
                        ))}
                    </ul>
                    <Pagination
                        totalItems={data.length}
                        itemsPerPage={PAGE_SIZE}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}
        </div>
    );
};

export default Allfilter;
