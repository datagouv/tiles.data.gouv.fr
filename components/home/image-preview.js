import BaseMapsPreview from './base-maps-preview'

const ImagePreview = () => (
  <BaseMapsPreview
    title='Fond OpenStreetMap - image'
    themes={['piano', 'forte']}
    reverse>
    <div>
      <h4>Duis et fringilla turpis</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et fringilla turpis, quis consequat quam. Nulla condimentum pretium ex vel gravida. Mauris tincidunt tellus at sem efficitur, eu imperdiet velit porta. Morbi sagittis eu diam nec cursus. Duis lobortis lorem nulla, vitae placerat elit aliquet ac. In at diam est. Aenean
      </p>
    </div>
  </BaseMapsPreview>
)

export default ImagePreview
