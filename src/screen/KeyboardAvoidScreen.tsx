import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  KeyboardEvent
} from "react-native";
import React, { useEffect, useState } from "react";

export const useKeyboard = () => {
    const [keyboardHeight, setKeyboardHeight] = useState(0);
  
    useEffect(() => {
      function onKeyboardDidShow(e: KeyboardEvent) { 
        setKeyboardHeight(e.endCoordinates.height);
      }
  
      function onKeyboardDidHide() {
        setKeyboardHeight(0);
      }
  
      const showSubscription = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
      const hideSubscription = Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }, []);
  
    return keyboardHeight;
  };
  
const KeyboardAvoidScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [textVisible, setTextVisible] = useState(false);
  const keyboardHeight = useKeyboard();

  const handleLogin = () => {
    if (textVisible) {
      setPassword("");
      setUsername("");
      setTextVisible(false);
    } else {
      if (username && password) {
        setTextVisible(true);
      } else {
        Alert.alert("please fill all field");
      }
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.contentContainer} behavior="height">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center",paddingBottom: keyboardHeight }}
          keyboardShouldPersistTaps="handled"

        >
          <Text style={styles.title}>Welcome</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            {!textVisible && <Text style={styles.buttonText}>Log In</Text>}
            {textVisible && <Text style={styles.buttonText}>Log Out</Text>}
          </TouchableOpacity>
          {textVisible && (
            <View style={styles.informationContent}>
              <Text style={styles.LoginTitle}>Login Information</Text>
              <Text style={styles.text}>Username: {username}</Text>
              <Text style={styles.text}>Password: {password}</Text>
              <Text style={styles.LoginTitle}>Click log out button !</Text>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFF0",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#513aac",
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: "center",
    margin: "3%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#beb1ff",
  },
  input: {
    backgroundColor: "white",
    padding: "3%",
    margin: "3%",
    borderWidth: 1,
    borderColor: "#1b0461",
    fontSize: 20,
    borderRadius: 20,
  },
  text: {
    color: "#9998A5",
    fontSize: 16,
  },
  LoginTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#9998A5",
  },
  informationContent: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default KeyboardAvoidScreen;
