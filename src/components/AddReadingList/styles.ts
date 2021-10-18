import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import {scale} from '../../utils/scaler';

const styles = StyleSheet.create({
    wrapper: {
        width: scale(30),
        height: scale(30),
        borderRadius: scale(5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    indicator: {
        height: scale(15),
    },
    hitSlop: {
        top: scale(20),
        right: scale(20),
        bottom: scale(20),
        left: scale(20),
    }
});

export default styles;
