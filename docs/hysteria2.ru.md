# 📂 Настройка <span class="green">Hysteria</span>

### Введение

Эта статья - пошаговое руководство для новичков, которые хотят самостоятельно настроить свой собственный VPN-сервер на протоколе Hysteria 2. Вам не нужны глубокие знания Linux или сетевых технологий - достаточно уметь копировать команды и внимательно следовать инструкции.


Ввод команды

В открывшееся окно введите следующую команду (замените <SERVER_IP> на полученный вами IP адрес вашего VPS, например 52.88.76.171, а <USER> на полученое имя пользователя, например root или user):

ssh <USER>@<SERVER_IP>

потом короче

apt install curl micro pwgen -y 

а потом короче

(https://github.com/apernet/hysteria/releases/tag/app%2Fv2.9.2)

а потом опа!

mkdir -p /var/www/masq
tee /var/www/masq/index.html >/dev/null <<'HTML'
<!DOCTYPE html><html><head><meta charset="utf-8"><title>Please wait</title><style>body{background:#080808;height:100vh;margin:0;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:sans-serif}.dots{display:flex;gap:15px;margin-bottom:30px}.d{width:20px;height:20px;background:#fff;border-radius:50%;animation:b 1.4s infinite ease-in-out both}.d:nth-child(1){animation-delay:-0.32s}.d:nth-child(2){animation-delay:-0.16s}@keyframes b{0%,80%,100%{transform:scale(0);opacity:0.2}40%{transform:scale(1);opacity:1}}.t{color:#555;font-size:14px;letter-spacing:2px;font-weight:600}</style></head><body><div class="dots"><div class="d"></div><div class="d"></div><div class="d"></div></div><div class="t">RETRYING CONNECTION</div></body></html>
HTML


пуньк 

openssl rand -hex 16


пуньк
nano /etc/hysteria/config.yaml

среньк
listen: 0.0.0.0:443

acme:
  type: http
  domains:
    - тут_ваш_домен
  email: тут_ваш_емеил

auth:
  type: userpass
  userpass:
    Admin: тут_ваш_пароль

masquerade:
  type: file
  file:
    dir: /var/www/masq
  listenHTTP: :80
  listenHTTPS: :443
  forceHTTPS: true

  запустить

  systemctl daemon-reload
systemctl enable --now hysteria-server.service

огненная стена

ufw allow 22/tcp      # если SSH на другом порту - замени 22 на свой
ufw allow 80/tcp
ufw allow 443/udp
ufw allow 443/tcp
ufw --force enable
ufw status verbose