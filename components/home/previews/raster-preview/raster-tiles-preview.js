import React from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'

import mapStyle from 'mapbox-gl/dist/mapbox-gl.css'

class RasterTilesPreview extends React.Component {
  componentDidMount() {
    const {url} = this.props

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: {
        version: 8,
        sources: {
          'raster-tiles': {
            type: 'raster',
            tiles: [url.replace('{s}', 'a')],
            attribution: '© Ministère des Affaires Étrangères © Etalab © Contributeurs OpenStreetMap'
          }
        },
        layers: [{
          id: 'simple-tiles',
          type: 'raster',
          source: 'raster-tiles'
        }]
      },
      center: [1.7191, 46.7111],
      zoom: 4.5
    })
  }

  render() {
    return (
      <div className='container'>
        <div ref={el => {
          this.mapContainer = el
        }} className='container' />

        <style
          dangerouslySetInnerHTML={{__html: mapStyle}} // eslint-disable-line react/no-danger
        />
        <style jsx>{`
          .container {
            position: relative;
            height: 100%;
            width: 100%;
            box-shadow: 0 1px 4px #C9D3DF;
          }
        `}</style>
      </div>
    )
  }
}

RasterTilesPreview.propTypes = {
  url: PropTypes.string.isRequired
}

export default RasterTilesPreview
