/* eslint react/no-danger: off, react/style-prop-object: off */
import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import {Map, TileLayer} from 'react-leaflet'

import leafletStyle from 'leaflet/dist/leaflet.css'

class ImageTilesPreview extends React.Component {
  shouldComponentUpdate() {
    // As seen in componentWillMount, we do not need to re-render this component.
    // All the props are not going to change.
    // If we ever need this to re-render on prop changes, remove this method.
    return false
  }

  render() {
    const {url} = this.props

    return (
      <div>
        <Map center={[46.7111, 1.7191]} zoom={5}>
          <TileLayer
            attribution='© Contributeurs <a href="http://osm.org/copyright">OpenStreetMap</a>'
            url={url} />
        </Map>

        <Head>
          <style dangerouslySetInnerHTML={{__html: leafletStyle}} />
        </Head>

        <style jsx>{`
          div {
            height: 100%;
          }

          :global(.leaflet-container) {
            height: 100%;
          }
        `}</style>
      </div>
    )
  }
}

ImageTilesPreview.propTypes = {
  url: PropTypes.string.isRequired
}

export default ImageTilesPreview
