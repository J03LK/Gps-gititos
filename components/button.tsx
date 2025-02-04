import React, { ReactNode } from 'react';
import { Pressable, Text, StyleSheet, StyleProp, ViewStyle, TextStyle, PressableProps } from 'react-native';

// Definir las props del componente Button
interface ButtonProps extends PressableProps {
    variant?: 'default' | 'destructive'; // Tipo para variant
    style?: StyleProp<ViewStyle>; // Tipo para style (opcional)
    children: ReactNode; // Tipo para children
}

// Componente Button
export const Button = ({ variant = 'default', style, children, ...props }: ButtonProps) => {
    const variantStyles = {
        default: { backgroundColor: '#3b82f6' }, // bg-blue-500
        destructive: { backgroundColor: '#ef4444' }, // bg-red-500
    };

    return (
        <Pressable
            style={[styles.button, variantStyles[variant], style]}
            {...props}
        >
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    );
};

// Estilos
const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 16, // px-4
        paddingVertical: 8, // py-2
        borderRadius: 6, // rounded-md
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white', // text-white
        fontWeight: '500',
    },
});