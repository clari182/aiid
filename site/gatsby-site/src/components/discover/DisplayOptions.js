import React from 'react';
import { Dropdown } from 'flowbite-react';
import useSearch from './useSearch';
import isEqual from 'lodash/isEqual';
import { Trans, useTranslation } from 'react-i18next';

const DisplayOptions = () => {
  const { setSearchState, searchState } = useSearch();

  const { t } = useTranslation();

  const displayOptions = [
    { text: 'Incidents', state: { hideDuplicates: 'true', is_incident_report: ['true'] } },
    {
      text: 'Incident and Issue Reports',
      state: { hideDuplicates: '', is_incident_report: ['false', 'true'] },
    },
    { text: 'Incident Reports', state: { hideDuplicates: '', is_incident_report: ['true'] } },
    { text: 'Issue Reports', state: { hideDuplicates: '', is_incident_report: ['false'] } },
  ];

  const setDisplay = (index) => {
    const { state } = displayOptions[index];

    setSearchState((searchState) => ({
      ...searchState,
      refinementList: {
        ...searchState.refinementList,
        ...state,
      },
    }));
  };

  const selectedIndex = displayOptions.findIndex(({ state }) => {
    return (
      !!searchState.refinementList.hideDuplicates == !!state.hideDuplicates &&
      isEqual(searchState.refinementList.is_incident_report, state.is_incident_report)
    );
  });

  return (
    <Dropdown label={selectedIndex > -1 && t(displayOptions[selectedIndex].text)} size="sm" inline>
      {displayOptions.map(({ text }, index) => (
        <Dropdown.Item key={text} onClick={() => setDisplay(index)}>
          <Trans>{text}</Trans>
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default DisplayOptions;
