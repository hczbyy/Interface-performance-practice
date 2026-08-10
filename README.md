# Interface-performance-practice

接口性能测试练习仓库：对部署在 VMware 上 Ubuntu 里的小说系统进行性能测试，数据库在 Windows 端。

测试方法包括：

- 吞吐量常量定时器恒压测试；
- 阶梯线程组寻找性能拐点；
- 接口覆盖读类（读取小说列表）、写类（写评论）以及业务场景。

仅作为个人练习自动化测试使用。

## 仓库结构

```text
Interface-performance-practice/
├── Linux.jmx              # Linux 环境 JMeter 性能测试脚本
├── ai搭建.zip             # 小说系统搭建相关压缩包
├── 小说系统搭建/          # 被测小说系统源码（Flask + MySQL）
├── 性能测试jmeter脚本/    # JMeter 性能测试脚本与测试报告
├── 运行的截图以及结果/    # 测试运行的截图与结果文档
└── README.md              # 本文件
```

`运行的截图以及结果` 文件夹中整理了测试过程的相关文档：吞吐量常量定时器恒压测试说明（`定时器.doc`）、服务器环境搭建说明（`服务器搭建环境.docx`）、问题排查记录（`问题排除.doc`）以及阶梯线程组压测数据记录（`阶梯压测数据.doc`）。

## 小说系统搭建

被测系统为一个基于 Flask + MySQL 的 RESTful 小说平台，专为 JMeter 功能测试与压力测试练习设计。

### 快速开始

```bash
cd 小说系统搭建/novel-platform
pip install -r requirements.txt
python init_db.py      # 初始化数据表
python seed_data.py    # 生成种子数据（50 个用户 + 200 本小说）
python run.py          # 启动服务，默认监听 0.0.0.0:5000
```

测试账号：`test_001` ~ `test_050`，密码均为 `123456`。

完整的 API 接口说明见 `小说系统搭建/novel-platform/README.md`。

## 性能测试jmeter脚本

JMeter 性能测试工程，包含三种测试脚本与对应的 HTML 测试报告：

```text
性能测试jmeter脚本/
├── Linux.jmx              # Linux 环境性能测试脚本
├── window_waitress.jmx    # Windows 环境（waitress）测试脚本
├── Test Plan.jmx          # 测试计划总览
├── 业务流程/              # 业务场景测试报告
├── report定时器查看图书列接口/    # 吞吐量常量定时器恒压测试报告
├── report阶梯压测查看图书列接口/  # 阶梯线程组压测（读接口）报告
└── report阶梯压测写评论/          # 阶梯线程组压测（写接口）报告
```

报告文件夹为 JMeter HTML Dashboard 输出，直接用浏览器打开其中的 `index.html` 即可查看压测结果（TPS、响应时间、错误率等）。测试脚本覆盖读类接口（查看图书列表）与写类接口（写评论）场景。
