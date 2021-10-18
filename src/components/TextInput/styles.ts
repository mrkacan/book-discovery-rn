import {StyleSheet} from 'react-native';
import {scale} from '../../utils/scaler';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
    },
    inputStyle: {
        width: '100%',
        backgroundColor: colors.inputBackground,
        height: scale(45),
        paddingHorizontal: scale(10),
        alignItems: 'center',
        borderRadius: scale(5),
        borderWidth: 1,
        borderColor: colors.inputBorder,
        color: colors.buttonText,
    },
    disableTextInput: {
        backgroundColor: colors.buttonDisabledBackground,
        color: colors.inputDisabledText,
    },
    removeButton: {
        width: scale(20),
        height: scale(20),
        borderWidth: 1,
        borderRadius: scale(20) / 2,
        borderColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: scale(10),
        top: (scale(45) - scale(20)) / 2
    }
});

export default styles;
