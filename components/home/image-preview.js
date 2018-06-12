import React from 'react'

import BaseMapsPreview from './base-maps-preview'

const themes = ['piano', 'forte']
const languages = {
  français: 'fr',
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

    return (
      <BaseMapsPreview
        title='Fond OpenStreetMap - image'

        url={`https://{s}.${theme}.tiles.data.gouv.fr/${languages[language]}/{z}/{x}/{y}.png`}
        selectedTheme={theme}
        selectedLanguage={language}
        onSelectTheme={this.handleTheme}
        onSelectLanguage={this.handleLanguage}
        themes={themes}
        languages={Object.keys(languages)} />
    )
  }
}

export default ImagePreview
