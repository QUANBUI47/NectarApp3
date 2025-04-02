import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import thư viện icon

export default function SelectLocationScreen() {
  const [zone, setZone] = useState('Banaree');
  const [area, setArea] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Sử dụng biểu tượng ghim bản đồ từ MaterialIcons */}
        <View style={styles.iconPlaceholder}>
          <Icon name="location-pin" size={60} color="#4285F4" /> {/* Màu xanh dương giống trong hình */}
        </View>

        <Text style={styles.title}>Select Your Location</Text>
        <Text style={styles.subtitle}>Switch on your location to stay in tune with what's happening in your area</Text>

        <Text style={styles.label}>Your Zone</Text>
        <Picker
          selectedValue={zone}
          style={styles.picker}
          onValueChange={(itemValue) => setZone(itemValue)}
        >
          <Picker.Item label="Banaree" value="Banaree" />
          <Picker.Item label="Other Zone" value="Other Zone" />
        </Picker>

        <Text style={styles.label}>Your Area</Text>
        <Picker
          selectedValue={area}
          style={styles.picker}
          onValueChange={(itemValue) => setArea(itemValue)}
        >
          <Picker.Item label="Types of your area" value="" />
          <Picker.Item label="Area 1" value="Area 1" />
          <Picker.Item label="Area 2" value="Area 2" />
        </Picker>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  iconPlaceholder: {
    alignSelf: 'center',
    marginVertical: 20,
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
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
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