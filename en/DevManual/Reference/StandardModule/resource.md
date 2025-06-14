---
title: 资源 API（Resources API）
index: true
category:
  - 研发手册
  - Reference
  - 标准模块
order: 5

---
# 一、概述

在 Oinone 中，对于一些常用的基础数据都有相关的内置模型定义，用于支持某些场景的使用。比如：地址库、货币、语言、图标等。

# 二、依赖与配置

## （一）pom 依赖

```xml
<dependency>
    <groupId>pro.shushi.pamirs.core</groupId>
    <artifactId>pamirs-resource-api</artifactId>
</dependency>
<dependency>
    <groupId>pro.shushi.pamirs.core</groupId>
    <artifactId>pamirs-resource-core</artifactId>
</dependency>
```

## （二）Yaml 配置

```yaml
pamirs:
	boot:
    modules:
      - resource
```

# 四、Reference List

## （一）模型

### 1、地区（ResourceRegion）

| **字段名** | **数据类型** | **显示名称** | **必选** | **默认值** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| children | List<`ResourceRegion`> | 子节点 | 否 | - | 子地区列表（通过 pid 关联），支持懒加载 |
| code | String | 编码 | 是 | - | 地区唯一编码（继承自 BaseResourceModel） |
| country | ResourceCountry | 所属国家 | 否 | - | 通过 countryCode 关联国家模型（many2one 关系） |
| countryCode | String | 所属国家编码 | 否 | - | 国家编码，关联 ResourceCountry 的 code 字段 |
| hasChildren | Boolean | 是否有子节点 | 否 | false | 标识当前地区是否存在子地区，可通过 children 字段动态计算 |
| level | Integer | 层级 | 否 | - | 地区层级（如 1 = 国家，2 = 省），国家层级默认值为`DefaultResourceConstants.REGION_LEVEL_COUNTRY` |
| name | String | 名称 | 是 | - | 地区名称，标记`translate=true`<br/>支持多语言翻译 |
| outResourceRelationList | List<`OutResourceRelation`> | 外部资源关联列表 | 否 | - | 外部资源关联关系，通过`code#resource.ResourceRegion`<br/>格式关联当前模型 |
| pCode | String | 父节点 Code | 否 | - | 父地区的 Code 编码，替代已弃用的 pid 字段，用于父子层级关联 |
| pid | Long | 父节点 ID | 否 | - | **已弃用**，请使用 pCode 字段 |
| sourceType | String | 来源类型 | 是 | GD | 数据来源类型（如：GD = 高德），默认值为 "GD" |
| type | AddressTypeEnum | 地址类型 | 否 | - | 地区类型枚举（如国家 / 省 / 市），对应 AddressTypeEnum 枚举值 |


### 2、国家分组（ResourceCountryGroup）

| **字段名** | **数据类型** | **显示名称** | **必选** | **默认值** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| code | String | 编码 | 是 | - | 国家分组唯一编码（继承自 CodeModel） |
| countryList | List<`ResourceCountry`> | 国家列表 | 否 | - | 关联国家列表（多对多关系，通过中间表 ResourceCountryGroupCountryRel） |
| name | String | 名称 | 是 | - | 国家分组名称（如 "亚洲"、"欧洲"） |


### 3、国家（ResourceCountry）

