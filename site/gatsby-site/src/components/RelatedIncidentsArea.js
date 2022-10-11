import React, { useState, useEffect } from 'react';
import { Badge, Button } from 'flowbite-react';

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
      <h5>Woah! These incidents seem to be related:</h5>
      <div className="bootstrap flex gap-3  items-stretch">
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
        <div className="flex-1 self-stretch h-full">
          <Badge>
            <div className="flex flex-col">
              <span className="text-sm">#160</span>Alexa Recommended Dangerous TikTok Challenge to
              Ten-Year-Old Girl
              <div className="flex mt-2">
                <div className=" ">
                  {/* <svg className="w-6 h-6 opacity-30" fill="red" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
                  <svg className="w-6 h-6" fill="green" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> */}
                  <label
                    htmlFor="green-toggle"
                    className="inline-flex relative items-center mr-5 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value=""
                      id="green-toggle"
                      className="sr-only peer"
                      checked
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    <span className="ml-1 text-xs font-medium text-gray-900 dark:text-gray-300">
                      Related
                    </span>
                  </label>
                </div>
                <div className="flex justify-end flex-1">
                  <Button size={'xs'}>
                    <span className="text-gray-100">Use #160</span>
                  </Button>
                </div>
              </div>
            </div>
          </Badge>
        </div>
        <div className="flex-1 self-stretch">
          <Badge>
            <div className="flex flex-col">
              <span className="text-sm">#287 </span>OpenAI&apos;s GPT-3 Reported as Unviable in
              Medical Tasks by Healthcare Firm
              <div className="flex mt-2">
                <div className=" ">
                  {/* <svg className="w-6 h-6 opacity-30" fill="red" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
                  <svg className="w-6 h-6" fill="green" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> */}
                  <label
                    htmlFor="green-toggle"
                    className="inline-flex relative items-center mr-5 cursor-pointer"
                  >
                    <input type="checkbox" value="" id="green-toggle" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    <span className="ml-1 text-xs font-medium text-gray-900 dark:text-gray-300">
                      Not related
                    </span>
                  </label>
                </div>
                <div className="flex justify-end flex-1">
                  <Button size={'xs'}>
                    <span className="text-gray-100">Use #287</span>
                  </Button>
                </div>
              </div>
            </div>
          </Badge>
        </div>

        <div className="flex-1">
          <Badge>
            <div className="flex flex-col">
              <span className="text-sm">#149</span> Zillow Shut Down Zillow Offers Division
              Allegedly Due to Predictive Pricing Tool&apos;s Insufficient Accuracy
              <div className="flex mt-2">
                <div className=" ">
                  {/* <svg className="w-6 h-6 opacity-30" fill="red" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
                  <svg className="w-6 h-6" fill="green" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> */}
                  <label
                    htmlFor="green-toggle"
                    className="inline-flex relative items-center mr-5 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value=""
                      id="green-toggle"
                      className="sr-only peer"
                      checked
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    <span className="ml-1 text-xs font-medium text-gray-900 dark:text-gray-300">
                      Related
                    </span>
                  </label>
                </div>
                <div className="flex justify-end flex-1">
                  <Button size={'xs'}>
                    <span className="text-gray-100">Use #149</span>
                  </Button>
                </div>
              </div>
            </div>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default RelatedIncidentsArea;
