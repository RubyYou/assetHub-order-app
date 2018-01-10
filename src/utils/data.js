export const vehicles = {
    'key1': {
      date: new Date('2018-01-03').getTime (),
      vehicles: [
        { name: '挖土機', model: 'M1236' },
        { name: '重量機', model: 'S4623' },
        { name: '推土機', model: 'T46963' }
      ]
    },
    'key2': {
      date: new Date('2018-01-04').getTime (),
      vehicles: [
        { name: '挖土機', model: 'M1236' },
        { name: '推土機', model: 'S4623' },
        { name: '混泥土機', model: 'T46963' }
      ]
    },
    'key3': {
      date: new Date('2018-01-05').getTime (),
      vehicles: [
        { name: '挖土機', model: 'M1236' },
        { name: '混泥土機', model: 'S4623' },
        { name: '重量機', model: 'T46963' }
      ]
    }
};
  
export const employees = {
    'key1': {
        date: new Date('2018-01-03').getTime (),
        employees: [
            { name: '王小明', 
              location: '2F', 
              job: '勘查現場設備',
              arrived: new Date('2018-01-03 8:02').getTime (),
              avatar: 'img/avatar/1.jpg'
            },
            { name: '黃小明1d2', 
              location: '山區', 
              job : '啟動挖土機',
              arrived: new Date('2018-01-03 8:03').getTime (),
              avatar: 'img/avatar/2.jpg'
            },
            { 
              name : '張小華', 
              location : 'B1',
              job : '完成環境安裝',
              arrived: new Date('2018-01-03 8:05').getTime (),
              avatar: 'img/avatar/3.jpg'
            }
        ]
    },
    'key2': {
        date: new Date('2018-01-04').getTime (),
        employees: [
            { name: '王小明df', 
              location: '2F', 
              job : '勘查現場設備',
              arrived: new Date('2018-01-04 9:00').getTime (),
              avatar: 'img/avatar/4.jpg'
            },
            { 
              name: '黃小明df', 
              location: '水箱', 
              job : '完成環境安裝',
              arrived: new Date('2018-01-04 8:35').getTime (),
              avatar: 'img/avatar/5.jpg'
            },
            { name: '張小華df', 
              location: 'B1', 
              job : '啟動挖土機',
              arrived: new Date('2018-01-04 7:25').getTime (),
              avatar: 'img/avatar/1.jpg'}
        ]
    },
    'key3': {
        date: new Date('2018-01-05').getTime (),
        employees: [
            { name: '王小明', 
              location: '2F', 
              job : '啟動挖土機',
              arrived: new Date('2018-01-05 8:00').getTime (),
              avatar: 'img/avatar/2.jpg'
            },
            { name: '黃小明dw', 
              location: 'Slop', 
              job : '完成環境安裝',
              arrived: new Date('2018-01-05 8:20').getTime (),
              avatar: 'img/avatar/3.jpg'
            },
            { name: '張小華', 
              location: 'B1', 
              job : '勘查現場設備',
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
                info: '萬盛派出所 <br/> 地址 ： 臺北市羅斯福路五段151號 <br/> 電話：<a href="tel:02-2931-2502">(02) 2931-2502</a>、<a href="tel:02-2932-7142">(02) 2932-7142</a>', 
                type: 'urgent',
                map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.888369896284!2d121.53671961624407!3d25.003908845648198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa1dbb3b7965%3A0x81398b61aff41f3e!2sNo.+151%2C+Section+5%2C+Roosevelt+Rd%2C+Wenshan+District%2C+Taipei+City%2C+116!5e0!3m2!1sen!2stw!4v1515587029086'
            },
            { 
                title: '醫院位置', 
                info: '臺北市萬芳醫院 <br/> 地址 : 台北市文山區興隆路三段111號 <br/> 電話 : <a href="tel:02-2930-7930">(02) 2930-7930</a>', 
                type: 'normal',
                map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.012401815357!2d121.55539581624403!3d24.999694545817004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa130e417883%3A0x94f8812bf0d318c4!2sNo.+111%2C+Section+3%2C+Xinglong+Road%2C+Wenshan+District%2C+Taipei+City%2C+116!5e0!3m2!1sen!2stw!4v1515587171707'
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
                info: '折模作業 <br/> 鋼筋綁紮', 
                type: 'important',
                images: [
                    'http://www.ohcs-gz.net/uploads/20170609/1496996540792753.jpg',
                    'http://www.soundrise.com.tw/images/work/work_2_6-3.jpg'
                ]
            },
            { 
                title: '應辦安全衛生事項', 
                info: '安全帽 <br/> 吊掛作業', 
                type: 'normal',
                images: [
                    'http://www.alpinedirect.com.tw/images/kenting20071029.jpg',
                    'http://img.ltn.com.tw/2015/new/nov/4/images/bigPic/600_8.jpg'
                ]
            },
            { 
                title: '特別注意事項', 
                info: '垃圾請集中放置 <br/> 如發生施工損鄰事件，受損戶請於本工程屋頂版燒置後一個月內前向新北市政府工務局提出，以免權益受損。', 
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