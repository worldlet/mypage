$(document).ready(function () {
    //  申请产品TOP5
    var applyProduct = echarts.init(document.getElementById('apply-product'));
    productOption = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'right',
            y: 'center',
            right: '20px',
            align: 'right',
            padding: [0, 50],
            itemWidth: 16,
            itemHeight: 10,
            data:['联合小微贷','云抵贷','快审快贷','订单贷','小微网贷'],
            textStyle: {
                color: '#6d6fbe',
                fontFamily: ['苹方', '微软雅黑'],
                lineHeight: 15,
                padding: [0, 8, 0, 0]
            }
        },
        series: [
            {
                name: '申请产品TOP5',
                type: 'pie',
                radius: [20, 120],
                center: ['40%', '50%'],
                roseType: 'area',
                data: [
                	{value:10, name:'联合小微贷'},
                    {value:5, name:'云抵贷'},
                    {value:15, name:'快审快贷'},
                    {value:25, name:'订单贷'},
                    {value:20, name:'小微网贷'}
                ],
                color: ['#42D4B2', '#24D17E', '#FFC703', '#FF4858', '#464A9E']
            }
        ]
    };
    applyProduct.setOption(productOption);

    //  融资金额行业占比
    var financingRatio = echarts.init(document.getElementById('financing-ratio'));
    ratioOption = {
        tooltip: {
            trigger: 'item',
            formatter: "{b}<br/>{d}%"
        },
        legend: {
            orient: 'vertical',
            x: 'right',
            y: 'center',
            right: '20px',
            align: 'right',
            padding: [0, 50],
            itemWidth: 16,
            itemHeight: 10,
            data: ['金融投资', '融资担保', '投资担保', '典当', '小额贷款'],
            textStyle: {
                color: '#6d6fbe',
                fontFamily: ['苹方', '微软雅黑'],
                lineHeight: 15,
                padding: [0, 8, 0, 0]
            }
        },
        series: [
            {
                name: '申请产品TOP5',
                type: 'pie',
                radius: [20, 120],
                center: ['40%', '50%'],
                roseType: 'area',
                data: [
                    {value: 50, name: '金融投资'},
                    {value: 30, name: '融资担保'},
                    {value: 20, name: '投资担保'},
                    {value: 10, name: '典当'},
                    {value: 5, name: '小额贷款'}
                ],
                color: ['#24D17E', '#FFC703', '#FF4858', '#6C71D6', '#3AB4FF']
            }
        ]
    };
    financingRatio.setOption(ratioOption);

    //  全年月融资金额趋势
    var financingTrend = echarts.init(document.getElementById('financing-trend'));
    trendOption = {
        grid: {
            show: false,
            left: '50px',
            right: '50px',
            top: '60px',
            bottom: '36px',
            containLabel: true,
            borderColor: ['#3d4083', '#3d4083', '#3d4083', '#3d4083']
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            // name: '月份',
            // nameLocation: 'start',
            // nameGap: 30,
            // nameTextStyle: {
            //     padding: [42 , 0, 0, 0]
            // },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLabel: {
                color: '#a6b6fe',
                fontSize: 12,
                fontWeight: 'bold',
                borderColor: '#3d4083',
                lineHeight: 28
            },
            axisLine: {
                lineStyle: {
                    width: 2,
                    color: '#3d4083',
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 0
                }
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            name: '金额（万元）',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                align: 'right',
                padding: [0, 8, 0, 0]
            },
            axisLabel: {
                color: '#a6b6fe',
                fontSize: 12,
                fontWeight: 'bold',
                borderColor: '#3d4083',
                lineHeight: 28,
                padding: [0, 10, 0, 0]
            },
            axisLine: {
                lineStyle: {
                    width: 2,
                    color: '#3d4083',
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 0
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#2b2e68',
                    width: 1,
                    type: 'dotted'
                }
            }
        },
        series: [
            {
                name: '融资金额',
                type: 'line',
                stack: '总量',
                data: [2769, 3593, 3211, 3798, 5612, 6232, 6543, 7272, 6954, 7560, 9000, 8212],
                color: '#24D17E'
            },
            {
                name: '融资金额',
                type: 'line',
                stack: '总量',
                data: [3211, 2769, 3593, 3798, 6954, 5612, 6232, 6543, 7272, 7560, 9000, 8212],
                color: '#6C71D6'
            },
            {
                name: '融资金额',
                type: 'line',
                stack: '总量',
                data: [2769, 2000, 2756, 3798, 5612, 6232, 6543, 7272, 6954, 7560, 9000, 8212],
                color: '#4D7CFE'
            }
        ]
    };
    financingTrend.setOption(trendOption);

    //  浏览器变化刷新图表
    window.addEventListener('resize', function () {
        applyProduct.resize();
        financingRatio.resize();
        financingTrend.resize();
        // mainMap.resize();
    });

    //  省份地图
    var dt = [
        {name: '双桥区', value: 1, text: '<div><span>企业入驻数:</span>2500</div><div><span>成功对接金融:</span>800</div><div><span>机构入驻数:</span>360</div>'},
        {name: '双滦区', value: 2, text: '<div><span>企业入驻数:</span>2500</div><div><span>成功对接金融:</span>800</div><div><span>机构入驻数:</span>36</div>'},
        {name: '鹰手营子矿区', value: 3, text: '<div><span>企业入驻数:</span>2500</div><div><span>成功对接金融:</span>800</div><div><span>机构入驻数:</span>36</div>'},
        {name: '围场满族蒙古族自治县', value: 4, text: '<div><span>企业入驻数:</span>2500</div><div><span>成功对接金融:</span>800</div><div><span>机构入驻数:</span>36</div>'},
        {name: '承德县', value: 5, text: '<div><span>企业入驻数:</span>2500</div><div><span>成功对接金融:</span>800</div><div><span>机构入驻数:</span>36</div>'},
        {name: '丰宁满族自治县', value: 6, text: '<div><span>企业入驻数:</span>2500</div><div><span>成功对接金融:</span>800</div><div><span>机构入驻数:</span>36</div>'},
        {name: '宽城满族自治县', value: 7, text: '<div><span>企业入驻数:</span>2500</div><div><span>成功对接金融:</span>800</div><div><span>机构入驻数:</span>36</div>'},
        {name: '隆化县', value: 8, text: '<div><span>企业入驻数:</span>2500</div><div><span>成功对接金融:</span>800</div><div><span>机构入驻数:</span>36</div>'},
        {name: '滦平县', value: 9, text: '<div><span>企业入驻数:</span>2500</div><div><span>成功对接金融:</span>800</div><div><span>机构入驻数:</span>36</div>'},
        {name: '平泉县', value: 10, text: '<div><span>企业入驻数:</span>2500</div><div><span>成功对接金融:</span>800</div><div><span>机构入驻数:</span>36</div>'},
        {name: '兴隆县', value: 11, text: '<div><span>企业入驻数:</span>2500</div><div><span>成功对接金融:</span>800</div><div><span>机构入驻数:</span>36</div>'}
    ];

    var option = {
        tooltip: {
            trigger: 'item',
            alwaysShowContent: false,
            borderWidth: 0,
            padding: 0,
            formatter: function (params) {
                var a = '<div class="tooltips-head">' + dt[params.dataIndex].name + '</div>';
                var num = Math.ceil(params.data.name[1].length / 10);
                a += '<div class="tooltips-body">';
                for (var i = 0; i < num; i++) {
                    a += dt[params.dataIndex].text;
                }
                a += '</div>';
                return a;
            }
        },
        series: [{
            name: '阜阳市',
            type: 'map',
            map: 'cs',
            roam: true,
            //  文字统一样式设置
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: 'rgba(255, 255, 255, .7)'
                    }
                },
                emphasis: {
                    textStyle: {
                        fontSize: 14,
                        color: '#FFF'
                    }
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#4D7CFE'
                },
                emphasis: {
                    areaColor: '#fecf4d',
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            data: dt
        }],
        dataRange: {
            //  隐藏图例
            x: '-1000 px', //图例横轴位置
            y: '-1000 px', //图例纵轴位置
            splitList: [
                { start: 1, end: 1, label: '双桥区', color: '#fe4d4d' },
                { start: 2, end: 2, label: '双滦区', color: '#feab4d' },
                { start: 3, end: 3, label: '鹰手营子矿区', color: '#fee64d' },
                { start: 4, end: 4, label: '围场满族蒙古族自治县', color: '#ccfe4d' },
                { start: 5, end: 5, label: '承德县', color: '#88fe4d' },
                { start: 6, end: 6, label: '丰宁满族自治县', color: '#4dfec0' },
                { start: 7, end: 7, label: '宽城满族自治县', color: '#4de9fe' },
                { start: 8, end: 8, label: '隆化县', color: '#4d94fe' },
                { start: 9, end: 9, label: '滦平县', color: '#734dfe' },
                { start: 10, end: 10, label: '平泉县', color: '#d24dfe' },
                { start: 11, end: 11, label: '兴隆县', color: '#fe4d97' }
            ]
        },
    };
    $.get('js/map/json/geometryCouties/130800.json', function (csJson) {
        echarts.registerMap('cs', csJson);
        var mainMap = echarts.init(document.getElementById('map'));
        mainMap.setOption(option);

        //  浏览器变化刷新图表
        window.addEventListener('resize', function () {
            mainMap.resize();
        })
    });
});
