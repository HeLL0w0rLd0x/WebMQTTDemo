import mqtt from 'mqtt';

const client = mqtt.connect('ws://192.168.137.1/mqtt');//ws默认使用80端口
//const client = mqtt.connect('ws://localhost:8083/mqtt'); // 直连 EMQX（绕过 nginx）

client.on('connect', () => {
  log('✅ 已连接到 MQTT 服务器');
  client.subscribe('test/topic', (err) => {
    if (!err) {
      log('📡 已订阅 test/topic');
    } else {
      log('❌ 订阅失败: ' + err.message);
    }
  });
});

client.on('message', (topic, message) => {
  log(`📨 收到消息 - Topic: ${topic} | Message: ${message.toString()}`);
});

document.getElementById('sendBtn').addEventListener('click', () => {
  sendMessage();
});


function sendMessage() {
  const msg = document.getElementById('msgInput').value;
  client.publish('test/topic', msg);
  log(`📤 已发送: ${msg}`);
}

function log(msg) {
  const logDiv = document.getElementById('log');
  const p = document.createElement('p');
  p.textContent = msg;
  logDiv.appendChild(p);
}
