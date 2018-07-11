import React from 'react'

import Section from '../../section'

import TilesUrl from './tiles-url'

import Map from './map'

class VectorPreview extends React.Component {
  render() {
    const theme = 'osm-bright'
    const url = `https://openmaptiles.geo.data.gouv.fr/styles/${theme}/style.json`

    return (
      <Section title='Fond OpenMapTiles - vectoriel'>
        <div>
          <div className='map'>
            <Map style={url} {...this.props} />
          </div>

          <h4>URL du fond de carte</h4>
          <TilesUrl url={url} />
        </div>
        <style jsx>{`
          .map {
            height: 70vh;
          }

          @media (max-width: 680px) {
            .map {
              height: 50vh;
            }
          }

        `}</style>
      </Section>
    )
  }
}

export default VectorPreview
