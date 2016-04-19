 

(function () {
    angular.module('sbAdminApp')
        .controller('ReportVisitCtrl', ['$scope', '$filter', 'reportVisitService', '$state', '$stateParams', '$uibModal',
            function ($scope, $filter, reportVisitService, $state, $stateParams, $uibModal) {
                /**************************初始設定**************************/
                var id;
                var vm = this;
                vm.displayed = [];  //資料列
                vm.year = new Date().getFullYear().toString();
                vm.month = (new Date().getMonth() + 1).toString();


                /***************************初使化***************************/
                init();
                function init() {
                    //if ($stateParams.obj) {
                    //    window.location.reload(true);
                    //}

                    getLists();
                    getGoogleAnalyticsToken();
                }

                /**************************動作事件**************************/
				 		
                vm.updateFlow = function () {
                    getLists();
                }

                // 讀取service資料
                function getLists() {
                    reportVisitService.getVisitFlowList(vm.year, vm.month).then(function (result) {
                        vm.labels = result.data.DateName;
                        vm.series = ['登入人數', '新會員人數'];
                        vm.data = [
                                    result.data.LoginFlow,
                                    result.data.NewMemberFlow
                                ];
                        console.log(result.data);
                    });
                };
              
                /**************************私人方法**************************/
                // 讀取GoogleAnalyticsToken
                function getGoogleAnalyticsToken() {
                    reportVisitService.getGoogleAnalyticsToken().then(function (result) {
                        vm.googletoken = result.data;
                        googleInit();
                    });
                };

               

                function googleInit() {
                    (function (w, d, s, g, js, fs) {
                        if ($('#test').length > 0) return;
                        g = w.gapi || (w.gapi = {}); g.analytics = { q: [], ready: function (f) { this.q.push(f); } };
                        js = d.createElement(s); fs = d.getElementsByTagName(s)[0];
                        js.src = 'https://apis.google.com/js/platform.js';
                        js.id = "test";
                        fs.parentNode.insertBefore(js, fs); js.onload = function () { g.load('analytics'); };
                    }(window, document, 'script'));


                    // 更多api 設定
                    // https://developers.google.com/analytics/devguides/reporting/core/dimsmets
                    gapi.analytics.ready(function () {

                        /**
                         * Authorize the user immediately if the user has already granted access.
                         * If no access has been created, render an authorize button inside the
                         * element with the ID "embed-api-auth-container".
                         */
                        gapi.analytics.auth.authorize({
                            'serverAuth': {
                                'access_token': vm.googletoken
                            }

                        });


                        /**
                         * Create a new DataChart instance with the given query parameters
                         * and Google chart options. It will be rendered inside an element
                         * with the id "chart-container".
                         */
                        var dataChart = new gapi.analytics.googleCharts.DataChart({
                            query: {
                                metrics: 'ga:sessions',
                                dimensions: 'ga:date',
                                'start-date': '30daysAgo',
                                'end-date': 'yesterday'
                            },
                            chart: {
                                container: 'chart-1-container',
                                type: 'LINE',
                                options: {
                                    width: '100%'
                                }
                            }
                        });

                        var dataChart2 = new gapi.analytics.googleCharts.DataChart({
                            query: {
                                'start-date': '30daysAgo',
                                'end-date': 'yesterday',
                                'metrics': 'ga:pageviews',
                                'dimensions': 'ga:pagePathLevel1',
                                'sort': '-ga:pageviews',
                                'filters': 'ga:pagePathLevel1!=/',
                                'max-results': 7
                            },
                            chart: {
                                'container': 'chart-3-container',
                                'type': 'PIE',
                                'options': {
                                    'width': '100%',
                                    'pieHole': 4 / 9,
                                }
                            }
                        });

                        var dataChart3 = new gapi.analytics.googleCharts.DataChart({
                            query: {
                                metrics: 'ga:sessions',
                                dimensions: 'ga:country',
                                'start-date': '30daysAgo',
                                'end-date': 'yesterday',
                                'max-results': 6,
                                sort: '-ga:sessions'
                            },
                            chart: {
                                container: 'chart-2-container',
                                type: 'PIE',
                                options: {
                                    width: '100%',
                                    pieHole: 4 / 9
                                }
                            }
                        });

                        var dataChart4 = new gapi.analytics.googleCharts.DataChart({
                            query: {
                                metrics: 'ga:avgTimeOnPage',
                                dimensions: 'ga:pageTitle',
                                'start-date': '30daysAgo',
                                'end-date': 'yesterday',
                                'max-results': 10,
                            },
                            chart: {
                                container: 'chart-4-container',
                                type: 'PIE',
                                options: {
                                    width: '100%',
                                    //pieHole: 4 / 9
                                }
                            }
                        });

                        var ids = "ga:114344532";
                        dataChart.set({ query: { ids: ids } }).execute();
                        dataChart2.set({ query: { ids: ids } }).execute();
                        dataChart3.set({ query: { ids: ids } }).execute();
                        dataChart4.set({ query: { ids: ids } }).execute();
                    });
                }
            }])
})()



