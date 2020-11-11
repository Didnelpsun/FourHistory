import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import './Desc4.scss'
import '../Desc.scss'
import place from '../../../pictures/iconphoto/place.png'
import time from '../../../pictures/iconphoto/time.png'
import content from '../../../pictures/iconphoto/content.png'
import reason from '../../../pictures/iconphoto/reason.png'
import sense from '../../../pictures/iconphoto/sense.png'
import One from '../../../components/Number/One/One'
import Two from '../../../components/Number/Two/Two'
import Three from '../../../components/Number/Three/Three'
import Four from '../../../components/Number/Four/Four'
import Num from '../../../components/Number/Num/Num'

export default class Desc4 extends Component {

  config = {
    navigationBarTitleText: '中共四大'
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
          1925年1月11日至22日
        </AtCard>
        <View>　</View>
        <AtCard
          title='地点'
          thumb={place}
        >
          <View>    上海。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <One></One>
          <View> 　　1925年四大召开，提出了无产阶级在民主革命中的领导权问题和工农联盟问题。\n</View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='意义与不足'
          thumb={sense}
        >
          <Num num='1'></Num>
          <View> 　　虽然提出了领导权的问题，但对于如何争取领导权，缺乏具体明确的方针，只讲对群众运动的领导权，而完全忽视了对政权和武装力量的领导权。\n</View>
          <Num num='2'></Num>
          <View> 　　提出了农民是革命同盟军的问题，但没有提出土地革命这一解决农民问题的根本思想。\n</View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}
