import React from 'react'
import PropTypes from 'prop-types'
import copy from 'copy-to-clipboard'

import FaCopy from 'react-icons/lib/fa/copy'

import theme from '../../../styles/theme'

class TilesUrl extends React.Component {
  constructor(props) {
    super(props)
    this.handleCopy = this.handleCopy.bind(this)
  }

  handleCopy() {
    const {url} = this.props
    copy(url)
  }

  render() {
    const {url} = this.props

    return (
      <div className='container'>
        <input type='text' value={url} disabled />
        <button onClick={this.handleCopy}><FaCopy /></button>
        <style jsx>{`
          .container {
            display: inline-flex;
            width: 100%;
          }

          input {
            border-radius: 5px 0 0 5px;
            border-right: 0;
          }

          button {
            padding: 1em;
            border-radius: 0 5px 5px 0;
            font-size: 14px;
            background-color: ${theme.primary};
            color: ${theme.colors.white};
          }
        `}</style>
      </div>
    )
  }
}

TilesUrl.propTypes = {
  url: PropTypes.string.isRequired
}

export default TilesUrl
