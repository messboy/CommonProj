'use strict';
/**
 * 基本版參考 : https://github.com/start-angular/sb-admin-angular
 * menu 參考 : https://github.com/onokumus/metisMenu/blob/master/dist/metisMenu.min.css
 * 圖表參考 : Chart.js 
 * Route 參考 : https://github.com/angular-ui/ui-router
 * 延遲加載 參考 : https://oclazyload.readme.io/docs/with-your-router
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'angular-loading-bar',
    'smart-table',
    'checklist-model',
    'ngFileUpload', //檔案上傳
    'chart.js',     //圖表
    'ui.select',    //select2
    'ngSanitize',   //select2
    'ngTagsInput',   //標籤input
    'ui.tinymce'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {


      //延遲加載
      //$ocLazyLoadProvider.config({
      //    debug: false,
      //    events: true,
      //});

      //預設頁面
      $urlRouterProvider.otherwise('/dashboard/admin');

      //設定導頁
      $stateProvider
        //主頁面Layout
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'app/scripts/shared/_layout.html',
            cache: false,
            controller: 'LayoutCtrl as l',
        })
        // 登入
        .state('login', {
            templateUrl: 'app/scripts/login/login.html',
            url: '/login',
            controller: 'LoginCtrl as l',
            params: {
                obj: null
            }
        })
        // 權限管理
        .state('dashboard.admin', {
            templateUrl: 'app/scripts/admin/admin.html',
            url: '/admin',
            controller: 'AdminCtrl as a',
            params: {
                obj: null
            }
        })
        .state('dashboard.admin_page', {
            templateUrl: 'app/scripts/admin/adminPage.html',
            url: '/admin/page/:id',
            controller: 'AdminPageCtrl as a',
        })
      
       // Member
        .state('dashboard.member', {
            templateUrl: 'app/scripts/member/member.html',
            url: '/member',
            controller: 'MemberCtrl as m',
            params: {
                obj: null
            }
        })
        .state('dashboard.member_page', {
            templateUrl: 'app/scripts/member/memberPage.html',
            url: '/member/page/:id',
            controller: 'MemberPageCtrl as m',
            params: {
                obj: null
            }
        })


        // 上稿管理
        // introduction
        .state('dashboard.introduction', {
            templateUrl: 'app/scripts/introduction/introduction.html',
            url: '/introduction',
            controller: 'introductionCtrl as i',
            params: {
                obj: null
            }
        })
        .state('dashboard.introduction_page', {
            templateUrl: 'app/scripts/introduction/introductionPage.html',
            url: '/introduction/page/:id',
            controller: 'introductionPageCtrl as i',
            params: {
                obj: null
            }
        })


        // Science
        .state('dashboard.science', {
            templateUrl: 'app/scripts/science/science.html',
            url: '/science',
            controller: 'ScienceCtrl as s',
            params: {
                obj: null
            }
        })
        .state('dashboard.science_page', {
            templateUrl: 'app/scripts/science/sciencePage.html',
            url: '/science/page/:id',
            controller: 'SciencePageCtrl as s',
            params: {
                obj: null
            }
        })

        // Ebook
        .state('dashboard.article', {
            templateUrl: 'app/scripts/article/article.html',
            url: '/article',
            controller: 'ArticleCtrl as e',
            params: {
                obj: null
            }
        })
        .state('dashboard.article_page', {
            templateUrl: 'app/scripts/article/articlePage.html',
            url: '/article/page/:id',
            controller: 'ArticlePageCtrl as e',
            params: {
                obj: null
            }
        })

      

        // 操作紀錄
        .state('dashboard.record', {
            templateUrl: 'app/scripts/record/record.html',
            url: '/record'
        })
      

        // Backendlog
        .state('dashboard.backendlog', {
            templateUrl: 'app/scripts/backendlog/backendlog.html',
            url: '/backendlog',
            controller: 'BackendlogCtrl as b',
            params: {
                obj: null
            }
        })

        // 統計報表
        .state('dashboard.report_visit', {
            templateUrl: 'app/scripts/report_visit/reportVisit.html',
            url: '/report-visit',
            controller: 'ReportVisitCtrl as r',
            params: {
                obj: null
            }
        })
        .state('dashboard.report_share', {
            templateUrl: 'app/scripts/report_share/reportShare.html',
            url: '/report-share',
            controller: 'ReportShareCtrl as r',
            params: {
                obj: null
            }
        })
         .state('dashboard.report_failure', {
             templateUrl: 'app/scripts/report_failure/reportFailure.html',
             url: '/report-failure',
             controller: 'ReportFailureCtrl as r',
             params: {
                 obj: null
             }
         })

        // 資源共享
       .state('dashboard.export', {
           templateUrl: 'app/scripts/export/export.html',
           url: '/export',
           controller: 'ExportCtrl as e',
       })
      .state('dashboard.import', {
          templateUrl: 'app/scripts/import/import.html',
          url: '/import',
          controller: 'ImportCtrl as i',
      })

  }])
.value('config', {
    isDebug: true,  //是否開發模式
    tinymceOptions : {  //tinymce 編輯器設定檔
        plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table contextmenu paste"
        ],
        toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ',
        paste_data_images: true
    },

});


