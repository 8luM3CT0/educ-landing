//front-end
import '../styles/globals.css'
import '@material-tailwind/react/tailwind.css'
import {GoogleFonts} from 'next-google-fonts'
//back-end
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'
import {supabase} from '../backend/supabase'
import { useState } from 'react'
import { useEffect } from 'react'
import {createBrowserSupabaseClient} from '@supabase/auth-helpers-nextjs'
import {SessionContextProvider} from '@supabase/auth-helpers-react'


const progress = new ProgressBar({
  size: 3,
  color: 'green',
  className: 'z-50',
  delay: 100
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

export default function App ({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (
    <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
      <link
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
        rel='stylesheet'
      />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500&family=Montserrat+Subrayada&family=Montserrat:wght@300&family=Pathway+Extreme:wght@300&display=swap&family=Bungee+Shade&family=Bungee+Inline&family=Special+Gothic+Expanded+One&family=Share+Tech&family=Special+Gothic+Condensed+One&family=Merriweather&family=Playfair+Display" />
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}
