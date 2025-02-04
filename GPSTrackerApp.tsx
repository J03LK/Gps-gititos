import React, { useState } from 'react';
import { View, Text, Alert, Linking, StyleSheet } from 'react-native';
import { Card } from './components/card';
import { Button } from './components/button';
import { Input } from './components/input';
import { Phone, MapPin, Bell, BellOff, Wifi } from 'lucide-react-native';
import { CardHeader } from './components/cardheader';
import { CardTitle } from './components/cardtitle';
import { CardContent } from './components/cardcontent';

const GPSTrackerApp = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [interval, setInterval] = useState('');
    const [isTracking, setIsTracking] = useState(false);

    const handleSync = () => {
        Alert.alert('Sincronizando con el dispositivo GPS...');
    };

    const handleCall = () => {
        if (phoneNumber) {
            Linking.openURL(`tel:${phoneNumber}`);
        } else {
            Alert.alert('Por favor ingrese un número telefónico');
        }
    };

    const handleLocation = () => {
        Alert.alert('Solicitando ubicación del dispositivo...');
    };

    const toggleTracking = () => {
        setIsTracking(!isTracking);
        if (!isTracking) {
            Alert.alert(`Rastreo automático activado cada ${interval} minutos`);
        } else {
            Alert.alert('Rastreo automático desactivado');
        }
    };

    return (
        <View style={styles.container}>
            <Card>
                <CardHeader>
                    <CardTitle>GPS Tracker</CardTitle>
                </CardHeader>
                <CardContent>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Número del GPS:</Text>
                        <Input
                            placeholder="Ingrese número del GPS"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={styles.buttonGrid}>
                        <Button onPress={handleSync} style={styles.button}>
                            <Wifi size={20} color="white" />
                            <Text style={styles.buttonText}>Sincronizar</Text>
                        </Button>

                        <Button onPress={handleCall} style={styles.button}>
                            <Phone size={20} color="white" />
                            <Text style={styles.buttonText}>Llamar</Text>
                        </Button>
                    </View>

                    <Button onPress={handleLocation} style={styles.fullWidthButton}>
                        <MapPin size={20} color="white" />
                        <Text style={styles.buttonText}>Obtener Ubicación</Text>
                    </Button>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Intervalo de rastreo (minutos):</Text>
                        <Input
                            placeholder="Ingrese intervalo"
                            value={interval}
                            onChangeText={setInterval}
                            keyboardType="numeric"
                        />
                    </View>

                    <Button
                        onPress={toggleTracking}
                        variant={isTracking ? "destructive" : "default"}
                        style={styles.fullWidthButton}
                    >
                        {isTracking ? (
                            <>
                                <BellOff size={20} color="white" />
                                <Text style={styles.buttonText}>Desactivar Rastreo</Text>
                            </>
                        ) : (
                            <>
                                <Bell size={20} color="white" />
                                <Text style={styles.buttonText}>Activar Rastreo</Text>
                            </>
                        )}
                    </Button>
                </CardContent>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f3f4f6',
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 8,
    },
    buttonGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#3b82f6',
    },
    fullWidthButton: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
    },
    defaultButton: {
        backgroundColor: '#3b82f6',
    },
    destructiveButton: {
        backgroundColor: '#ef4444',
    },
    buttonText: {
        color: 'white',
        marginLeft: 8,
        fontWeight: '500',
    },
});

export default GPSTrackerApp;