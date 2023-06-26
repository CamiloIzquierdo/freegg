export const formatCategory = (category: string): string => {
    let formattedCategory = decodeURIComponent(category).replace(/ /g, "-");

    if (formattedCategory === "MMOARPG") {
        formattedCategory = "MMO";
    }
    if (formattedCategory === "ARPG") {
        formattedCategory = "MMO";
    }

    if (formattedCategory === "Card-Game") {
        formattedCategory = "card";
    }
    return formattedCategory;
};
