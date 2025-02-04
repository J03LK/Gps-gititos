import React, { ReactNode } from 'react';
import { Text, StyleSheet } from 'react-native';

interface CardTitleProps {
    children: ReactNode;
    style?: object;
}

export const CardTitle = ({ children, style }: CardTitleProps) => {
    return (
        <Text style={[styles.cardTitle, style]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    cardTitle: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
    },
});