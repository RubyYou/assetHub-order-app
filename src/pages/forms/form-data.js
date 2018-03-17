export const SpaceCheckFormA = {
    formTitle: "局限空間作業檢點表",
    url: '/forms/standardSections/SpaceCheckFormA',
    sections: [
     { title: "一、許可",
      content: [
       { title: '必須要進去嗎', data:"check1",
         note: "改善措施內容", data_note: "check1Note"
       },
       { title: '該場所是否已准許進入工作', data:"check2",
         note: "改善措施內容", data_note: "check2Note"
       },
       { title: '是否已提供緊急聯絡電話', data:"check3",
         note: "改善措施內容", data_note: "check3Note"
       }
      ]},
    {
     title: "二、空氣測試",
     content: [
       { title: '空氣測試儀器是否已校正', data:"check4",
         note: "改善措施內容", data_note: "check4Note"
       },
       { title: '局限空間於本次作業前是否已測試', data:"check5",
         note: "改善措施內容", data_note: "check5Note"
       },
       { title: '氧氣濃度是否介於18%〜21%之間', data:"check6",
         note: "改善措施內容", data_note: "check6Note"
       },
       { title: '是否具有毒性、易燃性或缺氧', data:"check7",
         note: "硫化氫 一氧化碳 可燃性氣體 其他", data_note: "check7Note"
       }
     ]
    },
    {
     title: "三、監測",
     content: [
       { title: '是否將監測工作期間的空氣', data:"check8",
         note: "改善措施內容", data_note: "check8Note"
       },
       { title: '是否將於工作期間持續監測', data:"check9",
         note: "改善措施內容", data_note: "check9Note"
       },
       { title: '是否為非持續性監測', data:"check10",
         note: "改善措施內容", data_note: "check10Note"
       }
     ]
    },
    {
     title: "四、通風",
     content: [
       { title: '是否已通風換氣過', data:"check11",
         note: "改善措施內容", data_note: "check11Note"
       },
       { title: '通風量是否足夠', data:"check12",
         note: "改善措施內容", data_note: "check12Note"
       },
       { title: '是否將於工作期間持續通風', data:"check13",
         note: "改善措施內容", data_note: "check13Note"
       },
       { title: '空氣來源是否新鮮（無排放廢氣、灰塵或有毒物質）', data:"check14",
         note: "改善措施內容", data_note: "check14Note"
       },
       { title: '通風後是否再測定過（確認安全性）', data:"check15",
         note: "改善措施內容", data_note: "check15Note"
       }
     ]
    },
    {
     title: "五、隔離",
     content: [
       { title: '是否已完全隔離危害能源', data:"check16",
         note: "改善措施內容", data_note: "check16Note"
       },
       { title: '供電系統是否已上鎖', data:"check17",
         note: "改善措施內容", data_note: "check17Note"
       },
       { title: '機械設備之轉動部份是否已卡住，使其不能轉動或傳動以免造成夾捲傷害', data:"check18",
         note: "改善措施內容", data_note: "check18Note"
       },
       { title: '導管是否已洩壓', data:"check19",
         note: "改善措施內容", data_note: "check19Note"
       },
     ]
    },
    {
     title: "六、衣物/設備",
     content: [
       { title: '是否需特殊之工作服（安全鞋、防護衣、安全眼鏡等）', data:"check20",
         note: "如是，請寫明", data_note: "check20Note"
       },
       { title: '是否需特殊設備（搶救設備、通訊設備等）', data:"check21",
         note: "如是，請寫明", data_note: "check21Note"
       },
       { title: '是否需特殊工具（防火、防爆、具漏電斷路功能之工具）', data:"check22",
         note: "如是，請寫明", data_note: "check22Note"
       }
     ]
    },
    {
     title: "七、呼吸防護具",
     content: [
       { title: '是否置備合格之呼吸防護具', data:"check23",
         note: "如是，請寫明", data_note: "check23Note"
       },
       { title: '是否需配戴呼吸防護具', data:"check24",
         note: "如是，請寫明", data_note: "check24Note"
       },
       { title: '佩戴呼吸防護具是否可通過入口', data:"check25",
         note: "如是，請寫明", data_note: "check25Note"
       },
     ]
    },
    {
     title: "八、救援設備",
     content: [
       { title: '於深水井上方設置1條救生母索，供監測人員使用', data:"check26",
         note: "如是，請寫明", data_note: "check26Note"
       },
       { title: '局限空間作業人員是否佩戴背負式安全帶加捲揚式防墜器', data:"check27",
         note: "如是，請寫明", data_note: "check27Note"
       },
       { title: '局限空間作業人員是否佩戴四用氣體偵測器', data:"check28",
         note: "如是，請寫明", data_note: "check28Note"
       },
     ]
    },
    {
     title: "九、教育訓練",
     content: [
       { title: '是否已受過如何使用呼吸防護具的訓練', data:"check29",
         note: "如是，請寫明", data_note: "check29Note"
       },
       { title: '是否有已受過急救/CPR訓練之人員在現場', data:"check30",
         note: "如是，請寫明", data_note: "check30Note"
       },
       { title: '施工人員是否受過局空間作業訓練', data:"check31",
         note: "如是，請寫明", data_note: "check31Note"
       },
     ]
    },
    {
     title: "十、監視/搶救",
     content: [
       { title: '是否有場外監視人員進行全程監視及通訊工作', data:"check32",
         note: "如是，請寫明", data_note: "check32Note"
       },
       { title: '監視人員是否可全程監視及進行通訊聯繫', data:"check33",
         note: "如是，請寫明", data_note: "check33Note"
       },
       { title: '監視人員是否受過搶救訓練', data:"check34",
         note: "如是，請寫明", data_note: "check34Note"
       },
       { title: '是否設置搶救人員裝置（救生母索、人員固定擔架', data:"check35",
         note: "如是，請寫明", data_note: "check35Note"
       },
       { title: '是否規劃整個單位之緊急應變程序', data:"check36",
         note: "如是，請寫明", data_note: "check36Note"
       },
       { title: '是否熟知緊急應變程序', data:"check37",
         note: "如是，請寫明", data_note: "check37Note"
       },
       { title: '意外發生時是否知道如何通告及通告對象為為何', data:"check38",
         note: "如是，請寫明", data_note: "check38Note"
       }
     ]
    }
  ]
}

