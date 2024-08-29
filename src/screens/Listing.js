/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, Animated, PanResponder, TextInput, Dimensions, TouchableOpacity, Image } from 'react-native';


const Listing = ({ navigation }) => {
    const [expanded, setExpanded] = useState(false);
    const translateY = useRef(new Animated.Value(Dimensions.get('window').height / 2)).current;
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [isDragging, setIsDragging] = useState(false);
    const [stocks, setStocks] = useState([
        { id: '1', name: 'Stock 1', price: '$100', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/AMD.png') },
        { id: '2', name: 'Stock 2', price: '$150', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/APP.png') },
        { id: '3', name: 'Stock 3', price: '$200', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/AMD.png') },
        { id: '4', name: 'Stock 4', price: '$120', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/AMD.png') },
        { id: '5', name: 'Stock 5', price: '$180', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/APP.png') },
        { id: '6', name: 'Stock 6', price: '$100', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/AMD.png') },
        { id: '7', name: 'Stock 7', price: '$150', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/AMD.png') },
        { id: '8', name: 'Stock 8', price: '$200', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/APP.png') },
        { id: '9', name: 'Stock 9', price: '$120', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/AMD.png') },
        { id: '10', name: 'Stock 10', price: '$180', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/APP.png') },
        { id: '11', name: 'Stock 11', price: '$100', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/APP.png') },
        { id: '12', name: 'Stock 12', price: '$150', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/APP.png') },
        { id: '13', name: 'Stock 13', price: '$200', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/APP.png') },
        { id: '14', name: 'Stock 14', price: '$120', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/AMD.png') },
        { id: '15', name: 'Stock 15', price: '$180', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/AMD.png') },
        { id: '16', name: 'Stock 16', price: '$100', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/AMD.png') },
        { id: '17', name: 'Stock 17', price: '$150', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/AMD.png') },
        { id: '18', name: 'Stock 18', price: '$200', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/AMD.png') },
        { id: '19', name: 'Stock 19', price: '$120', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/APP.png')},
        { id: '20', name: 'Stock 20', price: '$180', title: 'Advanced Micro Devices, Inc.', note: 'Lorem ipsum dolor', detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: require('../../assets/img/APP.png')},
    ]);

    const [selectedStock, setSelectedStock] = useState(null);
    const [selectedStockIndex, setSelectedStockIndex] = useState(null);

    // Rest of your code...

    const handleLongPress = (item, index) => {
        setSelectedStock(item);
        setSelectedStockIndex(index);
    };

    const removeSelectedStock = () => {
        setSelectedStock(null);
        setSelectedStockIndex(null);
    };

    const navigateToDetails = (stock) => {
        navigation.navigate('DetailsScreen', { stock: stock });
        console.log("Navigating to details for:", stock);
    };


    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        console.log('startIndex:', startIndex);
        console.log('endIndex:', endIndex);
        return stocks.slice(startIndex, endIndex);
    };


    const totalPages = Math.ceil(stocks.length / itemsPerPage);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const toggleExpansion = () => {
        setExpanded(!expanded);
        Animated.timing(translateY, {
            toValue: expanded ? Dimensions.get('window').height / 2 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const renderPageNumbers = () => {
        if (totalPages <= 3) {
            return Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
                <TouchableOpacity
                    key={page}
                    style={[styles.pageButton, currentPage === page && styles.currentPageButton]}
                    onPress={() => setCurrentPage(page)}
                >
                    <Text style={[styles.pageText, currentPage === page && styles.currentPageText]}>{page}</Text>
                </TouchableOpacity>
            ));
        } else {
            const pages = [];
            if (currentPage <= 3) {
                for (let i = 1; i <= 3; i++) {
                    pages.push(
                        <TouchableOpacity
                            key={i}
                            style={[styles.pageButton, currentPage === i && styles.currentPageButton]}
                            onPress={() => setCurrentPage(i)}
                        >
                            <Text style={[styles.pageText, currentPage === i && styles.currentPageText]}>{i}</Text>
                        </TouchableOpacity>
                    );
                }
                pages.push(
                    <TouchableOpacity key="ellipsisEnd" style={styles.pageButton}>
                        <Text style={styles.pageText}>...</Text>
                    </TouchableOpacity>
                );
                pages.push(
                    <TouchableOpacity
                        key={totalPages}
                        style={[styles.pageButton, currentPage === totalPages && styles.currentPageButton]}
                        onPress={() => setCurrentPage(totalPages)}
                    >
                        <Text style={[styles.pageText, currentPage === totalPages && styles.currentPageText]}>{totalPages}</Text>
                    </TouchableOpacity>
                );
            } else if (currentPage >= totalPages - 2) {
                pages.push(
                    <TouchableOpacity
                        key={1}
                        style={[styles.pageButton, currentPage === 1 && styles.currentPageButton]}
                        onPress={() => setCurrentPage(1)}
                    >
                        <Text style={[styles.pageText, currentPage === 1 && styles.currentPageText]}>1</Text>
                    </TouchableOpacity>
                );
                pages.push(
                    <TouchableOpacity key="ellipsisStart" style={styles.pageButton}>
                        <Text style={styles.pageText}>...</Text>
                    </TouchableOpacity>
                );
                for (let i = totalPages - 4; i <= totalPages; i++) {
                    pages.push(
                        <TouchableOpacity
                            key={i}
                            style={[styles.pageButton, currentPage === i && styles.currentPageButton]}
                            onPress={() => setCurrentPage(i)}
                        >
                            <Text style={[styles.pageText, currentPage === i && styles.currentPageText]}>{i}</Text>
                        </TouchableOpacity>
                    );
                }
            } else {
                pages.push(
                    <TouchableOpacity
                        key={1}
                        style={[styles.pageButton, currentPage === 1 && styles.currentPageButton]}
                        onPress={() => setCurrentPage(1)}
                    >
                        <Text style={[styles.pageText, currentPage === 1 && styles.currentPageText]}>1</Text>
                    </TouchableOpacity>
                );
                pages.push(
                    <TouchableOpacity key="ellipsisStart" style={styles.pageButton}>
                        <Text style={styles.pageText}>...</Text>
                    </TouchableOpacity>
                );
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(
                        <TouchableOpacity
                            key={i}
                            style={[styles.pageButton, currentPage === i && styles.currentPageButton]}
                            onPress={() => setCurrentPage(i)}
                        >
                            <Text style={[styles.pageText, currentPage === i && styles.currentPageText]}>{i}</Text>
                        </TouchableOpacity>
                    );
                }
                pages.push(
                    <TouchableOpacity key="ellipsisEnd" style={styles.pageButton}>
                        <Text style={styles.pageText}>...</Text>
                    </TouchableOpacity>
                );
                pages.push(
                    <TouchableOpacity
                        key={totalPages}
                        style={[styles.pageButton, currentPage === totalPages && styles.currentPageButton]}
                        onPress={() => setCurrentPage(totalPages)}
                    >
                        <Text style={[styles.pageText, currentPage === totalPages && styles.currentPageText]}>{totalPages}</Text>
                    </TouchableOpacity>
                );
            }
            return pages;
        }
    };

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => !expanded, // Only set when list is not expanded
            onPanResponderMove: (_, gestureState) => {
                if (!expanded) {
                    const { dy } = gestureState;
                    translateY.setValue(Math.max(Dimensions.get('window').height / 2 + dy, 0));
                }
            },
            onPanResponderRelease: (_, gestureState) => {
                if (!expanded) {
                    const { dy } = gestureState;
                    if (dy < -100) {
                        // If scrolled up by more than 100, expand the bottom sheet
                        Animated.timing(translateY, {
                            toValue: 0,
                            duration: 300,
                            useNativeDriver: true,
                        }).start(() => {
                            setExpanded(true);
                        });
                    } else {
                        // If not scrolled up enough, keep the bottom sheet at 50% height
                        Animated.timing(translateY, {
                            toValue: Dimensions.get('window').height / 2,
                            duration: 300,
                            useNativeDriver: true,
                        }).start(() => {
                            setExpanded(false);
                        });
                    }
                }
            },
        })
    ).current;

    return (
        <View style={{ flex: 1 }}>
        {!expanded && (
                <View style={{ flex: 1, backgroundColor: '#121212', alignItems: 'center',  }}>
                    <Image
                         source={require('../../assets/img/UnionLogo.png')}
                        style={{  width: 80,
                            height: 120,
                            marginTop: '30%' }}
                    />
                </View>
            )}
        <Animated.View
        style={[
            styles.container,
            expanded && styles.expandedContainer,
            {
                transform: [{ translateY: translateY }],
            },
        ]}
        {...panResponder.panHandlers}
    >
        {expanded ? (

            <View style={styles.fullScreenContainer}>
                <View style={styles.searchContainer}>
                    <Image source={require('../../assets/img/Search.png')} style={styles.iconS} />
                    <TextInput
                        placeholder="Search for stocks"
                        style={styles.searchInputs}
                        onChangeText={(text) => setSearchTerm(text)}
                        value={searchTerm}
                    />
                </View>
            </View>

        ) : (
            <View style={styles.horizontalLineM}></View>
        )}
        <FlatList
            data={getCurrentPageData().filter(stock => stock.name.toLowerCase().includes(searchTerm.toLowerCase()))}
            renderItem={({ index, item }) => (
                // <TouchableOpacity style={styles.stockItem}>
                //     <Text>{item.name}</Text>
                //     <Text>{item.price}</Text>
                // </TouchableOpacity>
                <View >
                    <View style={[
                        styles.stockContainer,
                        selectedStockIndex === index && styles.selectedStockContainer,
                    ]}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigateToDetails(item)} // Short press for navigation
                            onLongPress={() => handleLongPress(item, index)}
                            style={styles.stockItemContainer}
                        >
                            {/* Left side text and image */}
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={item.image}
                                    style={{ width: 60, height: 40, marginRight: 20 }}
                                />

                                <View style={{ flexDirection: 'column', }}>
                                    <Text style={styles.stockName}>{item.name}</Text>
                                    <Text style={styles.stockTitle}>{item.title}</Text>
                                    <Text style={styles.stockName}>{item.price}</Text>
                                </View>
                            </View>

                        </TouchableOpacity>
                        {selectedStockIndex === index && (
                            <View style={{ paddingHorizontal: 20, paddingBottom: 20, }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                    <Text style={styles.stockName}>{selectedStock.note}</Text>
                                    <TouchableOpacity style={styles.selectedStockDetails} onPress={removeSelectedStock}>
                                        <Image source={require('../../assets/img/hide.png')} style={styles.arrowIcon} />
                                    </TouchableOpacity>

                                </View>

                                <Text style={styles.stockDetail}>{selectedStock.detail}</Text>
                            </View>
                        )}
                    </View>

                    {index !== getCurrentPageData().length - 1 && (
                        <View style={{ height: 1, backgroundColor: '#ccc' }} />
                    )}
                </View>

            )}
            keyExtractor={(item) => item.id}
            //scrollEnabled={!expanded}
        />

        {/* <View style={styles.navigatorContainer}>
            <TouchableOpacity
                style={[styles.pageButton, isFirstPage && styles.disabledButton]}
                disabled={isFirstPage}
                onPress={() => setCurrentPage(currentPage - 1)}
            >
                <Text style={styles.pageText}>{"<"}</Text>
            </TouchableOpacity>
            {renderPageNumbers()}
            <TouchableOpacity
                style={[styles.pageButton, isLastPage && styles.disabledButton]}
                disabled={isLastPage}
                onPress={() => setCurrentPage(currentPage + 1)}
            >
                <Text style={styles.pageText}>{">"}</Text>
            </TouchableOpacity>
        </View> */}


        <View style={styles.navigatorContainer}>
            {Array.from({ length: Math.ceil(stocks.length / itemsPerPage) }, (_, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.pageButton}
                    onPress={() => setCurrentPage(index + 1)}
                >
                    <Text style={styles.pageText}>{index + 1}</Text>
                </TouchableOpacity>
            ))}
        </View>
        {/* <FlatList
            data={stocks.filter(stock => stock.name.toLowerCase().includes(searchTerm.toLowerCase()))}
            renderItem={({ item }) => (
                <View style={styles.stockItem}>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                </View>
            )}
            keyExtractor={(item) => item.id}
            scrollEnabled={!expanded}
        /> */}

    </Animated.View>
        </View>
    
       
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 20,
        //paddingTop: 40, // Adjust this value as needed
        zIndex: 1,
    },
    expandedContainer: {
        height: Dimensions.get('window').height,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10,
    },
    fullScreenContainer: {
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    searchContainer: {
        flexDirection: 'row', // Arrange children in a row
        alignItems: 'center', // Align children vertically
        borderWidth: 1,
        backgroundColor: '#EBEBEB',
        borderColor: '#EBEBEB',
        borderRadius: 10,
        marginBottom: 20,
    },
    iconS: {
        width: 20, // Adjust based on your icon size
        height: 20, // Adjust based on your icon size
        marginLeft: 10, // Adjust the spacing between icon and input
    },
    searchInputs: {
        flex: 1, // Take remaining space in the row
        padding: 10,
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
    stockDetail: {
        fontSize: 16,
        fontWeight: '600',
        color: '#090909',
        lineHeight: 19,
        paddingTop: 5
    },
    navigatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    pageButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'transparent',
        marginHorizontal: 5,
    },
    pageText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    stockItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    horizontalLineM: {
        width: '20%',
        height: 5,
        marginBottom: 30,
        //marginHorizontal: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#979797',
        borderRadius: 10
    },
    searchBarContainer: {
        marginVertical: 15,
        paddingHorizontal: 15,
        borderWidth: 1,
        height: 42,
        flexDirection: 'row',
        backgroundColor: '#EBEBEB',
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    backContainerSearch: {
        height: 18,
        width: 18,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    icon: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    searchInput: {
        paddingHorizontal: 10,
        fontSize: 15,
        color: 'black', // Text color
        marginBottom: 20,
        flex: 1,
    },
    arrowIcon: {
        height: 15,
        width: 17
    },
    stockItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 20
    },
    selectedStockItemContainer: {
        backgroundColor: '#ccc', // Grey background color for selected item
    },
    stockContainer: {
        backgroundColor: 'transparent', // Default background color
        //marginBottom: 16, // Adjust spacing between items
    },
    selectedStockContainer: {
        backgroundColor: '#D9D9D9', // Grey background color for selected item
    },
});

export default Listing