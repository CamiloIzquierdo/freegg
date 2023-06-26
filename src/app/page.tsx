"use client";

import Link from "next/link";
export default function Home() {
    return (
        <div className="items-center justify-center flex xl:h-header h-full bg-blue-950">
            <div className="flex xl:flex-row flex-col w-screen xl:px-16 xl:py-0 px-3 py-6 ">
                <img
                    src="/home.jpg"
                    alt=""
                    className="rounded-l-xl flex xl:w-1/2 w-full"
                />
                <div className="flex-col flex gap-9 items-center justify-center xl:w-1/2 w-full px-3 bg-blue-900 py-4 xl:py-0 rounded-r-xl">
                    <h1 className="xl:text-8xl text-4xl font-semibold text-center ">
                        ¡Bienvenidos a FreeGG!
                    </h1>
                    <h2 className="text-3xl max-w-2xl">
                        ¿Estás buscando la próxima aventura épica, un desafío
                        estratégico o simplemente algo para relajarte y pasar el
                        tiempo? Nuestro objetivo es proporcionarte una selección
                        diversa y emocionante de juegos free-to-play, abarcando
                        géneros que van desde acción y aventura hasta estrategia
                        y rol, y mucho más.
                    </h2>
                    <button className="bg-white text-blue-950 hover:text-blue-700 py-2 px-3 rounded-lg font-bold hover:scale-105 transition-all">
                        <Link href="/games">Empieza tu busqueda!</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
