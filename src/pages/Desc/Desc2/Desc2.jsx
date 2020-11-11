import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import './Desc2.scss'
import '../Desc.scss'
import place from '../../../pictures/iconphoto/place.png'
import time from '../../../pictures/iconphoto/time.png'
import content from '../../../pictures/iconphoto/content.png'
import sense from '../../../pictures/iconphoto/sense.png'
import One from '../../../components/Number/One/One'
import Two from '../../../components/Number/Two/Two'

export default class Desc2 extends Component {

  config = {
    navigationBarTitleText: '中共二大'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='Desc'>
        <View>　</View>
        <AtCard
          title='时间'
          thumb={time}
        >
          1922年
        </AtCard>
        <View>　</View>
        <AtCard
          title='地点'
          thumb={place}
        >
          <View> 　　上海。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <One></One>
          <View> 　　1922年，中共二大，正确分析了中国的社会性质，中国革命的性质、对象、动力和前途，指出了中国革命要分两步走，在中国近代史上第一次提出了彻底的反帝反封建的民主革命纲领。\n</View>
          <View> 　　\n</View>
          <Two></Two>
          <View> 　　党的最高纲领是实现社会主义、共产主义。\n</View>
          <View> 　　现阶段的革命纲领即最低纲领是统一中国为真正的民主共和国。\n</View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='意义'
          thumb={sense}
        >
          二大为中国各民族人民的革命斗争指明了方向，对中国革命具有重大的深远的意义。
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
