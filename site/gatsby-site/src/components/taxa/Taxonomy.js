import React, { useState } from 'react';
import Markdown from 'react-markdown';
import TaxonomyForm from './TaxonomyForm';
import { Trans } from 'react-i18next';
// import Card from 'elements/Card';
import Button from 'elements/Button';
import { Card, Tooltip } from 'flowbite-react';
import { CARD_THEME } from 'utils/cite';

const Taxonomy = ({
  taxonomy,
  incidentId,
  canEdit,
  taxonomyBeingEdited,
  setTaxonomyBeingEdited,
  id,
}) => {
  const [showAllClassifications, setShowAllClassifications] = useState(false);

  const [showBanner, setShowBanner] = useState(false);

  const handleSubmit = () => {
    setTaxonomyBeingEdited(null);
    setShowBanner(true);
  };

  const editing = taxonomyBeingEdited?.namespace == taxonomy?.namespace;

  const heavyClassifications = taxonomy.classificationsArray.filter((field) => field.weight >= 50);

  return (
    <Card
      theme={CARD_THEME}
      id={id}
      key={taxonomy.namespace}
      className="mt-6"
      data-cy={taxonomy.namespace}
    >
      <div className="flex flex-row justify-start items-center border-t-0 border-r-0 border-l-0 border-b border-b-border-gray px-4 py-2 bg-light-gray border-1 mb-0">
        <h4 className="pr-0.8">
          <Trans namespace={taxonomy.namespace}>
            {{ namespace: taxonomy.namespace }} Taxonomy Classifications
          </Trans>
        </h4>
        <>
          {editing ? (
            <Button onClick={() => setTaxonomyBeingEdited(null)}>Cancel</Button>
          ) : (
            canEdit && <Button onClick={() => setTaxonomyBeingEdited(taxonomy)}>Edit</Button>
          )}
        </>
        <a
          style={{ order: 2, marginLeft: 'auto' }}
          href={`/taxonomy/${taxonomy.namespace.toLowerCase()}`}
        >
          <Trans>Taxonomy Details</Trans>
        </a>
      </div>
      <>
        {!editing && (
          <>
            {showBanner && (
              <div style={{ padding: '0.5em' }}>
                <Card style={{ width: '100%' }} className="mb-2">
                  <div className="flex flex-row flex-wrap gap-2 p-4">
                    <div>
                      <Trans>Classifications will update in production within 24 hours.</Trans>
                    </div>
                  </div>
                </Card>
              </div>
            )}
            {taxonomy.classificationsArray.length > 0 ? (
              <>
                {canEdit && (
                  <div key={'NOTES'} className="tw-classification-container tw-card-body">
                    <div className="tw-field">
                      <Tooltip content={'Admin notes'}>
                        <p>{'Notes'}</p>
                      </Tooltip>
                    </div>
                    <Markdown className="w-4/5">{taxonomy.notes}</Markdown>
                  </div>
                )}
                {taxonomy.classificationsArray
                  .filter((field) => {
                    if (showAllClassifications) return true;
                    if (!showAllClassifications && field.weight >= 50) {
                      return true;
                    }
                    return false;
                  })
                  .filter(
                    (field) => !(field.renderAs === 'description_toggle' && field.value == 'No')
                  )
                  .map((field) => {
                    if (field.renderAs === 'description_toggle') {
                      return { ...field, value: field.longDescription };
                    }

                    return field;
                  })
                  .map((field) => (
                    <div key={field.name} className="tw-classification-container tw-card-body">
                      <div className="tw-field">
                        <Tooltip content={field.shortDescription}>
                          <p>{field.name}</p>
                        </Tooltip>
                      </div>
                      <Markdown className="w-4/5">{field.value}</Markdown>
                    </div>
                  ))}
                {taxonomy.classificationsArray.length > heavyClassifications.length && (
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm w-100"
                    onClick={() => setShowAllClassifications(!showAllClassifications)}
                  >
                    Show {`${showAllClassifications ? 'Fewer' : 'All'}`} Classifications
                  </button>
                )}
              </>
            ) : (
              <div style={{ padding: '0.5em' }}>
                <Card style={{ width: '100%' }} className="mb-2">
                  <div className="flex flex-row flex-wrap gap-2 p-4">
                    <div className="last:mb-0">
                      <Trans>No classifications for this taxonomy.</Trans>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </>
        )}
        <TaxonomyForm
          taxonomy={taxonomy}
          incidentId={incidentId}
          onSubmit={handleSubmit}
          active={editing}
        />
      </>
    </Card>
  );
};

export default Taxonomy;