export const SpaceCheckFormB = {
  formTitle: "局限空間作業設備檢查表",
  url: '/forms/standardSections/SpaceCheckFormB',
  sections: [
    { title: "檢查項目",
      content: [
      { title: '1.局限空間作業場所告示牌', data:"check1",
        note: "備註", data_note: "check1Note"
      },
      { title: '2.工程告示牌', data:"check2",
        note: "備註", data_note: "check2Note"
      },
      { title: '3.安全衛生告示牌', data:"check3",
        note: "備註", data_note: "check3Note"
      },
      { title: '4.工地安全衛生工作守則', data:"check4",
        note: "備註", data_note: "check4Note"
      },
      { title: '5.發電機（含接地）', data:"check5",
        note: "備註", data_note: "check5Note"
      },
      { title: '6.電氣設備（分電箱、漏電斷路器、無熔絲開關、接地）', data:"check6",
        note: "備註", data_note: "check6Note"
      },
      { title: '7.通風換氣設備', data:"check7",
        note: "備註", data_note: "check7Note"
      },
      { title: '8.開口護欄', data:"check8",
        note: "備註", data_note: "check8Note"
      },
      { title: '9.四用氣體偵測器（主動式）', data:"check9",
        note: "備註", data_note: "check9Note"
      },
      { title: '10.通訊設備（對講機', data:"check10",
        note: "備註", data_note: "check10Note"
      },
      { title: '14.負背式安全帶加捲揚式防墜器', data:"check11",
        note: "備註", data_note: "check11Note"
      },
      { title: '15.空氣呼吸器（供氣式)', data:"check12",
        note: "備註", data_note: "check12Note"
      },
      { title: '16.生命偵測器', data:"check13",
        note: "備註", data_note: "check13Note"
      },
      { title: '17.井口氣體偵測電子顯示器(自動報警)', data:"check14",
        note: "備註", data_note: "check14Note"
      },
      { title: '18.安全帽', data:"check15",
        note: "備註", data_note: "check15Note"
      },
      { title: '19.安全鞋（防滑鞋）', data:"check16",
        note: "備註", data_note: "check16Note"
      },
      { title: '20.照明設備', data:"check17",
        note: "備註", data_note: "check17Note"
      }
    ]
  }
  ]
}

export const VehicleCheckFormA = {
  formTitle: "一般車輛每日作業檢點表",
  url: '/forms/standard/VehicleCheckFormA',
  content: [
    { title: '制動器、連結裝置、各種儀器之有無異常', data:"check1",
      note: "改善措施內容", data_note: "check1Note"
    },
    { title: '蓄電池、配線、控制裝置之有無異常', data:"check2",
      note: "改善措施內容", data_note: "check2Note"
    },
    { title: '機油界線內、引擎系統有無漏油、加速腳踏板無卡住', data:"check3",
      note: "改善措施內容", data_note: "check3Note"
    },
    { title: '引擎發動後有無異聲、排煙淡色', data:"check4",
      note: "改善措施內容", data_note: "check4Note"
    },
    { title: '變速油界線內，變速箱系統有無漏油、起動後無異聲', data:"check5",
      note: "改善措施內容", data_note: "check5Note"
    },
    { title: '手剎車、腳剎車性能是否良好', data:"check6",
      note: "改善措施內容", data_note: "check6Note"
    },
    { title: '剎車油量界線內，剎車系統有無漏油', data:"check7",
      note: "改善措施內容", data_note: "check7Note"
    },
    { title: '離合器踏板是否正常', data:"check8",
      note: "改善措施內容", data_note: "check8Note"
    },
    { title: '離合器作用是否正常、無異聲', data:"check9",
      note: "改善措施內容", data_note: "check9Note"
    },
    { title: '方向盤游隙允差是否在範圍內', data:"check10",
      note: "改善措施內容", data_note: "check10Note"
    },
    { title: '轉像拉桿接頭有無鬆動，軸承無異聲', data:"check11",
      note: "改善措施內容", data_note: "check11Note"
    },
    { title: '喇叭正常、前後照明及警示燈具正常', data:"check12",
      note: "改善措施內容", data_note: "check12Note"
    },
    { title: '電瓶水量在允差刻度間、通氣孔應通暢', data:"check13",
      note: "改善措施內容", data_note: "check13Note"
    },
    { title: '電瓶接頭有無鬆動', data:"check14",
      note: "改善措施內容", data_note: "check14Note"
    },
    { title: '燃油箱油量足夠、油箱蓋通氣孔暢通', data:"check15",
      note: "改善措施內容", data_note: "check15Note"
    },
    { title: '油箱牢固有無洩漏', data:"check16",
      note: "改善措施內容", data_note: "check16Note"
    },
    { title: '水量足夠、水箱與管路有無漏水', data:"check17",
      note: "改善措施內容", data_note: "check17Note"
    },
    { title: '胎面有無釘刺物、無刮裂痕', data:"check18",
      note: "改善措施內容", data_note: "check18Note"
    },
    { title: '胎面花紋厚度是否在標準內', data:"check19",
      note: "改善措施內容", data_note: "check19Note"
    },
    { title: '鋼圈有無變形', data:"check20",
      note: "改善措施內容", data_note: "check20Note"
    },
    { title: '固定螺絲有無變形、鬆動', data:"check21",
      note: "改善措施內容", data_note: "check21Note"
    }
  ]
}

export const VehicleCheckFormB = {
  formTitle: "一般車輛安全自動檢查表",
  url: '/forms/standard/VehicleCheckFormB',
  content: [
    { title: '制動器、離合器操作裝置是否正常', data:"check1",
      note: "改善措施內容", data_note: "check1Note"
    },
    { title: '方向盤裝置是否穩定靈活', data:"check2",
      note: "改善措施內容", data_note: "check2Note"
    },
    { title: '剎車器是否能停止不致滑動', data:"check3",
      note: "改善措施內容", data_note: "check3Note"
    },
    { title: '配線開關是否完整', data:"check4",
      note: "改善措施內容", data_note: "check4Note"
    },
    { title: '主軸軸承、引擎性能是否正常', data:"check5",
      note: "改善措施內容", data_note: "check5Note"
    },
    { title: '頂蓬及桅桿是否牢固', data:"check6",
      note: "改善措施內容", data_note: "check6Note"
    },
    { title: '外殼是否完整', data:"check7",
      note: "改善措施內容", data_note: "check7Note"
    },
    { title: '胎壓是否足夠', data:"check8",
      note: "改善措施內容", data_note: "check8Note"
    },
    { title: '各項附屬螺栓是否齊全', data:"check9",
      note: "改善措施內容", data_note: "check9Note"
    },
    { title: '電瓶、水箱是否正常', data:"check10",
      note: "改善措施內容", data_note: "check10Note"
    },
    { title: '吊升旋轉行走動作試驗', data:"check11",
      note: "改善措施內容", data_note: "check11Note"
    }
  ]
}

