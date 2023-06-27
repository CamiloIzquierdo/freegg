import { ScrollTop } from "@/utils/scrolltop";
import React from "react";

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    disabled?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
    disabled = false,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePreviousPage = () => {
        onPageChange(currentPage - 1);
    };

    const handleNextPage = () => {
        onPageChange(currentPage + 1);
    };

    return (
        <div className="flex gap-5 items-center justify-center">
            <button
                disabled={currentPage === 1 || disabled}
                onClick={handlePreviousPage}
                className="font-bold border py-2 px-2 bg-white text-black"
            >
                Anterior
            </button>
            <span className="justify-center items-center flex text-2xl font-bold">
                {currentPage}
            </span>
            <button
                disabled={currentPage === totalPages || disabled}
                onClick={handleNextPage}
                className="font-bold border py-2 px-2 bg-white text-black"
            >
                Siguiente
            </button>
        </div>
    );
};

export default Pagination;
