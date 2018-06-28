import React from 'react';
import universal from 'react-universal-component';
import {injectReducer} from 'redux-reducers-injector';
import {injectSaga} from 'redux-sagas-injector';

import PulseLoader from '../../../common/components/presentation/loaders/PulseLoader';
import {coolBlue} from '../../../../../../assets/css/variables';

// need to pass different path for generating different chunks
//https://github.com/faceyspacey/babel-plugin-universal-import#caveat
const Universal = universal(import('../../model/preload'), {
    loading: <PulseLoader size={6} color={coolBlue} />,
    onLoad: module => {
        injectSaga('model', module.sagas);
        injectReducer('model', module.reducer);
    },
});

export default Universal;
