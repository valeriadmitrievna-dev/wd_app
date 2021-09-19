import React from 'react';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AuthButtonText} from './../screens/auth.styled';

export default function OrangeButton({onPress, style, children}) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}
        colors={['#FE904B', '#FB724C']}
        style={{
          borderRadius: 14,
          paddingVertical: 16,
        }}>
        <AuthButtonText>{children}</AuthButtonText>
      </LinearGradient>
    </TouchableOpacity>
  );
}
