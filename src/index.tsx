import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  useColorScheme,
  Platform,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Image
} from 'react-native';
import logo from '../assests/logo.png';

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  const handleLogin = () => {
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.form}>
            <Image
              source={logo}
              style={styles.logo}
            />
            <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={isDarkMode ? '#aaa' : '#555'}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  form: {
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    elevation: 2,
    alignItems: 'center', 
  },
  logo: {
    width: 100, 
    height: 100,
    marginBottom: 16, 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    height: 44,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '100%', 
  },
});

export default App;