| **字段名** | **数据类型** | **显示名称** | **必选** | **默认值** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| addrFormat | String (Text) | 地址显示格式 | 否 | - | 国家地址显示格式（如 "省份 / 城市 / 街道"） |
| code | String | 编码 | 是 | - | 国家唯一编码（继承自 BaseResourceModel） |
| completeName | String (256) | 国家 / 地区完整名称 | 否 | - | 国家或地区的完整名称（如 "中华人民共和国"） |
| countryGroup | ResourceCountryGroup | 洲 | 否 | - | 所属大洲分组（通过 countryGroupCode 关联） |
| countryGroupCode | String | 洲编码 | 否 | - | 大洲分组编码（关联 ResourceCountryGroup 的 code 字段） |
| currency | ResourceCurrency | 使用币种 | 否 | - | 国家使用的货币（通过 currencyCode 关联） |
| currencyCode | String | 使用币种编码 | 否 | - | 货币编码（关联 ResourceCurrency 的 code 字段） |
| flag | PamirsFile | 国旗 | 否 | - | 国家国旗文件引用 |
| lang | ResourceLang | 官方语言 | 否 | - | 国家官方语言（通过 langCode 关联） |
| langCode | String | 语言编码 | 否 | - | 语言编码（关联 ResourceLang 的 code 字段） |
| mappingList | List<`ResourceRegionMapping`> | 关键字映射列表 | 否 | - | 国家地区名称关键字映射列表（多对多关系） |
| name | String | 国家 / 地区名称 | 是 | - | 国家或地区名称（支持多语言翻译） |
| namePosition | String (Text) | 姓名显示规则 | 否 | - | 姓名显示规则（如 "姓在前" 或 "名在前"） |
| outResourceRelationList | List<`OutResourceRelation`> | 外部资源关联列表 | 否 | - | 外部资源关联关系（通过 code 和模型名关联） |
| phoneCode | String | 长途区号 | 是 | - | 国家长途区号（如中国：+86） |
| provinceList | List<`ResourceProvince`> | 省份 | 否 | - | 国家下的省份列表（一对多关系，分页大小 50） |
| regionList | List<`ResourceRegion`> | 地区 | 否 | - | 国家下的地区列表（一对多关系） |
| sourceType | String | 来源类型 | 是 | GD | 数据来源类型（默认 "GD" 表示高德） |
| vatLabel | VatLabelEnum | 消费税显示名称 | 否 | - | 消费税标签枚举（如 VAT/GST 等） |


### 4、省/州（ResourceProvince）

| **字段名** | **数据类型** | **显示名称** | **必选** | **默认值** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| code | String | 编码 | 是 | - | 省 / 州唯一编码（继承自 BaseResourceModel） |
| country | ResourceCountry | 国家 / 地区 | 否 | - | 所属国家 / 地区（通过 countryCode 关联） |
| countryCode | String | 国家 / 地区编码 | 否 | - | 国家 / 地区编码（关联 ResourceCountry 的 code 字段） |
| cityList | List<`ResourceCity`> | 城市 | 否 | - | 省 / 州下的城市列表（一对多关系，分页大小 50） |
| mappingList | List<`ResourceRegionMapping`> | 关键字映射列表 | 否 | - | 省 / 州名称关键字映射列表（多对多关系） |
| name | String | 省 / 州名称 | 否 | - | 省 / 州名称 |
| outResourceRelationList | List<`OutResourceRelation`> | 外部资源关联列表 | 否 | - | 外部资源关联关系（通过 code 和模型名关联） |
| sourceType | String | 来源类型 | 是 | GD | 数据来源类型（默认 "GD" 表示高德） |


### 5、市（ResourceCity）

