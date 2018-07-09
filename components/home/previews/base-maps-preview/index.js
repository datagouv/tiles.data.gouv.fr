import React from 'react'
import PropTypes from 'prop-types'

import Section from '../../../section'

import TilesUrl from '../tiles-url'
import Selector from './selector'

class BaseMapsPreview extends React.Component {
  render() {
    const {title, url, selectedTheme, selectedLanguage, themes, languages, onSelectTheme, onSelectLanguage, children} = this.props

    return (
      <Section title={title}>
        <div className='container'>

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
            <div className='preview'>
              {children}
            </div>

            <h4>URL du fond de carte</h4>
            <TilesUrl url={url} />
          </div>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
          }

          .map {
            width: 100%;
          }

          .preview {
            height: 70vh;
          }

          .form {
            margin: 1em 0;
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

            .map {
              width: 100%;
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

  children: PropTypes.node.isRequired
}

BaseMapsPreview.defaultProps = {
  languages: null,
  selectedLanguage: null,
  onSelectLanguage: () => {}
}

export default BaseMapsPreview
