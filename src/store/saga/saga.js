import { takeLatest, put, call, } from 'redux-saga/effects';
import actionType from '../actionType';
import axios from 'axios';
import { apiCall } from '../../utility/apiUtility';

function* login({ payload }) {
    console.log("payload", payload)
    try {
        const {response} = yield apiCall('https://jsonplaceholder.typicode.com/users', null,'GET')
        console.log("userResponse",response)
        let userData = response?.filter(data => (data?.email).toLocaleLowerCase() == payload.email.toLocaleLowerCase())
        payload.nav.navigate('Home', { userData: userData[0] })
    } catch (error) {
        console.log("Errodddddr", error)
    }
}

export function* watchGlobalSaga() {
    yield takeLatest(actionType.LOGIN, login)
}