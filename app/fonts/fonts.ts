import { Raleway, Roboto } from "next/font/google";

export const raleway = Raleway({
    subsets: ['latin'],
    variable: "--font-raleway"
})

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400'],
    variable: "--font-roboto"
})