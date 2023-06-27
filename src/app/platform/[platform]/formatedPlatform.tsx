export const formatedPlatform = (platform: string): string => {
    let formattedCategory = platform;
    if (formattedCategory === "PC%20(Windows)") {
        formattedCategory = "pc";
    }
    if (formattedCategory === "Web%20Browser") {
        formattedCategory = "browser";
    }

    if (formattedCategory === "PC%20(Windows)%2C%20Web%20Browser") {
        formattedCategory = "all";
    }
    return formattedCategory;
};
