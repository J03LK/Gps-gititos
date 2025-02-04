import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface CardHeaderProps {
    children: ReactNode;
    style?: object;
}

export const CardHeader = ({ children, style }: CardHeaderProps) => {
    return (
        <View style={[styles.cardHeader, style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    cardHeader: {
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
        padding: 16,
    },
});