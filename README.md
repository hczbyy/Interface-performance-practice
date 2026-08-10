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
├── 定时器.doc             # 吞吐量常量定时器恒压测试说明
├── 阶梯压测数据.doc       # 阶梯线程组压测数据记录
├── 服务器搭建环境.docx    # 服务器环境搭建说明
├── 问题排除.doc           # 测试过程中的问题排查记录
├── 小说系统搭建/          # 被测小说系统源码（Flask + MySQL）
└── README.md              # 本文件
```

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
