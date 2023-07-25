import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url:'https://mock.mengxuegu.com/mock/637c75cbf1d03e77526cdf4f/mogujie/test/home/data',
    params: {
      type,
      page
    }
  })
}

// 函数调用 -> 压入函数栈（保存函数调用过程中所有变量）
// 函数调用结束 —> 弹出函数栈（释放函数所有变量）
// function test() {
//   const name = ['why', 'aaa']
// }
// 
// test()
// 
// test()