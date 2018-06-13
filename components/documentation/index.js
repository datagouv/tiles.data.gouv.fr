import Container from '../container'

const Documentation = () => (
  <Container>
    <section>
      <h2>Les librairies</h2>
      <div>
        <b><a href='https://www.mapbox.com/mapbox-gl-js/api/'>Mapbox GL JS</a></b>
        <p>Bibliothèque de cartographie basée sur WebGL.</p>
      </div>

      <div>
        <b><a href='http://openlayers.org/'>OpenLayers</a></b>
        <p>Permet un affichage raster ou tuiles vectorielles.</p>
      </div>

      <div>
        <b><a href='http://www.leafletjs.com/'>Leaflet</a></b>
        <p>Bibliothèque légère et open-source.</p>
      </div>

      <div>
        <b><a href='https://mapzen.com/products/tangram/'>Tangram</a></b>
        <p>Également basée sur WebGL, elle prend en charge l’affichage vectoriel.</p>
      </div>
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
