/* In this file, export your final config.
It will automatically be injected into the playground for you.
Imports from other playground files are supported. */

import { genesisIcons } from "@formkit/icons"
import { rootClasses } from './formkit.theme.js'

const legends = ['checkbox_multi', 'radio_multi', 'repeater', 'transferlist'];

function addAsteriskPlugin (node) {
  if (['button', 'submit', 'hidden', 'group', 'list', 'meta'].includes(node.props.type)) return;

  node.on('created', () => {
    const legendOrLabel = legends.includes(`${node.props.type}${node.props.options ? '_multi' : ''}`) ? 'legend' : 'label';

    if (node.props.definition.schemaMemoKey) {
      node.props.definition.schemaMemoKey += `${node.props.options ? '_multi' : ''}_add_asterisk`;
    };

    const schemaFn = node.props.definition.schema
    node.props.definition.schema = (sectionsSchema = {}) => {
      sectionsSchema[legendOrLabel] = {
        children: ['$label', {
          $el: 'span',
          if: '$state.required',
          attrs: {
            class: '$classes.asterisk',
          },
          children: ['*']
        }]
      }

      return schemaFn(sectionsSchema)
    }
  })
}

export default {
  plugins: [addAsteriskPlugin],
  icons: {
    ...genesisIcons
  },
  config: {
    rootClasses
  }
}
