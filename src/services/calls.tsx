let URL = "https://free-to-play-games-database.p.rapidapi.com/api";
const perPage = 10; // Número de juegos por página

const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "f6af6c8c41msh8b623233c699d40p1fd1ddjsn2f13d6fc57aa",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
};

export const GetAllGames = async () => {
    try {
        const url = `${URL}/games`;

        const response = await fetch(url, options);
        const data = await response.json();

        return { data };
    } catch (error) {
        console.error("Error:", error);
        return { data: [] };
    }
};

export const getOneGame = async ({ id }: { id: string }) => {
    try {
        const url = `${URL}/game?id=${id}`;

        const response = await fetch(url, options);
        const data = await response.json();

        return { data };
    } catch (error) {
        console.error("Error:", error);
        return { data: [] };
    }
};

export const getGameByCategory = async ({ category }: { category: string }) => {
    try {
        const url = `${URL}/games?category=${category}`;

        const response = await fetch(url, options);
        const data = await response.json();

        return { data };
    } catch (error) {
        console.error("Error:", error);
        return { data: [] };
    }
};

export const getGameByPlatform = async ({ platform }: { platform: string }) => {
    try {
        const url = `${URL}/games?platform=${platform}`;

        const response = await fetch(url, options);
        const data = await response.json();

        return { data };
    } catch (error) {
        console.error("Error:", error);
        return { data: [] };
    }
};

export const getGameByAll = async ({
    platform,
    category,
}: {
    platform: string;
    category: string;
}) => {
    try {
        const url = `${URL}/games?platform=${platform}&category=${category}`;

        const response = await fetch(url, options);
        const data = await response.json();

        return { data };
    } catch (error) {
        console.error("Error:", error);
        return { data: [] };
    }
};