export const VehicleCheckFormC = {
  formTitle: "車輛系營建機械每月安全自動檢查表",
  url: '/forms/standard/VehicleCheckFormC',
  content: [
    { title: '駕駛人員精神狀況是否良好', data:"check1",
      note: "改善措施內容", data_note: "check1Note"
    },
    { title: '機械操作時，需有警戒、指揮人員、避免發生意外', data:"check2",
      note: "改善措施內容", data_note: "check2Note"
    },
    { title: '地面是否平整、強固、避免機械翻覆', data:"check3",
      note: "改善措施內容", data_note: "check3Note"
    },
    { title: '夜間作業時，照明需確實足夠', data:"check4",
      note: "改善措施內容", data_note: "check4Note"
    },
    { title: '施工現場需備有緊急聯絡電話清單', data:"check5",
      note: "改善措施內容", data_note: "check5Note"
    },
    { title: '掛吊、運載、搬運時需確實，避免鬆脫', data:"check6",
      note: "改善措施內容", data_note: "check6Note"
    },
    { title: '電氣作業，需由專業人員施作', data:"check7",
      note: "改善措施內容", data_note: "check7Note"
    },
    { title: '制動器操作裝置是否正常', data:"check8",
      note: "改善措施內容", data_note: "check8Note"
    },
    { title: '離合器操作裝置是否正常', data:"check9",
      note: "改善措施內容", data_note: "check9Note"
    },
    { title: '操作裝置是否齊全', data:"check10",
      note: "改善措施內容", data_note: "check10Note"
    },
    { title: '作業裝置是否適當', data:"check11",
      note: "改善措施內容", data_note: "check11Note"
    },
    { title: '鋼索、鏈有無損傷斷裂', data:"check12",
      note: "改善措施內容", data_note: "check12Note"
    },
    { title: '吊斗有無損傷斷裂', data:"check13",
      note: "改善措施內容", data_note: "check13Note"
    }
  ]
}

export const FacilityCheckFormA = {
  formTitle: "門型起重機每日安全自動檢查表",
  url: '/forms/standard/FacilityCheckFormA',
  sections: [
    { title: "一般規定",
      content: [
        { title: '作業人員是否穿著防滑性佳之安全鞋', data:"check1",
          note: "改善措施內容", data_note: "check1Note"
        },
        { title: '強風、大雨等惡劣氣候時是否禁止工作', data:"check2",
          note: "改善措施內容", data_note: "check2Note"
        },
        { title: '操作人員是否於起重機吊有荷重時離開操作位置', data:"check3",
          note: "改善措施內容", data_note: "check3Note"
        },
        { title: '對作業器具、工具、安全帽及安全帶是否檢查後方才使用', data:"check4",
          note: "改善措施內容", data_note: "check4Note"
        },
        { title: '從事塔吊組、拆之移動式起重機具是否經檢查合格', data:"check5",
          note: "改善措施內容", data_note: "check5Note"
        },
        { title: '固定式起重機操作手、吊掛手是否已有合格證照', data:"check6",
          note: "改善措施內容", data_note: "check6Note"
        }
      ]},
      { title: "墜落防止",
        content: [
          { title: '攀登梯、階梯構材有否銹蝕、鬆動', data:"check7",
            note: "改善措施內容", data_note: "check7Note"
          },
          { title: '構台補強是否足夠', data:"check8",
            note: "改善措施內容", data_note: "check8Note"
          },
          { title: '人員安全帽、安全帶是否已確實使用', data:"check9",
            note: "改善措施內容", data_note: "check9Note"
          }]
      },
      { title: "飛落防止",
        content: [
          { title: '吊具、鋼索是否已有截斷、磨損、變形、扭結', data:"check10",
            note: "改善措施內容", data_note: "check10Note"
          },
          { title: '過捲預防及過負荷預防裝置是否正常', data:"check11",
            note: "改善措施內容", data_note: "check11Note"
          },
          { title: '吊鉤防止吊物脫落之防滑舌片裝置是否正常', data:"check12",
            note: "改善措施內容", data_note: "check12Note"
          },
          { title: '吊物是否超過額定荷重', data:"check13",
            note: "改善措施內容", data_note: "check13Note"
          },
          { title: '門型固定式起重機作業時是否嚴禁人員進入吊掛物之下方', data:"check14",
            note: "改善措施內容", data_note: "check14Note"
          }]
      },
      { title: "倒塌防止",
        content: [
        { title: '桁架、鞍架、伸臂等結構是否安裝穩固', data:"check15",
          note: "改善措施內容", data_note: "check15Note"
        },
        { title: '齒輪、軸、制動裝置、捲胴、槽輪等機械性能是否正常', data:"check16",
          note: "改善措施內容", data_note: "check16Note"
        },
        { title: '強風時制動裝置是否放置空擋', data:"check17",
          note: "改善措施內容", data_note: "check17Note"
        }]
      },
      { title: "感電防止",
        content: [
        { title: '開關器是否正常', data:"check18",
          note: "改善措施內容", data_note: "check18Note"
        },
        { title: '配線、供電線有否破損', data:"check19",
          note: "改善措施內容", data_note: "check19Note"
        },
        { title: '警報裝置、控制裝置等電器部份是否正常', data:"check20",
          note: "改善措施內容", data_note: "check20Note"
        },
        { title: '各分電盤是否裝設高速型漏電斷路器(額定感度電流30mA，跳脫時間0.1秒以內)', data:"check21",
          note: "改善措施內容", data_note: "check21Note"
        }]
      }
    ]
}

