
import reducer, {selectTotal, selectList, selectName, changeName, getList, refreshList} from './cryptoSlice'
import { PayloadAction } from '@reduxjs/toolkit';

const initial= {
  list: [],
  name: 'Anakin',
  total: 0,
}
test('should return the initial state', () => {
  expect(reducer(undefined, {} as PayloadAction )).toEqual( initial);
})

test('should return state name (Anakin)', () => {
  expect(selectName({crypto: initial})).toEqual('Anakin');
})

test('should return state list ([])', () => {
  expect(selectList({crypto: initial})).toEqual([]);
})

test('should return state total (0)', () => {
  expect(selectTotal({crypto: initial})).toEqual(0);
})

test('should change the name', () => {
  expect(reducer(initial, changeName('Cesar'))).toEqual({
    list: [],
    name: 'Cesar',
    total: 0,
  })
})

test('should get the list of cryptos', () => {
  expect(reducer(initial, getList())).not.toEqual(initial);
})

test('should refresh the list of cryptos', () => {
  let get_list = reducer(initial, getList());
  let refresh_list = reducer(get_list, refreshList());
  expect(get_list).not.toEqual(refresh_list);
})
