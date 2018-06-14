import React from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'

import mapStyle from 'mapbox-gl/dist/mapbox-gl.css'

class RasterTilesPreview extends React.Component {
  initMap() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      center: [1.7191, 46.7111],
      zoom: 4.5
    })
  }

  updateStyle() {
    const {url} = this.props
    const style = {
      version: 8,
      sources: {
        'raster-tiles': {
          type: 'raster',
          tiles: ['a', 'b', 'c'].map(s => url.replace('{s}', s)),
          tileSize: 256,
          attribution: '© Ministère des Affaires Étrangères © Etalab © Contributeurs OpenStreetMap'
        }
      },
      layers: [{
        id: 'simple-tiles',
        type: 'raster',
        source: 'raster-tiles'
      }]
    }

    this.map.setStyle(style)
  }

  componentDidMount() {
    this.initMap()
    this.updateStyle()
  }

  componentDidUpdate() {
    this.updateStyle()
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
