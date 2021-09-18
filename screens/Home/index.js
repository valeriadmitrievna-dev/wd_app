import React, {useEffect} from 'react';
import HomeLayout from './index.layout';
import {walkers} from './../../constants/walkers';

export default function Home({navigation}) {

  return <HomeLayout walkers={walkers} navigation={navigation} />;
}
