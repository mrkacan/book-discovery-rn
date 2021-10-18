import * as React from 'react';
import {Text} from 'react-native';
import styles from './styles';

interface ITitleProps {
    children?: string | number;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    uppercase?: boolean;
}

const Title = ({
                   children,
                   h1,
                   h2,
                   h3,
                   uppercase,
               }: ITitleProps) => {

    return (
        <Text
            style={[
                h1 && styles.h1,
                h2 && styles.h2,
                h3 && styles.h3,
                uppercase && styles.uppercase,
            ]}
            numberOfLines={1}
        >
            {children}
        </Text>
    );
};

export default Title;
