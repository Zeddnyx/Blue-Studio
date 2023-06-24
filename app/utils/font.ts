import { NextFont } from 'next/dist/compiled/@next/font'
import { Montserrat } from 'next/font/google'

export const mont: NextFont  = Montserrat({
  subsets: ["latin"],
  weight: ["400","500","600","700"]
})
