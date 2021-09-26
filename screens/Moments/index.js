import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import MomentsLayout from './index.layout';

export default function Moments({navigation}) {
  const moments = useSelector(state => state.moments);

  const checkMoment = moment => {
    navigation.navigate('MomentDetails', moment);
  };

  return <MomentsLayout moments={moments} checkMoment={checkMoment} />;
}
