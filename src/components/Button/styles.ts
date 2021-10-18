import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import {scale} from '../../utils/scaler';

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: undefined,
        borderRadius: scale(5),
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: scale(10),
        paddingHorizontal: scale(15),
        backgroundColor: colors.primary,
    },
    buttonDisabled: {
        backgroundColor: colors.buttonDisabledBackground,
    },
    linkButton: {
        borderWidth: 0,
        backgroundColor: 'transparent',
    },
    linkButtonText: {
        color: colors.primary,
    },
    text: {
        color: colors.white,
        fontSize: scale(14),
    },
    buttonDisabledText: {
        color: colors.buttonDisabledText,
    },
});

export default styles;
