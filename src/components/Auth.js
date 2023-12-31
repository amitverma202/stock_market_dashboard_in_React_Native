import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Auth = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigation = useNavigation();

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleAuthenticate = () => {
    const dummyUser = { username: 'user', password: 'password' };

    if (
      (isLogin &&
        username === dummyUser.username &&
        password === dummyUser.password) ||
      (!isLogin && username && password)
    ) {
      onLogin();
      navigation.navigate('Dashboard');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.authContainer}>
        <Text style={styles.title}>STOCK MARKET DASHBOARD</Text>
        <Text style={styles.subtitle}>{isLogin ? 'Login' : 'Sign Up'}</Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleAuthenticate} style={styles.button}>
          <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
        </TouchableOpacity>
        <Text style={styles.toggleText}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <Text style={styles.toggleLink} onPress={handleToggle}>
            {isLogin ? 'Sign up' : 'Login'}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2C3E50',
  },
  authContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#34495E',
  },
  title: {
    fontSize: 24,
    color: '#E74C3C',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#ECF0F1',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 10,
    color: '#ECF0F1',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#27AE60',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ECF0F1',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleText: {
    color: '#ECF0F1',
    marginTop: 16,
    textAlign: 'center',
  },
  toggleLink: {
    color: '#3498DB',
    fontWeight: 'bold',
  },
});

export default Auth;
