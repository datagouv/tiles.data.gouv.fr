import React from 'react'
import PropTypes from 'prop-types'

import Section from '../../section'

import TilesUrl from '../tiles-url'
import MapPreview from './map-preview'
import Selector from './selector'

class BaseMapsPreview extends React.Component {
  render() {
    const {title, url, selectedTheme, selectedLanguage, themes, languages, onSelectTheme, onSelectLanguage, reverse} = this.props

    return (
      <Section title={title}>
        <div className={`container ${reverse ? 'reverse' : ''}`}>

          <div className='form'>
            <h4>Choisir le thème</h4>
            <Selector list={themes} selected={selectedTheme} handleSelect={onSelectTheme} />

            {languages &&
              <div>
                <h4>Choisir la langue</h4>
                <Selector list={languages} selected={selectedLanguage} handleSelect={onSelectLanguage} />
              </div>
              }
          </div>

          <div className='map'>
            <MapPreview theme={selectedTheme} />

            <h4>URL du fond de carte</h4>
            <TilesUrl url={url} />
          </div>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .reverse {
            flex-direction: row-reverse;
          }

          .form {
            min-width: 320px;
          }

          @media (max-width: 680px) {
            .container {
              flex-direction: column;
            }

            .container > div {
              margin: 0.5em 0;
            }

            .form {
              width: 100%;
              margin: 0;
            }
          }
        `}</style>
      </Section>
    )
  }
}

BaseMapsPreview.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,

  themes: PropTypes.array.isRequired,
  selectedTheme: PropTypes.string.isRequired,
  onSelectTheme: PropTypes.func.isRequired,

  languages: PropTypes.array,
  selectedLanguage: PropTypes.string,
  onSelectLanguage: PropTypes.func,

  reverse: PropTypes.bool
}

BaseMapsPreview.defaultProps = {
  languages: null,
  selectedLanguage: null,
  onSelectLanguage: () => {},
  reverse: false
}

export default BaseMapsPreview
