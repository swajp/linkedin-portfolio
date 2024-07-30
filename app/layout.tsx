import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import MaxWidthWrapper from "@/components/max-width-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Petr Filip",
    description: "A young IT professional who works as an IBM Db2 DBA at Kyndryl."
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MaxWidthWrapper>{children}</MaxWidthWrapper>
            </body>
        </html>
    )
}
