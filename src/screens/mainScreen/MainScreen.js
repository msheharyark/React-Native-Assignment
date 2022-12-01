import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  LogBox,
} from 'react-native';
import {color} from '../../components/colors/colors';
import SearchInput from '../../components/input/SearchInput';
import ImageCard from '../../components/cards/ImageCard';
import {getApi} from '../../services/api/ApiRequest';
import EmptyList from './EmptyListView';
import TypeToSearch from './TypeToSearchView';
LogBox.ignoreAllLogs();
let page = 1;

function MainScreen() {
  const [searchingText, setSearchingText] = useState('');
  const [data, setData] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [showResult, setshowResult] = useState(false);
  const [loader, setLoader] = useState(false);
  const loadMore = async () => {
    if (page <= totalPages && searchingText !== '') {
      page += 1;
      let loadMoreRes = await getApi(
        `/search/photos?page=${page}&query=${searchingText}&`,
      );
      const result = data.concat(loadMoreRes.data.results);
      setData(result);
    }
  };
  const searchPics = async () => {
    setLoader(true);
    setData('');
    page = 1;
    let searchRes = await getApi(
      `/search/photos?page=${page}&query=${searchingText}&`,
    );
    setData(searchRes.data.results);
    setTotalPages(searchRes.data.total_pages);
    setshowResult(true);
    setLoader(false);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <SearchInput
        onChangeText={val => {
          setSearchingText(val);
        }}
        value={searchingText}
        callSearch={searchPics}
      />
      {loader ? (
        <ActivityIndicator color={color.redColor} />
      ) : (
        <>
          {!showResult ? (
            <TypeToSearch loader={loader} />
          ) : (
            <View style={styles.flatlistStyle}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                contentContainerStyle={{paddingBottom: 150}}
                renderItem={({item}) => <ImageCard item={item} />}
                keyExtractor={index => index.toString()}
                onEndReached={() => loadMore()}
                onEndReachedThreshold={0.5}
                ListEmptyComponent={<EmptyList />}
                ListFooterComponent={
                  page <= totalPages && (
                    <View style={styles.marginStyle}>
                      <ActivityIndicator color={color.redColor} />
                    </View>
                  )
                }
              />
            </View>
          )}
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: color.whiteColor,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  flatlistStyle: {
    width: '100%',
  },
  marginStyle: {
    marginTop: 30,
  },
});
export default MainScreen;