export const FacilityCheckFormB = {
  formTitle: "門型起重機每月定期檢查表",
  url: '/forms/standard/FacilityCheckFormB',
  sections: [
    { title: "過捲預防裝置",
      content: [
        { title: '1.吊物升降極限開關 (動作是否確實螺絲有否鬆弛)', data:"check1",
          note: "改善處理情形", data_note: "check1Note"
        }]
    },
    { title: "剎車器",
      content: [
        { title: '2.電磁升降剎車 (反覆操作上升查看其動作狀況停止位置)', data:"check2",
          note: "改善處理情形", data_note: "check2Note"
        },
        { title: '3.電磁走行剎車 (反覆操作上升查看其動作狀況停止位置)', data:"check3",
          note: "改善處理情形", data_note: "check3Note"
        },
        { title: '4.電流或其他控制下降剎車 (查看降落速度是否適當)', data:"check4",
          note: "改善處理情形", data_note: "check4Note"
        }]
    },
    { title: "警報裝置",
      content: [
        { title: '5.行走警鈴 (行走時響亮)', data:"check5",
          note: "改善處理情形", data_note: "check5Note"
        },
        { title: '6.喇叭 (按動時鳴叫)', data:"check6",
          note: "改善處理情形", data_note: "check6Note"
        }]
    },
    { title: "鋼索",
      content: [
        { title: '7.鋼索 (檢示有無損傷斷裂)', data:"check7",
          note: "改善處理情形", data_note: "check7Note"
        }]
    },
    { title: "吊鍊",
      content: [
        { title: '8.吊鍊 (檢示有無損傷斷裂)', data:"check8",
          note: "改善處理情形", data_note: "check8Note"
        }]
    },
    { title: "吊鉤",
      content: [
        { title: '9.吊鉤 (檢示有無損傷斷裂)', data:"check9",
          note: "改善處理情形", data_note: "check9Note"
        },
        { title: '10.吊鉤安全栓 (檢示有無損傷斷裂)', data:"check10",
          note: "改善處理情形", data_note: "check10Note"
        },
        { title: '11.配線 (被覆是否剝損劣化)', data:"check11",
          note: "改善處理情形", data_note: "check11Note"
        }]
    },
    { title: "配線",
      content: [
        { title: '12.配線 (終端螺栓是否鬆弛)', data:"check12",
          note: "改善處理情形", data_note: "check12Note"
        },
        { title: '13.配線 (絕緣 儀器測定 0.1MΩ以上)', data:"check13",
          note: "改善處理情形", data_note: "check13Note"
        }]
    },
    { title: "集電裝置",
      content: [
        { title: '14.集電裝置 (螺絲是否鬆弛 / 檢視是否磨耗)', data:"check14",
          note: "改善處理情形", data_note: "check14Note"
        }]
    },
    { title: "配電盤",
      content: [
        { title: '15.配電盤 (檢視有無異狀)', data:"check15",
          note: "改善處理情形", data_note: "check15Note"
        },
        { title: '16.無熔絲斷路器 (核定電流通過是否跳脫)', data:"check16",
          note: "改善處理情形", data_note: "check16Note"
        }]
    },
    { title: "開關",
      content: [
        { title: '17.保險絲 (保險絲是否符合規定)', data:"check17",
          note: "改善處理情形", data_note: "check17Note"
        },
        { title: '18.電磁接觸 (螺絲是否鬆弛是否接觸不良)', data:"check18",
          note: "改善處理情形", data_note: "check18Note"
        }]
    },
    { title: "控制器",
      content: [
        { title: '19.直接控制器 (反覆操作查看其動作狀況)', data:"check19",
          note: "改善處理情形", data_note: "check19Note"
        },
        { title: '20.間接控制器 (反覆操作查看其動作狀況及電譯情形)', data:"check20",
          note: "改善處理情形", data_note: "check20Note"
        }]
    },
    { title: "鋼纜",
      content: [
        { title: '21.鋼纜 (檢視)', data:"check21",
          note: "改善處理情形", data_note: "check21Note"
        }]
    },
    { title: "捲揚機",
      content: [
        { title: '22.主副捲揚盤 (有無損傷及異狀)', data:"check22",
          note: "改善處理情形", data_note: "check22Note"
        }]
    }
  ]
}

export const FacilityCheckFormC = {
  formTitle: "挖土機作業安全",
  url: '/forms/standard/VehicleCheckFormC',
  content: [
    { title: '確認履帶鬆緊度適當', data:"check1",
      note: "改善措施內容", data_note: "check1Note"
    },
    { title: '挖斗、斗齒、挖斗力壁完好，連結無鬆脫變形', data:"check2",
      note: "改善措施內容", data_note: "check2Note"
    },
    { title: '油壓管良好無漏油', data:"check3",
      note: "改善措施內容", data_note: "check3Note"
    },
    { title: '制動、操作裝置齊全功能正常', data:"check4",
      note: "改善措施內容", data_note: "check4Note"
    },
    { title: '作業範圍高架電線障礙排除或設絕緣保護管套並設專人指揮', data:"check5",
      note: "改善措施內容", data_note: "check5Note"
    },
    { title: '操作室玻璃窗、後視鏡潔淨保持良好視線', data:"check6",
      note: "改善措施內容", data_note: "check6Note"
    },
    { title: '喇叭操作功能正常音量足夠', data:"check7",
      note: "改善措施內容", data_note: "check7Note"
    },
    { title: '照明足夠且正常使用', data:"check8",
      note: "改善措施內容", data_note: "check8Note"
    },
    { title: '挖土、迴旋動作功能是否正常', data:"check9",
      note: "改善措施內容", data_note: "check9Note"
    },
    { title: '機油、燃料油是否足夠且油箱蓋緊閉', data:"check10",
      note: "改善措施內容", data_note: "check10Note"
    },
    { title: '水箱水量是否足夠，引擎溫度是否正常', data:"check11",
      note: "改善措施內容", data_note: "check11Note"
    },
    { title: '確認操作室頂棚關閉防止土石、物體飛落', data:"check12",
      note: "改善措施內容", data_note: "check12Note"
    }
  ]
}

