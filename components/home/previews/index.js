import React, {Fragment} from 'react'
import dynamic from 'next/dynamic'

import withWebGl from '../../hoc/with-web-gl'

import Loader from '../../loader'

import Section from '../../section'

const loading = (
  <Section title=' '>
    <div className='centered'>
      <Loader />
      <p>Chargement…</p>
      <style jsx>{`
          .centered {
            height: 100px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `}</style>
    </div>
  </Section>
)

const Maps = dynamic({
  ssr: false,
  loading: () => loading,
  modules: () => {
    const components = {
      VectorPreview: import('./vector-preview'),
      RasterPreview: import('./raster-preview')
    }

    return components
  },
  render: (props, {VectorPreview, RasterPreview}) => (
    <Fragment>
      <VectorPreview {...props} />
      <RasterPreview {...props} />
    </Fragment>
    )
})

class Previews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      center: [1.7191, 46.7111],
      zoom: 4.5
    }

    this.handleCenter = this.handleCenter.bind(this)
    this.handleZoom = this.handleZoom.bind(this)
  }

  handleCenter(center) {
    this.setState({center})
  }

  handleZoom(zoom) {
    this.setState({zoom})
  }

  render() {
    const {center, zoom} = this.state

    return (
      <div>
        <Maps
          center={center}
          zoom={zoom}
          onCenter={this.handleCenter}
          onZoom={this.handleZoom} />
      </div>
    )
  }
}

export default withWebGl(Previews)
