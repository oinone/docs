---
title: 图表类型
index: true
category:
  - 用户手册
  - 设计器
order: 2
---
# 一、柱状图
## （一）单柱状图
单柱状图是用一个柱形表示一个数据点的图表类型。适用于展示单一类别的数据对比，如不同月份的销售额对比。

:::tip 举例

不同产品的销售额对比

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/Data%20Visualization/chart%20type/danzzt.png)

:::

## （二）多柱状图
多柱状图是在同一个图表中用多个柱形表示不同类别的数据点。适用于展示多个类别之间的数据对比，如不同产品在不同月份的销售额对比。

:::tip 举例

不同产品的销售额与销售量的对比

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/Data%20Visualization/chart%20type/duozzt.png)

:::

# 二、折线图
## （一）单折线图
单折线图是用一条折线连接各个数据点，展示数据的变化趋势。 适用于展示单一数据系列随时间或其他连续变量的变化趋势。

:::tip 举例

销售额随时间的变化趋势

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/Data%20Visualization/chart%20type/danzxt.png)

:::

## （二）多折线图
多折线图是在同一个图表中用多条折线表示不同数据系列的变化趋势。 适用于对比多个数据系列随时间或其他连续变量的变化趋势。

:::tip 举例

销售额与销售量随时间的变化趋势

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/Data%20Visualization/chart%20type/duozxt.png)

:::

## （三）双Y轴折线图
双Y轴折线图是在同一个图表中使用两个Y轴，分别表示不同数据系列的变化趋势。适用于当两个数据系列的数值范围差异较大时，需要在一个图表中同时展示它们的变化趋势。

:::tip 举例

销售额与销售量随时间的变化趋势

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/Data%20Visualization/chart%20type/syzzxt.png)

:::

# 三、面积图
## （一）面积图
面积图是用折线连接各个数据点，并用填充颜色表示折线下方的面积。 用途：适用于展示数据系列随时间或其他连续变量的变化趋势，并强调数据之间的总量对比。

:::tip 举例

销售额随时间的变化趋势

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/Data%20Visualization/chart%20type/mjt.png)

:::

# 四、饼图
## （一）饼图
饼图是用圆形表示整体，用扇形表示各部分所占比例的图表类型。 适用于展示各部分在整体中的比例关系，如不同产品类别的销售额占比。

:::tip 举例

不同产品的销售额占比

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/Data%20Visualization/chart%20type/bt.png)

:::

## （二）环形图
环形图是在饼图的基础上，将圆心留空形成的图表类型。 与饼图相似留空部分可以放置标签或其他信息。

:::tip 举例

不同产品的销售额占比

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/Data%20Visualization/chart%20type/hxt.png)

:::

# 五、漏斗图
## （一）漏斗图
漏斗图是用梯形或三角形表示数据流转过程的图表类型，通常用于展示转化率或流失率。适用于分析业务流程中的转化情况，如用户注册、购买等流程的转化率分析。

:::tip 举例

用户行为转化率（浏览->加入购物车->下单->支付）

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/Data%20Visualization/chart%20type/ldt.png)

:::

# 六、散点图
## （一）散点图
散点图是用点表示各个数据点的位置，通过点的分布展示数据之间的关系。适用于展示两个变量之间的关系，如销售额与广告投入的关系。

:::tip 举例

销售额与广告投入之间的关系。

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/Data%20Visualization/chart%20type/sdt.png)

:::

## （二）气泡图
气泡图是在散点图的基础上，通过X轴、Y轴、气泡的大小与颜色表示四个变量的值。 适用于展示变量之间的关系，如展示销售额、成本、利润率以及市场份额等多个维度数据之间的关联情况。

+ 数据配置——气泡大小：仅限选择数值，表示该数值的大小
+ 数据配置——气泡颜色：仅限选择维度，表示区分不同类别

:::tip 举例

销售额、广告投入和市场份额之间的关系。

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/Data%20Visualization/chart%20type/qpt.png)

:::

## （三）动态气泡图
动态气泡图是气泡图的一种变体，可以动态展示数据点的变化。 适用于展示数据随时间或其他变量的动态变化过程。

+ 数据配置——气泡大小：仅限选择数值，表示该数值的大小
+ 数据配置——气泡颜色：仅限选择维度，表示区分不同类别
+ 数据配置——动态值：可选择维度或数值，依据该值动态展示数据

:::tip 举例

产品销售额、广告投入和市场份额随时间的变化过程。

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/Data%20Visualization/chart%20type/dtqpt.gif)

:::

# 七、条形图
## （一）基础条形图
基础条形图是用条形表示数据点的图表类型，与柱状图相似但方向不同。适用于展示各类别的数据对比，如不同产品的销售量对比。

:::tip 举例

不同产品的销售额对比

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/Data%20Visualization/chart%20type/txt.png)

:::

## （二）多条形图
多条形图是在同一个图表中用多个条形表示不同类别的数据点。适用于展示多个类别之间的数据对比，且每个类别包含多个数据点，如不同产品在不同地区的销售量对比。

:::tip 举例

不同产品的销售额与销售量的对比

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/Data%20Visualization/chart%20type/dtxt.png)

:::

# 八、仪表盘
## （一）仪表盘
仪表盘是一种模拟汽车仪表盘的图表类型，用于展示关键指标或目标完成情况。 适用于实时监控和展示关键业务指标，如销售额、客户满意度等。

+ 数据配置——当前数值：可选择数值字段，即当前指标中已达到的数据情况
+ 数据配置——目标数值：可选择数值西段，即当前指标期望达到的数据情况
+ 样式——颜色设置：可为仪表盘的当前数值和目标数值自定义颜色。
+ 样式——角度设置：可为仪表盘的目标数值的起始值与结束值设置角度。

:::tip 举例

月度销售额目标完成情况。

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/Data%20Visualization/chart%20type/ybp.png)

:::

# 九、表格
## （一）表格
表格是用行和列表示数据的图表类型，是最基础的数据展示方式。 适用于展示详细数据或进行数据分析，如销售数据表、客户信息表等。

+ 样式——基本格式：可为表头与表体设置对其方式、行高、字号大小、字体颜色与背景颜色
+ 样式——小计：可选择是否展示小计，可设置小计的对其方式、行高、字号大小、字体颜色与背景颜色

:::tip 举例

产品销售数据

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/Data%20Visualization/chart%20type/bg.png)

:::

# 十、地图
## （一）中国地图
中国地图是用地图形式展示中国各地区数据的图表类型。 适用于展示中国各地区的数据分布情况，如各省的销售额、人口数量等。

+ 数据配置——更多展示字段：可选择维度字段与数值字段，选定后可在图表中显示字段数据

:::tip 举例

每一地区的销售额

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/Data%20Visualization/chart%20type/zgdt.png)

:::

# 十一、其他
## （一）指标统计图
指标统计图是一种综合展示多个关键指标的图表类型。适用于同时展示和监控多个关键业务指标，以便全面了解业务状况。

:::tip 举例

综合展示销售量与销售额

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/Data%20Visualization/chart%20type/zbtjt.png)

:::

