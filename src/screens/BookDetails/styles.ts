import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import {scale} from "../../utils/scaler";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    loaderWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    itemWrapper: {
        flex: 1,
        padding: scale(10),
    },
    itemRightWrapper: {
        flexDirection: 'column',
    },
    image: {
        backgroundColor: colors.imageBackground,
        width: scale(300),
        maxWidth: scale(300),
        height: scale(300),
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: scale(14),
        maxWidth: scale(230),
        marginLeft: scale(5),
    },
    synopsis: {
        fontSize: scale(12),
        textAlign: 'justify'
    },
    author: {
        fontWeight: '300',
        fontSize: scale(11),
        marginRight: scale(5),
        fontStyle: 'italic',
        textAlign: 'right',
        color: colors.authorColor
    },
    publisher: {
        fontWeight: '200',
        fontSize: scale(11),
        marginRight: scale(5),
        textAlign: 'right',
        color: colors.authorColor
    },
    pageCount: {
        fontWeight: '200',
        fontSize: scale(10),
        marginRight: scale(5),
        textAlign: 'right',
        color: colors.authorColor
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default styles;
