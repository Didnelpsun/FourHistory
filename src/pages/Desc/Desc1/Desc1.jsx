import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import './Desc1.scss'
import '../Desc.scss'
import place from '../../../pictures/iconphoto/place.png'
import time from '../../../pictures/iconphoto/time.png'
import sense from '../../../pictures/iconphoto/sense.png'
import content from '../../../pictures/iconphoto/content.png'
import One from '../../../components/Number/One/One'
import Two from '../../../components/Number/Two/Two'
import Three from '../../../components/Number/Three/Three'

export default class Desc1 extends Component {


  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config = {
    navigationBarTitleText: '中共一大'
  }

  render() {
    return (
      <View className='Desc'>
        <View>　</View>
        <AtCard
          title='时间'
          thumb={time}
        >
          1921年7月23日到31日
        </AtCard>
        <View>　</View>
        <AtCard
          title='地点'
          thumb={place}
        >
          <View> 　　上海\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <One></One>
          <View> 　　出席大会的有各地共产主义小组(当时，在法国的共产主义小组还没有和国内取得联系，所以没有派代表出席)。\n</View>
          <View> 　　推举的代表共12人：湖南小组毛泽东、何叔衡，湖北小组董必武、陈潭秋，上海小组李达、李汉俊，北京小组刘仁静、张国焘，济南小组王尽美、邓恩铭，广州小组陈公博，日本东京小组周佛海。\n</View>
          <View> 　　参加大会的还有陈独秀指派的代表包惠僧。\n</View>
          <View> 　　\n</View>
          <Two></Two>
          <View> 　　共产国际代表马林出席了会议。会议在召开过程中曾遭到帝国主义密探的干扰，最后一天转移到浙江嘉兴南湖的游船上举行。\n</View>
          <View> 　　\n</View>
          <Three></Three>
          <View> 　　大会讨论了政治形势、党的基本任务、党的组织原则和组织机构等问题，通过了《中国共产党的第一个纲领》和《中国共产党的第一个决议》。\n</View>
          <View> 　　\n</View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='意义'
          thumb={sense}
        >
          第一次全国代表大会的召开，宣告了中国共产党的成立。
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
