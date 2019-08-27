import { ToastsStore } from 'react-toasts';
import { fetchStatuses } from '_constants';
import {
  defaultPayloadProcessor,
  setProcessStatus,
} from 'redux/helpers';

const showError = () => ToastsStore.error('Failed to delete');

export const createDeleteAction = ({
 type,
 request,
 removeKey,
 removeBy = 'id',
 additionalData = {},
 getStateData = defaultPayloadProcessor,
}) => () => async (
  dispatch,
  getState,
  { API },
) => {
  const defaultState = [...getStateData(getState()).payload || []];

  dispatch(setProcessStatus(type, fetchStatuses.pending, additionalData, defaultState));

  const response = await request(API);

  if (response) {
    const status = response.success
      ? fetchStatuses.success
      : fetchStatuses.fail;

    const payload = response.success
      ? defaultState.filter(el => el[removeBy] !== removeKey)
      : defaultState;

    if (response.success) {
      ToastsStore.success('Successfully deleted');
    } else {
      showError();
    }
    dispatch(setProcessStatus(type, status, additionalData, payload));
    return response;
  } else {
    showError();
    dispatch(setProcessStatus(type, fetchStatuses.fail, additionalData, defaultState));
    return new Promise(resolve => resolve(null));
  }
};
