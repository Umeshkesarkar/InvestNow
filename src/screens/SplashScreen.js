/* eslint-disable prettier/prettier */
import React, { useEffect, useRef } from 'react';
import { Animated, View, Image, StyleSheet, Dimensions, PermissionsAndroid, Platform } from 'react-native';

const SplashScreen = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;


    useEffect(() => {
        const fadeInFadeOut = () => {
            const fadeIn = Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 700, // Adjust the duration as per your preference
                useNativeDriver: true,
            });
            const fadeOut = Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 700, // Adjust the duration as per your preference
                useNativeDriver: true,
            });

            Animated.sequence([fadeIn, Animated.delay(700), fadeOut]).start(() => {
              navigation.replace('LoginScreen'); // Replace 'DemoScreen' with your actual screen name
            });
        };

        fadeInFadeOut();
    }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageContainer, {opacity: fadeAnim}]}>
        {/* Replace the Image component with your own splash screen image */}
        <Image
                  source={require('../../assets/img/UnionLogo.png')}
          style={styles.image}
        />
      </Animated.View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A0A0A'
    },
    imageContainer: {
        width: windowWidth * 0.3,
        height: windowHeight * 0.2,
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'contain',
    },
});

export default SplashScreen;
