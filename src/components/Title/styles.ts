import {StyleSheet} from 'react-native';
import {scale} from '../../utils/scaler';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
    h1: {
        fontSize: scale(27),
        color: colors.h1Title,
    },
    h2: {
        fontSize: scale(19),
        color: colors.h2Title,
        marginBottom: scale(24),
    },
    h3: {
        fontSize: scale(16),
        color: colors.h3Title,
        marginBottom: scale(24),
    },
    uppercase: {
        textTransform: 'uppercase',
    },
});

export default styles;
