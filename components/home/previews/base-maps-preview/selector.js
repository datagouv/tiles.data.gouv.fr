import PropTypes from 'prop-types'

import theme from '../../../../styles/theme'

const Selector = ({list, selected, handleSelect}) => (
  <div>
    <div className='selectors'>
      {list.map(item => (
        <div
          key={item}
          className={`selector ${item === selected ? 'selected' : ''}`}
          onClick={() => handleSelect(item)}>{item}</div>
      ))}
    </div>
    <style jsx>{`
      .selectors {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(auto, 75px));
        text-align: center;
        grid-gap: 1em;
      }

      .selector {
        border: 1px solid ${theme.primary};
        border-radius: 4px;
        border-color: ${theme.border};
        padding: 0.3em 0.5em;
      }

      .selector:hover {
        cursor: pointer;
        border-color: ${theme.primaryLight};
        color: ${theme.primaryLight};
      }

      .selector.selected {
        border-color: ${theme.primary};
        background-color: ${theme.primary};
        color: ${theme.colors.white};
      }
    `}</style>
  </div>
)

Selector.propTypes = {
  list: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
}

export default Selector
