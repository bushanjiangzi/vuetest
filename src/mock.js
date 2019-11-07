const Mock = require('mockjs')
//使用mockjs模拟数据
Mock.mock('/data', (req, res) => {
  return {
    data: [
      {
        "id" : 1,
        "username": "aaa",
        "password": "aaa"
      },
      {
        "id" : 2,
        "username": "bbb",
        "password": "bbb"
      },
      {
        "id": 3,
        "username": "ccc",
        "password": "ccc"
      }
    ],
    goods: [
      {
        "name": "mateBook",
        "price": 10000
      },
      {
        "name": "macBook",
        "price": 8888
      },
      {
        "name": "miBook",
        "price": 6666
      }
    ]
  }
});

// Mock.mock('/api/goods', (req, res) => {
//   return {
//     goods: [
//       {
//         "name": "mateBook",
//         "price": 10000
//       },
//       {
//         "name": "macBook",
//         "price": 8888
//       },
//       {
//         "name": "miBook",
//         "price": 6666
//       }
//     ]
//   }
// });