export const FacilityCheckFormD = {
  formTitle: "吊掛用具作業安全自動檢查表",
  url: '/forms/standardSections/FacilityCheckFormD',
  sections: [
    { title: "吊索",
      content: [
        { title: '鋼索的一燃間有10﹪以上的素線截斷者', data:"check1",
          note: "改善措施內容", data_note: "check1Note"
        },
        { title: '直徑減少達公稱直徑7﹪以上者', data:"check2",
          note: "改善措施內容", data_note: "check2Note"
        },
        { title: '已扭結者', data:"check3",
          note: "改善措施內容", data_note: "check3Note"
        },
        { title: '有顯著變形或腐蝕者', data:"check4",
          note: "改善措施內容", data_note: "check4Note"
        },
        { title: '末端結頭部分異常者', data:"check5",
          note: "改善措施內容", data_note: "check5Note"
        },
        { title: '鋼索套有裂紋產生', data:"check6",
          note: "改善措施內容", data_note: "check6Note"
        },
        { title: '鋼索套有變形情形，並壓迫且傷及鋼。', data:"check7",
          note: "改善措施內容", data_note: "check7Note"
        }
      ]
    },
    { title: "吊鏈",
      content: [
        { title: '延伸長度超過5﹪以上', data:"check8",
          note: "改善處理情形", data_note: "check8Note"
        },
        { title: '環的斷面直徑減少10﹪以上', data:"check9",
          note: "改善處理情形", data_note: "check9Note"
        },
        { title: '有無龜裂', data:"check10",
          note: "改善處理情形", data_note: "check10Note"
        },
        { title: '有無顯著變形', data:"check11",
          note: "改善處理情形", data_note: "check11Note"
        }
      ]
    },
    { title: "吊勾、吊環",
      content: [
        { title: '有無顯著變形', data:"check12",
          note: "改善處理情形", data_note: "check12Note"
        },
        { title: '有無顯著磨耗', data:"check13",
          note: "改善處理情形", data_note: "check13Note"
        },
        { title: '有無龜裂情形', data:"check14",
          note: "改善處理情形", data_note: "check14Note"
        },
        { title: '防滑舌片有無正常', data:"check15",
          note: "改善處理情形", data_note: "check15Note"
        }
      ]
    }
  ]
}

export const FacilityCheckFormE = {
  formTitle: "施工架(□組立□拆除)作業",
  url: '/forms/standard/FacilityCheckFormE',
  content: [
    { title: '作業主管是否分配勞工工作並在現場監督勞工從事施工架組配、拆卸作業', data:"check1",
      note: "改善措施內容", data_note: "check1Note"
    },
    { title: '材料是否經檢查無缺陷後方始用', data:"check2",
      note: "改善措施內容", data_note: "check2Note"
    },
    { title: '是否將作業時間、範圍及順序等告知作業勞工', data:"check3",
      note: "改善措施內容", data_note: "check3Note"
    },
    { title: '對組裝或拆卸作業人員是否監督確實戴安全帽及安全帶', data:"check4",
      note: "改善措施內容", data_note: "check4Note"
    },
    { title: '施工架是否兩側設置交叉拉桿及下拉桿', data:"check5",
      note: "改善措施內容", data_note: "check5Note"
    },
    { title: '施工架外側設置安全母索', data:"check6",
      note: "改善措施內容", data_note: "check6Note"
    },
    { title: '吊升或卸放材料、器具、工具等是否使用吊索、吊帶等', data:"check7",
      note: "改善措施內容", data_note: "check7Note"
    },
    { title: '分段逐層拆剪施工架之繫牆桿', data:"check8",
      note: "改善措施內容", data_note: "check8Note"
    },
    { title: '架材之按裝、鬆弛狀況', data:"check9",
      note: "改善措施內容", data_note: "check9Note"
    },
    { title: '架材是否損傷', data:"check10",
      note: "改善措施內容", data_note: "check10Note"
    },
    { title: '基腳之下沈、滑動之狀況', data:"check11",
      note: "改善措施內容", data_note: "check11Note"
    },
    { title: '在垂直向≦5.5M、水平向≦7.5M與結構物妥實連接', data:"check12",
      note: "改善措施內容", data_note: "check12Note"
    },
    { title: '施工架拆除時之材料有突出之釘類均應釘入或拔除', data:"check13",
      note: "改善措施內容", data_note: "check13Note"
    },
    { title: '固定材料與固定金屬配件之損傷及腐蝕狀況', data:"check14",
      note: "改善措施內容", data_note: "check14Note"
    }
  ]
}

export const FacilityCheckFormF = {
  formTitle: "施工架作業每週安全自動檢查表",
  url: '/forms/standard/FacilityCheckFormF',
  content: [
    { title: '架材之損傷、安裝狀況', data:"check1",
      note: "改善措施內容", data_note: "check1Note"
    },
    { title: '立柱、橫檔、踏腳桁等之固定部分，接觸部分及安裝部分之鬆弛狀況', data:"check2",
      note: "改善措施內容", data_note: "check2Note"
    },
    { title: '固定材料與固定金屬配件之損傷及腐蝕狀況', data:"check3",
      note: "改善措施內容", data_note: "check3Note"
    },
    { title: '扶手、護欄等之拆卸及脫落狀況', data:"check4",
      note: "改善措施內容", data_note: "check4Note"
    },
    { title: '基腳之下沈及滑動狀況', data:"check5",
      note: "改善措施內容", data_note: "check5Note"
    },
    { title: '斜撐材、索條、橫檔等補強材之狀況', data:"check6",
      note: "改善措施內容", data_note: "check6Note"
    },
    { title: '立柱、踏腳桁、橫檔等之損傷狀況', data:"check7",
      note: "改善措施內容", data_note: "check7Note"
    }
  ]
}

export const FacilityCheckFormG = {
  formTitle: "施工爬梯（上下設備）作業安全自動檢查表",
  url: '/forms/standardSections/FacilityCheckFormG',
  sections: [
    { title: "墜落防止",
      content: [
        { title: '對組裝或拆卸作業人員之安全帽或安全帶是否監督確實配戴', data:"check1",
          note: "改善措施內容", data_note: "check1Note"
        },
        { title: '材料是否經檢查無缺陷後方始用', data:"check2",
          note: "改善措施內容", data_note: "check2Note"
        },
        { title: '與加強環固定處是否牢固', data:"check3",
          note: "改善措施內容", data_note: "check3Note"
        }
      ]
    },
    { title: "飛落防止",
      content: [
        { title: '吊升或卸放材料、器具、工具等是否使用吊索、吊帶等', data:"check4",
          note: "改善處理情形", data_note: "check4Note"
        },
        { title: '搭設完畢後於井口應緊接掛上防護網。', data:"check5",
          note: "改善處理情形", data_note: "check5Note"
        },
        { title: '是否設置警示區嚴禁無關人員進入組、拆作業區域', data:"check6",
          note: "改善處理情形", data_note: "check6Note"
        }
      ]
    },
    { title: "倒塌防止",
      content: [
        { title: '架材之按裝、鬆弛狀況', data:"check7",
          note: "改善處理情形", data_note: "check7Note"
        },
        { title: '架材是否損傷', data:"check8",
          note: "改善處理情形", data_note: "check8Note"
        },
        { title: '固定處之下沈、滑動之狀況', data:"check9",
          note: "改善處理情形", data_note: "check9Note"
        },
        { title: '固定材料與固定金屬配件之損傷及腐蝕狀況', data:"check10",
          note: "改善處理情形", data_note: "check10Note"
        },
        { title: '組立時是否在垂直向以≦3.0M與加強環妥實連接', data:"check11",
          note: "改善處理情形", data_note: "check11Note"
        }
      ]
    }
  ]
}

