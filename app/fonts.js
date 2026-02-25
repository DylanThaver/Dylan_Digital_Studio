import { Montserrat_Alternates, Allura } from 'next/font/google'
import localFont from 'next/font/local' // Import the local font loader

// Your existing Google fonts
export const taglineFont = Allura({
  subsets: ['latin'],
  weight: '400',
})

export const mainFont = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const RushDriver = localFont({
  src: './fonts/RushDriver.otf', // Path relative to this fonts.js file
  display: 'swap',
})


// Your new Custom Font from the zip file
export const AdleryPro = localFont({
  src: './fonts/AdleryPro.ttf', // Path relative to this fonts.js file
  display: 'swap',
})