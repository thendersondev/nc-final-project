import styles from '../styles/AccountPageStyles';
import { Text, View, Image, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { auth, db, signOut } from '../firebase';
import { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { Provider, Appbar } from 'react-native-paper';
import { collection, getDocs, query, where } from 'firebase/firestore';
import AccountTrades from '../Components/AccountTrades';

export default function Account() {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const [loading, setLoading] = useState(true);
  const [trades, setTrades] = useState([]);

  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert('You have been signed out');
        navigation.navigate('Login');
      })
      .catch((err) => {
        alert(`Oops, something went wrong: ${err}`);
      });
  };

  useEffect(() => {
    setLoading(true);

    const tradesRef = collection(db, 'trades');
    const q = query(tradesRef, where('userUID', '==', auth.currentUser.uid));

    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setTrades((prev) => {
          return [...prev, doc.data()];
        });
      });
    });

    setLoading(true);
    setUsername(auth.currentUser.displayName);
    setAvatar(auth.currentUser.photoURL);
    setLoading(false);
  }, []);

  return (
    <Provider>
      <Appbar.Header style={styles.Appbar}>
        <Appbar.Content title="Account" />
      </Appbar.Header>
      <View style={styles.pageContainer}>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: avatar
                  ? avatar
                  : 'https://pbs.twimg.com/profile_images/786636123317628928/6T0mBdck_400x400.jpg',
              }}
            ></Image>
            <Text style={styles.username}>{username} </Text>
            <TouchableOpacity
              onPress={handleSignOut}
              style={styles.signOutContainer}
            >
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.accountInfo}>
          <View>
            <Text style={styles.accountInfoHeader}>Account Details</Text>
            <View style={styles.accountInfoGrid}>
              <View>
                <Text style={styles.accountInfoHeadings}>
                  Email: {auth.currentUser.email}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.comments}>
            <Text style={styles.accountInfoHeader}>Your listings</Text>
            {!loading && (
              <FlatList
                data={trades}
                renderItem={({ item }) => <AccountTrades item={item} />}
                keyExtractor={(item) => item.title}
              />
            )}
          </View>

          <StatusBar style="auto" />
        </View>
      </View>
    </Provider>
  );
}
