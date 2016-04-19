(function () {
    angular.module('sbAdminApp')
        .factory('formHelper', function (DROPDOWN_LIST) {
            var service = {
                getOptionsOfSeniorType: getOptionsOfSeniorType,
                getOptionsOfSecondSubject: getOptionsOfSecondSubject,
                getOptionsOfThirdSubject: getOptionsOfThirdSubject,
                getReourceParentType: getReourceParentType,
                getSubjectParentType: getSubjectParentType,
                getSubjectLevel2ParentType: getSubjectLevel2ParentType
            };
            //getSubjectLevel2ParentType
            function getSubjectLevel2ParentType(childTypeObj) {
                console.log(childTypeObj);
                var subject = childTypeObj[0].SubjectName;
                // TODO 有空調整hashmap
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_LAGUAGE, subject) > -1) { return "語文領域" }
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_MATH, subject) > -1) { return "數學領域" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_SOCIAL, subject) > -1) { return "社會領域" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_SCIENCE, subject) > -1) { return "自然領域" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_ART, subject) > -1) { return "藝術領域" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_GENERAL, subject) > -1) { return "生活領域" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_HEALTH, subject) > -1) { return "健康與體育領域" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_ARMY, subject) > -1) { return "全民國防教育領域" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_INTEGRATE, subject) > -1) { return "綜合活動類領域" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_LIFE, subject) > -1) { return "生命教育類領域" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_PLAN, subject) > -1) { return "生涯規劃類領域" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_OCEAN, subject) > -1) { return "海洋教育類領域" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_MACHINE, subject) > -1) { return "機械群" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_KINECTICS, subject) > -1) { return "動力機械群" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_ELECTRONIC, subject) > -1) { return "電機與電子群" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_ENGINEER, subject) > -1) { return "土木與建築群" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_BUSINESS, subject) > -1) { return "商業與管理群" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_CHEMISTRY, subject) > -1) { return "化工群" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_LANGUAGE, subject) > -1) { return "外語群" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_DESIGN, subject) > -1) { return "設計群" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_GENERAL, subject) > -1) { return "家政群" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_RESTAURANT, subject) > -1) { return "餐旅群" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_AGRICULTURE, subject) > -1) { return "農業群" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_FOOD, subject) > -1) { return "食品群" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_BOAT, subject) > -1) { return "海事群" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_MARINE, subject) > -1) { return "水產群" };
                if (arrayObjectIndexOf(DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_ART, subject) > -1) { return "藝術群" };

            }

            function arrayObjectIndexOf(myArray, searchTerm) {
                for (var i = 0, len = myArray.length; i < len; i++) {
                    var name = myArray[i][0].SubjectName;
                    if (name == searchTerm) return i;
                }
                return -1;
            }

            function getSubjectParentType(childType) {
                if (DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL.indexOf(childType) > -1) {
                    return "一般科目";
                }
                else if (DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER.indexOf(childType) > -1) {
                    return "專業科目";
                }

            }

            function getReourceParentType(childType) {
                // TODO 有空調整hashmap
                if (DROPDOWN_LIST.SUB_SENIOR_RESOURCE_TYPE_VOICE.indexOf(childType) > -1) {
                    return "聲音的";
                }
                else if (DROPDOWN_LIST.SUB_SENIOR_RESOURCE_TYPE_LEARNING.indexOf(childType) > -1) {
                    return "學習材料";
                }
                else if (DROPDOWN_LIST.SUB_SENIOR_RESOURCE_TYPE_CONTEXT.indexOf(childType) > -1) {
                    return "文本";
                }
                else if (DROPDOWN_LIST.SUB_SENIOR_RESOURCE_TYPE_TOOL.indexOf(childType) > -1) {
                    return "工具";
                }
                else if (DROPDOWN_LIST.SUB_SENIOR_RESOURCE_TYPE_VISUAL.indexOf(childType) > -1) {
                    return "視覺的";
                }
                else if (DROPDOWN_LIST.SUB_SENIOR_RESOURCE_TYPE_NET.indexOf(childType) > -1) {
                    return "網路";
                }

            }

            // 回傳連動下拉選單的第二層option
            function getOptionsOfSeniorType(levelOneValue) {
                var result;
                switch (levelOneValue) {
                    case '聲音的':
                        result = DROPDOWN_LIST.SUB_SENIOR_RESOURCE_TYPE_VOICE;
                        break;
                    case '學習材料':
                        result = DROPDOWN_LIST.SUB_SENIOR_RESOURCE_TYPE_LEARNING;
                        break;
                    case '文本':
                        result = DROPDOWN_LIST.SUB_SENIOR_RESOURCE_TYPE_CONTEXT;
                        break;
                    case '工具':
                        result = DROPDOWN_LIST.SUB_SENIOR_RESOURCE_TYPE_TOOL;
                        break;
                    case '視覺的':
                        result = DROPDOWN_LIST.SUB_SENIOR_RESOURCE_TYPE_VISUAL;
                        break;
                    case '網路':
                        result = DROPDOWN_LIST.SUB_SENIOR_RESOURCE_TYPE_NET;
                        break;
                    default:
                        break;
        
                }
                console.log(levelOneValue);
                return result;
            }

            // 回傳連動下拉選單的第二層option
            function getOptionsOfSecondSubject(levelOneValue) {
                var result;
                switch (levelOneValue) {
                    case '一般科目':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL;
                        break;
                    case '專業科目':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER;
                        break;
                    default:
                        break;

                }
                console.log(levelOneValue);
                return result;
            }

            // 回傳連動下拉選單的第二層option
            function getOptionsOfThirdSubject(levelTwoValue) {
                var result;
                switch (levelTwoValue) {
                    case '語文領域':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_LAGUAGE;
                        break;
                    case '數學領域':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_MATH;
                        break;
                    case '社會領域':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_SOCIAL;
                        break;
                    case '自然領域':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_SCIENCE;
                        break;
                    case '藝術領域':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_ART;
                        break;
                    case '生活領域':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_GENERAL;
                        break;
                    case '健康與體育領域':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_HEALTH;
                        break;
                    case '全民國防教育領域':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_ARMY;
                        break;
                    case '綜合活動類領域':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_INTEGRATE;
                        break;
                    case '生命教育類領域':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_LIFE;
                        break;
                    case '生涯規劃類領域':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_PLAN;
                        break;
                    case '海洋教育類領域':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_GENERAL_OCEAN;
                        break;



                    case '機械群':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_MACHINE;
                        break;
                    case '動力機械群':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_KINECTICS;
                        break;
                    case '電機與電子群':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_ELECTRONIC;
                        break;
                    case '土木與建築群':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_ENGINEER;
                        break;
                    case '商業與管理群':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_BUSINESS;
                        break;
                    case '化工群':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_CHEMISTRY;
                        break;
                    case '外語群':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_LANGUAGE;
                        break;
                    case '設計群':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_DESIGN;
                        break;
                    case '家政群':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_GENERAL;
                        break;
                    case '餐旅群':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_RESTAURANT;
                        break;
                    case '農業群':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_AGRICULTURE;
                        break;
                    case '食品群':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_FOOD;
                        break;
                    case '海事群':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_BOAT;
                        break;
                    case '水產群':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_MARINE;
                        break;
                    case '藝術群':
                        result = DROPDOWN_LIST.SUB_SENIOR_SUBJECT_CARRER_ART;
                        break;
                    default:
                        break;

                }
                console.log(levelTwoValue);
                return result;
            }
            return service;
        });

})()









