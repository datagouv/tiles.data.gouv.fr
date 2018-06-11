import React from 'react'
import PropTypes from 'prop-types'

import styleTheme from '../../styles/theme'

import Section from '../section'
import ButtonLink from '../button-link'

class BaseMapsPreview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTheme: props.themes[0]
    }

    this.handleTheme = this.handleTheme.bind(this)
  }

  handleTheme(theme) {
    this.setState({selectedTheme: theme})
  }

  render() {
    const {selectedTheme} = this.state
    const {title, themes, demo, reverse, children} = this.props

    return (
      <Section title={title}>
        <div className={`container ${reverse ? 'reverse' : ''}`}>
          <div className='content'>
            {children}
            <div className='demo'>
              <ButtonLink href={demo}>Voir la démo</ButtonLink>
            </div>
          </div>

          <div className='preview'>
            <div><img src={`/static/images/previews/${selectedTheme}.png`} /></div>
            <div className='themes'>
              {themes.map(theme => (
                <div
                  key={theme}
                  className={`theme ${theme === selectedTheme ? 'selected' : ''}`}
                  onClick={() => this.handleTheme(theme)}>{theme}</div>
                ))}
            </div>
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

          .content {
            max-width: 600px;
            min-width: 200px;
            margin: 0 2em;
          }

          .demo {
            text-align: center;
          }

          .preview {
            max-width: 600px;
            min-width: 300px;
          }

          .themes {
            display: flex;
            justify-content: space-around;
            margin: 0.5em 0;
          }

          .theme {
            border: 1px solid ${styleTheme.primary};
            border-radius: 4px;
            border-color: ${styleTheme.border};
            padding: 0.3em 0.5em;
          }

          .theme:hover {
            cursor: pointer;
            border-color: ${styleTheme.primaryLight};
            color: ${styleTheme.primaryLight};
          }

          .theme:first-letter {
            text-transform: capitalize;
          }

          .theme.selected {
            border-color: ${styleTheme.primary};
            background-color: ${styleTheme.primary};
            color: ${styleTheme.colors.white};
          }


          .preview img {
            width: 100%;
            box-shadow: 0 2px 8px 0 ${styleTheme.boxShadow};
          }

          @media (max-width: 680px) {
            .container {
              flex-direction: column;
            }

            .content {
              width: 100%;
              margin: 0;
            }

            .demo {
              margin: 1em 0;
            }
          }
        `}</style>
      </Section>
    )
  }
}

BaseMapsPreview.propTypes = {
  reverse: PropTypes.bool,
  title: PropTypes.string.isRequired,
  themes: PropTypes.array.isRequired,
  demo: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

BaseMapsPreview.defaultProps = {
  reverse: false
}

export default BaseMapsPreview
