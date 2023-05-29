import { Card } from 'flowbite-react';
import React, { Fragment } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { CARD_THEME } from 'utils/cite';
// import Card from '../../elements/Card';

const IncidentStatsCard = ({ incidentId, reportCount, incidentDate, editors }) => {
  const { t } = useTranslation();

  const STATS = [
    {
      key: 'incidentId',
      label: t('Incident ID'),
    },
    {
      key: 'reportCount',
      label: t('Report Count'),
    },
    {
      key: 'incidentDate',
      label: t('Incident Date'),
    },
    {
      key: 'editors',
      label: t('Editors'),
    },
  ];

  if (reportCount === 0) {
    return null;
  }

  const stats = {
    incidentId,
    reportCount,
    incidentDate,
    editors,
  };

  return (
    <Card data-cy="citation" theme={CARD_THEME}>
      <div className="bg-light-gray px-4 py-2 border-b border-border-gray">
        <h4 className="m-0">
          <Trans>Incident Stats</Trans>
        </h4>
      </div>
      <div className="grid max-w-full p-5 grid-cols-2 lg:grid-cols-1fr-3fr">
        {STATS.map((stat) => (
          <Fragment key={stat.key}>
            <div className="pr-4 my-0.5">{stat.label}</div>
            <div>{stats[stat.key]}</div>
          </Fragment>
        ))}
      </div>
    </Card>
  );
};

export default IncidentStatsCard;
