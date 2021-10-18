import React from 'react';
import {ActivityIndicator, Pressable, Text,} from 'react-native';
import styles from './styles';
import colors from '../../themes/colors';

interface IButtonProps {
    onPress?: () => void;
    children?: string;
    loading?: boolean;
    disabled?: boolean;
    isLink?: boolean;
}

export default ({
                    onPress,
                    children,
                    loading,
                    disabled,
                    isLink,
                }: IButtonProps) => {
    const isDisabled = disabled || loading;

    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.button,
                disabled && styles.buttonDisabled,
                isLink && styles.linkButton,
            ]}
            disabled={isDisabled}>
            {loading ? (
                <ActivityIndicator color={colors.white} size={'small'}/>
            ) : (
                <Text
                    style={[
                        styles.text,
                        disabled && styles.buttonDisabledText,
                        isLink && styles.linkButtonText,
                    ]}>
                    {children}
                </Text>
            )}
        </Pressable>
    );
};
