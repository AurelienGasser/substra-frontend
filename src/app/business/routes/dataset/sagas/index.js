/* globals fetch SUBSTRABAC_AUTH_ENABLED */

import {
    all, call, put, select, takeEvery, takeLatest,
} from 'redux-saga/effects';

import {saveAs} from 'file-saver';

import actions, {actionTypes} from '../actions';
import {fetchItemApi, fetchListApi} from '../api';
import {
    fetchItemSaga, fetchListSaga, fetchPersistentSaga, setOrderSaga,
} from '../../../common/sagas';
import {basic, fetchRaw} from '../../../../entities/fetchEntities';


function* fetchList(request) {
    const state = yield select();

    const f = () => fetchListApi(state.location.query);

    yield call(fetchListSaga(actions, f), request);
}

function* fetchItem({payload}) {
    return yield call(fetchItemSaga(actions, fetchItemApi), {
        payload: {
            id: payload.key,
            get_parameters: {},
        },
    });
}

function* fetchDetail(request) {
    const state = yield select();

    let item = state.dataset.item.results.find(o => o.pkhash === request.payload.key);

    if (!item) {
        item = yield fetchItem(request);
    }

    if (item && !item.description.content) {
        yield put(actions.item.description.request({id: item.key, url: item.description.storageAddress}));
    }
}

function* fetchItemDescriptionSaga({payload: {id, url}}) {
    const {res, status} = yield call(fetchRaw, url);

    if (res && status === 200) {
        yield put(actions.item.description.success({id, desc: res}));
    }
}

function* fetchItemOpenerSaga({payload: {id, url}}) {
    const {res, status} = yield call(fetchRaw, url);
    if (res && status === 200) {
        yield put(actions.item.opener.success({id, openerContent: res}));
    }
}

function* downloadItemSaga({payload: {url}}) {
    let status;
    let filename;

    yield fetch(url, {
        headers: {
            ...(SUBSTRABAC_AUTH_ENABLED ? {Authorization: `Basic ${basic()}`} : {}),
            Accept: 'application/json;version=0.0',
        },
        mode: 'cors',
    }).then((response) => {
        status = response.status;
        if (!response.ok) {
            return response.text().then(result => Promise.reject(new Error(result)));
        }

        filename = response.headers.get('Content-Disposition').split('filename=')[1].replace(/"/g, '');

        return response.blob();
    }).then((res) => {
        saveAs(res, filename);
    }, error => ({error, status}));
}


/* istanbul ignore next */
const sagas = function* sagas() {
    yield all([
        takeLatest(actionTypes.list.REQUEST, fetchList),
        takeLatest(actionTypes.list.SELECTED, fetchDetail),
        takeLatest(actionTypes.persistent.REQUEST, fetchPersistentSaga(actions, fetchListApi)),

        takeEvery(actionTypes.item.REQUEST, fetchItem),

        takeEvery(actionTypes.item.description.REQUEST, fetchItemDescriptionSaga),
        takeEvery(actionTypes.item.opener.REQUEST, fetchItemOpenerSaga),

        takeEvery(actionTypes.item.download.REQUEST, downloadItemSaga),

        takeLatest(actionTypes.order.SET, setOrderSaga),
    ]);
};


export default sagas;
