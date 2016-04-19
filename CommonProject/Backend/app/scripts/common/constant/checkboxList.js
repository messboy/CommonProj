(function () {
    'use strict';

    angular.module('sbAdminApp')
        .constant('CHECKBOX_LIST', {
            ALL_GRADES: [
                { GradeName: '國小一年級' },
                { GradeName: '國小二年級' },
                { GradeName: '國小三年級' },
                { GradeName: '國小四年級' },
                { GradeName: '國小五年級' },
                { GradeName: '國小六年級' },
                { GradeName: '國中一年級' },
                { GradeName: '國中二年級' },
                { GradeName: '國中三年級' },
                { GradeName: '高中一年級' },
                { GradeName: '高中二年級' },
                { GradeName: '高中三年級' },
                { GradeName: '高職一年級' },
                { GradeName: '高職二年級' },
                { GradeName: '高職三年級' },
            ],
            ALL_SUBJECTS: [
                { SubjectName: '國語文' },
                { SubjectName: '英文' },
                { SubjectName: '閩南語' },
                { SubjectName: '客家語' },
                { SubjectName: '原住民語' },
                { SubjectName: '數學' },
                { SubjectName: '社會' },
                { SubjectName: '生活' },
                { SubjectName: '自然與生活科技' },
                { SubjectName: '綜合活動' },
                { SubjectName: '藝術與人文' },
                { SubjectName: '健康與體育' },
                { SubjectName: '性別平等教育' },
                { SubjectName: '人權教育' },
                { SubjectName: '生涯發展教育' },
                { SubjectName: '家政教育' },
                { SubjectName: '資訊教育' },
                { SubjectName: '環境教育' },
                { SubjectName: '海洋教育' },
            ],
            JUNIOR_GRADES: [
                { GradeName: '國小一年級' },
                { GradeName: '國小二年級' },
                { GradeName: '國小三年級' },
                { GradeName: '國小四年級' },
                { GradeName: '國小五年級' },
                { GradeName: '國小六年級' },
                { GradeName: '國中一年級' },
                { GradeName: '國中二年級' },
                { GradeName: '國中三年級' },
            ],
            SENIOR_GRADES: [
                { GradeName: '高中一年級' },
                { GradeName: '高中二年級' },
                { GradeName: '高中三年級' },
                { GradeName: '高職一年級' },
                { GradeName: '高職二年級' },
                { GradeName: '高職三年級' }
            ]
        })
})()