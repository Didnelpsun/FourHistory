import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import './Desc3.scss'
import '../Desc.scss'
import place from '../../../pictures/iconphoto/place.png'
import time from '../../../pictures/iconphoto/time.png'
import content from '../../../pictures/iconphoto/content.png'
import sense from '../../../pictures/iconphoto/sense.png'
import One from '../../../components/Number/One/One'

export default class Desc3 extends Component {

  config = {
    navigationBarTitleText: '中共三大'
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
          1923年
        </AtCard>
        <View>　</View>
        <AtCard
          title='地点'
          thumb={place}
        >
          <View> 　　广州。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <One></One>
          <View> 　　1923年，中国共产党第三次全国代表大会在广州召开。\n</View>
          <View> 　　1923年，党的三大召开，决定共产党员以个人身份加入国民党，实现国共合作，同时保持共产党在政治、思想、组织上的独立性。\n</View>
        </AtCard >
        <View>　</View>
        <AtCard
          title='意义'
          thumb={sense}
        >
          <View> 　　1924年，国民党一大召开，确立联俄、联共、扶助农工的三大政策，形成了新三民主义，标志着第一次国共合作正式形成。</View>
        </AtCard>
        <View>　</View>
      </View >
    )
  }
}
