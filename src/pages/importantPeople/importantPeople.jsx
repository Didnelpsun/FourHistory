import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import './importantPeople.scss'
import People from '../../components/People/People'

export default class Importantpeople extends Component {

  config = {
    navigationBarTitleText: '人物大事记'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='importantPeople'>
        <People
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605087224816&di=bab2cc6284da0e12a2e432b06f24f406&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20111024%2FImg323217628.jpg'
          name='毛泽东'
          page='../peopleInformation/MaoZeDong/MaoZeDong'
        />
        <People
          path='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2801619574,2805911496&fm=26&gp=0.jpg'
          name='周恩来'
          page='../peopleInformation/ZhouEnLai/ZhouEnLai'
        />
        <People
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605087122033&di=55dff5b3e7148ee1b829447d5a4104dd&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20161204%2FImg474898408.jpg'
          name='彭德怀'
          page='../peopleInformation/PengDeHuai/PengDeHuai'
        />
        <People
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605087159856&di=cf7f171e4820c5927a0bac9400b97e47&imgtype=0&src=http%3A%2F%2Fenping.66dd.xin%2Fupload_files%2Fother%2F613_20180620040641_myt4i.jpg'
          name='朱德'
          page='../peopleInformation/ZhuDe/ZhuDe'
        />
        <People
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605087294697&di=5c5826f2f04c254c7247907c913eda42&imgtype=0&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2099958311%2C478797841%26fm%3D214%26gp%3D0.jpg'
          name='王若飞'
          page='../peopleInformation/WangRuoFei/WangRuoFei'
        />
        <People
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605087327097&di=db32624f26a0907f8995f0fb57256c9c&imgtype=0&src=http%3A%2F%2Fy0.ifengimg.com%2F958dcda298b573f7%2F2013%2F0113%2Frdn_50f21fc89c87a.jpg'
          name='博古'
          page='../peopleInformation/BoGu/BoGu'
        />
        <People
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605087422807&di=1cf931da51a64e74e39bd77196e10e9d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F962bd40735fae6cd40d4008d05b30f2443a70ffd.jpg'
          name='刘伯承'
          page='../peopleInformation/LiuBoCheng/LiuBoCheng'
        />
        <People
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605087500027&di=c9b0471ac3ab439275ddbd74a9fdec8b&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20111121%2FImg326329327.jpg'
          name='刘少奇'
          page='../peopleInformation/LiuShaoQi/LiuShaoQi'
        />
        <People
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605087523508&di=16c3948dd6935be34fd1be3954d9f86c&imgtype=0&src=http%3A%2F%2Fi.ce.cn%2Fce%2Fxwzx%2Fgnsz%2Fgdxw%2F201910%2F11%2FW020191011367172394182.jpg'
          name='张闻天'
          page='../peopleInformation/ZhangWenTian/ZhangWenTian'
        />
        <People
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605087558600&di=90f076521173df7fbac78660d397ae79&imgtype=0&src=http%3A%2F%2Fwww.people.com.cn%2Fmediafile%2Fpic%2F20141127%2F75%2F10352381580997291711.jpg'
          name='贺子珍'
          page='../peopleInformation/HeZiZhen/HeZiZhen'
        />
        <People
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605087622775&di=0208e3fe684c82acfce908c5378f1246&imgtype=0&src=http%3A%2F%2Fimg.ifeng.com%2Fres%2F200808%2F0805_428762.jpg'
          name='叶剑英'
          page='../peopleInformation/YeJianYing/YeJianYing'
        />
        <People
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605087649611&di=ac61dc347a8f3f89225612c28d131973&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D1045890018%2C3222130790%26fm%3D214%26gp%3D0.jpg'
          name='王稼祥'
          page='../peopleInformation/WangJiaXiang/WangJiaXiang'
        />
      </View>
    )
  }
}
