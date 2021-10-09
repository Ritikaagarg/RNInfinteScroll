import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StatusBar, SafeAreaView, LogBox } from "react-native";
import styles from "./styles";
import loader from "./components/loader";
import axiosService from "./utilities/axios-instance";

LogBox.ignoreAllLogs();

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = () => {
    setIsLoading(true);
    const URL = `/api/?page=${currentPage}&results=10`;

    axiosService
      .request({
        url: URL,
        method: 'GET'
      })
      .then(res => {
        //setUsers(res.data.results);
        setUsers([...users, ...res.data.results]);
        setIsLoading(false);
      });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemWrapper}>
        <Image style={styles.itemImage} source={{ uri: item.picture.large }} />
        <View style={styles.contentWrapper}>
          <Text style={styles.txtName}>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
          <Text style={styles.txtEmail}>{item.email}</Text>
        </View>
      </View>
    );
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#000" />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.email}
        ListFooterComponent={loader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
};


export default App;