export const FacilityCheckFormH = {
  formTitle: "人員搭乘設備每月定期檢查紀錄表",
  url: '/forms/standardSections/FacilityCheckFormH',
  sections: [
    { title: "",
      content: [
        { input: '編號', data_input:"number"},
        { input: '型式', data_input:"type"},
        { input: '積載荷重 (公斤)', data_input:"Kilogram"},
      ]
    },
    { title: "1.過捲預防裝置",
      content: [
        { title: '過捲預防裝置固定應良好且動作正常', data:"check1"}
      ]
    },
    { title: "2.制動器",
      content: [
        { title: '吊升或卸放材料、器具、工具等是否使用吊索、吊帶等', data:"check2"},
      ]
    },
    { title: "3.控制裝置",
      content: [
        { title: '1.漏電自動斷電裝置性能應良好', data:"check4"},
        { title: '2.操作按鈕、應標示操作功能、名稱、方向功能良好', data:"check5"},
      ]
    },
    { title: "4.安全裝置",
      content: [
        { title: '1.手動操縱器性能良好；設有兩處時須有不得同時操作之功能', data:"check6"},
        { title: '2.各極限開關(下降防撞、走行、起伏、迴旋、伸縮等)之性能應良好', data:"check7"},
        { title: '3.緊急停止開關性能應良好', data:"check8"},
        { title: '4.工作台之傾斜矯正裝置性能良好', data:"check9"},
        { title: '5.救命用纖維索、安全帶及金屬配件安裝確實，無腐蝕、損傷或龜裂', data:"check10"},
        { title: '6.自動控速裝置或自動制止下降之裝置性能應良好', data:"check11"},
      ]
    },
    { title: "5.支架、吊臂及基礎座等",
      content: [
        { title: '1.檢視本體部份架設方式，固定應良好', data:"check12"},
        { title: '2.檢視零件無腐蝕、變形、龜裂', data:"check13"},
        { title: '3.檢視與鋼索之安裝，使用鉤環確實做好。 ', data:"check14"}
      ]
    },
    { title: "6.工作台",
      content: [
        { title: '1.作業床板、扶手及圍柵等應無腐蝕、損傷、龜裂', data:"check15"},
        { title: '2.接合處之固定螺栓、螺帽應無鬆脫', data:"check16"},
      ]
    },
    { title: "7.升降裝置",
      content: [
        { title: '升降裝置安裝固定應良好，且運轉正常、無異音', data:"check17"}
      ]
    },
    { title: "8.配電盤",
      content: [
        { title: '固定良好，外觀無損傷或變形、電線接頭無鬆脫、絕緣無劣化', data:"check18"},
      ]
    },
    { title: "9.鋼索",
      content: [
        { title: '1.一撚間無10%以上之素線斷裂', data:"check19"},
        { title: '2.直徑減少無達公稱直徑之7%以上', data:"check20"},
        { title: '3.鋼索無顯著之扭結、變形或腐蝕', data:"check21"},
        { title: '4.鋼索末端固定正確，具防脫或自緊性能', data:"check22"}
      ]
    },
    { title: "10.軌道",
      content: [
        { title: '1.軌道無顯著撓曲、損傷或腐蝕；軌道固定壓夾無鬆動、銹蝕', data:"check23"},
        { title: '2.錨定基礎固定螺絲無鬆動、腐蝕或龜裂', data:"check24"},
        { title: '3.軌道末端車輪阻擋器固定良好，無腐蝕或龜裂', data:"check25"}
      ]
    },
    { title: "11.其他",
      content: [
        { note: "其他", data_note: "check26Note"},
      ]
    },
  ]
}

export const FacilityCheckFormI = {
  formTitle: "人員搭乘設備每日定期檢查紀錄表",
  url: '/forms/standard/FacilityCheckFormI',
  content: [
    { input: '機具編號', data_input:"machine-number"},
    { title: '鋼索狀況及其末端緊結處之固定是否良好', data:"check1"},
    { title: '救命用纖維索、安全帶及金屬配件固定是否良好，有無損傷', data:"check2"},
    { title: '檢視吊臂、支架、工作台等固定是否良好，有無損傷', data:"check3"},
    { title: '漏電自動斷電裝置是否良好', data:"check4"},
    { title: '過捲預防裝置及停止開關是否良好', data:"check5"},
    { title: '制動器作動是否良好', data:"check6"},
    { title: '控制裝置、傾斜矯正裝置是否良好', data:"check7"},
    { title: '升降裝置有無異狀', data:"check8"},
    { title: '記事', data:"check9"}
  ]
}

export const FacilityCheckFormJ = {
  formTitle: "門型起重機每日檢查表",
  url: '/forms/standard/FacilityCheckFormJ',
  content: [
    { title: '1.控制部份', data:"check1"},
    { title: '1-a.軌道前進限制', data:"check2"},
    { title: '1-b.軌道後退限制', data:"check3"},
    { title: '1-c.主捲揚上升極限', data:"check4"},
    { title: '1-d.主捲揚左右限制', data:"check5"},
    { title: '1-e.操作盒之按鈕', data:"check6"},
    { title: '2.剎車', data:"check7"},
    { title: '2-a.主捲揚馬達剎車', data:"check8"},
    { title: '2-b.軌道馬達剎車', data:"check9"},
    { title: '3.鋼索', data:"check10"},
    { title: '3-a.有無斷絲、斷股、扭曲變型', data:"check11"},
    { title: '3-b.捲胴、鋼索有否捲繞良好', data:"check12"},
    { title: '4.桁架.軌道是否不變形', data:"check13"}
  ]
}

