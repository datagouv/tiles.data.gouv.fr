import React from 'react'

import Page from '../layouts/main'

import Hero from '../components/hero'

import Subscribe from '../components/home/subscribe'
import Previews from '../components/home/previews'

const Home = () => (
  <Page>
    <Hero
      title='tiles.data.gouv.fr'
      tagline='Fonds de carte de qualité utilisables par tous' />
    <Previews />
    <Subscribe />
  </Page>
)

export default Home
