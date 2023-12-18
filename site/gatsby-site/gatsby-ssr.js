import './src/tailwind.css';
import './src/global.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './src/custom.css';
import { cloneDeepWith } from 'lodash';

import { wrapRootElement, wrapPageElement } from './gatsby-shared';

// cleanup html before render
const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();

  replaceHeadComponents(omitDeep(headComponents, ['data-react-helmet']));
};

/**
 * remove properties from collection deep
 * @param collection
 * @param excludeKeys
 * @returns {any}
 */
const omitDeep = (collection, excludeKeys) =>
  cloneDeepWith(collection, (value) => {
    console.log('HOLA');
    if (value && typeof value === 'object') {
      for (const key of excludeKeys) {
        try {
          delete value[key];
        } catch (_) {
          // console.log("ignore", _);
        }
      }
    }
  });

export { wrapPageElement, wrapRootElement, onPreRenderHTML };
