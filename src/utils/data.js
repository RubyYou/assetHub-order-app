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
              avatar: 'img/avatar/4.jpg'}
        ]
    }
};
  
export const posts = {
    'key1': {
        date: new Date('2018-01-03').getTime (),
        list: [
            { 
                title: '警察局位置', 
                info: 'When a JSON object is saved to the database, the object properties are automatically mapped to database child locations in a nested fashion.', 
                type: 'urgent',
                url: 'give map location'
            },
            { 
                title: '附近醫院位置', 
                info: 'When a JSON object is saved to the database, the object properties are automatically mapped to database child locations in a nested fashion.', 
                type: 'normal',
                url: 'give map location'
            },
            { 
                title: '車輛調度', 
                info: 'When a JSON object is saved to the database, the object properties are automatically mapped to database child locations in a nested fashion.', 
                type: 'important'
            }
        ]
    },
    'key2': {
        date: new Date('2018-01-04').getTime (),
        list: [
            { 
                title: '緊急事件02', 
                info: 'When a JSON object is saved to the database, the object properties are automatically mapped to database child locations in a nested fashion.', 
                type: 'urgent'
            },
            { 
                title: '木作圖更新23', 
                info: 'When a JSON object is saved to the database, the object properties are automatically mapped to database child locations in a nested fashion.', 
                type: 'normal'
            },
            { 
                title: '車輛調度12', 
                info: 'When a JSON object is saved to the database, the object properties are automatically mapped to database child locations in a nested fashion.', 
                type: 'important'
            }
        ]
    }
};
  