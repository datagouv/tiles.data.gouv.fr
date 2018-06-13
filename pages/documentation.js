import Page from '../layouts/main'

import Documentation from '../components/documentation'

import Section from '../components/section'

const title = 'Documentation'
const description = 'Avec l’API d’adresse.data.gouv.fr, embarquez directement les données ouvertes dans votre application.'

export default () => (
  <Page title={title} description={description}>
    <Section background='grey'><h1>Documentation</h1></Section>
    <Documentation />
  </Page>
)
