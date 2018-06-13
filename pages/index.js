import React, {Fragment} from 'react'
import dynamic from 'next/dynamic'

import Page from '../layouts/main'
import withWebGl from '../components/hoc/with-web-gl'

import Hero from '../components/hero'
import Loader from '../components/loader'

import Subscribe from '../components/home/subscribe'
import Section from '../components/section'

const loading = (
  <Section title=' '>
    <div className='centered'>
      <Loader />
      <p>Chargement…</p>
      <style jsx>{`
          .centered {
            height: 100px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `}</style>
    </div>
  </Section>
)

const Previews = dynamic({
  ssr: false,
  loading: () => loading,
  modules: () => {
    const components = {
      VectorPreview: import('../components/home/previews/vector-preview'),
      ImagePreview: import('../components/home/previews/image-preview')
    }
    return components
  },
  render: (props, {VectorPreview, ImagePreview}) => (
    <Fragment>
      <VectorPreview />
      <ImagePreview />
    </Fragment>
  )
})

const Home = () => (
  <Page>
    <Hero
      title='tiles.data.gouv.fr'
      tagline='Fonds de carte de qualité utilisables par tous' />
    <Previews />
    <Subscribe />
  </Page>
)

export default withWebGl(Home)
