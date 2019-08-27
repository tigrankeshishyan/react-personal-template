import { ToastsStore } from 'react-toasts';
import {
  fetchStatuses,
} from '_constants';
import {
  defaultPayloadProcessor,
  setProcessStatus,
} from 'redux/helpers';

const showError = () => ToastsStore.success('Failed to add');

export const createAddAction = ({
  type,
  request,
  additionalData = {},
  getStateData = defaultPayloadProcessor,
  payloadPreprocessor = defaultPayloadProcessor,
}) => () => async (
  dispatch,
  getState,
  { API },
) => {
  const stateData = getStateData(getState()).payload || [];

  dispatch(setProcessStatus(type, fetchStatuses.pending, additionalData, stateData));

  const response = await request(API);

  if (response) {
    const status = response.success ? fetchStatuses.success : fetchStatuses.fail;
    const payload = response.success
      ? payloadPreprocessor([...stateData, response.payload])
      : undefined;

    if (response.success) {
      ToastsStore.success('Successfully added');
    } else {
      showError();
    }

    dispatch(setProcessStatus(type, status, additionalData, payload));

    return response;
  } else {
    showError();
    dispatch(setProcessStatus(type, fetchStatuses.fail, additionalData, stateData));
    return new Promise(resolve => resolve(null));
  }
};
