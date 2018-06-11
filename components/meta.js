import {Fragment} from 'react'
import prune from 'underscore.string/prune'
import PropTypes from 'prop-types'
import Head from 'next/head'

const SITE_NAME = 'tiles.data.gouv.fr'

const Meta = ({ title, description }) => {
  description = prune(description, 160, '…')
  return (
    <Fragment>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        {title ? <title>{title} | {SITE_NAME}</title> : <title>{SITE_NAME}</title>}

        <link rel='icon' href='/static/favicon.ico' />

        {/* Search Engine */}
        <meta name='description' content={description} />
        <meta name='image' content='https://tiles.data.gouv.fr/static/images/previews/default.png' />

        {/* Schema.org for Google */}
        <meta itemProp='name' content={title} />
        <meta itemProp='description' content={description} />
        <meta itemProp='image' content='https://tiles.data.gouv.fr/static/images/previews/default.png' />

        {/* Twitter */}
        <meta name='twitter:image' content='{{ site.url }}/static/images/preview/default.png' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:site' content='@' />
        <meta name='twitter:image:src' content='/static/images/logos/logo-tiles.svg' />

        {/* Open Graph general (Facebook, Pinterest & Google+) */}
        <meta name='og:title' content={title} />
        <meta name='og:description' content={description} />
        <meta name='og:image' content='/static/images/logos/logo-tiles.svg' />
        <meta name='og:url' content='https://tiles.data.gouv.fr' />
        <meta name='og:site_name' content='tiles.data.gouv.fr' />
        <meta name='og:locale' content='fr_FR' />
        <meta name='og:type' content='website' />
      </Head>
    </Fragment>
  )
}

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

Meta.defaultProps = {
  title: 'tiles.data.gouv.fr',
  description: 'Fonds de carte de qualité utilisables par tous'
}

export default Meta
