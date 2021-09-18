import React, {useEffect} from 'react';
import HomeLayout from './index.layout';
import {useSelector} from 'react-redux';

export default function Home({navigation}) {
  const walkers = useSelector(state => state.walkers);
  return <HomeLayout walkers={walkers} navigation={navigation} />;
}
