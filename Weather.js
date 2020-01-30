import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#b92b27", "#1565C0"],
        title: "Thunderstorm",
        subtitle: "오예"
    },
    Drizzle: {
        iconName: "weather-pouring",
        gradient: ["#6190E8", "#A7BFE8"],
        title: "비가 보슬보슬",
        subtitle: "우산챙깁시당"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "흐림",
        subtitle: "미세먼지 마스크챙깁시다"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#0F2027", "#2C5364"],
        title: "비가와요",
        subtitle: "아 맞다 우산"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#83a4d4", "#b6fbff"],
        title: "눈온당",
        subtitle: "눈이와~~~"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#2980B9", "#6DD5FA"],
        title: "날씨맑음",
        subtitle: "날씨 좋은날 도시락 싸들고 한강 가고싶당"
    },
    Atmosphere: {
        iconName: "weather-partlycloudy",
        gradient: ["#B993D6", "#8CA6DB"],
        title: "Atmosphere",
        subtitle: "Don't go outside"
    }

};

export default function Weather({ temp, condition }) {
    if(!condition) condition = "Clear";
    return (
        <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }, styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={120} color="white"/>
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>    
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 32,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 45,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})