import React from 'react'

import BaseMapsPreview from '../base-maps-preview'

import RasterTilesPreview from './raster-tiles-preview'

const themes = ['piano', 'forte']
const languages = {
  français: 'fr',
  'français (haute résolution)': 'fr@2x',
  anglais: 'en',
  arabe: 'ar'
}

class ImagePreview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes[0],
      language: Object.keys(languages)[0]
    }

    this.handleTheme = this.handleTheme.bind(this)
    this.handleLanguage = this.handleLanguage.bind(this)
  }

  handleTheme(theme) {
    this.setState({theme})
  }

  handleLanguage(language) {
    this.setState({language})
  }

  render() {
    const {theme, language} = this.state
    const url = `https://{s}.${theme}.tiles.data.gouv.fr.fr/${languages[language]}/{z}/{x}/{y}.png`

    return (
      <BaseMapsPreview
        title='Fond OpenStreetMap - image'
        url={url}
        selectedTheme={theme}
        selectedLanguage={language}
        onSelectTheme={this.handleTheme}
        onSelectLanguage={this.handleLanguage}
        themes={themes}
        languages={Object.keys(languages)}>
        <RasterTilesPreview url={url} />
      </BaseMapsPreview>
    )
  }
}

export default ImagePreview
