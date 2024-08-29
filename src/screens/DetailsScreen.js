/* eslint-disable prettier/prettier */
import { View, Text, Image, StyleSheet } from 'react-native'
import React,{useEffect} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailsScreen = ({ navigation, route }) => {

    const { stock } = route.params;

    const handleAddToOrder = async () => {
        try {
            let orderList = await AsyncStorage.getItem('orderList');
            orderList = orderList ? JSON.parse(orderList) : [];
            if (!orderList.find(item => item.id === stock.id)) {
                orderList.push(stock);
                await AsyncStorage.setItem('orderList', JSON.stringify(orderList));
            }
            navigation.navigate('OrdersScreen');
        } catch (error) {
            console.error('Error adding item to order:', error);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Image source={stock.image} style={{ width: 120, height: 80 }} />
                    <Text style={styles.stockName}>{stock.name}</Text>
                    <Text style={styles.stockTitle}>{stock.title}</Text>
                    <Text style={styles.stockName}>Price: {stock.price}</Text>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.stockName1}>{stock.note}</Text>
                        <Text style={styles.stockDetail}>{stock.detail}</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.stockName1}>{stock.note}</Text>
                        <Text style={styles.stockDetail}>{stock.detail}</Text>
                    </View>
                </View>
                <TouchableOpacity style={[styles.button]} activeOpacity={0.8} onPress={handleAddToOrder}>
                    <Text style={styles.buttonText}>Add to order</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20
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
    button: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
        height: 59,
        width: '90%',
        backgroundColor: "#ECD996",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: '#090909',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'DMSans-Bold',
        lineHeight: 28
    },
});

export default DetailsScreen;
