import { ToastsStore } from 'react-toasts';
import { fetchStatuses } from '_constants';
import {
  defaultPayloadProcessor,
  setProcessStatus,
} from 'redux/helpers';

const showError = () => ToastsStore.success('Failed to update');

export const createUpdateAction = ({
 type,
 request,
 additionalData = {},
 getStateData = defaultPayloadProcessor,
 updateBy = 'id',
 updateKey,
}) => () => async (
  dispatch,
  getState,
  { API },
) => {
  const defaultState = [...getStateData(getState()).payload || []];
  const dataIndex = defaultState.findIndex(el => el[updateBy] === updateKey);

  dispatch(setProcessStatus(type, fetchStatuses.pending, additionalData, defaultState));

  const response = await request(API);

  if (response) {
    const status = response.success ? fetchStatuses.success : fetchStatuses.fail;

    if (response.success) {
      defaultState.splice(dataIndex, 1, response.payload);
    }

    if (response.success) {
      ToastsStore.success('Successfully updated');
    } else {
      showError()
    }

    dispatch(setProcessStatus(type, status, additionalData, defaultState));

    return response;
  } else {
    showError();
    dispatch(setProcessStatus(type, fetchStatuses.fail, additionalData, defaultState));
    return new Promise(resolve => resolve(null));
  }
};
