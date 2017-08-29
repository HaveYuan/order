// pages/goods/goods.js
Page({
    data: {
        goods: [
            {
                "name": "热销榜",
                "type": -1,
                "foods": [
                    {
                        "name": "皮蛋瘦肉粥",
                        "price": 10.02,
                        "oldPrice": "20",
                        "description": "咸粥",
                        "sellCount": 229,
                        "Count": 0,
                        "rating": 100,
                        "info": "一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "很喜欢的粥",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 1,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "扁豆焖面",
                        "price": 14,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 188,
                        "Count": 0,
                        "rating": 96,
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 1,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "info": "",
                        "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "葱花饼",
                        "price": 10,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 124,
                        "Count": 0,
                        "rating": 85,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 1,
                                "text": "没啥味道",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 1,
                                "text": "很一般啊",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "牛肉馅饼",
                        "price": 14,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 114,
                        "Count": 0,
                        "rating": 91,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 1,
                                "text": "难吃不推荐",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "招牌猪肉白菜锅贴/10个",
                        "price": 17,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 101,
                        "Count": 0,
                        "rating": 78,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 1,
                                "text": "不脆,不好吃",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "南瓜粥",
                        "price": 9,
                        "oldPrice": "",
                        "description": "甜粥",
                        "sellCount": 91,
                        "Count": 0,
                        "rating": 100,
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "红豆薏米美肤粥",
                        "price": 12,
                        "oldPrice": "",
                        "description": "甜粥",
                        "sellCount": 86,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "八宝酱菜",
                        "price": 4,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 84,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "红枣山药糙米粥",
                        "price": 10,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 81,
                        "Count": 0,
                        "rating": 91,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "糊塌子",
                        "price": 10,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 80,
                        "Count": 0,
                        "rating": 93,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
                    }
                ]
            },
            {
                "name": "单人精彩套餐",
                "type": 2,
                "foods": [
                    {
                        "name": "红枣山药粥套餐",
                        "price": 29,
                        "oldPrice": 36,
                        "description": "红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注",
                        "sellCount": 17,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"
                    }
                ]
            },
            {
                "name": "冰爽饮品限时特惠",
                "type": 1,
                "foods": [
                    {
                        "name": "VC无限橙果汁",
                        "price": 8,
                        "oldPrice": 10,
                        "description": "",
                        "sellCount": 15,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "还可以",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
                    }
                ]
            },
            {
                "name": "精选热菜",
                "type": -1,
                "foods": [
                    {
                        "name": "娃娃菜炖豆腐",
                        "price": 17,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 43,
                        "Count": 0,
                        "rating": 92,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "菜量还可以,味道还可以",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "手撕包菜",
                        "price": 16,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 29,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "香酥黄金鱼/3条",
                        "price": 11,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 15,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750"
                    }
                ]
            },
            {
                "name": "爽口凉菜",
                "type": -1,
                "foods": [
                    {
                        "name": "八宝酱菜",
                        "price": 4,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 84,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "拍黄瓜",
                        "price": 9,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 28,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"
                    }
                ]
            },
            {
                "name": "精选套餐",
                "type": -1,
                "foods": [
                    {
                        "name": "红豆薏米粥套餐",
                        "price": 37,
                        "oldPrice": "",
                        "description": "红豆薏米粥,三鲜干蒸烧卖,拍黄瓜",
                        "sellCount": 3,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "皮蛋瘦肉粥套餐",
                        "price": 31,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 12,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"
                    }
                ]
            },
            {
                "name": "果拼果汁",
                "type": -1,
                "foods": [
                    {
                        "name": "蜜瓜圣女萝莉杯",
                        "price": 6,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 1,
                        "Count": 0,
                        "rating": "",
                        "info": "",
                        "ratings": [],
                        "icon": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "加多宝",
                        "price": 6,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 7,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "VC无限橙果汁",
                        "price": 8,
                        "oldPrice": 10,
                        "description": "",
                        "sellCount": 15,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "还可以",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"
                    }
                ]
            },
            {
                "name": "小吃主食",
                "type": -1,
                "foods": [
                    {
                        "name": "扁豆焖面",
                        "price": 14,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 188,
                        "Count": 0,
                        "rating": 96,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 1,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "葱花饼",
                        "price": 10,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 124,
                        "Count": 0,
                        "rating": 85,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 1,
                                "text": "没啥味道",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 1,
                                "text": "很一般啊",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "牛肉馅饼",
                        "price": 14,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 114,
                        "Count": 0,
                        "rating": 91,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 1,
                                "text": "难吃不推荐",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "招牌猪肉白菜锅贴/10个",
                        "price": 17,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 101,
                        "Count": 0,
                        "rating": 78,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 1,
                                "text": "不脆,不好吃",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "糊塌子",
                        "price": 10,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 80,
                        "Count": 0,
                        "rating": 93,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"
                    }
                ]
            },
            {
                "name": "特色粥品",
                "type": -1,
                "foods": [
                    {
                        "name": "皮蛋瘦肉粥",
                        "price": 10,
                        "oldPrice": "",
                        "description": "咸粥",
                        "sellCount": 229,
                        "Count": 0,
                        "rating": 100,
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "很喜欢的粥",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 1,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "南瓜粥",
                        "price": 9,
                        "oldPrice": "",
                        "description": "甜粥",
                        "sellCount": 91,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "红豆薏米美肤粥",
                        "price": 12,
                        "oldPrice": "",
                        "description": "甜粥",
                        "sellCount": 86,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "红枣山药糙米粥",
                        "price": 10,
                        "oldPrice": "",
                        "description": "",
                        "sellCount": 81,
                        "Count": 0,
                        "rating": 91,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "鲜蔬菌菇粥",
                        "price": 11,
                        "oldPrice": "",
                        "description": "咸粥",
                        "sellCount": 56,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": ""
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750"
                    },
                    {
                        "name": "田园蔬菜粥",
                        "price": 10,
                        "oldPrice": "",
                        "description": "咸粥",
                        "sellCount": 33,
                        "Count": 0,
                        "rating": 100,
                        "info": "",
                        "ratings": [
                            {
                                "username": "3******c",
                                "rateTime": 1469281964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "2******3",
                                "rateTime": 1469271264000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            },
                            {
                                "username": "3******b",
                                "rateTime": 1469261964000,
                                "rateType": 0,
                                "text": "",
                                "avatar": "http://static.galileo.xiaojukeji.com/static/tms/default_header.png"
                            }
                        ],
                        "icon": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114",
                        "image": "http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"
                    }
                ]
            }
        ],
        order: true,
        detail: false,
        toView: '0',
        scrollTop: 100,
        foodCounts: 0,
        totalPrice: 0.00.toFixed(2),           // 总价格
        totalCount: 0,           // 总商品数
        carArray: [],
        minPrice: 20,            // 起送價格
        payDesc: '',
        light: 'lowlight',       // 总价格样式
        scrollHeight: '300',
        // deliveryPrice: 4,     // 配送費
        fold: true,
        enough: 'noenough',        // 结算按钮样式
        selectFoods: [{ price: 20, count: 2 }],
        cartShow: 'none',
        q: '',                    //二维码链接
        num: 0,                    //餐桌号
    },

    //跳转到个人中心页
    aboutMe: function() {
      wx.navigateTo({
        url: "../person/person"
      })
    },

    //跳转到已点订单页
    intoAlready: function () {
      wx.navigateTo({
        url: "../already/already"
      })
    },

    //点餐页面显示
    order: function (e) {
      this.setData({
        order: true,
        detail: false
      })
    },

    //餐厅详情页面显示
    detail: function (e) {
      this.setData({
        order: false,
        detail: true
      })
    },

    selectMenu: function (e) {
        var index = e.currentTarget.dataset.itemIndex;
        this.setData({
            toView: 'order' + index.toString()
        })
        console.log(this.data.toView);
    },

    //移除商品
    decreaseCart: function (e) {
      var index = e.currentTarget.dataset.itemIndex;
      var parentIndex = e.currentTarget.dataset.parentindex;
      var mark = 'a' + index + 'b' + parentIndex
      this.data.goods[parentIndex].foods[index].Count--;
      var num = this.data.goods[parentIndex].foods[index].Count;
      var name = this.data.goods[parentIndex].foods[index].name;
      var price = this.data.goods[parentIndex].foods[index].price;
      var obj = { price: price, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };
      var carArray1 = this.data.carArray.filter(item => item.mark != mark);

      carArray1.push(obj);

      //当商品为0时将其从对象中删除
      for (var k = 0; k < carArray1.length; k++) {
        if (carArray1[k].num == 0) {
          delete (carArray1[k]);
        }
      }

    console.log(carArray1);

      this.setData({
        carArray: carArray1,
        goods: this.data.goods
      })

      this.calTotalPrice();

      this.setData({
        payDesc: this.payDesc()
      })
    },

    decreaseShopCart: function (e) {
      this.decreaseCart(e);
    },

    //添加到购物车
    addCart(e) {
        var index = e.currentTarget.dataset.itemIndex;
        var parentIndex = e.currentTarget.dataset.parentindex;
        this.data.goods[parentIndex].foods[index].Count++;
        var mark = 'a' + index + 'b' + parentIndex
        var price = this.data.goods[parentIndex].foods[index].price;
        var num = this.data.goods[parentIndex].foods[index].Count;
        var name = this.data.goods[parentIndex].foods[index].name;
        var obj = { price: price, num: num, mark: mark, name: name, index: index, parentIndex: parentIndex };
        var carArray1 = this.data.carArray.filter(item => item.mark != mark)

        carArray1.push(obj)

        console.log(carArray1);

        this.setData({
            carArray: carArray1,
            goods: this.data.goods
        })

        this.calTotalPrice();
        this.setData({
            payDesc: this.payDesc()
        })
    },

    addShopCart: function (e) {
        this.addCart(e);
    },

    //清空购物车
    empty: function(e) {

      var that = this;
      wx.showModal({
        title: '确定要清空购物车吗',
        // content: '确定要删除吗？',
        cancelColor: '#ccc',
        confirmColor: '#4cc9e5',
        success: function (sm) {
          if (sm.confirm) {
            // 用户点击了确定 可以调用删除方法了
            for(var i=0; i<that.data.goods.length; i++) {
              for(var j=0; j<that.data.goods[i].foods.length; j++) {
                if(that.data.goods[i].foods[j].Count > 0) {
                  var mark = 'a' + j + 'b' + i;
                  //console.log(mark);
                  while(that.data.goods[i].foods[j].Count != 0) {
                    that.data.goods[i].foods[j].Count--;
                    var num = that.data.goods[i].foods[j].Count;
                  }

                    console.log(num);
                    var name = that.data.goods[i].foods[j].name;
                    var price = that.data.goods[i].foods[j].price;
                    var obj = { price: price, num: num, mark: mark, name: name, index: j, parentIndex: i };
                    var carArray1 = that.data.carArray.filter(item => item.mark != mark);

                    console.log(that.data.carArray);
                    carArray1.push(obj);

                   //当商品为0时将其从对象中删除，清空对象
                    for(var k=0; k<carArray1.length; k++) {
                      if(carArray1[k].num == 0) {
                        delete(carArray1[k]);
                      }
                    }

                    console.log(carArray1);
                    
                    that.setData({
                      carArray: carArray1,
                      goods: that.data.goods
                    })

                    that.calTotalPrice();

                    that.setData({
                      payDesc: that.payDesc()
                    })
                }
              }
            }
          } else if (sm.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },

    //计算总价
    calTotalPrice: function () {
        var carArray = this.data.carArray;
        var totalPrice = 0.00;
        var totalCount = 0;
        for (var i = 0; i < carArray.length; i++) {
            totalPrice += carArray[i].price * carArray[i].num;
            totalCount += carArray[i].num
        }
        if (totalPrice == 0) {
          this.setData({
            light: 'lowlight',
            cartShow: 'none',
            enough: 'noenough',
            fold: true
          })
        } else {
          this.setData({
            light: 'highlight'
          })
        }
        this.setData({
            totalPrice: totalPrice.toFixed(2),
            totalCount: totalCount,
            //payDesc: this.payDesc()
        });
    },

    //差几元起送
    payDesc() {
        if (this.data.totalPrice == 0) {
          this.setData({
            enough: 'noenough'
          })
          return ''
        } else {
          this.setData({
            enough: 'enough'
          })
        }
    },

    //結算
    checkpay() {
        if (this.data.totalPrice <= 0) {
            return;
        }
        var carArray = JSON.stringify(this.data.carArray);   //先将对象转化为字符串后再传值
        var totalPrice = this.data.totalPrice;
        var totalCount = this.data.totalCount;
        wx.navigateTo({
          url: '../checkpay/checkpay?carArray=' + carArray + '&&totalPrice=' + totalPrice +'&&totalCount=' + totalCount
        })
    },

    //弹起购物车
    toggleList: function () {
        if (!this.data.totalCount) {
            return;
        }
        this.setData({
            fold: !this.data.fold,
        })
        var fold = this.data.fold
        //console.log(this.data.fold);
        this.cartShow(fold)
    },

    cartShow: function (fold) {
        console.log(fold);
        if (fold == false) {
            this.setData({
                cartShow: 'block',
            })
        } else {
            this.setData({
                cartShow: 'none',
            })
        }
        console.log(this.data.cartShow);
    },

    listShow() {
        if (!this.data.totalCount) {
            this.data.fold = true;
            return false;
        }
        let show = !this.fold;
        return show;
    },

    onLoad: function (options) {
      //获取二维码内容
      //获取二维参数
      var sp_arr = decodeURIComponent(options.q).split("=");
      var num = sp_arr[1];

      // 页面初始化 options为页面跳转所带来的参数
      this.setData({
          payDesc: this.payDesc(),
          q: decodeURIComponent(options.q),
          num: num
      });
      console.log("二维码的内容是："+typeof(this.data.q));
      console.log("餐桌号是："+this.data.num);

    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
      var that = this;
      // 页面显示
      wx.getSystemInfo({
        success: function (res) {
          var height = res.windowHeight - 120;   //footerpannelheight为底部组件的高度
          that.setData({
            scrollHeight: height
          });
          console.log(height);
        }
      })
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    },

    /**
   * 用户点击右上角分享
   */
    onShareAppMessage: function () {
      return {
        title: '米石科技点餐系统',
        desc: '米石科技点餐系统!',
        //imageUrl: ''
        path: '/pages/goods/goods'
      }
    }
})
