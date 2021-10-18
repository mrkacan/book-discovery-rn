import * as React from 'react';
import {useCallback, useMemo, useState} from 'react';
import {View} from 'react-native';

import {AuthStackScreenProps} from '../../../types';
import {requestLogin} from "../../features/auth/actions";
import {useDispatch, useSelector} from "react-redux";
import TextInput from "../../components/TextInput/TextInput";
import Spacer from "../../components/Spacer/Spacer";
import Button from "../../components/Button/Button";
import Title from '../../components/Title/Title';
import {isLoginLoading} from "../../features/auth/selectors";
import styles from './styles';

export default function Login({navigation}: AuthStackScreenProps<'Login'>) {
    const dispatch = useDispatch();
    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const isLoading = useSelector(isLoginLoading)
    const onLoginPress = useCallback(() => {
        dispatch(requestLogin({username, password}));
    }, [username, password])

    const onRegisterPress = useCallback(() => {
        navigation.replace('Register')
    }, [username, password])

    const isDisabled = useMemo<boolean>(() => {
        return (!username || !password)
    }, [username, password])

    return (
        <View style={styles.container}>
            <Title h1>
                Login
            </Title>
            <Spacer height={80}/>
            <TextInput autoFocus value={username} onChangeText={(value: string) => setUserName(value)}
                       placeholder={'Username'}/>
            <Spacer height={18}/>
            <TextInput value={password} onChangeText={(value: string) => setPassword(value)} placeholder={'Password'}/>
            <Spacer height={40}/>
            <Button loading={isLoading} onPress={onLoginPress} disabled={isDisabled}>
                Login
            </Button>
            <Spacer height={18}/>
            <Button onPress={onRegisterPress} isLink>
                New user? Register
            </Button>
        </View>
    );
}
