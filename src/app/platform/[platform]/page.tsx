"use client";

import Filters from "@/app/games/filters";
import { SkeletonCards } from "@/components/Skeletons/skeletonCards";
import { Card } from "@/components/card";
import Pagination from "@/components/pagination";
import { getGameByPlatform } from "@/services/calls";
import { useEffect, useState } from "react";
import { formatedPlatform } from "./formatedPlatform";
import { ScrollTop } from "@/utils/scrolltop";

interface Props {
    params: { platform: string };
}

interface Info {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    genre: string;
    platform: string;
}

const Platform: React.FC<Props> = ({ params }) => {
    const [data, setData] = useState<Info[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const { platform } = params;
    const PAGE_SIZE = 8;
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const currentData = data.slice(startIndex, endIndex);
    const formatedPlatforms = formatedPlatform(platform);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getGameByPlatform({
                platform: formatedPlatforms,
            });
            setData(result.data);
            result.data &&
                setTimeout(() => {
                    setLoading(false);
                }, 660);
        };

        fetchData();
    }, [formatedPlatform]);

    const handlePageChange = (page: number) => {
        setLoading(true);

        setCurrentPage(page);
        setTimeout(() => {
            setLoading(false);
            ScrollTop();
        }, 660);
    };

    return (
        <div className="w-full flex flex-col h-full justify-center items-center py-1 pb-3 bg-blue-950">
            <Filters />
            {!loading ? (
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
                                    platform={item.platform}
                                    linkPlatform={`/platform/${item.platform}`}
                                />
                            </li>
                        ))}
                    </ul>
                    <Pagination
                        totalItems={data.length}
                        itemsPerPage={PAGE_SIZE}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                        disabled={loading}
                    />
                </div>
            ) : (
                <div className="flex flex-wrap gap-5 items-center justify-center">
                    <SkeletonCards />
                    <SkeletonCards />
                    <SkeletonCards />
                    <SkeletonCards />
                    <SkeletonCards />
                    <SkeletonCards />
                    <SkeletonCards />
                    <SkeletonCards />
                </div>
            )}
        </div>
    );
};

export default Platform;
