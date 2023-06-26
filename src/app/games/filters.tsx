"use client";
import React, { useState } from "react";

const Filters = () => {
    const [toggle, setToggle] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );
    const [selectedPlatform, setSelectedPlatform] = useState<string | null>(
        null
    );

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleCheckboxChange = (
        value: string,
        type: "category" | "platform"
    ) => {
        if (type === "category") {
            setSelectedCategory(value === selectedCategory ? null : value);
        } else if (type === "platform") {
            setSelectedPlatform(value === selectedPlatform ? null : value);
        }
    };

    const handleApplyFilters = () => {
        if (selectedCategory && !selectedPlatform) {
            window.location.href = `/categories/${selectedCategory}`;
        } else if (!selectedCategory && selectedPlatform) {
            window.location.href = `/platform/${selectedPlatform}`;
        } else if (selectedCategory && selectedPlatform) {
            window.location.href = `/allfilters/${selectedCategory}/${selectedPlatform}`;
        }
    };

    const categories = [
        { value: "MMO", label: "MMO" },
        { value: "Shooter", label: "Shooter" },
        { value: "MOBA", label: "MOBA" },
        { value: "Battle Royale", label: "Battle Royale" },
        { value: "Strategy", label: "Strategy" },
        { value: "Card", label: "Card Games" },
        { value: "Racing", label: "Racing" },
        { value: "Fighting", label: "Fighting" },
    ];

    const platforms = [{ value: "pc" }, { value: "browser" }, { value: "all" }];

    return (
        <div className="w-full h-full items-end justify-end lg:items-end lg:justify-end lg:px-5 flex bg-blue-950 py-2">
            <div className="relative w-64 items-center justify-center flex">
                <div
                    className="p-1 border rounded-md cursor-pointer w-fit items-center justify-center flex"
                    onClick={handleToggle}
                >
                    <span className="text-xs">Filters</span>
                </div>
                {toggle && (
                    <div className="flex">
                        <div className="bg-blue-700 flex flex-col gap-1 items-center justify-center px-2 py-2 absolute top-[26px] left-0 rounded-lg">
                            <div className="flex gap-1">
                                <ul className="flex flex-col gap-1 ">
                                    {categories.map((category) => (
                                        <li
                                            className="hover:bg-blue-950 "
                                            key={category.value}
                                        >
                                            <label className="gap-2 flex">
                                                <input
                                                    type="checkbox"
                                                    value={category.value}
                                                    checked={
                                                        category.value ===
                                                        selectedCategory
                                                    }
                                                    onChange={() =>
                                                        handleCheckboxChange(
                                                            category.value,
                                                            "category"
                                                        )
                                                    }
                                                />
                                                {category.label}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                                <div className="h-60 w-[2px] bg-gradient-to-t from-blue-700 to-blue-300 rounded-xl"></div>
                                <ul className="flex flex-col gap-1 ">
                                    {platforms.map((platform) => (
                                        <li
                                            className="hover:bg-blue-950 rounded-sm"
                                            key={platform.value}
                                        >
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    value={platform.value}
                                                    checked={
                                                        platform.value ===
                                                        selectedPlatform
                                                    }
                                                    onChange={() =>
                                                        handleCheckboxChange(
                                                            platform.value,
                                                            "platform"
                                                        )
                                                    }
                                                />
                                                {platform.value}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 h-fit rounded"
                                    onClick={handleApplyFilters}
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Filters;
