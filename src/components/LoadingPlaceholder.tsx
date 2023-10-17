import { View, Text } from 'react-native';
import React from 'react';
// import SkeletonContent from 'react-native-skeleton-content';

type Props = {
  isLoading: boolean;
};

const LoadingPlaceholder = ({ isLoading }: Props) => {
  return <></>;
};

export default LoadingPlaceholder;
