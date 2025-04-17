# Web实现MQTT通信
这是一个在本地实现Web连接到MQTT服务器的Demo

## 必备软件（Windows操作系统）
1. Node.js以及npm包管理器
2. NGINX服务器
3. Docker（要求电脑开启WSL服务）
4. EMQX(使用Docker部署)

## 主要操作步骤
1. 下载本代码到NGINX的工作目录并在命令行运行
```npm install```
2. 配置NGINX服务器，主要配置如下
``` 
location /mqtt {

        proxy_pass http://127.0.0.1:8083/mqtt;
        proxy_http_version 1.1;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;

    }

    location / {
        root your/work/root;   
        index index.html;
    }
```
3. 在Docker中运行EMQX
4. 在浏览器中访问NGINX服务器，例如```http://localhost/``` 即可向MQTT服务器发布或订阅消息
