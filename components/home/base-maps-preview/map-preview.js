import PropTypes from 'prop-types'

import styleTheme from '../../../styles/theme'

const MapPreview = ({theme}) => (
  <div className='preview'>
    <div><img src={`/static/images/previews/${theme}.png`} /></div>
    <style jsx>{`
      .preview img {
        width: 100%;
        box-shadow: 0 2px 8px 0 ${styleTheme.boxShadow};
      }
    `}</style>
  </div>
)

MapPreview.propTypes = {
  theme: PropTypes.string.isRequired
}

export default MapPreview
