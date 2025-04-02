import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const [username, setUsername] = useState('Afsar Hossen Shuvo');
  const [email, setEmail] = useState('imshuvo97@gmail.com');
  const [password, setPassword] = useState('••••••••');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Placeholder for carrot icon */}
      <View style={styles.iconPlaceholder}>
        <Text style={styles.iconText}>🥕</Text>
      </View>

      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Enter your credentials to continue</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text style={styles.terms}>
        <Text>By continuing you agree to our</Text>
        <Text style={styles.link}>Terms of Service</Text> 
        <Text>and</Text>
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  iconPlaceholder: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  iconText: {
    fontSize: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  terms: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  link: {
    color: '#28a745',
  },
  button: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});