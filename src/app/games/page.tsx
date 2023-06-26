import Filters from "@/app/games/filters";
import DataAllGames from "./data";

export default function Home() {
    return (
        <div className="h-full bg-blue-950 ">
            <Filters />
            <DataAllGames />
        </div>
    );
}