export const SafetyCheckFormA = {
  formTitle: "露天開挖作業安全",
  url: '/forms/standard/SafetyCheckFormA',
  content: [
    { title: '依地質鑽探調查結果擬定開挖計畫，內容應包括開挖方法、順序、進度、使用機械種類及土壓觀測系統', data:"check1",
      note: "改善措施內容", data_note: "check1Note"
    },
    { title: '開挖前應先調查地下管線，並留下位置記號', data:"check2",
      note: "改善措施內容", data_note: "check2Note"
    },
    { title: '開挖作業中應指派專人指揮監督', data:"check3",
      note: "改善措施內容", data_note: "check3Note"
    },
    { title: '應管制作業勞工與作業無關人員進入作業現場', data:"check4",
      note: "改善措施內容", data_note: "check4Note"
    },
    { title: '對地面水之排洩應隨時加以注意', data:"check5",
      note: "改善措施內容", data_note: "check5Note"
    },
    { title: '開挖週邊設置安全護欄，出土作業時護欄可部分拆卸由專人管制', data:"check6",
      note: "改善措施內容", data_note: "check6Note"
    },
    { title: '開挖四周應設置警告標示', data:"check7",
      note: "改善措施內容", data_note: "check7Note"
    },
    { title: '開挖邊緣每次在暴雨過後，應加以檢查並加強防止滑動及崩塌之措施', data:"check8",
      note: "改善措施內容", data_note: "check8Note"
    },
    { title: '挖出之土方應堆在開挖邊緣至少一公尺之外，施工機械設備不得置放於開挖邊緣', data:"check9",
      note: "改善措施內容", data_note: "check9Note"
    },
    { title: '開挖底部應設置排水措施，隨時排除地面水、地下水', data:"check10",
      note: "改善措施內容", data_note: "check10Note"
    },
    { title: '準備砂袋，以緊急應變，並嚴禁超挖', data:"check11",
      note: "改善措施內容", data_note: "check11Note"
    },
    { title: '開挖深度≧1.5m以上應設置擋土支撐，擋土支撐作業主管需在場監督', data:"check12",
      note: "改善措施內容", data_note: "check12Note"
    },
    { title: '開挖作業之機械設備及工具應於每日開工前檢查', data:"check13",
      note: "改善措施內容", data_note: "check13Note"
    },
    { title: '挖土機迴轉半徑內，禁止人員進入並派專人從事開挖作業之指揮工作', data:"check14",
      note: "改善措施內容", data_note: "check14Note"
    },
    { title: '機械、車輛之運行路線及進出土石裝卸場所之方法應事前決定並告知勞工', data:"check15",
      note: "改善措施內容", data_note: "check15Note"
    }
  ]
}

export const SafetyCheckFormB = {
  formTitle: "混凝土澆置作業安全",
  url: '/forms/standard/SafetyCheckFormB',
  content: [
    { title: '澆置期間指派領班巡視', data:"check1",
      note: "改善措施內容", data_note: "check1Note"
    },
    { title: '禁止勞工乘坐於混凝土澆置桶上', data:"check2",
      note: "改善措施內容", data_note: "check2Note"
    },
    { title: '以起重機具或索道吊運之混凝土桶下方，禁止人員進入', data:"check3",
      note: "改善措施內容", data_note: "check3Note"
    },
    { title: '應指定安全出入口', data:"check4",
      note: "改善措施內容", data_note: "check4Note"
    },
    { title: '拌器及輸送管接頭銜接狀況應良好', data:"check5",
      note: "改善措施內容", data_note: "check5Note"
    },
    { title: '作業時攪拌器攪刀之護蓋不得開啟', data:"check6",
      note: "改善措施內容", data_note: "check6Note"
    },
    { title: '容積一立方公尺以上之漏斗之混凝土拌合機，應有清掃裝置與護欄', data:"check7",
      note: "改善措施內容", data_note: "check7Note"
    },
    { title: '未能設置護欄之作業面應架設安全母索，並使勞工佩掛安全帶', data:"check8",
      note: "改善措施內容", data_note: "check8Note"
    },
    { title: '各分電盤應裝設5-30mA、0.1sec即跳脫之電流動作高速型漏電斷路器', data:"check9",
      note: "改善措施內容", data_note: "check9Note"
    },
    { title: '橫越通道或勞工作業之電線應架高或保護', data:"check10",
      note: "改善措施內容", data_note: "check10Note"
    },
    { title: '混凝土壓送車輸送管等有觸及高壓線路之虞時，是否設置絕緣套管並派專人指揮以保持安全距離', data:"check11",
      note: "改善措施內容", data_note: "check11Note"
    }
  ]
}

export const SafetyCheckFormC = {
  formTitle: "通風作業安全自動檢查表",
  url: '/forms/standardSections/SafetyCheckFormC',
  sections: [
    { title: "一般規定",
      content: [
        { title: '勞工進入集水井從事作業前，是否先行通風30分鐘', data:"check1",
          note: "改善措施內容", data_note: "check1Note"
        },
        { title: '是否依規定施作現場，有足夠自然通風或機械通風', data:"check2",
          note: "改善措施內容", data_note: "check2Note"
        },
        { title: '作業前測試氧氣濃度未達到18％時是否禁止勞工作業', data:"check3",
          note: "改善措施內容", data_note: "check3Note"
        },
        { title: '作業前測試有害氣體濃度達危害值時是否禁止勞工作業', data:"check4",
          note: "改善措施內容", data_note: "check4Note"
        }
      ]
    },
    { title: "機具設備",
      content: [
        { title: '機械馬達是否設置避免人員、廢物吸入之防護罩', data:"check5",
          note: "改善處理情形", data_note: "check5Note"
        },
        { title: '機械四周是否設置護欄及警示標誌', data:"check6",
          note: "改善處理情形", data_note: "check6Note"
        },
        { title: '通風管是否依據集水井開挖深度延伸，而依序通風管口位置(進、出)設置', data:"check7",
          note: "改善處理情形", data_note: "check7Note"
        }
      ]
    },
    { title: "安全管理",
      content: [
        { title: '缺氧作業主管是否在現場，監督勞工作業', data:"check8",
          note: "改善處理情形", data_note: "check8Note"
        },
        { title: '是否指派專人每日檢查並負責通風設備開、關及管制', data:"check9",
          note: "改善處理情形", data_note: "check9Note"
        },
        { title: '作業期間於井口設置1位監視人員全程監視開挖人員作業情形', data:"check10",
          note: "改善處理情形", data_note: "check10Note"
        }
      ]
    },
    { title: "災害防止",
      content: [
        { title: '收工後是否指派專人巡視，確認無人員施工在關閉通風設備', data:"check11",
          note: "改善處理情形", data_note: "check11Note"
        },
        { title: '機械通風設備，電線是否架高，有無破皮現象', data:"check12",
          note: "改善處理情形", data_note: "check12Note"
        },
        { title: '通風設備故障時，有安全之虞，是否立即停止作業，並疏散到通風良好處', data:"check13",
          note: "改善處理情形", data_note: "check13Note"
        },
        { title: '於集水井工程，支撐架每層設置1條救生母索，供監測人員使用', data:"check14",
          note: "改善處理情形", data_note: "check14Note"
        }
      ]
    }
  ]
}