| **字段名** | **数据类型** | **显示名称** | **必选** | **默认值** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| code | String | 编码 | 是 | - | 城市唯一编码（继承自 BaseResourceModel） |
| country | ResourceCountry | 国家 | 否 | - | 所属国家（通过 countryCode 关联） |
| countryCode | String | 国家 / 地区编码 | 否 | - | 国家编码（关联 ResourceCountry 的 code 字段） |
| districtList | List<`ResourceDistrict`> | 区 / 县 | 否 | - | 城市下的区 / 县列表（一对多关系） |
| mappingList | List<`ResourceRegionMapping`> | 关键字映射列表 | 否 | - | 城市名称关键字映射列表（多对多关系） |
| name | String | 城市名称 | 是 | - | 城市名称 |
| outResourceRelationList | List<`O`utResourceRelation`> | 外部资源关联列表 | 否 | - | 外部资源关联关系（通过 code 和模型名关联） |
| phoneCode | String | 长途区号 | 否 | - | 城市长途区号（如上海：021） |
| province | ResourceProvince | 省 / 州 | 否 | - | 所属省 / 州（通过 provinceCode 关联） |
| provinceCode | String | 省 / 州编码 | 否 | - | 省 / 州编码（关联 ResourceProvince 的 code 字段） |
| sourceType | String | 来源类型 | 是 | GD | 数据来源类型（默认 "GD" 表示高德） |
| zipCode | String | 邮政编码 | 否 | - | 城市邮政编码 |


### 6、区/县（ResourceDistrict）

| **字段名** | **数据类型** | **显示名称** | **必选** | **默认值** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| code | String | 编码 | 是 | - | 区 / 县唯一编码（继承自 BaseResourceModel） |
| city | ResourceCity | 市 | 否 | - | 所属城市（通过 cityCode 关联） |
| cityCode | String | 市编码 | 否 | - | 城市编码（关联 ResourceCity 的 code 字段） |
| country | ResourceCountry | 国家 | 否 | - | 所属国家（通过 countryCode 关联） |
| countryCode | String | 国家编码 | 否 | - | 国家编码（关联 ResourceCountry 的 code 字段） |
| mappingList | List<`ResourceRegionMapping`> | 关键字映射列表 | 否 | - | 区 / 县名称关键字映射列表（多对多关系） |
| name | String | 区县名称 | 否 | - | 区 / 县名称 |
| outResourceRelationList | List<`OutResourceRelation`> | 外部资源关联列表 | 否 | - | 外部资源关联关系（通过 code 和模型名关联） |
| province | ResourceProvince | 省 | 否 | - | 所属省 / 州（通过 provinceCode 关联） |
| provinceCode | String | 省编码 | 否 | - | 省 / 州编码（关联 ResourceProvince 的 code 字段） |
| sourceType | String | 来源类型 | 是 | GD | 数据来源类型（默认 "GD" 表示高德） |
| streetList | List<`ResourceStreet`> | 街道 | 否 | - | 区 / 县下的街道列表（一对多关系） |
| zipCode | String | 城市地区邮政编码 | 否 | - | 区 / 县邮政编码（可选，部分地区可能与城市邮编一致） |


### 7、街道（ResourceStreet）

| **字段名** | **数据类型** | **显示名称** | **必选** | **默认值** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| code | String | 编码 | 是 | - | 街道唯一编码（继承自 BaseResourceModel） |
| city | ResourceCity | 市 | 否 | - | 所属城市（通过 cityCode 关联） |
| cityCode | String | 市编码 | 否 | - | 城市编码（关联 ResourceCity 的 code 字段） |
| country | ResourceCountry | 国家 | 否 | - | 所属国家（通过 countryCode 关联） |
| countryCode | String | 国家编码 | 否 | - | 国家编码（关联 ResourceCountry 的 code 字段） |
| district | ResourceDistrict | 区 / 县 | 否 | - | 所属区 / 县（通过 districtCode 关联） |
| districtCode | String | 区 / 县编码 | 否 | - | 区 / 县编码（关联 ResourceDistrict 的 code 字段） |
| mappingList | List<`ResourceRegionMapping`> | 关键字映射列表 | 否 | - | 街道名称关键字映射列表（多对多关系） |
| name | String | 街道名称 | 是 | - | 街道名称 |
| outResourceRelationList | List<`OutResourceRelation`> | 外部资源关联列表 | 否 | - | 外部资源关联关系（通过 code 和模型名关联） |
| province | ResourceProvince | 省 | 否 | - | 所属省 / 州（通过 provinceCode 关联） |
| provinceCode | String | 省编码 | 否 | - | 省 / 州编码（关联 ResourceProvince 的 code 字段） |
| sourceType | String | 来源类型 | 是 | GD | 数据来源类型（默认 "GD" 表示高德） |


### 8、货币（ResourceCurrency）

| **字段名** | **数据类型** | **显示名称** | **必选** | **默认值** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| active | Boolean | 是否激活 | 是 | true | 货币状态（true = 激活，false = 停用） |
| code | String | 编码 | 是 | - | 货币唯一编码（继承自 BaseResourceModel） |
| currencySubunitLabel | String | 小数单位 | 是 | - | 货币小数单位名称（如 "分"） |
| currencyUnitLabel | String | 整数单位 | 是 | - | 货币整数单位名称（如 "元"） |
| decimalPlaces | Integer | 小数精度 | 是 | 2 | 货币金额的小数位数（默认 2 位，如 0.00） |
| name | String | 货币名称 | 是 | - | 货币名称（支持多语言翻译） |
| outResourceRelationList | List<`OutResourceRelation`> | 外部资源关联列表 | 否 | - | 外部资源关联关系（通过 code 和模型名关联） |
| position | CurrencyPositionEnum | 符号位置 | 是 | - | 货币符号显示位置枚举（如前置、后置） |
| rounding | CurrencyRoundingEnum | 精确方式 | 是 | ROUND_HALF_UP | 数值 rounding 规则枚举（默认四舍五入） |
| symbol | String | 货币符号 | 是 | - | 货币符号（如 "¥"、"quot;） |


### 9、语言（ResourceLang）

| **字段名** | **数据类型** | **显示名称** | **必选** | **默认值** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| active | ActiveEnum | 激活状态 | 否 | ACTIVE | 语言激活状态枚举（ACTIVE = 激活，INACTIVE = 停用） |
| addressFormat | String | 地址格式 | 否 | - | 运行时实际使用的地址格式（如 "城市 / 街道 / 门牌号"） |
| addressTypes | List<`AddressTypeEnum`> | 地址类型 | 否 | - | 支持的地址类型枚举列表（如国家 / 省 / 市等） |
| calendarType | CalendarTypeEnum | 日历 | 是 | - | 日历类型枚举（如公历、农历等） |
| code | String | 编码 | 是 | - | 语言唯一编码（继承自 CodeModel，如 "zh-CN"） |
| decimalPoint | String | 小数格式 | 是 | - | 小数分隔符（如 "." 或 ","） |
| dateFormat | String | 日期格式 | 否 | - | **已弃用**，改用 resourceDateFormat 关联 |
| direction | DirectionEnum | 书写习惯 | 是 | - | 文字书写方向枚举（LTR = 从左到右，RTL = 从右到左） |
| groupingRule | String | 数字分组规则 | 否 | 3 | 数字分组位数（如 "3" 表示千位分隔，如 1,000） |
| icon | PamirsFile | 图标 | 否 | - | **已弃用**，改用 resourceIcon 关联 |
| installState | Boolean | 语言包安装状态 | 否 | - | **已弃用**，不再使用 |
| name | String | 语言名称 | 是 | - | 语言名称（支持多语言翻译，如 "简体中文"） |
| resourceDateFormat | ResourceDateFormat | 日期格式 | 否 | - | 日期格式配置模型（关联 ResourceDateFormat） |
| resourceIcon | ResourceIcon | 图标 | 否 | - | 语言图标（推荐使用 ResourceIcon 模型关联） |
| resourceTimeFormat | ResourceTimeFormat | 时间格式 | 否 | - | 时间格式配置模型（关联 ResourceTimeFormat） |
| thousandsSep | String | 整数格式 | 是 | - | 千位分隔符（如 "," 或 " "） |
| timeFormat | String | 时间格式 | 否 | - | **已弃用**，改用 resourceTimeFormat 关联 |
| timezoneType | TimeZoneTypeEnum | 时区 | 是 | - | 时区枚举（如 UTC+8、UTC-5 等） |
| userCurrentLang | Boolean | 当前用户语言 | 否 | false | 标识是否为当前用户语言（前端展示用，不存储业务数据） |
| weekStart | WeekStartEnum | 一周开始日 | 是 | - | 一周起始日枚举（如 MONDAY、SUNDAY） |
| isoCode | String | 语言 ISO 代码 | 是 | - | 国际化编码（如 "zh" 表示中文，"en" 表示英文） |


### 10、税种（ResourceTaxKind）

| **字段名** | **数据类型** | **显示名称** | **必选** | **默认值** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| code | String | 编码 | 是 | - | 税种唯一编码（继承自 CodeModel） |
| name | String | 名称 | 是 | - | 税种名称（需唯一） |


### 11、税率（ResourceTax）

| **字段名** | **数据类型** | **显示名称** | **必选** | **默认值** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| code | String | 编码 | 是 | - | 税率唯一编码（继承自 CodeModel，自动生成） |
| name | String | 名称 | 是 | - | 税率名称（需唯一，如 "增值税 - 13%"） |
| tax | BigDecimal | 税率 | 是 | - | 税率数值（如 13.0 表示 13%） |
| region | ResourceRegion | 国家地区 | 否 | - | 适用的国家 / 地区（通过地区编码关联，如中国） |
| taxKind | ResourceTaxKind | 税种 | 是 | - | 关联的税种（如增值税、消费税，必填） |
| outResourceRelationList | List<`OutResourceRelation`> | 外部资源关联列表 | 否 | - | 外部资源关联关系（通过 code 和模型名关联） |


### 12、图标（ResourceIcon）

| **字段名** | **数据类型** | **显示名称** | **必选** | **默认值** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| displayName | String | 图标显示名称 | 否 | - | 图标在前端展示的名称（如 "删除图标"） |
| fontClass | String | 字体图标类名 | 否 | - | 字体图标的基础类名（如 "fa fa-trash"） |
| fullFontClass | String | 字体图标全类名 | 否 | - | 包含库前缀的完整类名（如 "font-awesome fa-trash"） |
| group | ResourceIconGroup | 分组 | 否 | - | 图标所属分组（通过 groupId 关联 ResourceIconGroup） |
| groupId | Long | 分组 id | 否 | - | 图标分组 ID |
| id | Long | ID | 是 | - | 主键 ID（继承自 IdModel） |
| lib | ResourceIconLib | 图标库 | 否 | - | 图标所属图标库（通过 libId 关联 ResourceIconLib） |
| libId | Long | 图标库 id | 否 | - | 图标库 ID |
| name | String | 图标名称 | 否 | - | 图标文件名称或标识 |
| outId | String | 图标 id | 否 | - | 外部图标唯一标识（如字体图标 Unicode 编码） |
| remark | String (Text) | 备注 | 否 | - | 图标备注信息（最大 500 字符） |
| show | Boolean | 显隐 | 否 | true | 图标是否显示（默认显示） |
| sys | Boolean | 是否系统图标 | 否 | false | 是否为系统内置图标（true = 系统图标，不可删除） |
| type | IconLibTypeEnum | 图标类型 | 否 | - | 图标类型枚举（如 FONT = 字体图标，IMAGE = 图片图标） |
| unicode | String | unicode | 否 | - | 字体图标对应的 Unicode 编码（如 "\f01f"） |


### 13、图标分组（ResourceIconGroup）

| **字段名** | **数据类型** | **显示名称** | **必选** | **默认值** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| batchCode | Long | 更新批次 | 否 | - | 分组更新批次号（用于版本控制） |
| iconList | List<`ResourceIcon`> | 全部图标 | 否 | - | 分组包含的图标列表（通过 groupId 关联，一对多关系） |
| iconNum | Long | 图标数量 | 否 | - | 分组内图标总数（非持久化存储，通过计算 iconList 长度获取） |
| id | Long | ID | 是 | - | 主键 ID（继承自 IdModel） |
| name | String | 分组名称 | 否 | - | 分组名称（需唯一，如 "操作图标"） |
| sys | Boolean | 是否系统分组 | 否 | false | 是否为系统内置分组（true = 系统分组，不可删除） |


### 14、图标库（ResourceIconLib）

| **字段名** | **数据类型** | **显示名称** | **必选** | **默认值** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| cssUrls | List<`String`> | css 文件链接 | 否 | - | 图标库对应的 CSS 样式文件链接列表（如字体图标样式表） |
| description | String (Text) | 描述 | 否 | - | 图标库功能描述（如 "Font Awesome 图标库"） |
| fontClassPrefix | String | 图标库前缀 | 否 | - | 字体图标类名前缀（如 "fa-"，用于组合完整类名） |
| fontUrls | List<`String`> | 字体文件链接 | 否 | - | 字体文件链接列表（支持多文件，如 woff2、ttf 格式） |
| group | ResourceIconGroup | 分组 | 否 | - | 图标库所属分组（通过 groupId 关联 ResourceIconGroup） |
| groupId | Long | 分组 id | 否 | - | 图标库分组 ID |
| iconList | List<`ResourceIcon`> | 图标库全部图标 | 否 | - | 图标库包含的图标列表（通过 libId 关联，一对多关系） |
| id | Long | ID | 是 | - | 主键 ID（继承自 IdModel） |
| jsUrls | List<`String`> | js 文件链接 | 否 | - | 图标库所需的 JS 文件链接列表（如动态图标加载脚本） |
| name | String | 图标库名称 | 否 | - | 图标库名称（如 "Font Awesome"） |
| outId | String | 图标库 id | 否 | - | 外部图标库唯一标识（如 Font Awesome 的库 ID） |
| type | IconLibTypeEnum | 图标库类型 | 否 | - | 图标库类型枚举（FONT = 字体图标库，IMAGE = 图片图标库） |


### 15、外部资源关联（OutResourceRelation）

| **字段名** | **数据类型** | **显示名称** | **必选** | **默认值** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| extra | String | 拓展字段 | 否 | - | 扩展数据（建议使用 JSON 格式存储，如外部系统的额外属性） |
| id | Long | ID | 是 | - | 主键 ID（继承自 IdModel） |
| model | String | 关联模型 | 是 | - | 关联的内部模型名称（如 "resource.ResourceCountry"） |
| outCode | String | 外部编码 | 是 | - | 外部系统中的资源编码（推荐作为关联主键，如第三方平台的唯一标识） |
| relationCode | String | 关联编码 | 是 | - | 内部系统的资源编码（推荐作为唯一关联值，如本系统的地区 Code） |
| sourceType | String | 来源类型 | 是 | - | 外部系统标识（如 "GD"= 高德地图，"BD"= 百度地图） |


### 16、关键字映射（ResourceRegionMapping）

| **字段名** | **数据类型** | **显示名称** | **必选** | **默认值** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| id | Long | ID | 是 | - | 主键 ID（继承自 IdModel） |
| model | String | 关联模型 | 是 | - | 关联的地区模型类型（如 "resource.ResourceProvince"、"resource.ResourceCity"） |
| relationCode | String | 关联编码 | 是 | - | 对应地区的编码（如省份编码 "CN-31"、城市编码 "CN-31-01"） |
| keywords | String | 映射关键字 | 是 | - | 用于匹配的关键字（如城市别名 "沪" 对应 "CN-31"） |


### 17、日期格式（ResourceDateFormat）

| **字段名** | **数据类型** | **显示名称** | **描述（格式示例）** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| chinese | String | 中文格式 | `YYYY年MM月DD日`（如 2025 年 06 月 06 日） |
| chineseYearMonth | String | 中文年月格式 | `YYYY年MM月`（如 2025 年 06 月） |
| hyphenYearMonth | String | 连字符年月格式 | `YYYY-MM`（如 2025-06） |
| slashYearMonth | String | 斜杠年月格式 | `YYYY/MM`（如 2025/06） |
| hyphen | String | 连字符格式 | `YYYY-MM-DD`（如 2025-06-06） |
| slash | String | 斜杠格式 | `YYYY/MM/DD`（如 2025/06/06） |
| chineseMap | Map<String, Object> | 中文格式（前端） | 包含语言、格式的 JSON 对象（如`{"lang":"zh-CN", "format":"YYYY年MM月DD日"}`） |
| chineseYearMonthMap | Map<String, Object> | 中文年月格式（前端） | 包含语言、格式的 JSON 对象 |
| hyphenYearMonthMap | Map<String, Object> | 连字符年月格式（前端） | 包含语言、格式的 JSON 对象 |
| slashYearMonthMap | Map<String, Object> | 斜杠年月格式（前端） | 包含语言、格式的 JSON 对象 |
| hyphenMap | Map<String, Object> | 连字符格式（前端） | 包含语言、格式的 JSON 对象 |
| slashMap | Map<String, Object> | 斜杠格式（前端） | 包含语言、格式的 JSON 对象 |


### 18、时间格式（ResourceTimeFormat）

| **字段名** | **数据类型** | **显示名称** | **描述（格式示例）** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| colonNormal | String | 标准冒号格式 | `HH:mm:ss`（24 小时制，如`14:30:45`） |
| colonShort | String | 简写冒号格式 | `HH:mm`（24 小时制，如`14:30`） |
| apColonNormal | String | 标准冒号格式（AP 样式） | `A hh:mm:ss`（12 小时制，如`PM 02:30:45`） |
| apColonShort | String | 简写冒号格式（AP 样式） | `A hh:mm`（12 小时制，如`PM 02:30`） |
| colonNormalMap | Map<String, Object> | 标准冒号格式（前端） | 包含格式信息的映射（如`{"format":"HH:mm:ss"}`） |
| colonShortMap | Map<String, Object> | 简写冒号格式（前端） | 包含格式信息的映射 |
| apColonNormalMap | Map<String, Object> | 标准冒号格式（AP 样式，前端） | 包含格式信息的映射 |
| apColonShortMap | Map<String, Object> | 简写冒号格式（AP 样式，前端） | 包含格式信息的映射 |


## （二）枚举

### 1、地址类型（AddressTypeEnum）

| **枚举值** | **存储值** | **显示名称** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| Country | country | 国家 | 国家层级地址 |
| Province | province | 省 | 省级行政区 |
| City | city | 市 | 市级行政区 |
| District | district | 区 | 区级行政区 |
| Street | street | 街道 | 街道 / 乡镇层级地址 |


### 2、消费税标签（VatLabelEnum）

| **枚举值** | **存储值** | **显示名称** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| VAT | VAT | 增值税 | 增值税（常见于欧洲、中国） |
| GST | GST | GST | 商品及服务税（常见于加拿大、澳大利亚） |
| HST | HST | HST | 统一销售税（加拿大部分省份） |
| RFC | RFC | RFC | 纳税人登记号（墨西哥） |
| RNC | RNC | RNC | 纳税人登记号（多米尼加等） |
| NIT | NIT | NIT | 纳税人识别号（哥伦比亚等） |


### 3、货币符号位置（CurrencyPositionEnum）

| **枚举值** | **存储值** | **显示名称** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| BEFORE | BEFORE | 货币符号在前 | 货币符号显示在金额前（如 "¥100"） |
| AFTER | AFTER | 货币符号在后 | 货币符号显示在金额后（如 "100¥"） |


### 4、货币精确方式（CurrencyRoundingEnum）

| **枚举值** | **存储值** | **显示名称** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ROUND_UP | ROUND_UP | 直接向上 | 无论舍弃部分是否存在，直接向上进位（如 1.1→2.0） |
| ROUND_DOWN | ROUND_DOWN | 直接向下 | 直接舍弃小数部分（如 1.9→1.0） |
| ROUND_CEILING | ROUND_CEILING | 正数进位向上，负数舍位向上 | 正数时向正无穷方向舍入（1.1→2.0），负数时向零方向舍入（-1.9→-1.0） |
| ROUND_FLOOR | ROUND_FLOOR | 正数舍位向下，负数进位向下 | 正数时向零方向舍入（1.9→1.0），负数时向负无穷方向舍入（-1.1→-2.0） |
| ROUND_HALF_UP | ROUND_HALF_UP | 四舍五入（≥0.5 进位） | 舍弃部分≥0.5 则进位（1.5→2.0，1.4→1.0） |
| ROUND_HALF_DOWN | ROUND_HALF_DOWN | 四舍五入（>0.5 进位） | 舍弃部分 > 0.5 则进位（1.5→1.0，1.6→2.0） |
| ROUND_HALF_EVEN | ROUND_HALF_EVEN | 银行家舍入（奇偶判断） | 舍弃部分左边数字为偶数时作 ROUND_HALF_DOWN，奇数时作 ROUND_HALF_UP   （如 2.5→2.0，3.5→4.0） |
| ROUND_UNNECESSARY | ROUND_UNNECESSARY | 无需舍入 | 断言操作结果精确（如整数运算），若存在小数则抛出异常 |


### 5、激活状态（ActiveEnum）

| **枚举值** | **存储值** | **显示名称** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| ACTIVE | true | 激活 | 表示对象处于激活状态，可正常使用 |
| INACTIVE | false | 无效 | 表示对象已停用，不可参与业务操作 |


### 6、日历类型（CalendarTypeEnum）

| **枚举值** | **存储值** | **显示名称** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| Gregorian | Gregorian | 格里高利历 | 国际通用公历（阳历） |
| Lunar | Lunar | 农历 | 中国传统阴阳合历 |
| Solar | Solar | 阳历 | 太阳历（如公历的别称） |


### 7、书写习惯（DirectionEnum）

| **枚举值** | **存储值** | **显示名称** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| LTR | LTR | 从左向右阅读 | 文字排版方向为左到右（如中文、英文） |
| RTL | RTL | 从右向左阅读 | 文字排版方向为右到左（如阿拉伯文、希伯来文） |


### 8、时区（TimeZoneTypeEnum）

## 枚举值定义

| **枚举值** | **存储值** | **显示名称** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| Australia_Darwin | Australia/Darwin | Australia/Darwin | 澳大利亚达尔文时区 |
| Australia_Sydney | Australia/Sydney | Australia/Sydney | 澳大利亚悉尼时区 |
| America_Argentina_Buenos_Aires | America/Argentina/Buenos_Aires | America/Argentina/Buenos_Aires | 阿根廷布宜诺斯艾利斯时区 |
| Africa_Cairo | Africa/Cairo | Africa/Cairo | 埃及开罗时区 |
| America_Anchorage | America/Anchorage | America/Anchorage | 美国安克雷奇时区 |
| America_Sao_Paulo | America/Sao_Paulo | America/Sao_Paulo | 巴西圣保罗时区 |
| Asia_Dhaka | Asia/Dhaka | Asia/Dhaka | 孟加拉国达卡时区 |
| Africa_Harare | Africa/Harare | Africa/Harare | 津巴布韦哈拉雷时区 |
| America_St_Johns | America/St_Johns | America/St_Johns | 加拿大圣约翰斯时区 |
| America_Chicago | America/Chicago | America/Chicago | 美国芝加哥时区 |
| Asia_Shanghai | Asia/Shanghai | Asia/Shanghai | 中国上海时区 |
| Africa_Addis_Ababa | Africa/Addis_Ababa | Africa/Addis_Ababa | 埃塞俄比亚亚的斯亚贝巴时区 |
| Europe_Paris | Europe/Paris | Europe/Paris | 法国巴黎时区 |
| America_Indiana_Indianapolis | America/Indiana/Indianapolis | America/Indiana/Indianapolis | 美国印第安纳州印第安纳波利斯时区 |
| Asia_Kolkata | Asia/Kolkata | Asia/Kolkata | 印度加尔各答时区 |
| Asia_Tokyo | Asia/Tokyo | Asia/Tokyo | 日本东京时区 |
| Pacific_Apia | Pacific/Apia | Pacific/Apia | 萨摩亚阿皮亚时区 |
| Asia_Yerevan | Asia/Yerevan | Asia/Yerevan | 亚美尼亚埃里温时区 |
| Pacific_Auckland | Pacific/Auckland | Pacific/Auckland | 新西兰奥克兰时区 |
| Asia_Karachi | Asia/Karachi | Asia/Karachi | 巴基斯坦卡拉奇时区 |
| America_Phoenix | America/Phoenix | America/Phoenix | 美国菲尼克斯时区 |
| America_Puerto_Rico | America/Puerto_Rico | America/Puerto_Rico | 波多黎各圣胡安时区 |


### 9、一周开始日（WeekStartEnum）

| **枚举值** | **存储值** | **显示名称** | **描述** |
| :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| MONDAY | monday | 周一 | 周一作为一周的第一天 |
| TUESDAY | tuesday | 周二 | 周二作为一周的第一天 |
| WEDNESDAY | wednesday | 周三 | 周三作为一周的第一天 |
| THURSDAY | thursday | 周四 | 周四作为一周的第一天 |
| FRIDAY | friday | 周五 | 周五作为一周的第一天 |
| SATURDAY | saturday | 周六 | 周六作为一周的第一天 |
| SUNDAY | sunday | 周日 | 周日作为一周的第一天 |

