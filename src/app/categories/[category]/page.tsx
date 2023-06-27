"use client";

import { getGameByCategory } from "@/services/calls";
import { useEffect, useState } from "react";
import { formatCategory } from "./formatedCategory";
import { Loading } from "@/components/loading";
import Pagination from "@/components/pagination";
import { Card } from "@/components/card";
import Filters from "@/app/games/filters";

interface Props {
    params: any;
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
        };

        fetchData();
    }, [formattedCategory]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="w-full flex flex-col h-full min-h-screen justify-center items-center py-1 pb-3 bg-blue-950">
            <Filters />
            {data && data.length > 0 ? (
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
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default Category;
