import React, {useState} from 'react';
import WalkerLayout from './index.layout';

export default function Walker({route, navigation}) {
  const [activeTab, setActiveTab] = useState('About');

  const closeWalker = () => {
    navigation.goBack();
  };

  return (
    <WalkerLayout
      walker={JSON.parse(route.params)}
      closeWalker={closeWalker}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  );
}
