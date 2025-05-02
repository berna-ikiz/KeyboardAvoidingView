import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const HomeScreen = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = () => {
    Alert.alert("Logging in with:", `${username} ${password}`);
  };

  return (
    <View>
      <KeyboardAwareScrollView>
        <Text style={styles.title}>Welcome</Text>
        <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} secureTextEntry/>
        <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry/>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#445d7a",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  title:{
    fontSize: 32,
    fontWeight:"bold",
    marginBottom:24,
    textAlign:"center"
  },
  input:{

  }
})

export default HomeScreen