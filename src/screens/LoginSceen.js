/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    ToastAndroid
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const navigation = useNavigation(); 

    const handleSignIn = () => {
        // Perform sign-in logic here
if(!form.email){
    ToastAndroid.show('Email is required!', ToastAndroid.SHORT);
}
else if(!form.password){
    ToastAndroid.show('Password is required!', ToastAndroid.SHORT);
}
else{
    navigation.navigate('Listing');
}
        // Navigate to Listing screen
       
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
            <View style={styles.container}>
                <KeyboardAwareScrollView>
                    <View style={styles.header}>
                        <Image
                            alt="App Logo"
                            resizeMode="contain"
                            style={styles.headerImg}
                            source={require('../../assets/img/UnionLogo.png')} />

                        <Text style={styles.title}>
                            Sign in to <Text style={{ color: '#FFEB80' }}>1% Club</Text>
                        </Text>

                        <Text style={styles.subtitle}>
                            Get access to your portfolio and more
                        </Text>
                    </View>

                    <View style={styles.form}>
                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Email address</Text>

                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                clearButtonMode="while-editing"
                                keyboardType="email-address"
                                onChangeText={email => setForm({ ...form, email })}
                                placeholder="umesh@example.com"
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                value={form.email} />
                        </View>

                        <View style={styles.input}>
                            <Text style={styles.inputLabel}>Password</Text>

                            <TextInput
                                autoCorrect={false}
                                clearButtonMode="while-editing"
                                onChangeText={password => setForm({ ...form, password })}
                                placeholder=""
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                                secureTextEntry={true}
                                value={form.password} />
                        </View>

                        <View style={styles.formAction}>
                            <TouchableOpacity onPress={handleSignIn}>
                                <View style={styles.btn}>
                                    <Text style={styles.btnText}>Sign in</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.formLink}>Forgot password?</Text>
                    </View>
                </KeyboardAwareScrollView>

                <Text style={styles.formFooter}>
                        Don't have an account?{' '}
                        <Text  onPress={() => {
                        console.log('Sign Up')
                    }} style={{ textDecorationLine: 'underline' }}>Sign up</Text>
                    </Text>

                {/* <TouchableOpacity
                    onPress={() => {
                        // handle link
                    }}
                    style={{ marginTop: 'auto' }}>
                    <Text style={styles.formFooter}>
                        Don't have an account?{' '}
                        <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
                    </Text>
                </TouchableOpacity> */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
        paddingHorizontal: 0,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        backgroundColor: '#0A0A0A'
    },
    title: {
        fontSize: 35,
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#ffffff',
    },
    /** Header */
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 36,
    },
    headerImg: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 36,
    },
    /** Form */
    form: {
        marginBottom: 24,
        paddingHorizontal: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    formAction: {
        marginTop: 4,
        marginBottom: 16,
    },
    formLink: {
        fontSize: 16,
        fontWeight: '600',
        color: '#C9D3DB',
        textAlign: 'center',
    },
    formFooter: {
        fontSize: 15,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 0.15,
    },
    /** Input */
    input: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 8,
    },
    inputControl: {
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
        borderWidth: 1,
        borderColor: '#C9D3DB',
        borderStyle: 'solid',
    },
    /** Button */
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: '#FFEB80',
        borderColor: '#FFEB80',
    },
    btnText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: '#121212',
    },
});