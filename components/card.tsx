import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

// Definir las props del componente Card
interface CardProps {
    children: ReactNode; // Tipo para children
    style?: object; // Tipo para style (opcional)
}

// Componente Card
export const Card = ({ children, style }: CardProps) => {
    return (
        <View style={[styles.card, style]}>
            {children}
        </View>
    );
};

// Estilos
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white', // Fondo blanco
        borderRadius: 8, // Bordes redondeados
        shadowColor: '#000', // Sombra
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // Sombra en Android
        width: '100%', // Ancho completo
        marginVertical: 8, // Margen vertical
    },
});
