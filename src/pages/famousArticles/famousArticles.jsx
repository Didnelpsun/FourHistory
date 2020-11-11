import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './famousArticles.scss'
import Article from '../../components/Article/Article'

export default class Famousarticles extends Component {

  config = {
    navigationBarTitleText: '著名文章'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='famousArticles'>
        <Article 
          path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=a15086bc31adcbef01347900949449e0/aec379310a55b3199a363d0d43a98226cefc17fe.jpg'
          name='毛泽东'
          time='1934年12月'
          title='七律·长征'
          content='红军不怕远征难，万水千山只等闲。五岭逶迤腾细浪，乌蒙磅礴走泥丸。金沙水拍云崖暖，大渡桥横铁索寒。更喜岷山千里雪，三军过后尽开颜。'
          page='../Articles/Article1/Article'
        />
        <Article 
          page='../Articles/Article2/Article'
          path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=a15086bc31adcbef01347900949449e0/aec379310a55b3199a363d0d43a98226cefc17fe.jpg'
          name='毛泽东'
          time='1934-1935'
          title='十六字令三首'
          content='【其一】山，快马加鞭未下鞍。惊回首，离天三尺三。【其二】山，倒海翻江卷巨澜。奔腾急，万马战犹酣。【其三】山，刺破青天锷未残。天欲堕，赖以拄其间。'
        />
        <Article 
          path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=a15086bc31adcbef01347900949449e0/aec379310a55b3199a363d0d43a98226cefc17fe.jpg'
          name='毛泽东'
          page='../Articles/Article3/Article'
          time='1935'
          title='忆秦娥·娄山关'
          content='西风烈，长空雁叫霜晨月。霜晨月，马蹄声碎，喇叭声咽。雄关漫道真如铁，而今迈步从头越。从头越，苍山如海，残阳如血。'
        />
        <Article 
          path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=a15086bc31adcbef01347900949449e0/aec379310a55b3199a363d0d43a98226cefc17fe.jpg'
          name='毛泽东'
          page='../Articles/Article4/Article'
          time='1935年冬'
          title='念奴娇·昆仑'
          content='横空出世，莽昆仑，阅尽人间春色。飞起玉龙三百万，搅得周天寒彻。夏日消溶，江河横溢，人或为鱼鳖。千秋功罪，谁人曾与评说？而今我谓昆仑：不要这高，不要这多雪。安得倚天抽宝剑，把汝裁为三截？一截遗欧，一截赠美，一截还东国。太平世界，环球同此凉热。'
        />
        <Article 
          path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=a15086bc31adcbef01347900949449e0/aec379310a55b3199a363d0d43a98226cefc17fe.jpg'
          name='毛泽东'
          page='../Articles/Article5/Article'
          time='1935'
          title='清平乐·六盘山'
          content='天高云淡，望断南飞雁。不到长城非好汉，屈指行程二万。六盘山上高峰，红旗漫卷西风。今日长缨在手，何时缚住苍龙？'
        />
        <Article 
          path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=a15086bc31adcbef01347900949449e0/aec379310a55b3199a363d0d43a98226cefc17fe.jpg'
          name='毛泽东'
          page='../Articles/Article6/Article'
          time='1935.10.21'
          title='六言诗·给彭德怀同志'
          content='山高路远坑深，大军纵横驰奔。谁敢横刀立马？唯我彭大将军。 '
        />
        <Article 
          path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=a15086bc31adcbef01347900949449e0/aec379310a55b3199a363d0d43a98226cefc17fe.jpg'
          name='毛泽东'
          page='../Articles/Article7/Article'
          time='1936'
          title='沁园春·雪'
          content='北国风光，千里冰封，万里雪飘。望长城内外，惟余莽莽；大河上下，顿失滔滔。山舞银蛇，原驰蜡象，欲与天公试比高。须晴日，看红装素裹，分外妖娆。江山如此多娇，引无数英雄竞折腰。惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。一代天骄，成吉思汗，只识弯弓射大雕。俱往矣，数风流人物，还看今朝。'
        />
        <Article 
          path='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574332434064&di=3bb46c472ea4a913138ea541d7282503&imgtype=0&src=http%3A%2F%2Fimg.11665.com%2Fimg04_p%2Fi4%2FT1EdT6XmVgXXXM8XM9_102310.jpg'
          name='人教社小学语文室'
          page='../Articles/Article8/Article'
          time=''
          title='吃水不忘挖井人'
          content='瑞金城外有个村子叫沙洲坝。毛主席在江西领导革命的时候，在那儿住过。
          一天，毛主席看见一个老乡挑着浑浊的水往家里走，就问：“老乡，这水挑来做什么用呀？”老乡回答说：“吃呀！”毛主席疑惑地问：“水这么脏，能吃吗？”老乡苦笑着说：“没法子，再脏的水也得吃呀！”毛主席又问：“是从哪里挑的？”老乡回答：“从塘里挑的。”毛主席请老乡带他去看看。走了一阵，只见一个不大的水塘，杂草丛生，池水污浊。全村人洗衣、洗菜、吃水全在这里。毛主席关切地问：“能不能到别处挑水吃？”老乡摇摇头，说：“我们沙洲坝就是缺水呀！挑担水要走好几里路。”毛主席皱了皱眉头，若有所思地走了。
          第二天，毛主席找来村里人一起商量挖水井的事。大家一起勘察水源，选择井位。当井位确定后，毛主席挽起衣袖，卷起裤腿，带头挖了起来。于是，大伙挖的挖，铲的铲，干得热火朝天。
          在挖井的日子里，毛主席和临时中央政府的其他领导人，一有空就到工地参加劳动。经过十几天的奋战，水井挖成了，沙洲坝的人民终于喝上了清澈甘甜的井水。群众激动地说：“我们从来没有喝过这么甜的水，毛主席真是我们的大恩人哪！”
          解放以后，沙洲坝人民在井旁立了一块石碑，上面刻着：“吃水不忘挖井人，时刻想念毛主席！”'
        />
        <Article 
          path='https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=c287d3353badcbef01347900949449e0/aec379310a55b319f9e1688449a98226cffc1722.jpg'
          name='王愿坚'
          time=''
          page='../Articles/Article9/Article'
          title='草地夜行'
          content='茫茫的草海，一眼望不到边。大队人马已经过去了，留下一条踩得稀烂的路，一直伸向远方。　 
          干粮早就吃光了，皮带也煮着吃了。我空着肚子，拖着两条僵硬的腿，一步一挨地向前走着。背上的枪支和子弹就像一座山似的，压得我喘不过气来。唉！就是在这稀泥地上躺一会儿也好啊！ 
          迎面走来一个同志，冲着我大声嚷：“小鬼，你这算什么行军啊？照这样，三年也走不到陕北！” 
          他这样小看人，真把我气坏了。我粗声粗气地回答：“别把人看扁了！从大别山走到这儿，少说也走了万儿八千里路。瞧！枪不是还在我的肩膀上吗？” 
          他看了看我，笑了起来，就和我并肩朝前走。他比我高两头，宽宽的肩膀，魁梧的身材，只是脸又黄又瘦，两只眼睛深深地陷了下去。 
          “小同志，你的老家在哪儿？”他问我。 
          “金寨斑竹园！听说过吗？” 
          “啊，斑竹园！有名的金寨大暴动，就是从你们那儿搞起来的。我在那儿卖过帽子。” 
          一点不错，暴动前，我们村里来过几个卖帽子的人。我记得清清楚楚，爸爸还给我买了一顶。回家来掀开帽里子一看，里面有张小纸条，写着“打倒土豪劣绅”。真想不到，当年卖帽子的同志竟在这里碰上了。 
          我立刻对他产生了敬佩的感情，就亲热地问他：“同志，你在哪部分工作？我怎么从来没见过你呀？”“我吗？在军部。现在出来找你们这些掉队的小鬼。”他一边说，一边摘下我的枪，连空干粮袋也摘了去。
          “咱们得快点走呀！你看，太阳快落了。天黑以前咱们必须赶上部队。这草地到处是深潭，掉下去可就不能再革命了。” 
          听了他的话，我快走几步，紧紧地跟着他，但是不一会儿，我又落了一大段。 
          他焦急地看看天，又看看我，说：“来吧，我背你走！”我说什么也不同意。这一下他可火了：“别磨蹭了！你想叫咱们俩都丧命吗？”他不容分说，背起我就往前走。 
          天边的最后一丝光亮也被黑暗吞没了。满天堆起了乌云，不一会儿下起大雨来。我一再请求他放下我，怎么说他也不肯，仍旧一步一滑地背着我向前走。 
          突然，他的身子猛地往下一沉。“小鬼，快离开我！”他急忙说，“我掉进泥潭里了。” 
          我心里一惊，不知怎么办好，只觉得自己也随着他往下陷。这时候，他用力把我往上一顶，一下子把我甩在一边，大声说：“快离开我，咱们两个不能都牺牲！……要……要记住革命！……” 
          我使劲伸手去拉他，可是什么也没有抓住。他陷下去了已经没顶了。 
          我的心疼得像刀绞一样，眼泪不住地往下流。多么坚强的同志！为了我这样的小鬼，为了革命，他被这可恶的草地夺去了生命！ 
          风，呼呼地刮着。雨，哗哗地下着。黑暗笼罩着大地。“要记住革命！”——我想起他牺牲前说的话。对，要记住革命！我抬起头来，透过无边的风雨，透过无边的黑暗，我仿佛看见了一条光明大路，这条大路一直通向遥远的陕北。我鼓起勇气，迈开大步，向着部队前进的方向走去。'
        />
        <Article 
          path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=9b811ab80bf431adbcd2443f730dcb92/f636afc379310a559a2f21deb04543a982261094.jpg'
          name='李本深'
          time=''
          page='../Articles/Article10/Article'
          title='丰碑'
          content='红军队伍在冰天雪地里艰难地前进。严寒把云中山冻成了一个大冰坨。狂风呼啸，大雪纷飞，似乎要吞掉这支装备很差的队伍。
          　　将军早把他的马让给了重伤员。他率领战士们向前挺进，在冰雪中为后续部队开辟一条通道。等待着他们的是恶劣的环境和残酷的战斗，可能吃不上饭，可能睡雪窝，可能一天要走一百几十里路，可能遭到敌人的突然袭击。这支队伍能不能经受住这样严峻的考验呢？将军思索着。
          　　队伍忽然放慢了速度，前面有许多人围在一起，不知在干什么。
          　　将军边走边喊：“不要停下来，快速前进！”
          　　“前面有人冻死了。”警卫员跑回来告诉他。
          　　将军愣了一下，什么话也没说，快步朝前走去。
          　　一个冻僵的老战士，倚靠光秃秃的树干坐着。他一动不动，好似一尊塑 像，身上落满了雪，无法辨认他的面目，但可以看出，他的神态十分镇定，十分安祥：右手的中指和食指间还夹着半截纸卷的旱烟，火已被雪打灭；左手微微向前伸着，好像在向战友借火。单薄破旧的衣服紧紧地贴在他的身上。
          　　将军的脸色顿时严峻起来，嘴角边的肌肉抽动着。忽然他转过脸向身边的人吼道：“把军需处长给我叫来！为什么不给他发棉衣？”
          　　呼啸的狂风淹没了将军的话音。没有人回答他，也没有人走开。他红着眼睛，像一头发怒的豹子，样子十分可怕。
          　　“听见没有，警卫员？叫军需处长跑步过来！”将军两腮的肌肉抖动着。
          　　这时候，有人小声告诉将军：“他就是军需处长……”
          　　将军愣住了，久久地站在雪地里。他的眼睛湿润了。他深深地吸了一口气，缓缓地举起右手，举到齐眉处，向那位跟云中山化为一体的军需处长敬了一个军礼。
          　　风更狂了，雪更大了。在雪很快地覆盖了军需处长的身体，他成了一座晶莹的丰碑。
          　　将军什么话也没有说，大步走进漫天的风雪中。他听见无数沉重而坚定的脚步声。那声音似乎在告诉人们：如果胜利不属于这样的队伍，还会属于谁呢？'
        />
        <Article 
          path='https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=cc3e8932fffaaf5184e386b9b46ff3d3/86d6277f9e2f07082a1d0b14eb24b899a901f28d.jpg'
          name='杨旭'
          page='../Articles/Article11/Article'
          time='1959.8'
          title='金色的鱼钩'
          content='1935年秋天，红四方面军进入草地，许多同志得了肠胃病。我和两个小同志病得实在跟不上队伍了，指导员派炊事班长照顾我们，让我们走在后面。
          　　炊事班长快四十岁了，个儿挺高，背有点儿驼，四方脸，高颧骨，脸上布满皱纹，两鬓都斑白了。因为全连数他岁数大，对大家又特别亲，大伙都叫他“老班长”。
          　　三个病号走不快，一天只走二十来里路。一路上，老班长带我们走一阵歇一阵。到了宿营地，他就到处去找野菜，和着青稞面给我们做饭。不到半个月，两袋青稞吃完了。饥饿威胁着我们。老班长到处找野菜，挖草根，可是光吃这些东西怎么行呢！老班长看我们一天天瘦下去，他整夜整夜地合不拢眼。其实他这些天比我们还瘦得厉害呢。
          　　一天，他在一个水塘边给我们洗衣裳，忽然看见一条鱼跳出水面。他喜出望外地跑回来，取出一根缝衣针，烧红了，弯成了钓鱼钩。这天夜里，我们就吃到了鲜美的鱼汤。尽管没加作料，可我们觉得没有比这鱼汤更鲜美的了，端起碗来吃了个精光。
          　　以后，老班长尽可能找有水塘的地方宿营，把我们安顿好，就带着鱼钩出去了。第二天，他总能端着热气腾腾的鲜鱼野菜汤给我们吃。我们虽然还是一天一天衰弱下去，比起光吃草根野菜来毕竟好多啦。可是老班长自己呢，我从来没见他吃过一点儿鱼。
          　　有一次，我禁不住问他：“老班长，你怎么不吃鱼啊？”
          　　他摸了摸嘴，好像回味似的说：“吃过了。我一起锅就吃，比你们还先吃呢。”
          　　我不信，等他收拾完碗筷走了，就悄悄地跟着他。走近前一看，啊！我不由得呆住了。他坐在那里捧着搪瓷碗，嚼着几根草根和我们吃剩下的鱼骨头，嚼了一会儿，就皱紧眉头硬咽下去。我觉得好像有万根钢针扎着喉管，失声喊起来：“老班长，你怎么……”
          　　老班长猛抬起头，看见我目不转睛地看着他手里的搪瓷碗，就支吾着说：“我，我早就吃过了。看到碗里还没吃干净，扔了怪可惜的……”
          　　“不，我全知道了。”我打断了他的话。
          　　老班长转身朝两个小同志睡觉的地方看了一眼，一把把我搂到身边，轻声说：“小声点儿，小梁！咱们俩是党员，你既然知道了，可不要再告诉别人。”
          　　“可是，你也要爱惜自己啊！”
          　　“不要紧，我身体还结实。”他抬起头，望着夜色弥漫的草地。好久，才用低沉的声音说，“指导员把你们三个人交给我，他临走的时候说：“他们年轻。一路上，你是上级，是保姆，是勤务员啊，无论多么艰苦，也要把他们带出草地。”小梁，你看这草地，无边无涯，没个尽头。我估计，还要二十天才能走出去。熬过这二十天不简单啊！眼看你们的身子一天比一天衰弱，只要哪一天吃不上东西，说不定就会起不来，真有个三长两短，我怎么去向党报告呢？难道我能说，“指导员，我把同志们留在草地上，我自己克服了困难出来啦”？”
          　　“可是，你总该跟我们一起吃一点儿呀！”
          　　“不行，太少啦。”他轻轻地摇摇头，“小梁，说真的，弄点儿吃的不容易啊！有时候等了半夜，也不见鱼上钩。为了弄一点儿鱼饵，我翻了多少草皮也找不到一条蚯蚓……还有，我的眼睛坏了，天色一暗，找野菜就得一棵一棵地摸……”
          　　我再也忍不住了，抢着说：“老班长，以后我帮你一起找，我看得见。”
          　　“不，咱们不是早就分好工了吗？再说，你的病也不轻，不好好休息会支持不住的。”
          　　我还坚持我的意见。老班长忽然严厉地说：“小梁同志，共产党员要服从党的分配。你的任务是坚持走路，安定两个小同志的情绪，增强他们的信心！”
          　　望着他那十分严峻的脸，我一句话也说不上来，竟扑倒在他怀里哭了。
          　　第二天，老班长端来的鱼汤特别少，每个搪瓷碗里只有小半条猫鱼，上面漂着一丁点儿野菜。他笑着说：“吃吧，就是少了点儿。唉！一条好大的鱼已经上了钩，又跑啦！”
          　　我端起搪瓷碗，觉得这个碗有千斤重，怎么也送不到嘴边。两个小同志不知道为什么，也端着碗不往嘴边送。老班长看到这情况，收敛了笑容，眉头拧成了疙瘩。他说：“怎么了，吃不下？要是不吃，咱们就走不出这草地。同志们，为了革命，你们必须吃下去。小梁，你不要太脆弱！”最后这句话是严厉的，意思只有我知道。
          　　我把碗端到嘴边，泪珠大颗大颗地落在热气腾腾的鱼汤里。我悄悄背转身，擦擦眼睛，大口大口地咽着鱼汤。老班长看着我们吃完，脸上的皱纹舒展开了，嘴边露出了一丝笑意。可是我的心里好像塞了铅块似的，沉重极了。
          　　挨了一天又一天，渐渐接近草地的边了，我们的病却越来越重。我还能勉强挺着走路，那两个小同志连直起腰来的力气也没有了。老班长虽然瘦得只剩皮骨头，眼睛深深地陷了下去，还一直用饱满的情绪鼓励着我们。我们就这样扶一段，搀一段，终于走到草地边上，远处，重重叠叠的山峰已经看得见了。
          　　这天上午，老班长快活地说：“同志们，咱们在这儿停一下，好好弄点儿吃的，鼓一鼓劲，一口气走出草地去。”说罢，他就拿起鱼钩找水塘去了。
          　　我们的精神显得特别好，四处去找野菜，拾干草，好像过节似的。但是过了好久，还不见老班长回来。我们四面寻找，最后在一个水塘旁边找到了他，他已经昏迷不醒了。
          　　我们都着慌了。过雪山的时候有过不少这样的例子，战士用惊人的毅力支持着自己的生命，但是一倒下去就再也起不来了。要挽救老班长，最好的办法是让他赶快吃些东西。我们立即分了工，我去钓鱼，剩下的一个人照料老班长，一个人生火。
          　　我蹲在水边，心里不停地念叨：“鱼啊！快些来吧！这是挽救一个革命战士的生命啊！”可是越性急，鱼越不上钩。等了好久，好容易看到漂在水面的芦秆动了一下，赶紧扯起钓竿，总算钓上来一条两三寸长的小鱼。
          　　当我俯下身子，把鱼汤送到老班长嘴边的时候，老班长已经奄奄一息了。他微微地睁开眼睛，看见我端着的鱼汤，头一句话就说：“小梁，别浪费东西了。我……我不行啦。你们吃吧！还有二十多里路，吃完了，一定要走出草地去！”
          　　“老班长，你吃啊！我们抬也要把你抬出草地去！”我几乎要哭出来了。
          　　“不，你们吃吧。你们一定要走出草地去！见着指导员，告诉他，我没完成党交给我的任务，没把你们照顾好。看，你们都瘦得……”
          　　老班长用粗糙的手抚摸我的头。突然间，他的手垂了下去。
          　　“老班长！老班长！”我们叫起来。但是老班长，他，他的眼睛慢慢地闭上了。
          　　我们扑在老班长身上，抽噎着，很久很久。
          　　擦干了眼泪，我把老班长留下的鱼钩小心地包起来，放在贴身的衣兜里。我想，等革命胜利以后，一定要把它送到革命烈士纪念馆去，让我们的子子孙孙都来瞻仰它。在这个长满了红锈的鱼钩上，闪烁着灿烂的金色的光芒。 '
        />
        <Article 
          path='https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=81ce3ce90446f21fdd395601974d0005/d058ccbf6c81800a4fdcfb1cbf3533fa828b47e2.jpg'
          name='王愿坚'
          page='../Articles/Article12/Article'
          time='1958.6'
          title='七根火柴'
          content='天亮的时候，雨停了。草地的气候就是怪，明明是月朗星稀的好天气，忽然一阵冷风吹来，浓云像从平地上冒出来的，霎时把天遮得严严的，接着就有一场暴雨，夹杂着栗子般大的冰雹，不分点地倾泻下来。
          　　卢进勇从树丛里探出头，四下里望了望。整个草地都沉浸在一片迷蒙的雨雾里，看不见人影，听不到人声；被暴雨冲洗过的荒草，像用梳子梳理过似的，光滑地躺倒在烂泥里，连路也看不清了。天，还是阴沉沉的，偶尔有几粒冰雹洒落下来，打在那浑浊的绿色水面上，溅起一撮撮浪花。他苦恼地叹了口气。因为小腿伤口发炎，他掉队了。两天来，他日夜赶路，原想在今天赶上大队的，却又碰上这倒霉的暴雨，耽误了半个晚上。
          　　他咒骂着这鬼天气，从树丛里钻出来，长长地伸了个懒腰，一阵凉风吹得他冷不丁地连打了几个寒战。他这才发现衣服已经完全湿透了。
          　　“要是有堆火烤烤该多好啊！”他使劲绞着衣服，望着那顺着裤脚流下的水滴想道。他也知道这是妄想——不但现在，就在他掉队的前一天，他们连里已经因为没有引火的东西而只好吃生干粮了。可是他仍然下意识地把手插进裤里。突然，他的手触到了一点粘粘的东西。他心里一喜，连忙蹲下身，把口袋翻过来。果然，在口袋底部粘着一小撮青稞面粉；面粉被雨水一泡，成了稀糊了。他小心地把这些稀糊刮下来，居然有鸡蛋那么大的一团。他吝惜地捏着这块面团，一会儿捏成长形，一会儿又捏成圆的，心里不由得暗自庆幸：“幸亏昨天早晨我没有发现它！”
          　　已经是一昼夜没有吃东西了，这会看见了可吃的东西，更觉得饿得难以忍受。为了不至一口吞下去，他又把面团捏成了长条，正要把它送到嘴边，蓦地听见了一声低低的叫声：“同志——”
          　　这声音那么微弱，低沉，就像从地底下发出来的。他略略愣了一下，便一瘸一拐地向着那声音走去。
          　　卢进勇蹒跚地跨过两道水沟，来到一棵小树底下，才看清楚那个打招呼的人。他倚着树根半躺在那里，身子底下贮满了一汪浑浊的污水，看来他已经有很长时间没有挪动了。他的脸色更是怕人：被雨打湿了的头发像一块黑毡糊贴在前额上，水，沿着头发、脸颊滴滴答答地流着。眼眶深深地塌陷下去，眼睛无力地闭着，只有腭下的喉结在一上一下的抖动，干裂的嘴唇一张一翕地发出低低的声音：“同志！——同志！——”
          　　听见卢进勇的脚步声，那个同志吃力地张开眼睛，习惯地挣扎了一下，似乎想坐起来，但却没有动得了。
          　　卢进勇看着这情景，眼睛像揉进了什么，一阵酸涩。在掉队的两天里，他这已经是第三次看见战友倒下来了。“这一定是饿坏了！”他想，连忙抢上一步，搂住那个同志的肩膀，把那点青稞面递到那同志的嘴边说：“同志，快吃点吧！”
          　　那同志抬起一双失神的眼睛，呆滞地望了卢进勇一眼，吃力地抬起手推开他的胳膊，嘴唇翕动了好几下，齿缝里挤出了几个字：“不，没……没用了。”
          　　卢进勇手停在半空，一时不知怎么好。他望着那张被寒风冷雨冻得乌青的脸，和那脸上挂着的雨滴，痛苦地想：“要是有一堆火，有一杯热水，也许他能活下去！”他抬起头，望望那雾蒙蒙的远处，随即拉住那同志的手腕说：“走，我扶你走吧！”
          　　那同志闭着眼睛摇了摇头，没有回答，看来是在积攒着浑身的力量。好大一会，他忽然睁开了眼，右手指着自己的左腋窝，急急地说：“这……这里！”
          　　卢进勇惶惑地把手插进那湿漉漉的衣服。这一刹那间，他觉得同志的胸口和衣服一样冰冷了。在那人腋窝里，他摸出了一个硬硬的纸包，递到那个同志的手里。
          　　那同志一只手抖抖索索地打开了纸包，那是一个党证；揭开党证，里面并排着一小堆火柴。焦干的火柴、红红的火柴头簇集在一起，正压在那朱红的印章中心，像一簇火焰在跳。
          　　“同志，你看着……”那同志向卢进勇招招手，等他凑近了，便伸开一个僵直的手指，小心翼翼地一根根拨弄着火柴，口里小声数着：“—，二，三，四……”
          　　一共有七根火柴，他却数了很长时间。数完了，又询问地向卢进勇望了一眼，意思好像说：“看明白了?”
          　　“是，看明白了！”卢进勇高兴地点点头，心想：“这下子可好办了！”他仿佛看见了一个通红的火堆，他正抱着这个同志偎依在火旁……
          　　就在这一瞬间，他发现那个同志的脸色好像舒展开来，眼睛里那死灰般的颜色忽然不见了，爆发着一种喜悦的光。只见他合起党证，双手捧起了它，像擎着一只贮满水的碗一样，小心地放进卢进勇的手里，紧紧地把它连手握在一起，两眼直直地盯着他的脸。
          　　“记住，这，这是，大家的！”他蓦地抽回手去，深深地吸了一口气，用尽所有的力气举起来，直指着正北方向：“好，好同志……你……你把它带给……”
          　　话就在这里停住了。卢进勇觉得臂弯猛然沉了下去！他的眼睛模糊了。远处的树、近处的草，那湿漉漉的衣服、那双紧闭的眼睛……一切都像整个草地一样，雾蒙蒙的，只有那只手是清晰的，它高高地擎着，像一只路标，笔直地指向长征部队前进的方向……
          　　这以后的路，卢进勇走得特别快。天黑的时候，他追上了后卫部队。在无边的暗夜里，一簇簇的篝火烧起来了。在风雨、在烂泥里跌滚了几天的战士们，围着这熊熊的野火谈笑着，湿透的衣服上冒着一层雾气，洋瓷碗里的野菜“咝——咝”地响着…… 卢进勇悄悄走到后卫连指导员的身边。映着那闪闪跳动的火光，他用颤抖的手指打开了那个党证，把其余六根火柴一根根递到指导员的手里，同时，又以一种异样的声调在数着：
          　　“一，二，三，四……” '
        />
        <Article 
          path='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=9bbf7ed913dfa9ece9235e4503b99c66/f2deb48f8c5494ee997313dc2ff5e0fe98257ea5.jpg'
          name='陈靖'
          time=''
          title='倔强的小红军'
          page='../Articles/Article13/Article'
          content='陈赓同志回顾自己革命经历的时候，曾经深情地谈起这样一件往事。
          那是深秋的一天，太阳偏西了。由于长时间在荒无人烟的草地上行军，常常忍饥挨饿，陈赓同志感到砖瓦分疲惫。这一陈他掉队了，牵着那匹同样疲惫的瘦马，一步一步朝前走着。忽然，看见前边脸皮小红军，跟他一样，也掉队了。
          那小家伙不过十一二岁，黄黄的小脸，一双大眼睛，两片薄嘴唇，鼻子有点儿翘，两只脚穿着破草鞋，冻得又青又红。陈赓同志走到他跟前，说：“小鬼，你上马骑一会儿吧。”
          小红军摆出一副满不在乎的样子，盯着陈赓同志长着络腮胡子的瘦脸，微微一笑，用一口四川话说：“老同志，我的体力比你强多了，你快骑上走吧。”
          陈赓同志用命令的口吻说：“上去，骑一段路再说！”
          小红军倔强地说：“你要我同你的马比赛啊，那就比一比吧。”他说着把腰一挺，做出个准备赛跑的姿势。
          “那我们就一块走吧。”
          “不。你先走，我还要等我的同伴呢。”
          陈赓同志无可奈何，从身上取出一小包青稞面，递给小红军，说：“你把它吃了。”
          小红军把身上的干粮袋一拉，轻轻的拍了拍，说：“你看，鼓鼓的嘛。我比你还多呢。”陈赓同志终于被这个小红军说服了，只好爬上马背，朝前走去。
          他骑在马上，心情老平静不下来，从刚才遇见的小红军，想起一连串的孩子。从上海、广州直到香港的码头上，跟他打过交道的那些穷孩子，一个个浮现在他眼前。
          “不对，我受骗了！”陈赓同志突然喊了一声，立刻调转马头，狠踢了几下马肚子，向来的路奔跑起来，等他找到那个小红军，小红军已经倒在草地上了。
          陈赓同志吃力地把小红军抱上马背，他的手触到了小红军的干粮袋，袋子硬邦邦的，装的什么东西呢？他掏出来一看，原来是一块烧得发黑的牛膝骨，上面还有几个牙印。
          陈赓同志全明白了。就在这个时候，小红军停止了呼吸。
          陈赓同志一把搂住小红军，狠狠地打了自己一个嘴巴：“陈赓啊，你怎么对得起这个小兄弟啊！”'
        />
        <Article 
          path='https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=673dd9efc5fc1e17fdbf8b3772ab913e/d4628535e5dde711b47b2d0fadefce1b9c166199.jpg'
          name='陆定一'
          time=''
          title='老山界'
          page='../Articles/Article14/Article'
          content='我们决定要爬一座30里高的瑶山，地图上叫越城岭，土名叫老山界。
          下午才动身，沿着山沟向上走。前面不知道为什么走不动，等了好久，才走了几步又要停下来等。队伍挤得紧紧的，站累了，就在路旁坐下来，等前头喊着“走，走，走”，就站起来再走。满望可以多走一段，可是走不了几步，又要停下来。天色晚了，肚子饿了，许多人烦得叫起来，骂起来。我们偷了个空儿，跑到前面去。地势渐渐陡起来。我们已经超过自己的纵队，跑到“红星”纵队的尾巴上，恰好在转弯地方发现路旁有一间房子，我们就进去歇一下。
          这是一家瑶民，住着母女二人；男人大概是因为听说过队伍，照着习惯，到什么地方去躲起来了。
          “大嫂，借你这里歇歇脚儿。”
          “请到里边坐。”她带着些惊惶的神情说。
          队伍还是极迟缓地向前行动。我们就跟瑶民攀谈起来。照我们一路上的经验，不论是谁，不论他们开始怎样怕我们，只要我们对他们说清楚了红军是什么，没有不变忧为喜，同我们十分亲热起来的。今天对瑶民，我们也要试一试。
          我们谈到红军，谈到苛捐杂税，谈到广西军阀禁止瑶民信仰自己的宗教，残杀瑶民，谈到她住在这里的生活情形。那女人哭起来了。
          她说她原来也有过地，但是汉人把他们从自己的地上赶跑了。现在住到这荒山上来，种人家的地，每年要缴特别重的租。她说：“广西的苛捐杂税对瑶民特别重，广西军阀特别欺侮瑶民。你们红军早些来就好了，我们就不会吃这样的苦了。”
          她问我们饿了没有。这一问正问中了我们的心事。她拿出仅有的一点米，放在房中间木头架成的一个灶上煮粥。她对我们道歉，说没有多的米，也没有大锅，要不就多煮些给部队吃。我们给她钱，她不要。好容易来了一个认识的同志，带来一袋米，够吃三天的粮食，虽然明知道前面粮食缺乏，我们还是把这整袋子米送给她。她非常欢喜地接受了。
          部队今天非夜里行军不可，她的房子和篱笆都是枯竹编成的，我们生怕有人拆下来当火把点，就写了几条标语，用米汤贴在外面显眼的地方，告知我们的部队不准拆篱笆当火把。我们问了瑶民，知道前面还有竹林，可以砍来作火把，就派人到前面竹林去准备。
          粥吃起来十分香甜，因为确是饿了。我们也拿碗盛给瑶民母女吃。打听前面的路程，知道前面有一个地方叫雷公岩，很陡，上山三十里，下山十五里，再前面才是塘坊边。我们现在还没到山脚下呢。
          自己的队伍来了，我们烧了些水给大家喝。一路前进，天黑了才到山脚，果然有许多竹林。
          满天都是星光，火把也亮起来了。从山脚向上望，只见火把排成许多“之”字形，一直连到天上，跟星光接起来，分不出是火把还是星星。这真是我生平没见过的奇观。
          大家都知道这座山是怎样地陡了，不由浑身紧张，前后呼喊起来，都想努一把力，好快些翻过山去。
          “不要掉队呀！”
          “不要落后做乌龟呀！”
          “我们顶着天啦！”
          大家听了，哈哈地笑起来。
          在“之”字拐的路上一步一步地上去。向上看，火把在头顶上一点点排到天空；向下看，简直是绝壁，火把照着人的脸，就在脚底下。
          走了半天，忽然前面又走不动了。传来的话说，前面又有一段路在峭壁上，马爬不上去。又等了一个多小时，传下命令来说，就在这里睡，明天一早登山。
          就在这里睡觉？怎么行呢？下去到竹林里睡是不可能的。但就在路上睡么？路只有一尺来宽，半夜里一个翻身不就骨碌下去了么？而且路上的石头又非常不平，睡一晚准会疼死人。
          但这是没有办法的，只得裹一条毯子，横着心躺下去。因为实在太疲倦，一会儿就酣然入梦了。
          半夜里，忽然醒来，才觉得寒气逼人，刺入肌骨，浑身打着颤。把毯子卷得更紧些,把身子蜷起来，还是睡不着。天上闪烁的星星好像黑色幕上缀着的宝石，它跟我们这样地接近哪！黑的山峰像巨人一样矗立在面前。四围的山把这山谷包围得像一口井。上边和下边有几堆火没有熄；冻醒了的同志们围着火堆小声地谈着话。除此以外，就是寂静。耳朵里有不可捉摸的声响，极远的又是极近的，极洪大的又是极细切的，像春蚕在咀嚼桑叶，像野马在平原上奔驰，像山泉在呜咽，像波涛在澎湃。不知什么时候又睡着了。
          黎明的时候被人推醒，说是准备出发。山下有人送饭上来，不管三七二十一，抢了一碗就吃。
          又传下命令来，要队伍今天无论如何爬过这座山。因为山路很难走，一路上需要督促前进。我们几个人又停下来，立刻写标语，分配人到山下山上各段去喊口号，演说，帮助病员和运输员。忙了一会，再向前进。
          走了不多远，看见昨晚所说的峭壁上的路，也就是所谓雷公岩的，果然陡极了，几乎是九十度的垂直的石梯，只有一尺多宽；旁边就是悬崖，虽然不很深，但也够怕人的。崖下已经聚集了很多马匹，都是昨晚不能过去、要等今天全纵队过完了再过去的。有几匹曾经从崖上跌下来，脚骨都断了。
          很小心地过了这个石梯。上面的路虽然还是陡，但并不陡得那么厉害了。一路走，一路检查标语。我渐渐地掉了队，顺便做些鼓励工作。
          这很陡的山爬完了。我以为三十里的山就是那么一点；恰巧来了一个瑶民，同他谈谈，知道还差得远，还有二十多里很陡的山。
          昨天的晚饭，今天的早饭，都没吃饱。肚子很饿，气力不够，但是必须鼓着勇气前进。一路上，看见以前送上去的标语用完了，就一路写着标语贴。累得走不动的时候，索性在地上躺一会儿。
          快要到山顶，我已经落得很远了。许多运输员都走到前头去了，剩下来的是医务人员和掩护部队。医务人员真是辛苦，因为山陡，伤员病员都下了担架走，旁边需要有人搀扶着。医务人员中的女同志们英勇得很，她们还是处处在慰问和帮助伤员病员，一点也不知道疲倦。回头向来路望去，那些小山都成了“矮子”。机关枪声很密，大概是在我们昨天出发的地方，五、八军团正跟敌人开火。远远地还听见敌人飞机的叹息，大概是在叹息自己的命运：为什么不到抗日的战线上去显显身手呢?
          到了山顶，已经是下午两点多钟。我忽然想起：将来要在这里立个纪念碑，写上某年某月某日，红军北上抗日，路过此处。我长长地吐了一口气，坐在山顶上休息一会。回头看队伍，没有翻过山的只有不多的几个人了。我们完成了任务，把一个坚强的意志灌输到整个纵队每个人心中，饥饿、疲劳甚至受伤的痛苦都被这个意志克服了。难翻的老山界被我们这样笨重的队伍战胜了。
          下山十五里，也是很倾斜的。我们一口气儿跑下去，跑得真快。路上有几处景致很好，浓密的树林里，银子似的泉水流下山去，清得透底。在每条溪流的旁边，有很多战士们用脸盆、饭盒子、茶缸煮粥吃。我们虽然也很饿，但仍旧一气儿跑下山去，一直到宿营地。
          这回翻山使部队开始养成一种新的习惯：那就是用脸盆、饭盒子、茶缸煮东西吃。这种习惯一直保持了很久。
          老山界是我们长征中所过的第一座难走的山。但是我们走过了金沙江、大渡河、雪山、草地以后，才觉得老山界的困难，比起这些地方来，还是小得很。'
        />
        <Article 
          path='https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=06e97ed534dbb6fd255be220311fcc25/c75c10385343fbf2e5226c0dbd7eca8065388f96.jpg'
          name='雕塑家潘鹤'
          time=''
          page='../Articles/Article15/Article'
          title='艰苦岁月'
          content='红军打退了敌人的又一次进攻，在山坡上休息。天色渐渐暗下来，周围非常寂静。山谷中响起了悠扬的笛声。吹笛子的是一位老红军。他坐在石头上，赤着脚，身上的衣服很破了，腰里挂着驳壳枪，帽子上的五角星红得十分鲜艳。他颧骨很高，额上的皱纹很深，浓浓的眉毛下面，一双眼睛特别有神。一位十来岁的小红军偎依在他的身旁，右手托着下巴，侧着耳朵倾听。小红军也赤着脚，衣服也很破，搂着一支跟他差不多高的步枪。这位老红军，很可能原来是个长工；小红军呢，也许原来是个放牛娃。这一老一小都来到了人民的军队，跟着共产党、毛主席闹革命。战斗的岁月非常艰苦，可是他们充满了胜利的信心，相信一定能够彻底打垮敌人，使穷苦人都翻身做主人，过上幸福的生活。小红军听着笛声，出神地望着远方。他看到了未来，看到了希望。'
        />
      </View>
    )
  }
}
