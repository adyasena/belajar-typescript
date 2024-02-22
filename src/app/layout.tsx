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
    title: "Inspirasi Kalirejo",
    description:
        "Temukan destinasi wisata terbaik dan produk UMKM unggulan di Desa Kalirejo, Kecamatan Salaman, Kabupaten Magelang, Jawa Tengah",
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