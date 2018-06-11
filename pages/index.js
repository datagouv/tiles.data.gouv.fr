import Page from '../layouts/main'
import Hero from '../components/hero'

import VectorPreview from '../components/home/vector-preview'
import ImagePreview from '../components/home/image-preview'
import Subscribe from '../components/home/subscribe'

export default () => (
  <Page>
    <Hero
      title='tiles.data.gouv.fr'
      tagline='Fonds de carte de qualité utilisables par tous' />

    <VectorPreview />
    <ImagePreview />
    <Subscribe />
  </Page>
)
