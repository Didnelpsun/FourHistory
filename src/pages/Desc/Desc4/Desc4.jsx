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
    navigationBarTitleText: '四渡赤水'
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
          1935年1月29日到3月21日
        </AtCard>
        <View>　</View>
        <AtCard
          title='地点'
          thumb={place}
        >
          <View> 　　赤水河，即赤水，为中国长江上游支流，因河流含沙量高、水色赤黄而得名。古有赤虺河、安乐水、大涉水等名称，在云、贵、川三省接壤地区。发源于云南省镇雄县场坝镇豆戛寨山箐，
            上游称鱼洞河，东流至川、滇、黔三省交界处的梯子岩，水量增大，经贵州省毕节市的七星关区、金沙县与四川省叙永县、古蔺县边界，进入仁怀市、习水县、赤水市，至四川省合江县入长江。全长444.5公里，流域面积2.04万平方公里。\n
          </View>
          <View> 　　赤水河四分之三流域在大山中，所以赤水河是中国唯一一条没有被污染的长江支流。河水清澈透底，两岸陡峭、多险滩急流。水能蕴藏量127万千瓦，但其干流未建大坝。白杨坪以下能长年和季节性通航5－165吨船级。\n
          </View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='内容'
          thumb={content}
        >
          <One></One>
          <View> 　　一渡赤水\n</View>
          <View> 　　遵义会议后，中革军委向各军团首长下达了《渡江作战计划》，拟定：中央红军各部进至赤水、土城附近地域后，分3路纵队由宜（宾）泸（州）间的蓝田坝、
            大渡口、江安一线北渡长江。\n</View>
          <View> 　　1935年1月上旬，中央红军长征到达贵州遵义地区。15~17日，中共中央政治局在遵义召开扩大会议，纠正了王明“左”倾冒险主义在军事上的错误，在实际上确立了毛泽东在红军和中共中央的领导地位。
            这时，蒋介石为阻止中央红军北进四川同红四方面军会台或东入湖南同红2、红6军团会台，围歼中央红军于乌江西北的川黔边境地区，调集其嫡系薛岳兵团和黔军全部，
            滇军主力和四川、湖南、广西的军队各一部，向遵义地区进逼。1月中旬，薛岳兵团的2个纵队8个师尾追红军进入贵州，集结于贵阳、息烽、清镇等地，先头已进至乌江南岸；
            黔军以2个师担任黔北各县城守备，以3个师分向湄潭及遵义以南的刀靶水，滥板凳进攻；川军14个旅分路向川南集中，其中2个旅已进至松坎以北的川黔边境；湘军4个师位于
              湘川黔边境的酉阳至铜仁一线构筑碉堡，防堵红军东进；滇军3个旅正由云南宣威向贵州毕节开进；桂军2个师已进至贵州独山，都匀一线。\n</View>
          <View> 　　中共中央和中央革命军事委员会根据上述情况，决定中央红军由遵义地区北上，在四川省泸州以西的蓝田坝、大渡口、江安一线北渡长江，进至川西北建立新的苏区。
            1月19日起，红1、红3、红5、红9军团分3路先后从遵义、桐梓、松坎地区出发，向土城、赤水方向前进。黔军随即占领遵义、湄潭；川军以一部兵力防守宜宾、泸州，
            以8个旅分路向松坎、温水、赤水、续永等地推进。24日，红1军团击溃国民党军黔军的抵抗，攻占土城。28日，红3军团、红5军团、军委纵队、干部团、红1军团一部在土城、青岗坡地区对尾追的川军2个旅发起猛攻，
            予以重创。此时，川军后续部队4个旅迅速增援。毛泽东等遂决定，立即撤出战斗，西渡赤水河，向古蔺以南地区前进，寻机北渡长江。\n</View>
          <View> 　　1月29日，红军分3路从猿猴（今元厚）场、土城南北地区西渡赤水河，向四川省古茼、叔永地区前进。川军立即以12个旅分路追截，并沿长江两岸布防；薛岳兵团和黔军从贵州分路向川南追击；
            滇军3个旅向贵州省毕节和云南省镇雄急进，企图截击红军。2月2日，右纵队红1军团第2师进攻叙永不克，继续西进，在毛坝、大坝等地遭川军截击。7日，毛泽东等鉴于川军已加强了长江沿岸防御，
            并以优势兵力分路向红军进逼，决定暂缓执行北渡长江计划，改取以川滇黔边境为发展地区，争取由黔酉向东的有利发展。接着，红军印向川滇边的扎西（今威信）地区集中。\n</View>
          <View> 　　红军进入川滇边境后，蒋介石重新调整部署，将湘军改为第1路军，何键为总司令，以其主力在湘西“围剿”红2、红6军团；薛岳兵团和滇黔两省军队组成第2路军，龙云为总司令，薛岳为前线总指挥，辖4个纵队：
            以薛岳兵团的8个师组成第1、第2纵队，滇军4个旅为第3纵队，黔军5个师为第4纵队，在川军及第1路军一部的协同下，企图围歼中央红军于长江以南，横江以东、叔永以西地区。\n</View>
          <View> 　　\n</View>
          <Two></Two>
          <View> 　　二渡赤水\n</View>
          <View> 　　红军进至扎西地区，敌仍判断红军我将北渡长江，除向宜宾段各主要渡口增兵外，又调滇军和川军潘文华部向扎西地区逼近，企图对红军分进合击。\n</View>
          <View> 　　2月9日，中央红军在扎西地区集结完毕。这时，第2路军各纵队分向扎西迫近。为了迅速脱离川、滇军的侧击，毛泽东等决定东渡赤水河，
            向国民党军兵力薄弱的黔北地区发动进攻。11日，中央红军从扎西挥师东进，于18~21日在太平渡、二郎滩渡过赤水河，向桐梓地区急进；同时以红5军团的1个团向温水方向开进，以吸引追击之川军。\n</View>
          <View> 　　红军二渡赤水，回师黔北，完全出乎蒋介石的意外。川军3个旅慌忙由扎西附近向东追击，黔军3个团从遵义向娄山关、桐梓增援，第1纵队2个师由黔西、贵阳地区向遵义疾进，企图阻止并围歼红军于娄山关或遵义以北地区。\n</View>
          <View> 　　24日，红1军团先头部队第1团进占桐梓，桐梓守军退守娄山关。25日，红5、红9军团在恫梓以北地区阻滞川军，红1、红3军团进攻娄山关及其以南地区的黔军，相机夺取遵义。当晚，红3军团攻占娄山关，并在红1军团的密切配合下连续击溃黔军的多次反扑。
            接着，红1、红3军团乘胜向遵义方向追击。27日，在遵义以北的董占寺、飞来石地区击溃黔军3个团的阻击。28日晨再占遵义城，并控制了城西南的老鸦山、红花岗一线高地，这时，赶来增援的国民党军第上纵队第59师进至遵义以南的忠庄铺地区，第93师已进至新站，正向忠庄铺开进。
            毛泽东等当即决定.乘援军孤军冒进之机，集中兵力，求歼其于遵义城以南地区。为此，红军以~部兵力在老鸦山、红花岗一线阻击第59师的进攻，主力从左翼向忠庄铺突击，直插第1纵队的指挥部。第1纵队指挥部经红军突然打击，丢下部队，慌忙夺路南逃，红军乘胜发起攻击，
            迅速将其2个师大部歼灭于忠庄铺、遵义西南及乌江北岸地区。遵义战役从24~28日，历时5天，红军连下桐梓、娄山关、遵义，共击溃和歼灭国民党军2个师叉8个团，俘敌约3000人。这是中央红军长征后最大的一次胜利。在此次战役中，红3军团参谋长邓萍牺牲。\n</View>
          <View> 　　\n</View>
          <Three></Three>
          <View> 　　三渡、四渡赤水\n</View>
          <View> 　　红军三渡赤水，由遵义再进川南遵义战役后，蒋介石由汉口飞抵重庆坐镇指挥，并改以堡垒主义和重点进攻相结合的战法，企图南北夹击，围歼中央红军于遵义、鸭溪地区。其部署：川军3个旅由桐梓向遵义地区进攻；第9军2个师由重庆向松坎、新站地区推进，支援川军进攻遵义；
            第2纵队主力3个师进至仁怀、鲁班场地区，向遵义及其西北地区进攻第3纵队4个旅进至大定（今大方）、黔西地区防堵；第4纵队一部集结于金沙、土城等地，阻止红军向西发展；第1纵队4个师位于乌江南岸，策应其他纵队作战。此外，第1路军第53师由镇远向石阡推进，湘军3个师沿乌江东岸筑堡，阻止红军东进。\n</View>
          <View> 　　3月5日以后，中央红军以红9军团在桐梓、遵义地区吸引川军向东，主力由遵义地区西进白腊坎、长干山（今长岗）寻机作战未果。15日，红军主力进攻鲁班场之第2纵队，因其3个师密集一起，攻击未能奏效，而援军第1纵队已进至枫香坝地区。红军遂转兵北进，于16~17日在茅台及其附近西渡赤水河，
            向四川南部的古蔺、叙永方向前进。19日，红军攻占镇龙山，接着进至大村、铁厂、两河口地区。红军再次进入川南，蒋介石判断中央红军又要北渡长江，急令所有部队向川南进击，企图围歼红军于古蔺地区。\n</View>
          <View> 　　在国民党军重兵再次向川南集中的情况下，毛泽东等决定，乘敌不备折兵向东，在赤水河东岸寻机歼敌。为迷惑国民党军，红1军团1个团大张旗豉地向古蔺前进，诱敌向西；主力则由镇龙山以东地区，突然折向东北，于3月21日晚分别经二郎滩、九溪口、太平渡东渡赤水河，从敌重兵集团右翼分路向南急进。
            26日进至遵义、仁怀大道北侧干溪、马鬃岭地医。27日，红g军团由马鬃蛉地区向长干山方向佯攻，引国民党军北向；主力继续南进，于28日突破鸭溪至白腊坎间国民党军封锁线，进至乌江北岸的沙土、安底等地。31日经江口、大塘、梯子岩等处南渡乌江。4月2日，中央红军以一部兵力佯攻息烽，主力进至狗场、扎佐地域，前锋逼近贵阳。
            这时，国民党军在贵阳及其周围地区只有第99师4个团。正在贵阳督战的蒋介石十分惊恐，一面急令各纵队火速增援贵阳，一面令守城部队死守飞机场，并准备轿子、马匹、向导，准备随时逃跑。4月4日，红9军团在打鼓新场以东老木孔地域击溃黔军5个团，歼其2000余人。至此，中央红军巧妙地跳出了国民党军的合围圈，将蒋介石的几十万军队甩在乌江以北。
            四渡赤水之后，中央红军主力趁滇军东调增援贵阳之际，乘虚进军云南，并于5月9日，在皎平渡、洪门渡渡过金沙江。与此同时，活动在乌江以北地区的红9军团，也从会泽以西的树节、盐井坪渡过金沙江。\n</View>
          <View> 　　四渡赤水河，是中央红军创建川黔边根据地、川滇黔边根据地中在赤水河流域进行的运动战战役。都是毛泽东在遵义会议进入党中央领导核心后帮助周恩来、朱德指挥和在苟坝会议进入党中央最高军事领导、指挥核心后亲自指挥的，一渡、二渡赤水河的过程是毛泽东构思把“滇军调出来”战略计划的基础；苟坝会议成立毛泽东、周恩来、王稼祥三人团，
            代表政治局全权指挥军事，为毛泽东实施把“滇军调出来”战略计划提供了坚强的组织保证。\n</View>
          <Four></Four>
          <View> 　　战役结果\n</View>
          <View> 　　四渡赤水之战，毛泽东等根据情况的变化，指挥中央红军巧妙地穿插于国民党军重兵集团之间，灵活地变换作战方向，调动和迷惑敌人，创造战机，在运动中歼灭了大量国民党军，牢牢地掌握了战场的主动权，取得了战略转移中有决定意义的胜利。这是中国工农红军战争史上以少胜多变被动为主动的光辉战例。\n</View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='原因'
          thumb={reason}
        >
          <Num num='1'></Num>
          <View> 　　政治原因\n</View>
          <View> 　　从1934年12月18日黎平会议到1935年3月11日新的三人小组成立，近三个月的时间里，朱德身为总司令、中革军委主席，既负责作战计划又负责下达作战命令和战斗部署，而且有权制定行动方针供周恩来审批，毛泽东仅协助周恩来。二渡之后，成立了三人军事小组，毛泽东参与领导了三渡与四渡。\n</View>
          <View> 　　由于朱德早年曾在云贵川一带作战，对这一带的地形与民情十分熟悉，对赢得四渡赤水行动的胜利也是重要的，敌人的电报中曾经分析道：“红军除朱、罗（炳辉）在滇军做过事外，余多不熟悉地理民情”。\n</View>
          <View> 　　此外，情报工作的成功也是此次作战取胜的重要原因。土城战役，由于不明敌情，对敌人的兵力判断有误，战役结果很不理想。四渡赤水前，四方面军将廖承志带来的密电码破译法送交给中央红军军委二局电报队，可以及时截获敌人的电报并且破译，能够准确掌握敌军调动的情况，从而做到避实就虚，
            赢得战场取胜的主动权，达致军事行动获得圆满成功。\n</View>
          <Num num='2'></Num>
          <View> 　　军事原因\n</View>
          <View> 　　四渡赤水战役，红军首先能够从敌我双方的实际情况出发，不断调整行动方向。遵义会议前，敌我力量对比极为悬殊，为保存有生力量，毛泽东主席等人决定放弃去湘鄂川黔边境与红2、6军团会合的计划，改向敌人力量薄弱的贵州进军，避免了中央红军遭致覆灭的危险。
            遵义会议后，毛泽东等又鉴于红军处于遭受敌人四面围堵的不利态势和黔北地区回旋地域有限等情况，毅然放弃建立川黔根据地的打算，决定率领中央红军跳出敌人重围而北渡长江，以开创川西或川北根据地。但是，红军一渡赤水后，由于敌情急剧变化和张国焘不执行党中央的命令，北渡长江已不可能，又果断率师向扎西集结，
            在川黔滇边境寻求新的机动，直至二渡、三渡、四渡赤水，最后巧渡金沙江，终于实现了北渡长江的计划。\n</View>
          <View> 　　其次，红军充分发挥了主观能动性，争取和掌握了战场主动权。四渡赤水战役，从总体看是敌强我弱，红军在各路强大敌军围追堵截的情况下，常常处于被动地位。但是，由于毛泽东等以高超的指挥艺术，巧妙地隐蔽战略意图，有计划地调动敌人，造成了红军许多局部的优势和主动，
            从而使整个形势向着有利于我、不利于敌的方向变化，终于打破了敌人妄图围歼红军的战略计划。最后，红军在运动战中，正确地处理“打”与“走”的关系。中央红军在战略转移初期，由于王明“左”倾教条主义的领导者消极避战，实行逃跑主义，只走不打，始终摆脱不掉敌人的围堵。\n</View>
          <View> 　　遵义会议后，在毛泽东等直接指挥下，红军避敌之长，击敌之短，一再造成敌人的错觉，积极创造战机，大量地歼灭了敌人的有生力量。如果没有向扎西的“走”和回师东进二渡赤水，就不可能大量调动敌人和造成有利战机，取得遵义地区歼敌的胜利。
              如果没有以后的三渡、四渡赤水的“走”，就不能加深敌之错觉，牵着他的鼻子来回打转，以至将其拖疲、拖垮，使红军乘隙实现渡江北上的战略目的。 \n</View>
        </AtCard>
        <View>　</View>
        <AtCard
          title='意义'
          thumb={sense}
        >
          <Num num='1'></Num>
          <View> 　　四渡赤水战役历时三个多月。这次战役，红军实行高度灵活机动的运动战方针，纵横驰骋于川、黔、滇边境广大地区，迂回穿插于敌人数十万重兵之间，积极寻求战机，有效地歼灭敌人。从而摆脱了敌人的围追堵截，粉碎了敌人妄图围歼红军于川、黔、滇边境的计划，使中央红军在长征的危急关头，
            从被动走向主动，从失败走向胜利。\n</View>
          <Num num='2'></Num>
          <View> 　　四渡赤水战役，是毛泽东根据情况的变化，吸取前几次战斗的教训,指挥中央红军巧妙地穿插于国民党军重兵集团之间，灵活地变换作战方向，为红军赢得了时机，创造战机，在运动中歼灭了大量国民党军，牢牢地掌握战场的主动权，取得了战略转移中具有决定意义的胜利，
            这是中国工农红军战争史上以少胜多变被动为主动的光辉战例\n</View>
          <Num num='3'></Num>
          <View> 　　彻底粉碎了蒋介石企图围歼红军于川黔滇边境的狂妄计划，取得了战略转移中具有决定意义的胜利。\n</View>
        </AtCard>
        <View>　</View>
      </View>
    )
  }
}