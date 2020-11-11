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
import Two from '../../../components/Number/Two/Two'
import Three from '../../../components/Number/Three/Three'
import Num from '../../../components/Number/Num/Num'

export default class Desc3 extends Component {

  config = {
    navigationBarTitleText: '遵义会议'
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
          1935年1月15日到17日
        </AtCard>
        <View>　</View>
        <AtCard
          title='地点'
          thumb={place}
        >
          <View> 　　遵义，简称“遵”，位于贵州省北部，黔川渝三省市结合部中心城市，是国家全域旅游示范区。南临贵阳市，北倚重庆市，西接四川省泸州市。处于成渝—黔中经济区走廊的核心区和主廊道，
            黔渝合作的桥头堡、主阵地和先行区。是西南地区承接南北、连接东西、通江达海的重要交通枢纽。全市辖3个区、9个县、2个县级市，属亚热带季风气候，终年温凉湿润，冬无严寒，夏无酷暑，雨量充沛，日照充足。\n
          </View>
          <View> 　　遵义是首批国家历史文化名城，拥有世界文化遗产海龙屯、世界自然遗产赤水丹霞。享有中国长寿之乡、中国厚朴之乡、中国金银花之乡、中国高品质绿茶产区、中国名茶之乡、中国吉他制造之乡等称号。
            曾获得全国文明城市、国家森林城市、国家卫生城市、双拥模范城市、中国优秀旅游城市、国家园林城市等多项殊荣。同时也是中国三大名酒“茅五剑”之一的茅台酒的故乡。\n
          </View>
          <View> 　　1935年，中国共产党在遵义召开了著名的“遵义会议”，成为了党的生死攸关的转折点，被称为“转折之城，会议之都"。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <One></One>
          <Num num='1'></Num>
          <View> 　　中央政治局委员\n</View>
          <View>秦邦宪（1907年—1946年）又名博古，1926年留学苏联，中共临时中央负责人，长征开始时为中央“三人团”成员。\n</View>
          <View>朱德（1886年—1976年）清末秀才，曾留学德国进修社会学和哲学。中华苏维埃共和国中央革命军事委员会主席、红军总司令兼红一方面军司令。\n</View>
          <View>陈云（1905年—1995年）学徒工出身，全国总工会党团书记，长征开始时为红五军团中央代表，军委纵队政治委员，遵义警备司令部政治委员。\n</View>
          <View>张闻天（1900年—1976年）又名洛甫，先后在莫斯科中山大学、红色教授学院学习、任教。中华苏维埃共和国中央执行委员会人民委员会主席。\n</View>
          <View>毛泽东（1893年—1976年）湖南省立第一师范学院毕业，中共一大代表，中共三届中央局常委，中共中央政治局委员，中华苏维埃共和国中央执行委员会主席。\n</View>
          <View>周恩来（1898年—1976年）曾留学日本、法国、德国、英国等地，中华苏维埃共和国中央革命军事委员会副主席，红军总政治委员兼红一方面军政治委员，长征开始时为中央“三人团”成员。\n</View>
          <Num num='2'></Num>
          <View> 　　中央政治局候补委员\n</View>
          <View>王稼祥（1906年—1974年）中华苏维埃共和国中央革命军事委员会副主席，红军总政治部主任。\n</View>
          <View>邓发（1906年—1946年）国家政治保卫局局长。\n</View>
          <View>刘少奇（1898年—1969年）中华全国总工会委员长，长征开始时为红八军团中央代表，黎平会议后任红五军团中央代表。\n</View>
          <View>何克全（1906年—1955年）又名凯丰，共青团中央书记、长征开始时为红九军团中央代表。\n</View>
          <Num num='3'></Num>
          <View> 　　参加会议的其他人员\n</View>
          <View>刘伯承（1892年—1986年）红军总参谋长、军委纵队司令员，遵义警备司令部司令员。\n</View>
          <View>李富春（1900—1975年）中央候补委员、红军总政治部副主任、代主任。\n</View>
          <View>林彪（1907年—1971年）红一军团军团长。\n</View>
          <View>聂荣臻（1899年—1992年）红一军团政治委员。\n</View>
          <View>彭德怀（1898年—1974年）中央候补委员、红三军团军团长。\n</View>
          <View>杨尚昆（1907年—1998年）中央候补委员、红三军团政治委员。\n</View>
          <View>李卓然（1899年—1989年）红五军团政治委员。\n</View>
          <View> 　　\n</View>
          <Two></Two>
          <View> 　　会议起因\n</View>
          <View> 　　湘江战役后，中央红军仍按原定计划，继续向湘西前进。这时，蒋介石已判明红军的行动企图，在红军前进的道路上部署了重兵。在此危急关头，中华苏维埃共和国临时中央政府主席毛泽东根据当时军事态势，
            力主放弃原定北去湘西会合红2、红6军团的计划，改向国民党统治力量薄弱的贵州前进，以摆脱敌人，争取主动。1934年12月12日，中共中央负责人在湖南通道举行紧急会议。张闻天、王稼祥、周恩来等多数同志赞成毛泽东的主张，
            但李德等人拒不接受，坚持到湘西去。15日，中央红军占领贵州黎平。\n</View>
          <View> 　　18日，中共中央政治局在黎平召开会议。经过激烈争论，会议接受毛泽东的意见，通过了《中央政治局关于战略方针之决定》，决定在川黔边创建新的根据地。黎平会议肯定了毛泽东同志的正确意见，
  改变了中央红军的前进方向，使红军避免了可能覆灭的危险。黎平会议后，中央红军分两路向黔北挺进，连克锦屏等7座县城，于12月底进抵乌江南岸的猴场。\n</View>
          <View> 　　12月31日晚至次日凌晨，中共中央在猴场召开政治局会议，作出《关于渡江后新的行动方针的决定》，提出首先在以遵义为中心的黔北地区，然后向川南创建川黔边新的根据地的战略任务。
            会议还决定，“关于作战方针，以及作战时间与地点的选择，军委必须在政治局会议上做报告”，以加强政治局对军委的领导。这个决定，实际上剥夺了博古、李德的军事指挥权。
            1935年1月初，中央红军分别从回龙场江界河、茶山关渡过乌江，1月7日晨，红军先头部队进占黔北重镇遵义。\n</View>
          <View> 　　截至此时，王明“左”倾错误统治全党已达4年之久，给党和红军造成了极其严重的损失。还在中央苏区时，许多干部就对中央主要领导人在军事指挥上的错误产生怀疑和不满，
              一些军团指挥员在作战电报、报告中提出批评意见，有些同志甚至同李德发生激烈的争论。毛泽东等也多次提出自己的正确主张，但都没有被接受。\n</View>
          <View> 　　长征开始后，随着红军作战迭次失利，特别是湘江战役的惨重损失，使这种不满情绪达到顶点。党和红军的许多领导人和广大干部战士，
            从革命战争正反两方面的经验教训中认识到，第五次反“围剿”的失败和红军战略转移中遭受的挫折，是排斥了以毛泽东为代表的正确领导、
            贯彻执行错误的军事指导方针的结果，强烈要求改换领导，改变军事路线。毛泽东在行军途中对王稼祥、张闻天及一些红军干部反复进行深入细致的工作，
              向他们分析第五次反“围剿”和长征开始以来中央在军事指挥上的错误，得到他们的支持。周恩来、朱德与博古、李德的分歧越来越大，也支持毛泽东同志的正确意见。\n</View>
          <View> 　　这时，中央大部分领导人对于中央军事指挥的错误问题，基本上取得一致意见。在这种形势下，召开一次政治局会议，总结经验教训，
              纠正领导上的错误的条件已经成熟。同时，中央红军攻占遵义，把敌人的几十万追兵抛在乌江以东、以南地区，取得了进行短期休整的机会，也为中央召开遵义会议提供了必要条件。\n</View>
          <View> 　　\n</View>
          <Three></Three>
          <View> 　　会议内容\n</View>
          <View> 　　《中共中央关于反对敌人五次“围剿”的总结的决议》即遵义会议决议，后来在长征途中的扎西会议上通过。\n</View>
          <View> 　　陈云手稿记载的遵义会议作出的四条决定：（1）毛泽东同志选为常委；（2）指定洛甫同志起草决议，委托常委审查后，发到支部中去讨论；（3）常委中再进行分工；
                （4）取消“三人团”，仍由最高军事首长朱德、周恩来为军事指挥者，而周恩来同志是党内委托的对于指挥军事上下最后决心的负责者。（5）肯定了毛泽东同志的正确主张。\n</View>
          <View> 　　《决议》主要内容\n</View>
          <View> 　　这《决议》否定了博古的报告，认为基本上是错误的。《决议》列举大量事实，说明红军在主观上、客观上均具备粉碎第五次“围剿”的条件，明确指出反“围剿”失败的主要原因
            是“军事上的单纯防御路线”。在敌人采用“持久战与堡垒主义的战略战术”的情况下，我们的战略战术应该是决战防御(即攻势防御)，集中优势兵力选择敌人的弱点，在运动中有把握地去消
            灭敌人的一部或大部，以各个击破敌人，以粉碎敌人。然而。我们却以专守防御代替了决战防御，以阵地战、堡垒战代替了运动战，并以所谓‘短促突击’的战术原则来支持这种单纯防御的战略路线”。
            以分散兵力的作战方针代替集中兵力的作战方针，违背了我军战略上持久，战术上速决的基本原则。放弃诱敌深入的方针，而搞“御敌于国门之外”，结果造成严重损失，使红军不得不退出中央苏区根据地。\n</View>
          <View> 　　《决议》指出，政治上，“左”倾机会主义者提出“中间派是最危险的敌人”，没有利用敌人内部的第一矛盾冲突，拒绝援助福建事变，丧失了打破“围剿”的良机。\n</View>
          <View> 　　《决议》指出，在战略转变和实行突围问题上，“左”倾机会主义者同样犯了原则错误。“在苏区内同敌人拼命抗战、大量消耗红军的有生力量。退出苏区变成了一种恐慌失措的逃跑的与搬家式的行动。
            在干部中群众中关于这种战略转变没有解释，组织庞大的后方机关使行军作战受到困难，使所有的部队变成掩护队。\n</View>
          <View> 　　此时，国民党“追剿”军进至全州、零陵、道县、东安地区；桂军5个师开至灌阳、兴安一线。为掩护中央、军委纵队及后续军团渡过湘江；\n</View>
          <View> 　　《决议》指出，在领导作风上，“华夫同志恶劣的领导方式”，在军委内造成了不正常现象，博古同志不但不批评纠正、反而支持。他们的错误是“严重的政治错误”。\n</View>
          <View> 　　《决议》批判了“左”倾机会主义的军事路线，重新肯定了以毛泽东同志为代表的正确军事路线。要求红军迅速完成从阵地战到运动战的转变，灵活机动地运用战略战术，为创建新的根据地而斗争。</View>
          <View> 　　遵义政治局扩大会议一致决定改变黎平会议以黔北为中心来创造苏区根据地的决议，改为在成都之西南或西北建立苏区根据地。\n</View>
          <View> 　　遵义会议指出军事上领导错误是李德、博古、周恩来3人，而李德、博古负主要责任。</View>
        </AtCard >
        <View>　</View>
        <AtCard
          title='意义'
          thumb={sense}
        >
          <View>遵义会议结束了王明“左”倾教条主义路线在党中央的统治，确立了以毛泽东为代表的新的中央正确领导，把党的路线转到了马克思列宁主义的轨道上来。</View>
          <View>遵义会议，在中国革命的危急关头，挽救了党，挽救了红军，挽救了中国革命，是我党历史上一个生死攸关的转折点。遵义会议是中国共产党第一次独
          立自主地运用马列主义基本原理解决自己的路线、方针和政策的会议。它是中国共产党从幼年的党走上成熟的党的标志。</View>
        </AtCard>
        <View>　</View>
      </View >
    )
  }
}