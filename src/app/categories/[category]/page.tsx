"use client";

import Filters from "@/app/games/filters";
import { SkeletonCards } from "@/components/Skeletons/skeletonCards";
import { Card } from "@/components/card";
import Pagination from "@/components/pagination";
import { getGameByCategory } from "@/services/calls";
import { useEffect, useState } from "react";
import { formatCategory } from "./formatedCategory";
import { ScrollTop } from "@/utils/scrolltop";

interface Props {
    params: { category: string };
}

interface Info {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    genre: string;
    platform: string;
}

const Category: React.FC<Props> = ({ params }) => {
    const [data, setData] = useState<Info[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const PAGE_SIZE = 8;
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const currentData = data.slice(startIndex, endIndex);

    const { category } = params;
    const formattedCategory = formatCategory(category);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getGameByCategory({
                category: formattedCategory,
            });
            setData(result.data);
            result.data &&
                setTimeout(() => {
                    setLoading(false);
                }, 660);
        };

        fetchData();
    }, [formattedCategory]);

    const handlePageChange = (page: number) => {
        setLoading(true);

        setCurrentPage(page);
        setTimeout(() => {
            setLoading(false);
            ScrollTop();
        }, 660);
    };
    return (
        <div className="w-full flex flex-col h-full min-h-screen justify-center items-center py-1 pb-3 gap-4 bg-blue-950">
            <Filters />
            {!loading ? (
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
            <Pagination
                totalItems={data.length}
                itemsPerPage={PAGE_SIZE}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                disabled={loading}
            />
        </div>
    );
};

export default Category;
