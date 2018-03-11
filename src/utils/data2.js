// This is real database fork
export const vehicles = {
    'key1': {
      date: new Date('2018-01-03').getTime (),
      vehicles: [
      ]
    },
    'key2': {
      date: new Date('2018-01-04').getTime (),
      vehicles: [
        { name: '體適能', model: 'M1236' },
        { name: '維護管理', model: 'S4623' },
        { name: '健康醫療', model: 'T46963' }
      ]
    },
    'key3': {
      date: new Date('2018-01-05').getTime (),
      vehicles: [
        { name: '維護管理', model: 'M1236' },
        { name: '健康課程', model: 'S4623' },
        { name: '維護管理', model: 'T46963' }
      ]
    }
};

export const employees = {
    'key1': {
        date: new Date('2018-01-03').getTime (),
        employees: [

        ]
    },
    'key2': {
        date: new Date('2018-01-04').getTime (),
        employees: [
            { name: '王小明df',
              location: '2F',
              job : '色彩訓練',
              arrived: new Date('2018-01-04 9:00').getTime (),
              avatar: 'img/avatar/4.jpg'
            },
            {
              name: '黃小明df',
              location: '3F',
              job : '色彩訓練',
              arrived: new Date('2018-01-04 8:35').getTime (),
              avatar: 'img/avatar/5.jpg'
            },
            { name: '張小華df',
              location: '2F',
              job : '凹凸觸感',
              arrived: new Date('2018-01-04 7:25').getTime (),
              avatar: 'img/avatar/1.jpg'}
        ]
    },
    'key3': {
        date: new Date('2018-01-05').getTime (),
        employees: [
            { name: '王小明',
              location: '2F',
              job : '手眼協調',
              arrived: new Date('2018-01-05 8:00').getTime (),
              avatar: 'img/avatar/2.jpg'
            },
            { name: '黃小明dw',
              location: 'Slop',
              job : '手眼協調',
              arrived: new Date('2018-01-05 8:20').getTime (),
              avatar: 'img/avatar/3.jpg'
            },
            { name: '張小華',
              location: 'B1',
              job : '色彩訓練',
              arrived: new Date('2018-01-05 8:10').getTime (),
              avatar: 'img/avatar/4.jpg'
            }
        ]
    }
};

export const posts = {
    'key1': {
        date: new Date('2018-01-04').getTime (),
        list: [
            {
                title: '警察局位置',
                info: '萬盛派出所 <br/> 地址 ： 臺中市羅斯福路五段151號 <br/> 電話：<a href="tel:02-2931-2502">(02) 2931-2502</a>、<a href="tel:02-2932-7142">(02) 2932-7142</a>',
                type: 'urgent',
                map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.888369896284!2d121.53671961624407!3d25.003908845648198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa1dbb3b7965%3A0x81398b61aff41f3e!2sNo.+151%2C+Section+5%2C+Roosevelt+Rd%2C+Wenshan+District%2C+Taipei+City%2C+116!5e0!3m2!1sen!2stw!4v1515587029086'
            },
            {
                title: '醫院位置',
                info: '臺中市台中醫院 <br/> 地址 : 台中市三民路一段199號 <br/> 電話 : <a href="tel:02-2930-7930">(02) 2930-7930</a>',
                type: 'normal',
                map: 'https://www.google.com/maps/embed?pb=!3m1!4b1!4m5!3m4!1s0x34693d0d828edcd7:0xa9433e90bb5d04f1!8m2!3d24.1403638!4d120.6756035'
            },
            {
                title: '緊急事故聯絡電話',
                info: '警察局: <a href="tel:110">110 </a><br/> 消防隊:<a href="tel:119"> 119 </a> <br/> 勞工處 中區檢查所: <a href="tel:02-2255-0633">(02) 2255-0633 </a><br/> 台電服務所:  <a href="tel:02-2255-0633">(02) 2255-0633 </a><br/> 政風專線: <a href="tel:02-8733-5885">(02) 8733-5885 </a><br/> 環保專線: <a href="tel:02-2720-6301">(02) 2720-6301</a>',
                type: 'important'
            }
        ]
    },
    'key2': {
        date: new Date('2018-01-03').getTime (),
        list: [
            {
                title: '本日工作項目',
                info: '打掃衛生 <br/> 住戶Ａ',
                type: 'important',
                images: [
                    'http://www.ohcs-gz.net/uploads/20170609/1496996540792753.jpg',
                    'http://www.soundrise.com.tw/images/work/work_2_6-3.jpg'
                ]
            },
            {
                title: '應辦巡檢事項',
                info: 'ZoneA <br/> 巡檢作業',
                type: 'normal',
                images: [
                    'http://www.alpinedirect.com.tw/images/kenting20071029.jpg',
                    'http://img.ltn.com.tw/2015/new/nov/4/images/bigPic/600_8.jpg'
                ]
            },
            {
                title: '特別注意事項',
                info: '垃圾請集中放置 <br/> 如發生施工損鄰事件，受損戶請於本單位後一個月內以免權益受損。',
                type: 'urgent'
            }
        ]
    }
};


export const messages = [
    {
        day: 'Friday',
        time: '13:34'
    },
    {
        name: 'Vladimir',
        text: '現場勘察完成了嗎',
        avatar: 'img/avatar/4.jpg',
        date: '13:34',
        type: 'received'
    },
    {
        name: 'Jane',
        text: '部份完成，還有20%',
        type: 'sent',
        avatar: 'img/avatar/3.jpg',
        date: '13:50'
    }
];