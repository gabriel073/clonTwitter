
import { Box, Button, CircularProgress, Divider, Icon, Image, Skeleton, SkeletonCircle, SkeletonText, Stack, StackDivider, Text, Textarea, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import { BsImage, BsPlus, BsStar } from 'react-icons/bs';
import { AiOutlineGif, AiOutlineSmile, AiOutlineCalendar } from 'react-icons/ai';
import { RiBarChartHorizontalLine } from 'react-icons/ri';


const TWEETS = new Array(12).fill(true)

const FeedScreen: React.FC = () => {

  const progressColor = useColorModeValue("gray.100", "whiteAlpha.300")

  return (
    <Stack direction="row" divider={<StackDivider />} spacing={0} >
      <Stack divider={<StackDivider />} spacing={0} maxWidth={600}  width="100%">
        <Stack
          padding={4}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          paddingX={4}
          paddingY={3}
        >
          <Text fontWeight="bold" fontSize="xl">Inicio</Text>
          <Icon width={6} height={6} as={BsStar} color="primary.500" />
        </Stack>
        <Stack direction="row" paddingY={2} paddingX={4} spacing={4}>
          <Image
            src="https://avatars.githubusercontent.com/u/56644711?s=400&u=8b7a0fc8c73b0c52446b77b83fcd484f95ffd2c9&v=4"
            borderRadius="50%"
            height={12}
            width={12}
          />
          <Stack divider={<StackDivider />}  width="100%">
            <Textarea fontSize="xl" fontWeight="500" variant="unstyled" />
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Stack direction="row" color="primary.500" spacing={4}>
                <Icon as={BsImage}  width={6} height={6} />
                <Icon as={AiOutlineGif} width={6} height={6}/>
                <Icon as={RiBarChartHorizontalLine} width={6} height={6}/>
                <Icon as={AiOutlineSmile} width={6} height={6}/>
                <Icon as={AiOutlineCalendar} width={6} height={6}/>
              </Stack>
              <Stack direction="row" spacing={3}>
                <Stack direction="row" divider={<StackDivider />} alignItems="center">
                  <CircularProgress
                    size={6}
                    value={20}
                    color="primary.400"
                    trackColor="whiteAlpha.400"
                  />
                  <Box
                    borderRadius="50%"
                    alignItems="center"
                    as="button"
                    borderColor="primary.500"
                    width={8}
                    height={8}
                    borderWidth={1}
                    cursor="pointer"
                    display="flex"
                    justifyContent="center"
                    position="relative"
                  >
                    <Icon
                      as={BsPlus}
                      color="primary.500"
                      height={6}
                      width={6}
                      position="absolute"
                    />
                  </Box>

                </Stack>
                <Button colorScheme="primary">Twittear</Button>
              </Stack>

            </Stack>
          </Stack>
        </Stack>
        <Divider borderTopWidth={6} borderBottomWidth={6}/>
        <Stack
          divider={<StackDivider />}
          flex={1}
          overflowY="auto"
          maxHeight="100vh"
         
          spacing={0}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        
        >

          {TWEETS.map((index) => (
            <Stack key={index} spacing={4} direction="row" maxWidth={480} padding={4} width="100%">
              <SkeletonCircle width={12} height={12} minHeight={12} minWidth={12} />
              <Stack spacing={4} width="100%">
                <Stack alignItems="flex-end" direction="row" spacing={2} >
                  <Skeleton height={6} width="120px" />
                  <Skeleton height={3} width="80px" />
                </Stack>
              </Stack>
              <SkeletonText height={36} noOfLines={6} />
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Stack divider={<StackDivider />} width="100%"></Stack>
    </Stack>

  );
}

export default FeedScreen;