import piwikConnector from 'piwik-react-router'

const piwik = piwikConnector({
  url: 'https://stats.data.gouv.fr',
  siteId: ''
})

piwik.push(['setDomains', ['*.tiles.data.gouv.fr']])

export default piwik
