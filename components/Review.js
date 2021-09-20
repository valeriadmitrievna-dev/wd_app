import {Box, Image, Text} from 'native-base';
import React from 'react';
import styled from 'styled-components/native';
import StarIcon from './../icons/star.icon';

const ReviewBody = styled.View`
  background-color: #f0f0f0;
  border-radius: 14px;
  padding: 14px;
  height: 160px;
`;

export default function Review({review}) {
  return (
    <ReviewBody>
      <Box display="flex" flexDirection="row" alignItems="center" mb="10px">
        <Image
          source={{uri: review?.owner?.profile_photo}}
          w="45px"
          h="45px"
          borderRadius="45px"
          alt="Avatar"
          mr="10px"
        />
        <Text fontSize="17px" fontFamily="Poppins-Bold" color="#2B2B2B">
          {review?.owner?.fullname}
        </Text>
        <Box
          ml="auto"
          display="flex"
          flexDirection="row"
          alignItems="center"
          mb="10px">
          {new Array(5).fill(undefined).map((u, i) => (
            <StarIcon
              key={i}
              w={17}
              h={17}
              color={i + 1 <= review.rate ? '#FFCB55' : '#c5c5c5'}
            />
          ))}
        </Box>
      </Box>
      <Text
        numberOfLines={4}
        fontSize="14px"
        lineHeight="20px"
        fontFamily="Poppins-Regular"
        color="#2B2B2B">
        {review.content}
      </Text>
    </ReviewBody>
  );
}
