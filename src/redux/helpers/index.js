import { createGetAction } from './getActionCreator';
import { createAddAction } from './addActionCreator';
import { createDeleteAction } from './deleteActionCreator';
import { createUpdateAction } from './updateActionCreator';

import {
  fetchStatuses,
} from '_constants';

export const isLoading = data => data && data.status === fetchStatuses.pending;
export const isFetched = data => data && data.status && data.status === fetchStatuses.success;
export const isCombinedDataFetched = data => data.every(d => d.status && d.status === fetchStatuses.success);

export const defaultPayloadProcessor = data => data;
export const setProcessStatus = (type, status, additionalData, payload) => ({
  type,
  status,
  payload,
  ...additionalData,
});

export const dispatcher = (type, cb) => type && cb();
export const setDataByKey = (selector, key) => (data, state) => {
  const musicians = selector(state);
  const newPayload = { ...musicians.payload };
  newPayload[key] = data;
  return newPayload;
};

export {
  createGetAction,
  createAddAction,
  createUpdateAction,
  createDeleteAction,
}
