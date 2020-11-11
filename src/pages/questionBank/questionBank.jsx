import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import './questionBank.scss'

export default class Questionbank extends Component {

  config = {
    navigationBarTitleText: '题库答题'
  }


  state = {
    show: 0,
    start: 0.8
  }

  start() {
    this.setState({
      start: 1
    })
    Taro.navigateTo({
      url: '../questionStart/questionStart'
    })
  }

  componentWillMount() {
    let change = setInterval(() => {
      let shownum = this.state.show;
      this.setState({
        show: shownum + 0.1
      })
      if (this.state.show > 1) {
        clearInterval(change);
      }
    }, 150);
  }

  componentDidMount() {
    //setTimeout(()=>{Taro.navigateTo({url:'../question/question1/question1'})},1000);
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  show() {
    console.log(this.e);
  }

  render() {
    const s1 = {
      opacity: this.state.show,
      backgroundImage:"url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605091961082&di=8578d578c1ee1345fdae775e180c4de0&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2Fd1a20cf431adcbefe4e89d94a7af2edda2cc9f40.jpg')"
    }
    const s2 = {
      opacity: this.state.start
    };
    return (
      <View className='questionBank' style={s1}>
        <View style='height:40vh;' ></View>
        <Button style={s2} onClick={this.start.bind(this)} >开始答题</Button>
      </View>
    )
  }
}
