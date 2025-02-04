import React from 'react';
import { TextInput, StyleSheet, TextInputProps, StyleProp, ViewStyle } from 'react-native';

// Definir las props del componente Input
interface InputProps extends TextInputProps {
    style?: StyleProp<ViewStyle>; // Tipo para style (opcional)
}

// Componente Input
export const Input = ({ style, ...props }: InputProps) => {
    return (
        <TextInput
            style={[styles.input, style]}
            {...props}
        />
    );
};

// Estilos
const styles = StyleSheet.create({
    input: {
        width: '100%', // w-full
        paddingHorizontal: 12, // px-3
        paddingVertical: 8, // py-2
        borderWidth: 1, // border
        borderRadius: 6, // rounded-md
        borderColor: '#d1d5db', // color de borde por defecto
    },
});