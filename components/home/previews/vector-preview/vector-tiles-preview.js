import React from 'react'
import PropTypes from 'prop-types'
import ReactMapboxGl, {ZoomControl} from 'react-mapbox-gl'

// eslint-disable-next-line new-cap
const Map = ReactMapboxGl({})

const containerStyle = {
  height: '100%',
  width: '100%',
  boxShadow: '0 1px 4px #C9D3DF'
}

class VectorTilesPreview extends React.Component {
  render() {
    const {style} = this.props

    return (
      <Map
        zoom={[5]}
        style={style}
        center={[1.7191, 46.7111]}
        containerStyle={containerStyle}>
        <ZoomControl />
      </Map>
    )
  }
}

VectorTilesPreview.propTypes = {
  style: PropTypes.string.isRequired
}

export default VectorTilesPreview