export const SafetyCheckFormD = {
  formTitle: "缺氧作業安全自動檢查表",
  url: '/forms/standard/SafetyCheckFormD',
  content: [
    { title: '缺氧作業主管是否選派經教育訓練合格並具備證照擔任之', data:"check1",
      note: "改善措施內容", data_note: "check1Note"
    },
    { title: '缺氧作業主管是否在場監督及指揮勞工作業', data:"check2",
      note: "改善措施內容", data_note: "check2Note"
    },
    { title: '有關作業程序、施工步驟及安衛配合措施作業前是否告知勞工', data:"check3",
      note: "改善措施內容", data_note: "check3Note"
    },
    { title: '作業現場危害狀況作業前是否告知勞工', data:"check4",
      note: "改善措施內容", data_note: "check4Note"
    },
    { title: '是否實施自動檢查並留存紀錄', data:"check5",
      note: "改善措施內容", data_note: "check5Note"
    },
    { title: '新進人員是否實施3-4小時缺氧作業勞工安全衛生教育訓練', data:"check6",
      note: "改善措施內容", data_note: "check6Note"
    },
    { title: '作業前測試氧氣濃度未達到18％時是否禁止勞工作業', data:"check7",
      note: "改善措施內容", data_note: "check7Note"
    },
    { title: '作業前測試有害氣體濃度未達下列法定值之內時禁止勞工作業',
      data:"check8",
      customOptions: [
        'A.可燃性氣體之濃度低於爆炸下限的30%',
        'B.硫化氫濃度在10ppm以下',
        'C.一氧化碳濃度在35ppm以下',
        'D.其他有害物在容許濃度以下'
      ],
      note: "改善措施內容", data_note: "check8Note"
    },
    { title: '勞工從事缺氧作業時設置監控設備，指派監視人員', data:"check9",
      note: "改善措施內容", data_note: "check9Note"
    },
    { title: '是否發現從事該作業勞工有立即發生缺氧危險時是否立即停止作業', data:"check10",
      note: "改善措施內容", data_note: "check10Note"
    },
    { title: '勞工是否佩戴工作證', data:"check11",
      note: "改善措施內容", data_note: "check11Note"
    },
    { title: '勞工是否佩戴安全帽', data:"check12",
      note: "改善措施內容", data_note: "check12Note"
    },
    { title: '作業期間於井口設置1位監視人員全程監視開挖人員作業情形', data:"check13",
      note: "改善措施內容", data_note: "check13Note"
    },
    { title: '機具設備進場作業前是否經本所相關人員檢查合格才能使用', data:"check14",
      note: "改善措施內容", data_note: "check14Note"
    },
    { title: '機具設備是否定期保養', data:"check15",
      note: "改善措施內容", data_note: "check15Note"
    },
    { title: '通風設備是否足夠', data:"check16",
      note: "改善措施內容", data_note: "check16Note"
    },
    { title: '作業前是否指派專人檢查', data:"check17",
      note: "改善措施內容", data_note: "check17Note"
    },
    { title: '通風設備是否設置警告標誌', data:"check18",
      note: "改善措施內容", data_note: "check18Note"
    },
    { title: '通風設備是否設置防雜物吸入之防護罩', data:"check19",
      note: "改善措施內容", data_note: "check19Note"
    },
    { title: '通風管是否依深度延伸而依序架設', data:"check20",
      note: "改善措施內容", data_note: "check20Note"
    },
    { title: '勞工從事缺氧危險作業時對進口各該場所勞工是否確認或點名登記', data:"check21",
      note: "改善措施內容", data_note: "check21Note"
    },
    { title: '缺氧作業場所入口處是否設置注意事項並公告之', data:"check22",
      note: "改善措施內容", data_note: "check22Note"
    },
    { title: '是否禁止與作業無關人員進入', data:"check23",
      note: "改善措施內容", data_note: "check23Note"
    },
    { title: '電線是否架高、橫越地面浸泡水中', data:"check24",
      note: "改善措施內容", data_note: "check24Note"
    },
    { title: '各分電路是否設置漏電斷路器', data:"check25",
      note: "改善措施內容", data_note: "check25Note"
    },
    { title: '電氣設備是否接地', data:"check26",
      note: "改善措施內容", data_note: "check26Note"
    },
    { title: '電線劣化絕緣不良是否更換新品', data:"check27",
      note: "改善措施內容", data_note: "check27Note"
    },
    { title: '禁止使用無插頭電線直接插入使用', data:"check28",
      note: "改善措施內容", data_note: "check28Note"
    },
    { title: '工區內照明燈嚴禁轉為他用', data:"check29",
      note: "改善措施內容", data_note: "check29Note"
    },
    { title: '所有用電一律由電箱引接使用', data:"check30",
      note: "改善措施內容", data_note: "check30Note"
    },
    { title: '禁止活線作業', data:"check31",
      note: "改善措施內容", data_note: "check31Note"
    },
    { title: '停電時是否指派專人管制或設置「禁止送電」等標示', data:"check32",
      note: "改善措施內容", data_note: "check32Note"
    },
    { title: '非電氣人員禁止接線使用', data:"check33",
      note: "改善措施內容", data_note: "check33Note"
    },
    { title: '是否設置急救人員。', data:"check34",
      note: "改善措施內容", data_note: "check34Note"
    },
    { title: '作業現場是否置備空氣呼吸器、呼吸防護具', data:"check35",
      note: "改善措施內容", data_note: "check35Note"
    },
    { title: '於集水井之支撐架每層設置1條救生母索，供監測人員使用', data:"check36",
      note: "改善措施內容", data_note: "check36Note"
    }
  ]
}