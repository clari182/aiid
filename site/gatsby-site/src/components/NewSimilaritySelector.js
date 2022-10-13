import React from 'react';
import { useFormikContext } from 'formik';

const NewSimilaritySelector = ({ incident_id }) => {
  const { values, setFieldValue } = useFormikContext();

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button
        type="button"
        className={`py-1 px-3 text-xs font-medium rounded-l-lg border border-gray-200   focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white hover:text-white ${
          values.editor_dissimilar_incidents &&
          values.editor_dissimilar_incidents.includes(incident_id)
            ? 'text-white bg-red-400 hover:bg-red-500'
            : 'hover:text-blue-700 text-gray-900 bg-white hover:bg-gray-100'
        }`}
        onClick={() => {
          setFieldValue(
            'editor_dissimilar_incidents',
            (values.editor_dissimilar_incidents || []).concat([incident_id])
          );
          setFieldValue(
            'editor_similar_incidents',
            (values.editor_similar_incidents || []).filter((id) => id != incident_id)
          );
        }}
      >
        No
      </button>
      <button
        type="button"
        className={`py-1 px-3 text-xs font-medium  bg-white border-t border-b border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white ${
          !values.editor_similar_incidents ||
          !values.editor_dissimilar_incidents ||
          (!values.editor_similar_incidents.includes(incident_id) &&
            !values.editor_dissimilar_incidents.includes(incident_id))
            ? 'text-white bg-blue-400 hover:bg-blue-500'
            : 'hover:text-blue-700  text-gray-900 bg-white hover:bg-gray-100 '
        }`}
        onClick={() => {
          setFieldValue(
            'editor_similar_incidents',
            (values.editor_similar_incidents || []).filter((id) => id != incident_id)
          );
          setFieldValue(
            'editor_dissimilar_incidents',
            (values.editor_dissimilar_incidents || []).filter((id) => id != incident_id)
          );
        }}
      >
        Not sure
      </button>
      <button
        type="button"
        className={`py-1 px-3 text-xs font-medium bg-white rounded-r-md border border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white ${
          values.editor_similar_incidents && values.editor_similar_incidents.includes(incident_id)
            ? 'text-white bg-green-400 hover:bg-green-500'
            : 'hover:text-blue-700  text-gray-900 bg-white hover:bg-gray-100 '
        }`}
        onClick={() => {
          setFieldValue(
            'editor_similar_incidents',
            (values.editor_similar_incidents || []).concat([incident_id])
          );
          setFieldValue(
            'editor_dissimilar_incidents',
            (values.editor_dissimilar_incidents || []).filter((id) => id != incident_id)
          );
        }}
      >
        Yes
      </button>
      {/* <ButtonGroup data-cy="similar-selector" id="similar-selector">
        {[
          {
            identifier: 'dissimilar',
            variant: 'danger',
            icon: 'x',
            show:
              values.editor_dissimilar_incidents &&
              values.editor_dissimilar_incidents.includes(incident_id),
            onClick: () => {
              setFieldValue(
                'editor_dissimilar_incidents',
                (values.editor_dissimilar_incidents || []).concat([incident_id])
              );
              setFieldValue(
                'editor_similar_incidents',
                (values.editor_similar_incidents || []).filter((id) => id != incident_id)
              );
            },
          },
          {
            identifier: 'unspecified',
            variant: 'secondary',
            icon: '?',
            show:
              !values.editor_similar_incidents ||
              !values.editor_dissimilar_incidents ||
              (!values.editor_similar_incidents.includes(incident_id) &&
                !values.editor_dissimilar_incidents.includes(incident_id)),
            onClick: () => {
              setFieldValue(
                'editor_similar_incidents',
                (values.editor_similar_incidents || []).filter((id) => id != incident_id)
              );
              setFieldValue(
                'editor_dissimilar_incidents',
                (values.editor_dissimilar_incidents || []).filter((id) => id != incident_id)
              );
            },
          },
          {
            identifier: 'similar',
            variant: 'success',
            icon: '✓',
            show:
              values.editor_similar_incidents &&
              values.editor_similar_incidents.includes(incident_id),
            onClick: () => {
              setFieldValue(
                'editor_similar_incidents',
                (values.editor_similar_incidents || []).concat([incident_id])
              );
              setFieldValue(
                'editor_dissimilar_incidents',
                (values.editor_dissimilar_incidents || []).filter((id) => id != incident_id)
              );
            },
          },
        ].map((button) => (
          <SimilarityButton
            variant={button.show ? button.variant : 'secondary'}
            aria-pressed={button.show}
            disabled={button.show}
            onClick={button.onClick}
            key={button.icon}
            data-cy={button.identifier}
          >
            {button.icon}
          </SimilarityButton>
        ))}
      </ButtonGroup> */}
    </div>
  );
};

export default NewSimilaritySelector;
