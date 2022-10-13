import React, { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
import { LocalizedLink } from 'gatsby-theme-i18n';
import NewSimilaritySelector from './NewSimilaritySelector';

const RelatedIncidentsArea = ({ reports, incidents, loading }) => {
  const [, setListOpened] = useState(false);

  const [, setReportsOpened] = useState(false);

  const visible = reports || incidents || loading;

  const reportsExist = (reports || incidents) && !loading;

  useEffect(() => {
    if (visible) {
      setListOpened(true);
    }
  }, [visible]);

  useEffect(() => {
    if (reportsExist) {
      setReportsOpened(true);
    }
  }, [reportsExist]);

  if (!visible) {
    return null;
  }
  return (
    <div className="flex flex-col mt-2">
      {(reports || incidents) && (
        <h5 className="text-sm">Woah! These incidents seem to be related:</h5>
      )}
      <div className=" flex gap-3  items-stretch">
        {(reports || incidents) &&
          (reports || incidents).map((val) => (
            <>
              <div className="flex-1 self-stretch h-full max-w-xs">
                <div className="p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex flex-col">
                    <span className="text-md ">
                      {val?.incident_id && (
                        <LocalizedLink
                          to={'/cite/' + val.incident_id}
                          className="text-black hover:text-blue-600"
                        >
                          #{val.incident_id}
                        </LocalizedLink>
                      )}
                    </span>
                    <a
                      href={val.url || '/cite/' + val.incident_id}
                      data-cy="title"
                      className="text-sm text-black hover:text-blue-600"
                    >
                      {val.title}
                    </a>
                    <span className="mt-2 text-xs">Is this incident related?</span>
                    <div className="flex mt-2 justify-center items-center">
                      <div className=" ">
                        {/* <svg className="w-6 h-6 opacity-30" fill="red" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
                  <svg className="w-6 h-6" fill="green" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> */}
                        <NewSimilaritySelector incident_id={val.incident_id} />
                      </div>
                      <div className="flex justify-end flex-1">
                        <Button size={'xs'}>
                          <span className="text-gray-100">Use ID #{val.incident_id}</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        <>
          <div className="flex-1 self-stretch h-full max-w-xs">
            <div className="p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col">
                <span className="text-md ">
                  <LocalizedLink to={'/cite/234'} className="text-black hover:text-blue-600">
                    #234
                  </LocalizedLink>
                </span>
                <a
                  href={'' || '/cite/234'}
                  data-cy="title"
                  className="text-sm text-black hover:text-blue-600"
                >
                  This is the title of 234
                </a>
                <span className="mt-2 text-xs">Is this incident related?</span>
                <div className="flex mt-2 justify-center items-center">
                  <div className=" ">
                    {/* <svg className="w-6 h-6 opacity-30" fill="red" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
                    <svg className="w-6 h-6" fill="green" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> */}
                    <NewSimilaritySelector incident_id="234" />
                  </div>
                  <div className="flex justify-end flex-1">
                    <Button size={'xs'}>
                      <span className="text-gray-100">Use ID #234</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        <>
          <div className="flex-1 self-stretch h-full max-w-xs">
            <div className="p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col">
                <span className="text-md ">
                  <LocalizedLink to={'/cite/567'} className="text-black hover:text-blue-600">
                    #567
                  </LocalizedLink>
                </span>
                <a
                  href={'' || '/cite/567'}
                  data-cy="title"
                  className="text-sm text-black hover:text-blue-600"
                >
                  This is the title of 567
                </a>
                <span className="mt-2 text-xs">Is this incident related?</span>
                <div className="flex mt-2 justify-center items-center">
                  <div className=" ">
                    {/* <svg className="w-6 h-6 opacity-30" fill="red" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
                  <svg className="w-6 h-6" fill="green" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> */}
                    <NewSimilaritySelector incident_id="567" />
                  </div>
                  <div className="flex justify-end flex-1">
                    <Button size={'xs'}>
                      <span className="text-gray-100">Use ID #567</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* <ListContainer data-cy={`related-${columnKey}`} className={listOpened ? 'open' : ''}>
        <ListGroup.Item variant="secondary" key={'header'} className="flex gap-1">
          {header}
          {loading && <Spinner size={'sm'} />}
        </ListGroup.Item>
        <div className={reportsOpened ? 'reports open' : 'reports'}>
          {(reports || incidents) &&
            (reports || incidents).map((val) => (
              <ReportRow key={val.url || val.incident_id} data-cy="result">
                <span>
                  {val?.incident_id && (
                    <>
                      <LocalizedLink to={'/cite/' + val.incident_id}>
                        #{val.incident_id}
                      </LocalizedLink>{' '}
                      –{' '}
                    </>
                  )}
                  <a href={val.url || '/cite/' + val.incident_id} data-cy="title">
                    {val.title}
                  </a>
                </span>
                <ReportToolbar>
                  {setFieldValue && editSimilar && (
                    <>
                      <SelectorLabel htmlFor="similar-selector">
                        <Trans>Related:</Trans>
                      </SelectorLabel>
                      <SimilaritySelector incident_id={val.incident_id} />
                    </>
                  )}
                  {val.incident_id && setFieldValue && editId && (
                    <Button
                      data-cy="set-id"
                      className="set-id"
                      onClick={() => setFieldValue && setFieldValue('incident_id', val.incident_id)}
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      <Trans>Use ID</Trans> <span className="incident-id">#{val.incident_id}</span>
                    </Button>
                  )}
                </ReportToolbar>
              </ReportRow>
            ))}
          {!loading && (error || reports?.length == 0 || incidents?.length == 0) && (
            <ListGroup.Item>{error ? error : t('No related reports found.')}</ListGroup.Item>
          )}
        </div>
      </ListContainer> */}
      </div>
    </div>
  );
};

export default RelatedIncidentsArea;
