import Taro, { Component } from '@tarojs/taro'
import { AtList, AtListItem, } from 'taro-ui'
import { View } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '中共大会',
  }

  turnto(path, n) {
    Taro.navigateTo({
      url: path
    })
    switch (n) {
      case 1:
        this.setState({
          color1: '#f00'
        });
        break;
      case 2:
        this.setState({
          color2: '#f00'
        })
        break;
      case 3:
        this.setState({
          color3: '#f00'
        })
        break;
      case 4:
        this.setState({
          color4: '#f00'
        })
        break;
      case 5:
        this.setState({
          color5: '#f00'
        })
        break;
      case 6:
        this.setState({
          color6: '#f00'
        })
        break;
      case 7:
        this.setState({
          color7: '#f00'
        })
        break;
      case 8:
        this.setState({
          color8: '#f00'
        })
        break;
      case 9:
        this.setState({
          color9: '#f00'
        })
        break;
      case 10:
        this.setState({
          color10: '#f00'
        })
        break;
      case 11:
        this.setState({
          color11: '#f00'
        })
        break;
      case 12:
        this.setState({
          color12: '#f00'
        })
        break;
    }
  }

  state = {
    color1: '#888',
    color2: '#888',
    color3: '#888',
    color4: '#888',
    color5: '#888',
    color6: '#888',
    color7: '#888',
    color8: '#888',
    color9: '#888',
    color10: '#888',
    color11: '#888',
    color12: '#888',
  }

  render() {
    return (
      <view className='index'>
        <View> 　　</View>
        <AtList>
          <AtListItem
            title='党的一大'
            note='1921.7.23~1921.7.31'
            arrow='right'
            iconInfo={{
              size: 25,
              color: this.state.color1,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc1/Desc1', 1)}
          />
          <AtListItem
            title='党的二大'
            note='1922'
            arrow='right'
            iconInfo={{
              size: 25,
              color: this.state.color2,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc2/Desc2', 2)}
          />
          <AtListItem
            title='党的三大'
            note='1923'
            arrow='right'
            iconInfo={{
              size: 25,
              color: this.state.color3,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc3/Desc3', 3)}
          />
          <AtListItem
            title='党的四大'
            note='1925'
            arrow='right'
            iconInfo={{
              size: 25,
              color: this.state.color4,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc4/Desc4', 4)}
          />
          {/* <AtListItem
            title='党的五大'
            note='1927'
            arrow='right' iconInfo={{
              size: 25,
              color: this.state.color5,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc5/Desc5', 5)}
          />
          <AtListItem
            title='党的六大'
            note='1928'
            arrow='right' iconInfo={{
              size: 25,
              color: this.state.color6,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc6/Desc6', 6)}
          />
          <AtListItem
            title='党的七大'
            note='1945'
            arrow='right' iconInfo={{
              size: 25,
              color: this.state.color7,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc7/Desc7', 7)}
          />
          <AtListItem
            title='党的八大'
            note='1956'
            arrow='right' iconInfo={{
              size: 25,
              color: this.state.color8,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc8/Desc8', 8)}
          />
          <AtListItem
            title='党的九大'
            note='1964年底到1965年初'
            arrow='right' iconInfo={{
              size: 25,
              color: this.state.color9,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc9/Desc9', 9)}
          />
          <AtListItem
            title='党的十大'
            note='1973'
            arrow='right'
            iconInfo={{
              size: 25,
              color: this.state.color10,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right'
            onClick={this.turnto.bind(this, '../Desc/Desc10/Desc10', 10)}
          />
          <AtListItem
            title='党的十一大'
            note='1977'
            arrow='right'
            iconInfo={{
              size: 25,
              color: this.state.color11,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right' onClick={this.turnto.bind(this, '../Desc/Desc11/Desc11', 11)}
          />
          <AtListItem
            title='党的十二大'
            note='1982'
            arrow='right'
            iconInfo={{
              size: 25,
              color: this.state.color12,
              value: 'check-circle',
            }}
            extraText='详细信息'
            arrow='right' onClick={this.turnto.bind(this, '../Desc/Desc12/Desc12', 12)}
          /> */}
        </AtList>
        <View> 　　</View>
      </view>
    )
  }
}
