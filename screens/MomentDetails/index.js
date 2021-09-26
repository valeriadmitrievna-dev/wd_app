import React, {useState} from 'react';
import MomentDetailsLayout from './index.layout';

export default function MomentDetails({route, navigation}) {
  const [isShowMore, setShowMore] = useState(false);
  const [isLiked, setLiked] = useState(false);
  return (
    <MomentDetailsLayout
      moment={route.params}
      navigation={navigation}
      isShowMore={isShowMore}
      setShowMore={setShowMore}
      isLiked={isLiked}
      setLiked={setLiked}
    />
  );
}
