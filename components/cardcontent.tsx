import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface CardContentProps {
    children: ReactNode;
    style?: object;
}

export const CardContent = ({ children, style }: CardContentProps) => {
    return (
        <View style={[styles.cardContent, style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    cardContent: {
        padding: 16,
    },
});