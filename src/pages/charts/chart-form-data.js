export const SlideChartFormA = {
    formTitle: "傾斜觀測管檢查表",
    url: '/forms/standard/SlideChartFormB',
    sign: false,
    content: [
        {
            title: '深度',
            data: 'depth',
            customOptions: [
              'SI-1 (45m)', 'AI-2 (35m)', 'AI-4 (45m)', 'AI-5 (40m)','EH-1 (50m)',
              'EH-2 (45m)', 'EH-3 (35m)', 'EH-4 (45m)', 'EH-5 (35m)', 'EH-6 (60m)',
              'EH-7 (70m)', 'EH-8 (60m)', 'EH-10 (70m)', 'J09-1 (35m)', 'J09-2 (35m)'
            ]
        },
        {
            title: '面向',
            data: 'face',
            customOptions: [
              'A面',
              'B面'
            ]
        },
        { input: '0.00', data_input: '0.00', input_type: 'number'},
        { input: '0.50', data_input: '0.50', input_type: 'number'},
        { input: '1.00', data_input: '1.00', input_type: 'number'},
        { input: '1.50', data_input: '1.50', input_type: 'number'},
        { input: '2.00', data_input: '2.00', input_type: 'number'},
        { input: '2.50', data_input: '2.50', input_type: 'number'},
    ]
}

export const SlideChartFormB = {
    formTitle: "傾度儀檢查表",
    url: '/forms/standardSections/SlideChartFormA',
    sign: false,
    sections: [
      { title: "",
        content: [
            { input: '刻度', data_input:"number"},
        ]
      },
      { title: "量測讀數局測向",
        content: [
            { input: '1-3', data_input: '1-3', input_type: 'number'},
            { input: '2-4', data_input: '2-4', input_type: 'number'},
            { input: '3-1', data_input: '3-1', input_type: 'number'},
            { input: '4-2', data_input: '4-2', input_type: 'number'},
        ]
      },
      { title: "1-3傾斜量",
        content: [
            { input: '度', data_input: '1-3-degree', input_type: 'number'},
            { input: '分', data_input: '1-3-minus', input_type: 'number'},
            { input: '秒', data_input: '1-3-second', input_type: 'number'},
            { input: '徑度量', data_input: '1-3-radian', input_type: 'number'}
        ]
      },
      { title: "2-4傾斜量",
        content: [
            { input: '度', data_input: '2-4-degree', input_type: 'number'},
            { input: '分', data_input: '2-4-minus', input_type: 'number'},
            { input: '秒', data_input: '2-4-second', input_type: 'number'},
            { input: '徑度量', data_input: '2-4-radian', input_type: 'number'}
        ]
      }
    ]
}