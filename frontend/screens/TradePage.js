import { Text, View, FlatList, Button, TextInput } from 'react-native';
import styles from '../styles/TradeStyles';
import { StatusBar } from 'expo-status-bar';
import { TradeGameCard } from '../Components/TradeGameCard';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

export default function TradePage() {
  const mockArray2 = [
    {
      title: 'Pokemon Shining Pearl',
      imgUrl:
        'https://www.box.co.uk//image?id=4737312&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£34.99',
      url: 'https://www.box.co.uk/NINB62.UK.45ST-Pokémon-Shining-Pearl-Nintendo-Switch_3829005.html',
      platform: 'Nintendo Switch',
    },
    {
      title: 'Pokemon Brilliant Diamond',
      imgUrl:
        'https://www.box.co.uk//image?id=4737005&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£42.99',
      url: 'https://www.box.co.uk/NINB61.UK.45ST-Pokémon-Brilliant-Diamond-Nintendo-Sw_3828594.html',
      platform: 'Nintendo Switch',
    },
    {
      title: 'Nintendo Super Smash Bros Ultimate',
      imgUrl:
        'https://www.box.co.uk//image?id=4471738&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£47.94',
      url: 'https://www.box.co.uk/Nintendo-Super-Smash-Bros.-Ultimate_2361155.html',
      platform: 'Nintendo Switch',
    },
    {
      title: 'Animal Crossing New Horizons for',
      imgUrl:
        'https://www.box.co.uk//image?id=4481866&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£39.99',
      url: 'https://www.box.co.uk/Animal-Crossing-New-Horizons-for-Ninten_2832755.html',
      platform: 'Nintendo Switch',
    },
    {
      title: 'Metroid Dread',
      imgUrl:
        'https://www.box.co.uk//image?id=4735455&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£49.99',
      url: 'https://www.box.co.uk/10007300-Metroid-Dread-Nintendo-Switch_3825025.html',
      platform: 'Nintendo Switch',
    },
    {
      title: 'Nintendo Switch RingFit Adventure',
      imgUrl:
        'https://www.box.co.uk//image?id=4363612&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£64.99',
      url: 'https://www.box.co.uk/Nintendo-Switch-RingFit-Adventure_2750121.html',
      platform: 'Nintendo Switch',
    },
    {
      title: 'Mario Kart Live Home Circuit Luigi',
      imgUrl:
        'https://www.box.co.uk//image?id=4509151&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£79.00',
      url: 'https://www.box.co.uk/Mario-Kart-Live-Home-Circuit-Luigi_3191045.html',
      platform: 'Nintendo Switch',
    },
    {
      title: 'Monster Hunter Rise',
      imgUrl:
        'https://www.box.co.uk//image?id=4551269&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£39.99',
      url: 'https://www.box.co.uk/Monster-Hunter-Rise-Nintendo-Switch_3574961.html',
      platform: 'Nintendo Switch',
    },
    {
      title: 'Ubisoft Tom Clancys Rainbow Six Extraction',
      imgUrl:
        'https://www.box.co.uk//image?id=4751112&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£39.99',
      url: "https://www.box.co.uk/300112442-Ubisoft-Tom-Clancy's-Rainbow-Six-Extract_3825032.html",
      platform: 'Xbox SeriesX',
    },
    {
      title: 'Ubisoft Tom Clancys Rainbow Six Extraction Deluxe',
      imgUrl:
        'https://www.box.co.uk//image?id=4751131&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£44.99',
      url: "https://www.box.co.uk/300122235-Ubisoft-Tom-Clancy's-Rainbow-Six-Extract_3825048.html",
      platform: 'Xbox SeriesX',
    },
    {
      title: 'Battlefield 2042',
      imgUrl:
        'https://www.box.co.uk//image?id=4795166&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£59.99',
      url: 'https://www.box.co.uk/5030931123870-Battlefield-2042-Xbox-Series-X_3943674.html',
      platform: 'Xbox SeriesX',
    },
    {
      title: 'Assassins Creed Valhalla',
      imgUrl:
        'https://www.box.co.uk//image?id=4530810&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£50.65',
      url: "https://www.box.co.uk/Assassin's-Creed-Valhalla-Xbox-One_2943941.html",
      platform: 'Xbox SeriesX',
    },
    {
      title: 'Ubisoft Just Dance 2022',
      imgUrl:
        'https://www.box.co.uk//image?id=4751118&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£42.00',
      url: 'https://www.box.co.uk/300121745-Ubisoft-Just-Dance-2022-XBOX_3825044.html',
      platform: 'Xbox SeriesX',
    },
    {
      title: 'Watch Dogs Legion',
      imgUrl:
        'https://www.box.co.uk//image?id=4498289&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£49.00',
      url: 'https://www.box.co.uk/Watch-Dogs-Legion-Xbox-One-Series-S_3007619.html',
      platform: 'Xbox SeriesX',
    },
    {
      title: 'Horizon Forbidden West',
      imgUrl:
        'https://www.box.co.uk//image?id=4783261&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£69.99',
      url: 'https://www.box.co.uk/0711719720690-Horizon-Forbidden-West-PS5_3936742.html',
      platform: 'PS5',
    },
    {
      title: 'Assassins Creed Valhalla',
      imgUrl:
        'https://www.box.co.uk//image?id=4530812&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£51.40',
      url: "https://www.box.co.uk/Assassin's-Creed-Valhalla-PS5_3213274.html",
      platform: 'PS5',
    },
    {
      title: 'Marvels SpiderMan Miles Morales Ultimate Edition',
      imgUrl:
        'https://www.box.co.uk//image?id=4512588&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£62.99',
      url: "https://www.box.co.uk/Marvel's-Spider-Man-Miles-Morales-Ultim_3199773.html",
      platform: 'PS5',
    },
    {
      title: 'Marvels Guardians of the Galaxy',
      imgUrl:
        'https://www.box.co.uk//image?id=4736630&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£59.99',
      url: "https://www.box.co.uk/SQEA63.UK.24ST-Marvel's-Guardians-of-the-Galaxy-PS5_3828511.html",
      platform: 'PS5',
    },
    {
      title: 'Call Of Duty Vanguard',
      imgUrl:
        'https://www.box.co.uk//image?id=4779492&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£69.99',
      url: 'https://www.box.co.uk/5030917295300-Call-Of-Duty-Vanguard-PS5_3934313.html',
      platform: 'PS5',
    },
    {
      title: 'Marvels SpiderMan Miles Morales',
      imgUrl:
        'https://www.box.co.uk//image?id=4512503&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£44.55',
      url: "https://www.box.co.uk/Marvel's-Spider-Man-Miles-Morales-PS5_3199724.html",
      platform: 'PS5',
    },
    {
      title: 'Saints Row Day One Edition',
      imgUrl:
        'https://www.box.co.uk//image?id=4865723&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£59.99',
      url: 'https://www.box.co.uk/DESA49.UK.24DE-Saints-Row-Day-One-Edition-PS5_3943904.html',
      platform: 'PS5',
    },
    {
      title: 'Saints Row Notorious Edition',
      imgUrl:
        'https://www.box.co.uk//image?id=4865622&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£84.99',
      url: 'https://www.box.co.uk/DESA49.UK.24LE-Saints-Row-Notorious-Edition-PS5_4107897.html',
      platform: 'PS5',
    },
    {
      title: 'Ratchet and Clank Rift Apart',
      imgUrl:
        'https://www.box.co.uk//image?id=4729636&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£60.19',
      url: 'https://www.box.co.uk/Ratchet-and-Clank-Rift-Apart-PS5_3607924.html',
      platform: 'PS5',
    },
    {
      title: 'F1 2021',
      imgUrl:
        'https://www.box.co.uk//image?id=4607231&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£34.99',
      url: 'https://www.box.co.uk/F1-2021-PS5_3633683.html',
      platform: 'PS5',
    },
    {
      title: 'Ubisoft Far Cry 6 Standard Edition',
      imgUrl:
        'https://www.box.co.uk//image?id=4755916&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£54.99',
      url: 'https://www.box.co.uk/300117235-Ubisoft-Far-Cry-6-Standard-Edition-PS_3213279.html',
      platform: 'PS5',
    },
    {
      title: 'Watch Dogs Legion',
      imgUrl:
        'https://www.box.co.uk//image?id=4530813&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£55.56',
      url: 'https://www.box.co.uk/Watch-Dogs-Legion-PS5_3213275.html',
      platform: 'PS5',
    },
    {
      title: 'Battlefield 2042',
      imgUrl:
        'https://www.box.co.uk//image?id=4795168&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£59.99',
      url: 'https://www.box.co.uk/5035224123858-Battlefield-2042-PS5_3943670.html',
      platform: 'PS5',
    },
    {
      title: 'Ubisoft Just Dance 2022',
      imgUrl:
        'https://www.box.co.uk//image?id=4751123&quality=90&quality=90&maxwidth=200&maxHeight=140',
      price: '£42.00',
      url: 'https://www.box.co.uk/300121779-Ubisoft-Just-Dance-2022-PS5_3825046.html',
      platform: 'PS5',
    },
  ];

  const [titleText, onChangeTitleText] = React.useState('');
  const [platformText, onChangePlatformText] = React.useState('');
  const [locationText, onChangeLocationText] = React.useState('');
  const [priceText, onChangePriceText] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);

  const onSubmit = (data) => console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Trade games here!</Text>
      (
      <TextInput
        placeholderTextColor={'#3e2465'}
        placeholder="What ya wannae sell, Pal?"
        value={titleText}
        onChangeText={onChangeTitleText}
      />
      ), (
      <TextInput
        placeholderTextColor={'#3e2465'}
        placeholder="What platform es et?"
        value={platformText}
        onChangeText={onChangePlatformText}
      />
      ), (
      <TextInput
        s
        placeholderTextColor={'#3e2465'}
        placeholder="Where are ya?"
        value={locationText}
        onChangeText={onChangeLocationText}
      />
      ,
      <TextInput
        s
        placeholderTextColor={'#3e2465'}
        placeholder="What ya gonnae charge?"
        value={priceText}
        onChangeText={onChangePriceText}
      />
      )
      <Button title="Submit" onPress={console.log('got et')} />
      <FlatList
        data={mockArray2}
        renderItem={(item, index, separators) => TradeGameCard(item)}
        keyExtractor={uuidv4}
      />
      <StatusBar style="auto" />
    </View>
  );
}
