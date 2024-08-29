import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SwipeButton from 'rn-swipe-button';
import thumbIcon from '../../assets/img/swipe.png';
import confirmedThumbIcon from '../../assets/img/check.png';

const OrderScreen = () => {
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        const getOrderList = async () => {
            try {
                const storedOrderList = await AsyncStorage.getItem('orderList');
                if (storedOrderList) {
                    setOrderList(JSON.parse(storedOrderList));
                }
            } catch (error) {
                console.error('Error retrieving order list:', error);
            }
        };

        getOrderList();
    }, []);

    const handleRemoveItem = async (itemId) => {
        try {
            const updatedOrderList = orderList.filter(item => item.id !== itemId);
            setOrderList(updatedOrderList);
            await AsyncStorage.setItem('orderList', JSON.stringify(updatedOrderList));
        } catch (error) {
            console.error('Error removing item from order list:', error);
        }
    };

    const [swipeStatus, setSwipeStatus] = useState('Swipe to Buy'); 

    const handleSwipeStart = () => {
        setSwipeStatus('Release'); 
    };

    const handleSwipeSuccess = () => {
        if (swipeStatus === 'Swipe') {
            setSwipeStatus('Release'); 
        } else {
            setSwipeStatus('Confirmed');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Open Orders</Text>
            <FlatList
                data={orderList}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.detailsContainer}>
                            <Text style={styles.stockName}>{item.name}</Text>
                            <Text style={styles.stockTitle}>{item.title}</Text>
                            <Text style={styles.stockName}>{item.price}</Text>
                        </View>
                        <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                            <Image source={require('../../assets/img/Delete.png')} style={styles.deleteIcon} />
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
            <View style={{ position: 'absolute', bottom: 20, marginTop: 50, alignSelf: 'center' }}>
                <SwipeButton
                    style={styles.slideButton}
                    disabled={false}
                    swipeSuccessThreshold={70}
                    height={50}
                    width={257}
                    title={swipeStatus}
                    titleColor='#090909'
                    titleStyles={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 30,
                        fontSize: 18,
                        fontFamily: 'DMSans-Bold',
                        lineHeight: 28
                    }}
                    containerStyle={{
                        backgroundColor: swipeStatus === 'Confirmed' ? '#FFF5D1' : 'rgba(255, 255, 255, 0.5)'
                    }}
                    thumbIconImageSource={swipeStatus === 'Confirmed' ? confirmedThumbIcon : thumbIcon}
                    thumbIconStyles={{ borderRadius: 36 }}
                    onSwipeStart={handleSwipeStart}
                    onSwipeSuccess={handleSwipeSuccess}
                    thumbIconBackgroundColor='#FEFCFC'
                    thumbIconBorderColor='#FFF5D1'
                    thumbIconWidth={50}
                    railBorderColor='#FEFCFC'
                    railBackgroundColor={swipeStatus === 'Confirmed' ? '#00FF00' : '#FFF5D1'}
                    railFillBackgroundColor='rgba(255, 255, 255, 0.7)'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#090909',
        lineHeight: 29.05,
        marginBottom: 20,   
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 80,
        height: 60,
        marginRight: 10,
    },
    detailsContainer: {
        flex: 1,
    },
    stockName: {
        fontSize: 24,
        fontWeight: '600',
        color: '#090909',
        lineHeight: 29.05
    },
    stockTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#999999',
        lineHeight: 19,
        paddingVertical: 2
    },
    stockName1: {
        fontSize: 20,
        fontWeight: '600',
        color: '#090909',
        lineHeight: 29.05
    },
    stockDetail: {
        fontSize: 16,
        fontWeight: '600',
        color: '#090909',
        lineHeight: 19,
        paddingTop: 5
    },
    deleteIcon: {
        width: 24,
        height: 28,
    },
});

export default OrderScreen;
