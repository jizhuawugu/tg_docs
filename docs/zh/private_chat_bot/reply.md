# 怎么回复用户

## 回复模式：
每条回复需手动选择对象并点击回复。

<div style="display: flex; gap: 20px; justify-content: space-around;">
  <div style="text-align: center;">
    <p style="font-size: 18px; color: #4CAF50; font-weight: bold;">1️⃣选择需要回复的对象右键/长按选择回复</p>
    <img src="/private_chat_bot/select_reply.png" width="400" height="400" style="border: 2px solid #4CAF50; border-radius: 8px; padding: 5px;" />
  </div>
  <div style="text-align: center;">
    <p style="font-size: 18px; color: #F44336; font-weight: bold;">2️⃣输入回复内容,发送即可</p>
    <img src="/private_chat_bot/input_content.png" width="400" height="400" style="border: 2px solid #F44336; border-radius: 8px; padding: 5px;" />
  </div>
</div>

## 锁定模式/智能模式：
每个新用户会有一个 '🔄 切换至' 选项，切换后可顺畅对话,智能模式在锁定模式基础上，增加智能判断。如果长时间未发送消息，则会清空当前锁定对象，避免长时间固定

<div style="display: flex; gap: 20px; justify-content: space-around;flex-wrap: wrap;">
  <div style="text-align: center;">
    <p style="font-size: 18px; color: #4CAF50; font-weight: bold;">1️⃣切换至目标用户</p>
    <img src="/private_chat_bot/start_chat.png" width="300" height="300" style="border: 2px solid #4CAF50; border-radius: 8px; padding: 5px;" />
  </div>
  <div style="text-align: center;">
    <p style="font-size: 18px; color: #F44336; font-weight: bold;">2️⃣切换成功</p>
    <img src="/private_chat_bot/switch_user.png" width="300" height="300" style="border: 2px solid #F44336; border-radius: 8px; padding: 5px;" />
  </div>
  <div style="text-align: center;">
    <p style="font-size: 18px; color: #F44336; font-weight: bold;">3️⃣直接输入消息。</p>
    <img src="/private_chat_bot/input_text.png" width="300" height="300" style="border: 2px solid #F44336; border-radius: 8px; padding: 5px;" />
  </div>
  <div style="text-align: center;">
    <p style="font-size: 18px; color: #F44336; font-weight: bold;">4️⃣发送成功</p>
    <img src="/private_chat_bot/send.png" width="300" height="300" style="border: 2px solid #F44336; border-radius: 8px; padding: 5px;" />
  </div>
</div>

## 重置锁定对象

::: danger ❗️❗️❗️提示
一旦锁定了用户，您可以直接发送消息，无需通过右键/长按选择回复对象。  
例如，如果您锁定了用户A，后续所有发送的消息都会默认回复给A。如果此时通过右键/长按选择回复B，实际回复对象依然是已锁定的A。若要回复B，您需要先重置锁定。
:::

<div style="display: flex; gap: 20px; justify-content: space-around;flex-wrap: wrap;">
  <div style="text-align: center;">
    <p style="font-size: 18px; color: #4CAF50; font-weight: bold;">点击重置</p>
    <img src="/private_chat_bot/click_reset.png" width="300" height="300" style="border: 2px solid #4CAF50; border-radius: 8px; padding: 5px;" />
  </div>
  <div style="text-align: center;">
    <p style="font-size: 18px; color: #F44336; font-weight: bold;">已重置</p>
    <img src="/private_chat_bot/Resetted.png" width="300" height="300" style="border: 2px solid #F44336; border-radius: 8px; padding: 5px;" />
  </div>
</div>
