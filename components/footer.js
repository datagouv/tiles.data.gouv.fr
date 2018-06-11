import Link from 'next/link'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaGithub from 'react-icons/lib/fa/github'
import FaEnvelope from 'react-icons/lib/fa/envelope'

import theme from '../styles/theme'

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <div className='footer__logo'>
        <img src='/static/images/logos/etalab.svg' />
        <ul className='footer__social'>
          <li><Link href='https://twitter.com/'><a><FaTwitter size={25} /></a></Link></li>
          <li><Link href='https://github.com/etalab/tiles.data.gouv.fr'><a><FaGithub size={25} /></a></Link></li>
          <li><a href='mailto:tiles@data.gouv.fr'><FaEnvelope size={25} /></a></li>
        </ul>
      </div>
      <ul className='footer__links'>
        <li><h2>tiles.data.gouv.fr</h2></li>
        <li><Link href='/cgu'><a>Mentions légales et CGU</a></Link></li>
        <li><Link href='/faq'><a>FAQ</a></Link></li>
        <li><a href='mailto:adresse@data.gouv.fr'>Contact</a></li>
      </ul>
    </div>
    <style jsx>{`
      .footer {
        background: ${theme.colors.almostBlack};
        color: ${theme.colors.white};
        padding: 2em 0;
        line-height: 2em;
      }

      .footer .container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 2em;
        flex-wrap: wrap;
      }

      .footer__logo img {
        width: 160px;
      }

      .footer ul {
        list-style-type: none;
        padding: 0;
      }

      .footer__social {
        margin-top: 1em;
      }

      .footer__social li {
        display: inline;
        margin-right: 1em;
      }

      .footer__links {
        margin: 0;
      }

      a {
        color: ${theme.colors.white};
        text-decoration: none;
      }

      .footer__links h2 {
        margin-top: 0;
        margin-bottom: 0.5em;
      }
      `}</style>
  </footer>
)

export default Footer
