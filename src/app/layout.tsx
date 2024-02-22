import Providers from "@/components/layout/Providers";
import "./globals.css";
import { Inter, Lora } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
    adjustFontFallback: false,
});

const lora = Lora({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-lora",
    style: ["italic", "normal"],
    adjustFontFallback: false,
});

export const metadata = {
    title: "Literasi Jamu Digital",
    description:
        "Temukan kekayaan tumbuhan obat dan simplisia dalam monografi multimedia lengkap, jelajahi naskah kuno yang menyimpan rahasia pengobatan tradisional, dan saksikan proses autentik pembuatan jamu melalui koleksi video eksklusif.",
};

export default function RootLayout({ children } : any) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${lora.variable}`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}