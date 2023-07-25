import {request} from './request';

export function getDetail(iid) {
  return request ({
    url: 'https://mock.mengxuegu.com/mock/637c75cbf1d03e77526cdf4f/mogujie/detail',
    params: {
      iid
    }
  })
}



export class Goods {
  constructor(itemInfo, columns,services) {
    this.title = itemInfo.title
    this.desc= itemInfo.desc
    this.newPrice = itemInfo.newPrice
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discount
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice

  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.goodsCount = shopInfo.cGoods
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
  }
}