import { Instrument_Sans, Italiana , Abhaya_Libre, Inter, IBM_Plex_Serif } from 'next/font/google';

export const italiana = Italiana({
    weight: '400', // Italiana typically only comes in one weight
    subsets: ['latin'],
    display: 'swap', // Include relevant subsets
  });

  export const instrumentSans = Instrument_Sans({
    weight: '400', 
    subsets: ['latin'],
    display: 'swap', // Include relevant subsets
  });

  export const abhayaLibre = Abhaya_Libre({
    weight: ['400', '500','600','700'], 
    subsets: ['latin'],
    display: 'swap', // Include relevant subsets
  });

  export const inter= Inter({
    weight: '400', 
    subsets: ['latin'],
    display: 'swap', // Include relevant subsets
  });
  export const ibmPlexSerif= IBM_Plex_Serif({
    weight: '400', 
    subsets: ['latin'],
    display: 'swap', // Include relevant subsets
  });