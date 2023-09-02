import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import venueService from '../../services/VenueService';

const VenueScreen = ({navigation}) => {
  const [venues, setVenues] = useState(data);
  const getVenues = async () => {
    await venueService.getAll().then(res => {
      if (res.IsError) return;

      // console.log(res.result.data);
      // setVenues(res.result.data);
    });
  };

  useEffect(() => {
    getVenues();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        padding: 8,
      }}>
      <FlatList
        data={venues}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('VenueDetail', {venue: item})}
            style={{
              backgroundColor: '#fff',
              marginVertical: 8,
              marginHorizontal: 8,
              padding: 8,
              marginBottom: 10,
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              alignItems: 'center',
              borderWidth: 1,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                margin: 8,
                color: '#000',
                alignSelf: 'flex-start',
                padding: 8,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#fff',
                borderBottomWidth: 0,
              }}>
              {item.name}
            </Text>
            <Image
              style={{
                width: '100%',
                height: 300,
                borderRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
              source={{
                uri: item.images[0].url,
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                margin: 8,
                color: '#00539a',
                alignSelf: 'flex-end',
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: '#fff',
                padding: 8,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
              Detaylı Gör
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default VenueScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
  },
});

export const data = [
  {
    id: 1,
    name: 'HARBİYE MUHSİN ERTUĞRUL SAHNESİ',
    seatCapacity: 598,
    phoneNumber: '(0212) 455 39 00',
    address: {
      id: 1,
      name: 'HARBİYE MUHSİN ERTUĞRUL SAHNESİ ADRESİ',
      longitude: 28.98883383,
      latitude: 41.04666599,
      openAddress: 'Harbiye Mh., Darülbedayi Cd. No:3, 34367',
      districtName: 'SISLI',
      cityName: 'Istanbul',
    },
    images: [
      {
        id: 1,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2Fmuhsinertugrulsahnesi2-262.jpg?alt=media&token=a74e5f64-db3f-4f3f-8b8a-c31a9e6d7498',
        contentType: 'image/jpeg',
      },
      {
        id: 2,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FMuhsin-Ertugrul-Sahnesi-Slide-2-262.jpg?alt=media&token=cfbc78a1-fc9e-4178-9799-b7a81f88eae3',
        contentType: 'image/jpeg',
      },
    ],
  },
  {
    id: 2,
    name: 'FATİH REŞAT NURİ SAHNESİ',
    seatCapacity: 336,
    phoneNumber: '(0212) 455 39 00',
    address: {
      id: 2,
      name: 'FATİH REŞAT NURİ SAHNESİ ADRESİ',
      longitude: 28.95613386516767,
      latitude: 41.01600133893208,
      openAddress: 'Atatürk Bulvarı Cemal Yener Tosyalı Cad.No:2-36 Unkapanı ',
      districtName: 'FATIH',
      cityName: 'Istanbul',
    },
    images: [
      {
        id: 3,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2Ffatih2-1-796.jpg?alt=media&token=3d765b33-57ff-4f89-9319-8b1788f93ed6',
        contentType: 'image/jpeg',
      },
      {
        id: 4,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FFatih-Resat-Nuri-Sahnesi-Slide1-796.jpg?alt=media&token=7fd9cc25-1322-41e4-90d7-2b253d46c30e',
        contentType: 'image/jpeg',
      },
      {
        id: 5,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FFatih-Resat-Nuri-Sahnesi-Slide2-796.jpg?alt=media&token=07872186-1612-4ae6-8af3-b9de92777f05',
        contentType: 'image/jpeg',
      },
      {
        id: 6,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FFatih-Resat-Nuri-Sahnesi-Slide4%20%281%29-796.jpg?alt=media&token=af127e22-fdf4-4404-ba21-1e64f6a28422',
        contentType: 'image/jpeg',
      },
      {
        id: 7,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FFatih-Resat-Nuri-Sahnesi-Slide4-796.jpg?alt=media&token=6a5da34b-a901-4da8-b1b4-a98c2b8c9df4',
        contentType: 'image/jpeg',
      },
    ],
  },
  {
    id: 3,
    name: 'KAĞITHANE SADABAD SAHNESİ',
    seatCapacity: 601,
    phoneNumber: '(0212) 455 39 00',
    address: {
      id: 3,
      name: 'KAĞITHANE SADABAD ADRESİ',
      longitude: 28.97169135,
      latitude: 41.07985904,
      openAddress:
        'Merkez Mahallesi, Hasbahçe Cd. Kağıthane Belediyesi Kültür Merkezi No:1, 34406 ',
      districtName: 'KAGITHANE',
      cityName: 'Istanbul',
    },
    images: [
      {
        id: 8,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FKagithane-Sadabad-Sahnesi-114.jpg?alt=media&token=ef2b0ee1-9624-42fc-a169-36efe411e5be',
        contentType: 'image/jpeg',
      },
      {
        id: 9,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FKagithane-Sadabad-Sahnesi2-114.jpg?alt=media&token=f6082e46-3c1d-4bdf-a22d-2b53518cd740',
        contentType: 'image/jpeg',
      },
      {
        id: 10,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FKagithane-Sadabad-Sahnesi3-114.jpg?alt=media&token=d751e20d-6a42-434f-84f4-c8de8484fe08',
        contentType: 'image/jpeg',
      },
      {
        id: 11,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FKagithane-Sadabad-Sahnesi4%20%281%29-114.jpg?alt=media&token=0abcb07a-0611-4609-8899-2849fbd01578',
        contentType: 'image/jpeg',
      },
    ],
  },
  {
    id: 4,
    name: 'KAĞITHANE KÜÇÜK KEMAL ÇOCUK TİYATROSU SAHNESİ',
    seatCapacity: 143,
    phoneNumber: '(0212) 455 39 00',
    address: {
      id: 4,
      name: 'KAĞITHANE KÜÇÜK KEMAL ÇOCUK TİYATROSU SAHNESİ ADRESİ',
      longitude: 28.97169269,
      latitude: 41.07980044,
      openAddress:
        'Merkez Mahallesi, Hasbahçe Cd. Kağıthane Belediyesi Kültür Merkezi No:1, 34406',
      districtName: 'KAGITHANE',
      cityName: 'Istanbul',
    },
    images: [
      {
        id: 12,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2Fkagithanekemal2-347.jpg?alt=media&token=613662af-900f-4930-b857-5ba03571695b',
        contentType: 'image/jpeg',
      },
      {
        id: 13,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FKagithane-Kucuk-Kemal-Sahnesi-347.jpg?alt=media&token=81feb3e7-3ebf-4d7d-86e8-e516d96e9672',
        contentType: 'image/jpeg',
      },
      {
        id: 14,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FKagithane-Kucuk-Kemal-Sahnesi-1-347.jpg?alt=media&token=48ea766e-2130-4f60-9386-a8b22d573da6',
        contentType: 'image/jpeg',
      },
      {
        id: 15,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FKagithane-Kucuk-Kemal-Sahnesi-3-347.jpg?alt=media&token=59475944-2c88-4084-a1fc-ac6f1082f40d',
        contentType: 'image/jpeg',
      },
    ],
  },
  {
    id: 5,
    name: 'GAZİOSMANPAŞA SAHNESİ',
    seatCapacity: 227,
    phoneNumber: '(0212) 455 39 00',
    address: {
      id: 5,
      name: 'GAZİOSMANPAŞA SAHNESİ ADRESİ',
      longitude: 28.91598068,
      latitude: 41.0575686,
      openAddress: 'Merkez Mh., Ordu Cad. Gaziosmanpaşa Sahnesi, 34245',
      districtName: 'GAZIOSMANPASA',
      cityName: 'Istanbul',
    },
    images: [
      {
        id: 16,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FGaziosmanpasa-Sahnesi-375.jpg?alt=media&token=1887300b-ff76-491e-9bca-6f14230213df',
        contentType: 'image/jpeg',
      },
      {
        id: 17,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FGaziosmanpasa-Sahnesi-2-375.jpg?alt=media&token=9879e949-851b-4b8e-be44-e3dc12c1e705',
        contentType: 'image/jpeg',
      },
      {
        id: 18,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FGaziosmanpasa-Sahnesi-3-375.jpg?alt=media&token=3b05b5ff-ed01-4ed1-9097-6eb8aac176cb',
        contentType: 'image/jpeg',
      },
      {
        id: 19,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2Fgop11-375.jpg?alt=media&token=36fc9919-4844-42fb-9f67-01efa9455c3e',
        contentType: 'image/jpeg',
      },
      {
        id: 20,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2Fgop21-375.jpg?alt=media&token=267d28b4-00c8-4238-9d95-09f3bcfbeb1f',
        contentType: 'image/jpeg',
      },
    ],
  },
  {
    id: 6,
    name: 'GAZİOSMANPAŞA FERİH EGEMEN ÇOCUK TİYATROSU SAHNESİ',
    seatCapacity: 260,
    phoneNumber: '(0212) 455 39 00',
    address: {
      id: 6,
      name: 'GAZİOSMANPAŞA FERİH EGEMEN ÇOCUK TİYATROSU SAHNESİ ADRESİ',
      longitude: 28.91598068,
      latitude: 41.0575686,
      openAddress: 'Merkez Mh., Ordu Cad. Gaziosmanpaşa Sahnesi, 34245',
      districtName: 'GAZIOSMANPASA',
      cityName: 'Istanbul',
    },
    images: [
      {
        id: 21,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FGaziosmanpasa-Ferih-Egemen-Sahnesi-2-697.jpg?alt=media&token=e0406f1f-9a05-49c0-96c6-82b9001818c2',
        contentType: 'image/jpeg',
      },
      {
        id: 22,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FGaziosmanpasa-Ferih-Egemen-Sahnesi-3-697.jpg?alt=media&token=e6df9ae8-ce2b-4f3f-bb87-5ee6b2b326d2',
        contentType: 'image/jpeg',
      },
      {
        id: 23,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FGaziosmanpasa-Ferih-Egemen-Sahnesi-4-697.jpg?alt=media&token=a6160d26-bbe8-4486-9fa2-e0dc82ef6dca',
        contentType: 'image/jpeg',
      },
      {
        id: 24,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FGaziosmanpasa-Ferih-Egemen-Sahnesi-5-697.jpg?alt=media&token=2c1d2297-9dc0-4a2a-8dac-f264ad4579ec',
        contentType: 'image/jpeg',
      },
      {
        id: 25,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FGaziosmanpasa-Ferih-Egemen-Sahnesi-6-697.jpg?alt=media&token=b489fb69-7638-448c-8b3f-8ab66a2530b5',
        contentType: 'image/jpeg',
      },
      {
        id: 26,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2Fgop2-697.jpg?alt=media&token=fa8377d2-ff55-4004-ad02-1bd9b205fc4d',
        contentType: 'image/jpeg',
      },
    ],
  },
  {
    id: 7,
    name: 'KADIKÖY HALDUN TANER SAHNESİ',
    seatCapacity: 286,
    phoneNumber: '(0212) 455 39 00',
    address: {
      id: 7,
      name: 'KADIKÖY HALDUN TANER SAHNESİ ADRESİ',
      longitude: 29.02336442,
      latitude: 40.99169713,
      openAddress: 'Caferağa Mahallesi, Rıhtım Cd., 34710',
      districtName: 'KADIKÖY',
      cityName: 'Istanbul',
    },
    images: [
      {
        id: 27,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2Fkadikoy1-117.jpg?alt=media&token=f90e94bc-cd22-4f16-93e3-68593b74caa0',
        contentType: 'image/jpeg',
      },
      {
        id: 28,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2Fkadikoy2-117.jpg?alt=media&token=3145939b-7b78-4314-95b9-cbfd0ef95611',
        contentType: 'image/jpeg',
      },
      {
        id: 29,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FKadikoy-Hldun-Taner-Sahnesi2-117.jpg?alt=media&token=edff59cb-97bd-42dc-b5bb-ac2297157fb1',
        contentType: 'image/jpeg',
      },
      {
        id: 30,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FKadikoy-Hldun-Taner-Sahnesi3-117.jpg?alt=media&token=b21b0c12-81fe-422a-b02b-d39f870e05a5',
        contentType: 'image/jpeg',
      },
      {
        id: 31,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FKadikoy-Hldun-Taner-Sahnesi4-117.jpg?alt=media&token=137a5444-c880-4dba-addb-6d9b9ed1446d',
        contentType: 'image/jpeg',
      },
    ],
  },
  {
    id: 8,
    name: 'ÜMRANİYE SAHNESİ',
    seatCapacity: 404,
    phoneNumber: '(0212) 455 39 00',
    address: {
      id: 8,
      name: 'ÜMRANİYE SAHNESİ ADRESİ',
      longitude: 29.10513512,
      latitude: 41.02549373,
      openAddress:
        'Atatürk Mah. Alemdağ Cad.Ümraniye/İstanbul (Haldun Alagaş Spor Kompleksi )',
      districtName: 'ÜMRANIYE',
      cityName: 'Istanbul',
    },
    images: [
      {
        id: 33,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2Fumraniye-Sahnesi2-578.jpg?alt=media&token=4b16c363-e229-42fe-ab5c-6df9aebe4470',
        contentType: 'image/jpeg',
      },
      {
        id: 34,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2Fumraniye-Sahnesi3-578.jpg?alt=media&token=529f5410-d975-4adf-bee6-843ade1149e2',
        contentType: 'image/jpeg',
      },
      {
        id: 32,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2Fumraniye-Sahnesi-578.jpg?alt=media&token=24d7392f-0be1-44a0-8601-0be58a5f9afa',
        contentType: 'image/jpeg',
      },
    ],
  },
  {
    id: 9,
    name: 'ÜSKÜDAR MUSAHİPZADE CELÃL SAHNESİ',
    seatCapacity: 341,
    phoneNumber: '(0212) 455 39 00',
    address: {
      id: 9,
      name: 'ÜSKÜDAR MUSAHİPZADE CELÃL SAHNESİ ADRESİ',
      longitude: 29.01293868,
      latitude: 41.01947992,
      openAddress: 'Halk Cad.Kefçedede Mh.Doğancılar No:74 ',
      districtName: 'ÜSKÜDAR',
      cityName: 'Istanbul',
    },
    images: [
      {
        id: 35,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2Fuskudar-Musahipzade-Celal-Sahnesi1-461.jpg?alt=media&token=201752ff-a11f-445c-98ec-714524ddc8da',
        contentType: 'image/jpeg',
      },
      {
        id: 36,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2Fuskudar-Musahipzade-Celal-Sahnesi2-461.jpg?alt=media&token=91df7b94-85ce-4696-bf5d-779922a68318',
        contentType: 'image/jpeg',
      },
      {
        id: 37,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2Fuskudar-Musahipzade-Celal-Sahnesi3-461.jpg?alt=media&token=d8d676d9-ecfd-42e4-a569-a9e6e43a3cc6',
        contentType: 'image/jpeg',
      },
      {
        id: 38,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2Fuskudar-Musahipzade-Celal-Sahnesi4-461.jpg?alt=media&token=25f3de1e-9ac8-44c0-bab9-faeed0601db4',
        contentType: 'image/jpeg',
      },
    ],
  },
  {
    id: 10,
    name: 'ÜSKÜDAR KEREM YILMAZER SAHNESİ',
    seatCapacity: 214,
    phoneNumber: '(0212) 455 39 00',
    address: {
      id: 10,
      name: 'ÜSKÜDAR KEREM YILMAZER SAHNESİ ADRESİ',
      longitude: 29.0237700736034,
      latitude: 41.016925670582424,
      openAddress: 'Zeynep Kamil Mahallesi, Dr. Fahri Atabey Cd. No:79, 34664',
      districtName: 'ÜSKÜDAR',
      cityName: 'Istanbul',
    },
    images: [
      {
        id: 39,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2Fuskudar-Kerem-Yilmazer-Sahnesi1-312.jpg?alt=media&token=38268de2-4e65-41df-a149-4f9f9bb3e17b',
        contentType: 'image/jpeg',
      },
      {
        id: 40,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2Fuskudar-Kerem-Yilmazer-Sahnesi2-312.jpg?alt=media&token=8d3ed94f-b7da-44f6-9b66-c77a7e356d2e',
        contentType: 'image/jpeg',
      },
      {
        id: 41,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2Fuskudar-Kerem-Yilmazer-Sahnesi3-312.jpg?alt=media&token=2030393a-e5d1-424d-bde5-d8c1a773a02d',
        contentType: 'image/jpeg',
      },
      {
        id: 42,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2Fuskudar-Kerem-Yilmazer-Sahnesi4-312.jpg?alt=media&token=9f98a352-77b1-4349-b74f-294688f0cd33',
        contentType: 'image/jpeg',
      },
    ],
  },
  {
    id: 11,
    name: 'HARBİYE CEMİL TOPUZLU AÇIKHAVA TİYATROSU',
    seatCapacity: 4532,
    phoneNumber: '(0212) 455 39 00',
    address: {
      id: 11,
      name: 'HARBİYE CEMİL TOPUZLU AÇIKHAVA TİYATROSU ADRESİ',
      longitude: 28.98990287,
      latitude: 41.04634447,
      openAddress: 'Harbiye Mahallesi, Taşkışla Cad, 34367 ',
      districtName: 'SISLI',
      cityName: 'Istanbul',
    },
    images: [
      {
        id: 43,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FAcikhava-ic-776.jpg?alt=media&token=416dfa32-cd1b-4bdf-8a42-8f4c56b2ddac',
        contentType: 'image/jpeg',
      },
    ],
  },
  {
    id: 12,
    name: 'SULTANGAZİ HOCA AHMET YESEVİ SAHNESİ',
    seatCapacity: 629,
    phoneNumber: '(0212) 455 39 00',
    address: {
      id: 12,
      name: 'SULTANGAZİ HOCA AHMET YESEVİ SAHNESİ ADRESİ',
      longitude: 28.8765777,
      latitude: 41.09774468,
      openAddress: 'Esentepe Mahallesi, Hoca Ahmet Yesevi Blv No:38, 34265 ',
      districtName: 'SULTANGAZI',
      cityName: 'Istanbul',
    },
    images: [
      {
        id: 44,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FWhatsApp-Image-2018-12-17-at-13-661.jpeg?alt=media&token=9a0478d1-31b1-43db-879d-20b74bf0d27c',
        contentType: 'image/jpeg',
      },
      {
        id: 45,
        url: 'https://firebasestorage.googleapis.com/v0/b/archive-ed.appspot.com/o/activity-connect%2FWhatsApp-Image-2018-12-17-at-13-1-661.jpeg?alt=media&token=c627728a-c9d6-457c-befa-ddf6b0dcbbbb',
        contentType: 'image/jpeg',
      },
    ],
  },
];
