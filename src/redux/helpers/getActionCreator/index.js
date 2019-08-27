import {
  defaultPayloads,
  fetchStatuses,
  payloadTypes,
} from '_constants';

import {
  defaultPayloadProcessor,
  setProcessStatus,
  dispatcher,
} from 'redux/helpers';

/**
 * Main function for making actions
 * It will be used mainly for request actions
 * to set request status for data that is being fetched
 * @param type
 * @param request
 * @param additionalData - data that is going to be used with fetching or setting in store
 * @param payloadPreprocessor
 * @param payloadType - the response data's type
 * @param getStateData - current data in store
 * @returns {function(): Function}
 */
export const createGetAction = ({
  type,
  request,
  additionalData = {},
  payloadType = payloadTypes.arr,
  getStateData,
  payloadPreprocessor = defaultPayloadProcessor,
}) => () => async (
  dispatch,
  getState,
  { API },
) => {
  const stateData = getStateData ? getStateData(getState()) : null;
  const defaultPayload = stateData ? stateData.payload : defaultPayloads[payloadType];

  dispatcher(
    type,
  () => dispatch(setProcessStatus(type, fetchStatuses.pending, additionalData, defaultPayload)),
  );

  const response = await request(API);

  if (response) {
    const status = response.success ? fetchStatuses.success : fetchStatuses.fail;
    const payload = response.success
      ? payloadPreprocessor(response.payload || response, getState())
      : undefined;

    dispatcher(
      type,
      () => dispatch(setProcessStatus(type, status, additionalData, payload)),
    );

    return response;
  } else {
    dispatcher(
      type,
      () => dispatch(setProcessStatus(type, fetchStatuses.fail, additionalData, defaultPayload)),
    );
    return new Promise(resolve => resolve(null));
  }
};
