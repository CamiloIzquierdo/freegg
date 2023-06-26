"use client";

import { Card } from "@/components/card";
import { Loading } from "@/components/loading";
import { GetAllGames } from "@/services/calls";
import Filters from "@/app/games/filters";
import Pagination from "@/components/pagination";
import React, { useEffect, useState } from "react";

interface Game {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    genre: string;
    platform: string;
}

const DataAllGames: React.FC = () => {
    const [allData, setAllData] = useState<Game[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const PAGE_SIZE = 8; // Cantidad de juegos por página

    useEffect(() => {
        const fetchData = async () => {
            const result = await GetAllGames();
            setAllData(result.data);
        };

        fetchData();
    }, []);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const currentData = allData.slice(startIndex, endIndex);

    return (
        <div className="w-full flex flex-col h-full justify-center items-center gap-10 py-3 bg-blue-950">
            <ul className="flex flex-wrap gap-5 items-center justify-center">
                {currentData && currentData.length > 0 ? (
                    currentData.map((item: Game) => (
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
                    ))
                ) : (
                    <Loading />
                )}
            </ul>

            <Pagination
                totalItems={allData.length}
                itemsPerPage={PAGE_SIZE}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default DataAllGames;
