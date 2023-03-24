import watchLoginRequest from '../sagas/LoginSagas'
import watchCharacterSaga from '../sagas/CharacterListingSaga'
import { all } from 'redux-saga/effects'

export default function* IndexSaga () {
  ///alert('indexsaga')
  yield all ([
    watchLoginRequest(),
    watchCharacterSaga()
  ])
}