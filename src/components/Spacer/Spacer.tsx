import React from 'react';
import {View} from 'react-native';
import {scale} from '../../utils/scaler';

interface ISpacerProps {
  height: number;
}

const Spacer = ({height}: ISpacerProps) => {
  return (
    <View
      style={{
        height: scale(height),
      }}
    />
  );
};

export default Spacer;
