(function () {
    'use strict';

    angular.module('sbAdminApp')
        .constant('DROPDOWN_LIST', {
            // 高中資源類型
            SENIOR_RESOURCE_TYPE: [
                '聲音的',
                '學習材料',
                '網路',
                '文本',
                '工具',
                '視覺的',
            ],
            SUB_SENIOR_RESOURCE_TYPE_VOICE: [
                '有聲書','網路廣播','講課','音樂','口述歷史','無線廣播','錄音檔'
            ],
            SUB_SENIOR_RESOURCE_TYPE_LEARNING: [
                '評量', '個案研討', '教室教學活動', '電腦教學活動', '課程', '學校的全部課程', '校外教學活動', '校外教學活動手冊', '教師手冊'
                , '實驗活動','教案', '模組或單元', '簡報或展示', '學習單', '專題計畫', '教學大綱', '個別指導', '虛擬校外活動'
            ],
            SUB_SENIOR_RESOURCE_TYPE_CONTEXT: [
                '摘要', '書', '詞彙表', '一般期刊', '參考資源', '報告',
            ],
            SUB_SENIOR_RESOURCE_TYPE_TOOL: [
                '計算或換算工具', '程式碼', '軟體'
            ],
            SUB_SENIOR_RESOURCE_TYPE_VISUAL: [
                '藝術圖案', '地圖', '照片', '遠端遙測圖像', '科學圖案', '科學視覺化', '影片', '視覺網路廣播',
            ],
            SUB_SENIOR_RESOURCE_TYPE_NET:[
                '網路資源'
            ],
            MAIN_SENIOR_SUBJECT: [
                '一般科目', '專業科目'
            ],
            //高中子類別
            SUB_SENIOR_SUBJECT_GENERAL: [   
                '語文領域', '數學領域', '社會領域', '自然領域',	'藝術領域','生活領域','健康與體育領域','全民國防教育領域'	,'綜合活動類領域'	,'生命教育類領域'	,'生涯規劃類領域','海洋教育類領域',
            ],
            //高職子類別
            SUB_SENIOR_SUBJECT_CARRER: [   
                '機械群', '動力機械群', '電機與電子群', '土木與建築群', '化工群', '商業與管理群', '外語群', '設計群', '家政群', '餐旅群', '農業群', '食品群', '海事群', '水產群', '藝術群',
            ],
            //一般科目類
            SUB_SENIOR_SUBJECT_GENERAL_LAGUAGE: [   
                [{ SubjectName: '國文' }],
                [{ SubjectName: '英文' }],
            ],
            SUB_SENIOR_SUBJECT_GENERAL_MATH: [  
                [{ SubjectName: '數學' }],
            ],
            SUB_SENIOR_SUBJECT_GENERAL_SOCIAL: [
                [{ SubjectName: '歷史' }],
                [{ SubjectName: '地理' }],
                [{ SubjectName: '公民與社會' }],
            ],
            SUB_SENIOR_SUBJECT_GENERAL_SCIENCE: [
                [{ SubjectName: '物理' }],
                [{ SubjectName: '化學' }],
                [{ SubjectName: '生物' }],
                [{ SubjectName: '地球科學' }],
            ],
            SUB_SENIOR_SUBJECT_GENERAL_ART: [
                [{ SubjectName: '音樂' }],
                [{ SubjectName: '美術' }],
                [{ SubjectName: '藝術生活' }],
            ],
            SUB_SENIOR_SUBJECT_GENERAL_GENERAL: [
                [{ SubjectName: '家政' }],
                [{ SubjectName: '生活科技' }],
                [{ SubjectName: '資訊科學' }],
                [{ SubjectName: '計算機概論' }],
                [{ SubjectName: '生涯規劃' }],
                [{ SubjectName: '法律與生活' }],
                [{ SubjectName: '環境科學概論' }],
            ],
            SUB_SENIOR_SUBJECT_GENERAL_HEALTH: [
                [{ SubjectName: '體育' }],
                [{ SubjectName: '健康與護理' }],
            ],
            SUB_SENIOR_SUBJECT_GENERAL_ARMY: [
                [{ SubjectName: '全民國防教育' }],
            ],
            SUB_SENIOR_SUBJECT_GENERAL_INTEGRATE: [
                [{ SubjectName: '綜合活動' }],
            ],
            SUB_SENIOR_SUBJECT_GENERAL_LIFE: [
               [{ SubjectName: '生命教育' }],
            ],
            SUB_SENIOR_SUBJECT_GENERAL_PLAN: [
               [{ SubjectName: '生涯規劃' }],
            ],
            SUB_SENIOR_SUBJECT_GENERAL_OCEAN: [
               [{ SubjectName: '海洋教育' }],
            ],
            // 專業科目
            SUB_SENIOR_SUBJECT_CARRER_MACHINE: [
            [{ SubjectName: '機械製造' }],
            [{ SubjectName: '機械原理' }],
            [{ SubjectName: '機械力學' }],
            [{ SubjectName: '機械材料' }],
            [{ SubjectName: '機械基礎' }],
            [{ SubjectName: '機械電學' }],
            ],
            SUB_SENIOR_SUBJECT_CARRER_KINECTICS: [
            [{ SubjectName: '機械工作法' }],
            [{ SubjectName: '動力機械概論' }],
            [{ SubjectName: '引擎原理' }],
            [{ SubjectName: '液氣壓原理' }],
            [{ SubjectName: '電子概論' }],
            [{ SubjectName: '電工概論' }],
            [{ SubjectName: '機電識圖' }],
            [{ SubjectName: '應用力學' }],
            [{ SubjectName: '機件原理' }],
            ],
            SUB_SENIOR_SUBJECT_CARRER_ELECTRONIC: [
            [{ SubjectName: '基本電學' }],
            [{ SubjectName: '電子學' }],
            [{ SubjectName: '數位邏輯' }],
            [{ SubjectName: '電工機械' }],
            ],
            SUB_SENIOR_SUBJECT_CARRER_ENGINEER: [
            [{ SubjectName: '工程材料' }],
            [{ SubjectName: '工程力學' }],
            [{ SubjectName: '工程概論' }],
            ],
            SUB_SENIOR_SUBJECT_CARRER_CHEMISTRY: [
            [{ SubjectName: '普通化學' }],
            [{ SubjectName: '基礎化工' }],
            [{ SubjectName: '化工裝置' }],
            [{ SubjectName: '分析化學' }],
            [{ SubjectName: '化學工業概論' }],
            [{ SubjectName: '工業安全與衛生' }],
            [{ SubjectName: '技能檢定' }],
            ],
            SUB_SENIOR_SUBJECT_CARRER_BUSINESS: [

            [{ SubjectName: '商業經營' }],
            [{ SubjectName: '資料處理' }],
            [{ SubjectName: '國際貿易' }],
            [{ SubjectName: '會計事務' }],
            ],
            SUB_SENIOR_SUBJECT_CARRER_LANGUAGE: [

            [{ SubjectName: '英語' }],
            [{ SubjectName: '日語' }],
            ],
            SUB_SENIOR_SUBJECT_CARRER_DESIGN: [

            [{ SubjectName: '繪畫基礎' }],
            [{ SubjectName: '基本設計' }],
            [{ SubjectName: '基礎圖學' }],
            [{ SubjectName: '色彩原理' }],
            [{ SubjectName: '造型原理' }],
            [{ SubjectName: '設計與生活' }],
            [{ SubjectName: '數位設計基礎' }],
            [{ SubjectName: '設計概論' }],
            [{ SubjectName: '創意潛能開發' }],
            ],
            SUB_SENIOR_SUBJECT_CARRER_GENERAL: [

            [{ SubjectName: '家政概論' }],
            [{ SubjectName: '家庭教育' }],
            [{ SubjectName: '色彩概論' }],
            [{ SubjectName: '家政行職業衛生與安全' }],
            [{ SubjectName: '家政職業倫理' }],
            [{ SubjectName: '家政行銷與服務' }],
            [{ SubjectName: '家政群實務' }],
            ],
            SUB_SENIOR_SUBJECT_CARRER_RESTAURANT: [

            [{ SubjectName: '餐旅英文與會話' }],
            [{ SubjectName: '餐旅概論' }],
            [{ SubjectName: '餐旅服務' }],
            [{ SubjectName: '飲料與調酒' }],
            ],
            SUB_SENIOR_SUBJECT_CARRER_AGRICULTURE: [

            [{ SubjectName: '農業概論' }],
            [{ SubjectName: '農業安全衛生' }],
            [{ SubjectName: '農業資訊管理' }],
            [{ SubjectName: '生物技術概論' }],
            ],
            SUB_SENIOR_SUBJECT_CARRER_FOOD: [

            [{ SubjectName: '食品加工' }],
            [{ SubjectName: '食品微生物' }],
            [{ SubjectName: '食品化學與分析' }],
            [{ SubjectName: '生物技術概論' }],
            ],
            SUB_SENIOR_SUBJECT_CARRER_BOAT: [

            [{ SubjectName: '船藝' }],
            [{ SubjectName: '輪機' }],
            [{ SubjectName: '海上安全法規概論' }],
            [{ SubjectName: '海運概論' }],
            [{ SubjectName: '船舶自動控制' }],
            ],
            SUB_SENIOR_SUBJECT_CARRER_MARINE: [

            [{ SubjectName: '水產概要' }],
            [{ SubjectName: '水產生物概要' }],
            [{ SubjectName: '生態學概要' }],
            ],
            SUB_SENIOR_SUBJECT_CARRER_ART: [

            [{ SubjectName: '展演實務' }],
            [{ SubjectName: '專業藝術概論' }],
            [{ SubjectName: '藝術科技' }],
            [{ SubjectName: '藝術欣賞' }],
            ],
            ADMIN_ALL_ROLES: [
              { key:'0', value: '最高管理者' },
              { key:'1', value: '館所管理員' },
              { key:'2', value: '一般管理員' },
            ],
            ADMIN_MUSEUM_ROLES: [
              { key:'1', value: '館所管理員' },
              { key:'2', value: '一般管理員' },
            ],
            ADMIN_GENERAL_ROLES: [
              { key:'2', value: '一般管理員' },
            ],
            ALL_MUSEUMS: [
               { value: '國立自然科學博物館' },
               { value: '國立科學工藝博物館' },
               { value: '國立海洋生物博物館' },
               { value: '國立海洋科技博物館' },
               { value: '國立教育廣播電臺' },
               { value: '國立臺灣科學教育館' },
               { value: '國立公共資訊圖書館' },
               { value: '國立臺灣圖書館' },
               { value: '國家圖書館' },
            ],
        })
})()








						
								

