import Container from '../container'

const Documentation = () => (
  <Container>
    <section>
      <h2>Quelques outils de cartographie Web</h2>

      <ul>
        <li>
          <b><a href='https://www.mapbox.com/mapbox-gl-js/api/'>Mapbox GL JS</a></b>
          <a className='github-button' href='https://github.com/mapbox/mapbox-gl-js' data-icon='octicon-star' data-show-count='true' aria-label='Star mapbox/mapbox-gl-js on GitHub'>Star</a>
        </li>

        <li>
          <b><a href='http://openlayers.org/'>OpenLayers</a></b>
          <a className='github-button' href='https://github.com/openlayers/openlayers' data-icon='octicon-star' data-show-count='true' aria-label='Star openlayers/openlayers on GitHub'>Star</a>
        </li>

        <li>
          <b><a href='http://www.leafletjs.com/'>Leaflet</a></b>
          <a className='github-button' href='https://github.com/Leaflet/Leaflet' data-icon='octicon-star' data-show-count='true' aria-label='Star Leaflet/Leaflet on GitHub'>Star</a>
        </li>

        <li>
          <b><a href='https://github.com/tangrams/tangram'>Tangram</a></b>
          <a className='github-button' href='https://github.com/tangrams/tangram' data-icon='octicon-star' data-show-count='true' aria-label='Star tangrams/tangram on GitHub'>Star</a>
        </li>

      </ul>
    </section>

    <section>
      <h2>Utilisations</h2>
      <div>
        <b>Fonds image</b>
        <ul>
          <li><a href='https://leafletjs.com/reference-1.3.0.html#tilelayer'>Leaflet</a></li>
          <li><a href='http://openlayers.org/en/latest/apidoc/ol.layer.Image.html'>OpenLayers</a></li>
        </ul>
      </div>

      <div>
        <b>Fonds vectoriels</b>
        <ul>
          <li><a href='https://leafletjs.com/reference-1.3.0.html#path'>Leaflet</a></li>
          <li><a href='http://openlayers.org/en/latest/apidoc/ol.layer.VectorTile.html'>OpenLayers</a></li>
          <li><a href='https://www.mapbox.com/mapbox-gl-js/api/#map'>Mapbox GL</a></li>
          <li><a href='https://mapzen.com/documentation/tangram/Tangram-Setup/'>Tangram</a></li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Exemples d’intégration</h2>
      <p>
        Des exemples d’intégrations sont disponibles <a href='https://github.com/webgeodatavore/openmaptiles-geo-data-gouv-fr'>ici</a> (merci <a href='https://github.com/webgeodatavore'>@webgeodatavor</a>)
      </p>
    </section>

    <style jsx>{`
      section {
        margin: 3em 0;
      }
    `}</style>
  </Container>
)

export default Documentation
