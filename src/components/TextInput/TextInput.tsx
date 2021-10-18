import React, {useCallback, useState} from 'react';
import {KeyboardTypeOptions, Pressable, TextInput as RNTextInput, TextInputProps, View,} from 'react-native';
import styles from './styles';
import colors from '../../themes/colors';
import {FontAwesome} from "@expo/vector-icons";
import {scale} from "../../utils/scaler";

interface ITextInputProps extends TextInputProps {
    value?: string;
    defaultValue?: string;
    placeholder: string;
    keyboardType?: KeyboardTypeOptions;
    maxLength?: number;
    autoFocus?: boolean;
    password?: boolean;
    showRightIcon?: boolean;
    disabled?: boolean;
    onRemovePress?: () => void;
}

const TextInput =
    (
        {
            value,
            placeholder,
            onChangeText,
            maxLength = 100,
            keyboardType,
            autoFocus,
            password,
            onKeyPress,
            disabled,
            onRemovePress,
            showRightIcon,
        }: ITextInputProps,
    ) => {

        const textInputStyles = [
            styles.inputStyle,
            disabled && styles.disableTextInput,
        ];

        return (
            <View style={styles.wrapper}>
                <RNTextInput
                    placeholderTextColor={colors.placeholderColor}
                    style={textInputStyles}
                    maxLength={maxLength}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    autoFocus={autoFocus}
                    defaultValue={value}
                    secureTextEntry={password}
                    value={value}
                    spellCheck={false}
                    allowFontScaling={false}
                    autoCorrect={false}
                    onKeyPress={onKeyPress}
                    editable={!disabled}
                    autoCapitalize={'none'}
                    placeholder={placeholder}
                />
                {showRightIcon && <Pressable style={styles.removeButton} onPress={onRemovePress}>
                    <FontAwesome
                        name="close"
                        size={scale(15)}
                        color={colors.primary}
                    />
                </Pressable>}
            </View>
        );
    }

export default TextInput;
