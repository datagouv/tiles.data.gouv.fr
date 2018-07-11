import React from 'react'
import PropTypes from 'prop-types'
import mapboxgl from 'mapbox-gl'

import mapStyle from 'mapbox-gl/dist/mapbox-gl.css'

class Map extends React.Component {
  componentDidMount() {
    const {url} = this.props
    this.initMap()

    if (url) {
      this.updateStyle()
    }
  }

  initMap() {
    const {center, zoom, style} = this.props

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      center,
      zoom
    })

    if (style) {
      this.map.setStyle(style)
    }

    this.map.on('dragend', this.updateView.bind(this))
    this.map.on('zoomend', this.updateView.bind(this))
  }

  componentDidUpdate() {
    const {url} = this.props

    if (url) {
      this.updateStyle()
    }

    this.updateMap()
  }

  updateMap() {
    const {center, zoom} = this.props

    this.map.setCenter(center)
    this.map.setZoom(zoom)
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

  updateView() {
    const {onCenter, onZoom} = this.props
    const center = this.map.getCenter()
    const zoom = this.map.getZoom()

    onCenter([center.lng, center.lat])
    onZoom(zoom)
  }

  componentWillUnmount() {
    const {map} = this

    map.off('dragend', this.updateView.bind(this))
    map.off('zoomend', this.updateView.bind(this))
  }

  render() {
    return (
      <div className='container'>
        <div ref={el => {
          this.mapContainer = el
        }} className='container' />

        <style
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: mapStyle}} />
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

Map.propTypes = {
  url: PropTypes.string,
  style: PropTypes.string,
  center: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
  onCenter: PropTypes.func.isRequired,
  onZoom: PropTypes.func.isRequired
}

Map.defaultProps = {
  url: null,
  style: null
}

export default Map
