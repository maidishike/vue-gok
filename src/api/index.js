// 请求api
const BaseUrl = 'http://kogapi.games-cube.com/'
const UserAreaUrl = BaseUrl + 'UserArea/'
const ImgUrl = 'http://cdn.tgp.qq.com/kog/v3/images/'


export default {
  /**  @description 获取指定用户名所在的区服信息及用户在区服中的基本信息。
  *    @param keyword:游戏用户名
  */
  getUserArea(keyword){
    return UserAreaUrl + '?keyword=' + keyword
  },
  /**
   *  @description 玩家详细信息
   *  @param area_id 区域类型  1 安卓手机QQ、2 IOS手机QQ 、3 安卓微信  、4 IOS微信
   *  @param world_id 大区信息
   *  @param open_id 用户唯一标识
   */
  getPlayerInfo(area_id, world_id, open_id){
    return UserAreaUrl + 'PlayerInfo?area_id='+area_id+'&world_id='+world_id+'&open_id='+open_id
  },
  /**
   *  @description 个人战绩概览
   */
  getBattleSummary(area_id, world_id, open_id){
    return UserAreaUrl + 'BattleSummary?area_id='+area_id+'&world_id='+world_id+'&open_id='+open_id
  },
  /**
   *  @description 善长英雄
   */
  getPreferHero(area_id, world_id, open_id){
    return UserAreaUrl + 'PreferHero?area_id='+area_id+'&world_id='+world_id+'&open_id='+open_id
  },
  /**
   *  @description 个人战绩数据
   *  @param offset 页码(从0开始)
   */
  getPlayerBattles(area_id, world_id, open_id, offset){
    return UserAreaUrl + 'PlayerBattles?area_id='+area_id+'&world_id='+world_id+'&open_id='+open_id+'&offset='+offset
  },
  /**
   *  @description 详细单场战斗数据数据
   *  @param device_type:用户所属的设备类型(1-Android,0-IOS)
   *  @param game_id:游戏唯一表示
   */
  getBattleInfo(device_type, game_id){
    return UserAreaUrl + 'BattleInfo?device_type='+device_type+'&game_id='+game_id
  },

  /**
   *  @description 免费英雄
   */
  getFreeHero(area_id, world_id, open_id){
    return UserAreaUrl + 'FreeHero?area_id='+area_id+'&world_id='+world_id+'&open_id='+open_id
  },
  /**
   *  @description 获取所有英雄
   */
  getAllHero(){
    return BaseUrl + 'champion'
  },
  /**
   *  @description 英雄详细信息
   */
  getChampionDetail(hero_id){
    return BaseUrl + 'championdetail?hero_id='+ hero_id
  },

  /**
   *  @description 获取常用资源，英雄图片，icon等
   *  @param resource: 资源路径后缀
   */
  getCommonUseResource(resource){
    return ImgUrl + resource
  },
  /**
   *  @description 国服区服字典
   *  @param resource: 资源路径后缀
   */
  getWorld(){
    return './static/data/item.json'
  },
  TOKEN : {
    "DAIWAN-API-TOKEN": "C152A-AC91C-25CDD-CA19A"
  }
}
