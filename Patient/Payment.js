import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pay from './Pay'
export default function Payment() {
  return (
   
    <View style={styles.container}>
      <StripeProvider publishableKey="pk_test_51JLlrQSCrqIF8lRiuhSYY7MVJSgCX6UwcuCBpj1uXQCqGncGi4KA9Zbsa9cj42TtuaNd8fN8QMu0YPXEjT6veHiY00RqWsKaoE">
        <Payment />
      </StripeProvider>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });