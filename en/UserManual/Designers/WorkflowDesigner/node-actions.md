---
title: 节点动作
index: true
category:
  - 用户手册
  - 设计器
order: 3
next:
  text: 数据可视化(Data Visualization)
  link: /en/UserManual/Designers/DataVisualization/README.md
---
# 一、触发节点
新增的流程设计页面默认包含两个核心节点：一个是流程的触发节点，用于明确流程启动的条件；另一个是流程的结束节点，用于标识流程的终止。

:::tip 举例

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/cf.png)

:::

流程的触发方式共有三种，分别是：模型触发、定时触发以及日期触发，以满足不同场景的需求。

:::info 注意

+ 若未设置流程触发节点，将无法继续添加其他后续节点，并且流程也无法发布。
+ 当触发节点配置完毕后，必须确保触发节点与结束节点之间至少存在一个节点动作，否则流程同样无法发布。

:::

+ 模型触发：适用于当模型中的数据字段发生变化时，自动触发流程的场景，例如员工请假审批流程。
    - 选择应用：可以选择流程所要触发的模型所属的应用。
    - 选择模型：可选择所选应用下含有的模型。
    - 触发场景：可选择当模型中的数据发生增加、删除或修改时触发流程。
    - 选择更新字段：当触发包括更新数据时显示该属性。当设置的字段更新时才会触发流程
    - 筛选条件：可以设置数据的具体条件，只有当数据更新满足这些条件时，流程才会被触发。
    - 开启代码手动触发：开启后，可允许利用代码手动触发流程。
:::warning 提示

有关筛选条件中自定义表达式的填写，可以查看「自定义表达式」文档。

:::

:::info 注意

若不选择更新字段或筛选条件，则模型中任意字段发生设置场景变化时都会触发流程。

:::

:::tip 举例

选择流程触发方式为模型触发，当在模型中新增数据时触发工作流的运行

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/mxcf.gif)

:::

+ 定时触发：适用于周期性调用流程的场景，如仓库周期性盘点流程。
    - 选择开始时间：可设置流程第一次执行的时间。
    - 循环周期间隔：可自定义循环周期的间隔，需输入数字
    - 选择循环周期：可选择周期，包括分钟、小时、天、周、月、年

:::info 注意

当选择周期为周时，当前周选中的日期也会执行流程。

如：

+ 开始时间：2022-01-14（周四）
+ 循环周期间隔：1周，且自定义设置为周一到周五

则2022-01-15（本周五）也会执行流程操作。

:::

:::tip 举例

选择流程触发方式为定时触发，每月15日定时触发

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/dscf.gif)

:::

+ 日期触发：适用于利用模型中的日期时间字段触发流程的场景，如给员工发生日祝福流程。
    - 选择应用：可以选择流程所要触发的模型所属的应用。
    - 选择模型：可选择所选应用下含有的模型。
    - 指定日期时间字段：可选择所选模型下包含的日期类型字段或日期时间类型字段。
    - 指定时刻：可指定触发的时刻。
    - 选择开始时间：可选择准时以指定时刻立即触发流程或提前/延时触发流程
        * 时间偏移值：可设置偏移值
        * 时间偏移单位：可设置偏移值的单位，包括分钟、小时、天
    - 循环周期：可选择周期，包括不循环、每年、每月
    - 筛选条件：可以设置数据变化的具体条件，只有当数据更新满足这些条件时，流程才会被触发。

:::warning 提示

有关筛选条件中自定义表达式的填写，可以查看「自定义表达式」文档。

:::

:::tip 举例

选择流程触发方式为日期触发，利用“销售数据”模型的日期字段进行每月循环执行

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/rqcf.gif)

:::

# 二、流程节点
## （一）审批
若当前流程需要审批时，可在流程中加入审批节点。

:::tip 举例

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/lcjd/sp1.gif)



:::

:::info 注意

审批节点只能放置在有数据可审批的流程链路上，否则无法配置成功

:::

以下为审批节点所包含的属性，点击节点即可显示：

+ 动态表单：若开启动态表单，将会去匹配与节点名称一致的对应任务节点，从而跳转至对应表单

    :::warning 提示

    有关动态表单的详细信息和查看「工作流」文档

    :::

    - 数据来源：开启动态表单时显示该属性。数据来源包括在审批节点之前所有能获取到的数据。

    :::info 注意

    当数据来源模型与动态表单函数所属模型不一致时，当前节点作为数据源。

    :::

    - 动态表单函数：开启动态表单时显示该属性。即获取动态表单时执行的函数。
    - 审批模型：关闭动态表单时显示该属性。可以选择审批节点之前所有可获取数据的对应模型。
    - 选择视图：关闭动态表单时显示该属性。可以在审批模型下选择视图类型为表单的页面。
+ 数据保存方式：可以设置节点数据的保存方式，包括节点执行完毕后立即保存、不保存数据，以及整个流程执行完毕后再保存数据。

:::tip 举例

选择工作流触发时的模型为审批模型，并选择该模型下的审批视图（已在界面设计器中设计完毕），且当该节点执行完毕后就保存数据

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/lcjd/sp2.gif)

:::

+ 添加审批人：可以在个人、部门、角色和模型相关的字段中选择，允许多选。
    - 自定义审批人：当系统可选审批人无法满足要求时，可通过代码的方式自定义添加审批人
        * 审批人数据节点：包括在审批节点之前所有能获取到的数据。
        * 选择自定义函数：即通过代码方式自定义审批人的函数。
+ 多人审批时的审批方式：当存在审批人显示该属性。包含或签与会签两种方式。
    - 或签：只需一名审批人同意或拒绝，即可决定审批结果。当审批结束后其他审批人无法进入审批操作，但是会弹出消息提示审批结果。
    - 会签：包括两种方式，一种是“所有人同意才为同意，一人拒绝即为拒绝”，另一种是“一人同意即为同意，所有人拒绝才为拒绝”。
    - 自定义审批方式：当系统可选审批方式无法满足要求时，可通过代码的方式自定义添加审批方式
        * 审批方式数据节点：包括在审批节点之前所有能获取到的数据。
        * 选择自定义函数：即通过代码方式自定义审批方式的函数。

:::info 注意

+ 当某人在不同类型人员在选择时被重复选中，只会收到一次审批的待办。
+ 若为多人审批，审批时同步进行的

:::

:::tip 举例

添加两名审批人，角色为“FL-Role”与“领导”，并将多人审批时的审批方式设置为会签（所有人同意才为同意，一人拒绝即为拒绝）

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/lcjd/sp3.gif)

:::

+ 审批截止：可以为当前审批节点设置截止规则，以确保审批流程的及时进行。
    - 截止规则：截止规则有三种选择，包括指定日期时间、限制时长、指定字段值。
        * 当选择指定日期时间时，需要设置具体的截止日期。
        * 当选择限制时长时，可以设定时间长度及其单位。
        * 选择指定字段值时，可以选择日期或日期时间两种类型的字段。当选择日期字段时，需指定触发的时刻
    - 截止前提醒：可以选择是否在审批截止前提醒审批人，以确保审批人能够及时处理。
        * 截止提醒时间与单位：可可以设置截止时间前提醒的具体时间与单位。
        * 截止提醒内容：提醒内容支持自定义，以满足不同场景的需求。

:::tip 举例

为审批流程设置5天的限制时长，并配置相应的提醒时间及提醒内容。

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/lcjd/sp4.gif)

:::

+ 添加抄送人：可以在个人、部门、角色和模型相关的字段中选择，允许多选。抄送人可查看审批信息，但无法对其进行操作。
    - 自定义抄送人：当系统可选抄送人无法满足要求时，可通过代码的方式自定义添加抄送人
        * 抄送人数据节点：包括在审批节点之前所有能获取到的数据。
        * 选择自定义函数：即通过代码方式自定义抄送人的函数。
+ 已读确认：若开启此功能，在抄送人查看审批进展时会展示“已读”按钮
+ 时序：抄送内容发送的时机，包括在节点开始时、节点结束时，审批同意时与审批拒绝时。

:::tip 举例

添加员工“研发员工1”为抄送人，并启用已读确认按钮，并将抄送时序设置为审批同意时发送

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/lcjd/sp5.gif)

:::

+ 允许转交：可选择是否允许将当前审批转交给其他人。添加的转交人为转交时的候选名单。
    - 添加转交人：可以在个人、部门、角色和模型相关的字段中选择，允许多选。转交人与审批人有同等权利。
    - 自定义转交人：当系统可选转交人无法满足要求时，可通过代码的方式自定义添加转交人
        * 转交人数据节点：包括在审批节点之前所有能获取到的数据。
        * 选择自定义函数：即通过代码方式自定义转交人的函数。
+ 允许加签：可选择在审批时临时添加其他审批人。添加的加签人为加签时的候选名单。
    - 添加加签人：可以在个人、部门、角色和模型相关的字段中选择，允许多选。
    - 自定义加签人：当系统可选加签人无法满足要求时，可通过代码的方式自定义添加加签人
        * 加签人数据节点：包括在审批节点之前所有能获取到的数据。
        * 选择自定义函数：即通过代码方式自定义加签人的函数。
    - 参与审批：开启后加签人可参与审批

:::info 注意

当允许转交或允许加签功能被开启，并且相关配置完整无误后，审批页面中将会出现转交与加签的按钮。若这两个功能未被开启，则审批页面中不会显示对应的按钮。

:::

:::tip 举例

开启允许转交与允许加签功能，并为其添加转交人与加签人。

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/lcjd/sp6.gif)

效果预览：

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/lcjd/sp7.gif)

:::

+ 拒绝原因必填：启用此功能后，审批人在拒绝审批时必须填写拒绝原因。
+ 允许退回：启用此功能后，可以选择退回到该审批节点之前任意可达的审批或填写节点。

:::info 注意

当多人审批，且审批方式为“一人同意即为同意，所有人拒绝才为拒绝”的会签时，不允许退回。

:::

+ 截止自动转交：在设置审批截止规则后显示，可自定义转交人。当到达截止时间时，系统将自动将该审批事项转交给指定人员。
:::info 注意

自动转交人至少需要包含一位当前操作人之外的用户，否则截止规则设置失效。

:::
+ 截止自动同意：在设置审批截止规则后显示。当到达截止时间后，系统将自动同意该审批。

+ 数据权限：选择视图后自动显示该视图下的数据字段，可选择的权限为查看、编辑和隐藏数据字段。默认可查看全部字段。
:::info 注意

若当前节点选择的视图中存在子表时，可在数据权限中控制子表中字段的权限
+ 若子表字段设置为“查看”时，仅可设置子表中的字段可见性
+ 若子表字段设置为“编辑”时，可设置子表中的字段与动作权限

:::
+ 参与人重复：可以选择提供的重复场景，当审批流程满足所选场景时，系统将自动审批通过。
+ 审批开始前执行函数：启用此功能后，可在审批开始前执行选定的自定义函数。
+ 待办操作提交后执行函数：启用此功能后，可在待办提交后执行选定的自定义函数。
+ 审批操作数据函数：启用此功能后，可在审批过程中执行选定的自定义函数。

## （二）填写
当流程需要某些人提交数据才能继续时，可以使用填写节点。

:::tip 举例

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/lcjd/tx1.gif)

:::

:::info 注意

+ 填写节点只能修改当前触发模型中关联的视图表单
+ 数据类节点中的更新数据可以修改其他模型的数据

:::

填写的属性与审批属性大致相同（详情可查看审批），区别在于：

+ 添加填写人：可以在个人、部门、角色和模型相关的字段中选择，允许多选。
    - 自定义填写人：当系统可选填写人无法满足要求时，可通过代码的方式自定义添加填写人
        * 填写人数据节点：包括在填写节点之前所有能获取到的数据。
        * 选择自定义函数：即通过代码方式自定义填写人的函数。
+ 数据权限：选择视图后自动显示该视图下的数据字段，可选择的权限为查看、编辑和隐藏数据字段。默认可查看全部字段。填写节点的数据权限中至少存在一个字段可以被编辑。
:::info 注意

若当前节点选择的视图中存在子表时，可在数据权限中控制子表中字段的权限
+ 若子表字段设置为“查看”时，仅可设置子表中的字段可见性
+ 若子表字段设置为“编辑”时，可设置子表中的字段与动作权限

:::

:::tip 举例

为“销售数据”模型设置填写节点，指定员工填写销售量信息

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/lcjd/tx2.gif)

:::

# 三、数据节点
## （一）新增数据
新增数据节点可以为任意模型通过表达式新增数据。

:::tip 举例

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/sjjd/xz1.gif)

:::

以下为新增数据节点所包含的属性，点击节点即可显示：

+ 选择应用：可选择任意应用。
+ 模型：在选择的应用下，可以选择任意模型。
+ 是否批量新增：可选择是否批量新增数据，启用此功能后可选择批量数据源。数据源为当前节点之前所有能获取到的数据。
+ 数据保存方式：可选择当前节点数据保存方式，包括节点执行完保存、不保存、整个流程执行完保存。

:::info 注意

若选择不保存或整个流程执行完保存时，将会清空应用该数据源的设置。因为不保存或整个流程执行完保存会导致对该数据源的引用或设置都可能是临时的。

:::

+ 新增数据列表：点击“创建”按钮后，可以为所选模型下的字段设置表达式，当数据符合这些表达式时，即可触发新增数据的操作。此外，还可以设置自定义函数，当自定义函数的条件得到满足时新增数据。

:::warning 提示

有关自定义表达式的填写，可以查看「自定义表达式」文档。

:::

+ 开启更新数据触发流程：启用此功能后，可以在更新数据时触发流程。

:::tip 举例

当从“销售数据”模型中获取数据后，将数据新增至“销售与广告数据”模型中

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/sjjd/xz2.gif)

:::

## （二）更新数据
更新数据节点可以为任意模型通过表达式更新数据。

:::tip 举例

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/sjjd/gx1.gif)

:::

以下为更新数据节点所包含的属性，点击节点即可显示：

+ 更新模型：可以选择更新节点之前所有可获取数据的对应模型。
+ 数据保存方式：可选择当前节点数据保存方式，包括节点执行完保存、不保存、整个流程执行完保存。
+ 更新数据列表：点击“创建”按钮后，可以为所选模型下的字段设置表达式，当数据符合这些表达式时，即可触发更新数据的操作。此外，还可以设置自定义函数，当自定义函数的条件得到满足时更新数据。

:::warning 提示

有关自定义表达式的填写，可以查看「自定义表达式」文档。

:::

+ 开启更新数据触发流程：启用此功能后，可以在更新数据时触发流程。

:::tip 举例

更新“销售与广告数据”模型的销售额为原来的1.5倍

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/sjjd/gx2.gif)

:::

## （三）获取数据
获取数据节点可以为流程获取触发模型之外的模型中的数据。

:::tip 举例

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/sjjd/hq1.gif)

:::

以下为获取数据节点所包含的属性，点击节点即可显示：

+ 获取类型：可选择获取单条数据还是多条数据。
+ 选择应用：可选择任意应用。
+ 模型：在选择的应用下，可以选择任意模型。
+ 过滤条件：可以设置数据的具体条件，只有当数据更新满足这些条件时才会被获取。

:::warning 提示

有关过滤条件中自定义表达式的填写，可以查看「自定义表达式」文档。

:::

+ 排序字段：当设置了过滤条件或获取多条字段时，可以设置排序字段来对获取到的字段排序。
+ 未获取数据时处理：可选择未获取到数据的执行方式
    - 继续执行：跳过本次数据获取，继续执行流程。
    - 向模型中新增数据后继续执行：新增数据来供后续节点使用，新增数据的同时存入数据库中。
    - 终止流程：结束该流程，无论该节点之后是否还存在其他节点。

:::tip 举例

获取“销售数据”模型内的数据

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/sjjd/hq2.gif)

:::

## （四）删除数据
删除数据节点可以将流程节点上面的模型数据从数据库中删除。

:::tip 举例

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/sjjd/sc1.gif)

:::

以下为删除数据节点所包含的属性，点击节点即可显示：

+ 删除模型：可以选择删除节点之前所有可获取数据的对应模型。
+ 数据保存方式：可选择当前节点数据保存方式，包括节点执行完保存、不保存、整个流程执行完保存。

:::tip 举例

删除“用户行为”模型中的数据（现有一条数据）

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/sjjd/sc2.gif)

流程执行后“用户行为”中本条数据被删除

:::

## （五）更新流程参数
可以将「流程配置」中的「流程参数」进行修改。

:::tip 举例

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/sjjd/gxcs1.gif)

:::

:::info 注意

仅有更新过的流程参数才能在其他节点被使用。

:::

以下为更新流程参数节点所包含的属性，点击节点即可显示：

+ 已设参数：可以选择在流程配置中已创建的流程参数，并将该节点之前所有可获取的、与参数类型相一致的数据设为该参数的值。

:::tip 举例

已在流程配置中添加了一个流程参数tid，现将该流程参数设置为“销售数据”模型的名称

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/sjjd/gxcs2.gif)

:::

# 四、通知节点
## （一）站内信
站内信可以向用户发送消息。

:::tip 举例

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/tzjd/znx1.gif)

:::

以下为站内信节点所包含的属性，点击节点即可显示：

+ 添加接收人：可以在个人、部门、角色和模型相关的字段中选择，允许多选。
+ 自定义通知人：当系统可选通知人无法满足要求时，可通过代码的方式自定义添加通知人
    - 通知人数据节点：包括在站内信节点之前所有能获取到的数据。
    - 选择自定义函数：即通过代码方式自定义通知人的函数。
+ 通知标题：可为发送的消息设置标题。
+ 通知内容：提供内置文本编辑器，方便编写和编辑发送的消息内容。

:::info 注意

节点触发后发送的站内信可以在工作台-站内信中查看。

:::

:::tip 举例

为员工定时发送提醒消息

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/tzjd/znx22.gif)

:::

## （二）邮件
邮箱节点可以向指定邮箱发送邮件。

:::tip 举例

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/tzjd/yj1.gif)

:::

以下为邮件节点所包含的属性，点击节点即可显示：

+ 接收人：可直接输入邮箱号、或可以在个人、部门、角色和模型相关的字段中选择，允许多选。也可以通过代码的方式自定义接收人。
+ 主题：可自定义邮件的主题。
+ 正文：可自定义邮件的正文。

    :::info 注意

    在邮件正文中，支持运用表达式来灵活表示各类变量，使得邮件内容具备更高的动态性和可定制性。

    ![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/yjzwbds.png)
    ![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/yjzwbds-sl.gif)

    :::

+ 发送人：可设置发送人名称。
+ 回复邮箱：可填写回复邮箱地址。

:::tip 举例

为员工发送邮件

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/tzjd/yj2.gif)

:::

## （三）短信
短信节点可以向指定接收人发送短信。

:::tip 举例

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/tzjd/dx1.gif)

:::

以下为短信节点所包含的属性，点击节点即可显示：

+ 接收人：可直接输入手机号、或可以在个人、部门、角色和模型相关的字段中选择，允许多选。也可以通过代码的方式自定义接收人。
+ 选择短信模板：短信模板可在「工作流」-「系统设置」-「短信模板」中进行设置，审核通过后即可使用。
+ 短信内容：已在选择的短信模板中预设完毕。
+ 设置短信内容变量：可以为短信的中的变量设置表达式。

:::tip 举例

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/tzjd/dx2.gif)

:::

# 五、构建节点
## （一）延时
延时节点能够使下一个节点的动作延迟一段时间后再执行。

:::tip 举例

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/gjjd/ys1.gif)

:::

以下为延时节点所包含的属性，点击节点即可显示：

延时节点包含两种延时方式，分别为延至指定日期与延时一段时间。

+ 延至指定日期：可以选择时间选择类型为延至模型字段的时间或自定义时间
    - 指定模型：时间类型为延至模型字段时，显示该属性。可以选择延时节点之前所有可获取数据的对应模型。
    - 指定模型字段：时间类型为延至模型字段时，显示该属性。可以选择指定模型中的日期字段或日期时间字段。
    - 指定日期：时间类型为自定义时间时，显示该属性。可以自定义具体日期。
    - 触发时机：可选择准时以指定日期立即触发流程或提前/延时触发流程
        * 天：当选择提前或延时指定日期时，可设置以天为单位的偏移值
    - 指定时辰：如果自定义时间或模型字段为日期字段，必须设置指定时辰。
+ 延时一段时间：可以自定义“天、小时、分钟”中至少一项。

:::tip 举例

为流程延至到5日之后进行

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/gjjd/ys2.gif)

:::

## （二）条件分支
条件分支节点可以使不同条件的数据执行不同的分支流程。

:::tip 举例

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/gjjd/tjfz1.gif)

:::

:::info 注意

+ 可以增加或删除条件分支，当只有两个分支时删除任一分支会删除整个条件分支。
+ 删除分支时，同时会删除该分支下所有节点。

:::

以下为条件分支节点所包含的属性，点击节点即可显示：

+ 分支条件：可自定义节点规则表达式，配置分支的不同条件。

:::info 注意

分支条件表达式不允许为空，否则流程无法正常执行。

:::

:::tip 举例

以“导购邀请下单”中的下单金额为分支条件，为工作流创建条件分支，满足在不同金额的情况下完成不同的流程

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/gjjd/tjfz2.gif)

:::

## （三）并行
并行节点可以使满足条件的分支同时执行。

:::tip 举例

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/gjjd/bx1.gif)

:::

:::info 注意

+ 可以增加或删除并行分支，当只有两个分支时不允许删除。
+ 删除分支时，同时会删除该分支下所有节点。

:::

以下为并行节点所包含的属性，点击节点即可显示：

+ 分支条件：可自定义并行规则表达式，配置分支的不同条件。

:::tip 举例

将“导购邀请下单”模型中的下单金额小于或等于50的数据分支汇聚为一支进行后续流程操作

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/gjjd/bx2.gif)

:::

## （四）审批分支
审批分支是一种特殊的条件分支，只能添加在审批节点下方。审批分支只存在通过与拒绝两种条件，无法添加其他条件。

:::tip 举例

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/gjjd/spfz.gif)

:::

:::info 注意

+ 若删除审批节点，审批分支节点也会同时删除。
+ 删除任一分支时会同时删除整个审批分支。

:::

## （五）子流程
一些高度重复的流程节点可以创建成子流程，在主流程中引用子流程节点，可以减少流程的重复配置。

:::tip 举例

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/gjjd/zlc1.gif)

:::

:::info 注意

+ 子流程与普通流程不同，不包含触发方式。普通流程进行到子流程节点即为子流程的触发条件。
+ 对于单条数据，系统仅会发起一个对应的子流程；而当处理多条数据时，系统会相应地发起多个子流程。

:::

以下为子流程节点所包含的属性，点击节点即可显示：

+ 选择模型：可以选择子流程节点之前所有可获取数据的对应模型。
+ 选择子流程：包括创建新的子流程与选择已有子流程两种方式。
    - 创建新的子流程：输入子流程名称后保存即会创建子流程。
    - 选择已有子流程：可以选择当前流程中有用到的模型下的子流程
+ 子流程执行方式：可以选择“子流程和后续节点同时执行”或“子流程执行完毕后，再开始下一节点”。
+ 参数配置：如果选择的子流程中存在创建好的流程参数，可以在此为参数设置数据。

:::tip 举例

为当前流程创建一个子流程

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/gjjd/zlc2.gif)

:::

# 六、开发者节点
## （一）WebHook
WebHook节点可以向第三方系统发送请求，也可以从其他系统中获取数据

:::tip 举例

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/kfzjd/web1.gif)

:::

以下为WebHook节点所包含的属性，点击节点即可显示：

+ 钉钉机器人通知
    - WebHook URL：复制需要通知的时间或群聊机器人的URL地址。

    :::tip 举例

    钉钉可在钉钉群设置中的机器人管理处添加机器人，复制对应的Webhook地址。

    :::

    - 加签秘钥：钉钉群机器人管理中勾选加签，复制对应的秘钥。
    - 通知内容：可自定义通知内容。
+ 企业微信机器人通知
    - WebHook URL：复制需要通知的时间或群聊机器人的URL地址。
    - 通知内容：可自定义通知内容。
+ 其他
    - 请求方式：支持GET、POST两种请求方式
    - WebHook URL：填写发送请求的HTTP地址。
    - Headers：即请求头，可创建或编辑key与value，value支持通过表达式配置。
    - 通知内容：即请求体，当请求方式为POST时，可自定义通知内容。

:::tip 举例

设置一个钉钉机器人，机器人通知“欢迎入群👏🏻”

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/kfzjd/web2.gif)

:::

## （二）调用函数
当已有节点动作无法满足业务需求时，可使用调用函数节点，调用自定义的函数。

:::tip 举例

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/kfzjd/dy1.gif)

:::

以下为调用函数节点所包含的属性，点击节点即可显示：

+ 数据节点：可以选择调用函数节点之前所有可获取数据。
+ 选择函数：可选择自定义函数。

:::tip 举例

为流程中“获取数据”节点增加根据主键更新记录的功能

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/ProcessDesiner/Node%20action/kfzjd/dy2.gif)

:::

