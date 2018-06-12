import React from 'react'

import Section from '../section'

import MapPreview from './base-maps-preview/map-preview'
import TilesUrl from './tiles-url'

class VectorPreview extends React.Component {
  render() {
    const theme = 'osm-bright'
    return (
      <Section title='Fond OpenMapTiles - vectoriel'>
        <div className='container'>
          <MapPreview theme={theme} />
          <h4>URL du fond de carte</h4>
          <TilesUrl url={`https://openmaptiles.tiles.data.gouv.fr/styles/${theme}/style.json`} />
        </div>
        <style jsx>{`
          .container {
            margin: 0 auto;
            max-width: 800px;
          }
        `}</style>
      </Section>
    )
  }
}

export default VectorPreview
