import { combineEpics, ofType } from 'redux-observable';
import { mapTo, delay, mergeMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import {
  PING,
  PONG
} from 'app/globalReducers';


const pingEpic = action$ => action$.pipe(
  ofType(PING),
  delay(1000),
  mapTo(PONG)
);

export const globalEpic = combineEpics(
  pingEpic
);

export const epic$ = new BehaviorSubject(globalEpic);
const rootEpic = (action$, state$) => epic$.pipe(
  mergeMap(epic => epic(action$, state$))
)

export default rootEpic;
