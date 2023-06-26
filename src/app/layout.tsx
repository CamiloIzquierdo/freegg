import { GlobalContextProvider } from "@/Context/context";
import { Footer } from "@/components/Footer/foooter";
import { Navbar } from "@/components/Navbar/navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import Filters from "@/app/games/filters";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "FreeGG",
    description: "FreeGG best platform for free games",
    icon: "./logoheader.png",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <GlobalContextProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </GlobalContextProvider>
            </body>
        </html>
    );
}
