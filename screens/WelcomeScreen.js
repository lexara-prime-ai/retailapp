import React from 'react';
import { ImageBackground, View, StyleSheet, Image, Text } from 'react-native';
import colors from '../app/config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require('../app/assets/background.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../app/assets/logo.png')} />
                <Text style={styles.slogan}>Online Retail</Text>
            </View>
            <View style={[styles.loginButton, styles.shadowProp]}><Text style={styles.buttonText}>Login</Text></View>
            <View style={[styles.registerButton, styles.shadowProp]}><Text style={styles.buttonText}>Register</Text></View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: '80%',
        height: 50,
        backgroundColor: colors.secondary,
        margin: 6,
        borderRadius: 12,
    },
    registerButton: {
        width: '80%',
        height: 50,
        backgroundColor: colors.primary,
        margin: 6,
        borderRadius: 12,
    },
    buttonText: {
        textAlign: 'center',
        top: 10,
        fontSize: 21,
        letterSpacing: 1,
        color: '#fff',
        fontFamily: 'Roboto',
    },
    logo: {
        width: 85,
        height: 85,
    },
    slogan: {
        fontFamily: 'Roboto',
        fontSize: 21,
        letterSpacing: 1,
        color: colors.primary,
    },
    logoContainer: {
        position: 'absolute',
        top: 60,
        alignItems: 'center',
    },
    shadowProp: {
        shadowColor: '#242424',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
    },
});
export default WelcomeScreen;