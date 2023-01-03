
import { Box, Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react';
import React from 'react'


const TWEETS = new Array(12).fill(true)

const FeedScreen: React.FC = () => {
  return (
    <Stack paddingY={12}  overflowY="auto" maxHeight="100%">
      {TWEETS.map((index) => (
        <Stack key={index} spacing={4}>
          <Stack direction="row" spacing={4} alignItems="center" >

            <SkeletonCircle width={12} height={12}/>
            <Stack>
            <Skeleton  height={6} width="120px" />
            <Skeleton  height={3} width="80px" />
            </Stack>
          </Stack>
          <SkeletonText  height={36} noOfLines={6} />
        </Stack>
      ))}
    </Stack>

  );
}

export default FeedScreen;