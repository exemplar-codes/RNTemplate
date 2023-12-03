import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {miscDataSelector} from '../store/selectors/misc';
import {setMiscData} from '../store/reducers/misc';

import {Text} from 'react-native';

export default function TryScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setMiscData({name: 'Maryam'}));
      setTimeout(() => {
        dispatch(setMiscData({name: 'Ahmar'}));
      }, 2000);
    }, 2000);
  }, []);

  const miscData = useSelector(miscDataSelector);
  return <Text>Redux is set up! {JSON.stringify(miscData)}</Text>;
}
