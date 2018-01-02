import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

export default class HomeItems extends Component {
  render() {
    const { itemsData, onPress, style } = this.props;
    let publisherAvatar = itemsData.publisher_avatar
      ? { uri: itemsData.publisher_avatar }
      : require('../../src/resource/img_default_avatar.png');
    let imageH = itemsData.content_type != 5 ? style.width + 50 : style.width;
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={[{ backgroundColor: '#fff' }, style]}
        onPress={this.onPress}
      >
        {itemsData.content_type == 5 && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 50,
              paddingHorizontal: 4,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={{ height: 30, width: 30, borderRadius: 15 }}
                source={publisherAvatar}
                defaultSource={require('../../src/resource/img_default_avatar.png')}
              />
              <Text
                style={{
                  fontSize: 11,
                  color: 'gray',
                  marginLeft: 8,
                  width: style.width * 0.4,
                }}
                numberOfLines={1}
              >
                {itemsData.publisher}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={{ height: 12, width: 12 }}
                source={require('../../src/resource/ic_feed_like.png')}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 11, color: 'gray', marginLeft: 2 }}>
                {itemsData.like_ct}
              </Text>
            </View>
          </View>
        )}
        <Image
          style={{ width: style.width, height: imageH }}
          source={{ uri: itemsData.card_image.split('?')[0] }}
          defaultSource={require('../../src/resource/img_horizontal_default.png')}
        />
        {itemsData.content_type == 5 && (
          <View
            style={{
              width: style.width,
              paddingHorizontal: 4,
              paddingTop: 8,
            }}
          >
            <View
              style={{
                width: style.width - 8,
                justifyContent: 'space-around',
                borderBottomWidth: gScreen.onePix,
                borderColor: '#ccc',
              }}
            >
              <Text style={{ fontSize: 14, color: 'black' }} numberOfLines={1}>
                {itemsData.title}
              </Text>
              {itemsData.description != '' && (
                <Text style={{ color: 'gray', fontSize: 13 }} numberOfLines={2}>
                  {itemsData.description}
                </Text>
              )}
            </View>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}
