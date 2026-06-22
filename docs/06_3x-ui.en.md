# 📊 Installing and Configuring the 3X-UI Web Panel

**3X-UI** is an advanced, lightweight graphical web panel designed to manage your VPN server powered by the Xray-core backend. It allows you to create user access keys in a single click, configure cutting-edge protocols (VLESS, Shadowsocks, Trojan), and monitor individual client traffic consumption.

---

### 🚀 Step 1. Installing the Panel on Your VPS

Connect to your server via SSH and execute the official automated installation script:

```bash
bash <(curl -Ls https://githubusercontent.com)
```

During the setup process, the console will ask if you want to customize your security parameters. **We highly recommend typing `y`** and setting up custom credentials:
1. **Username** — Enter your custom admin login name.
2. **Password** — Enter a strong, secure password.
3. **Port** — Specify any random port number (e.g., `2083` or `8443`) instead of the default one to hide your panel from automated internet scanners.

---

### 🌐 Step 2. Accessing the Web Interface

1. Open your preferred web browser and navigate to the following address:
   `http://YOUR_SERVER_IP_ADDRESS:YOUR_CUSTOM_PORT`
2. Enter the admin credentials (username and password) you created in Step 1.

---

### 🛡️ Step 3. Creating a VLESS Reality Connection (Inbound)

The **VLESS + Reality** protocol combination stands as the ultimate choice for bypassing heavy censorship, effectively camouflaging your VPN traffic as a routine visit to a legitimate, unblocked external website.

1. Navigate to the **"Inbounds"** section in the left-hand menu and click the **"Add Inbound"** button.
2. Fill out the core configuration details:
   * **Remark:** Any label of your choice (e.g., `VLESS-Reality`).
   * **Protocol:** Select `vless`.
   * **Port:** Leave a random port or change it to `443` (for ideal website emulation).
3. Toggle the **Reality** switch to **ON**.
4. Configure the stealth and masking parameters:
   * **uTLS:** Select `chrome` or `firefox`.
   * **Dest / SNI:** Specify a target website to mimic (the panel will automatically suggest reliable presets, such as `://google.com` and `://google.com`).
   * Click both the **"Get New Cert"** and **"Get New Seed"** buttons to dynamically generate your private security keys.
5. Click the **"Create"** button at the bottom of the form.

---

### 👥 Step 4. Adding Users and Extracting Access Keys

Within each connection (Inbound), you can generate completely independent access keys for different people or various personal devices.

1. Locate your newly created VLESS inbound, click **"Operations"**, and choose **"Add Client"**.
2. Set individual account parameters (optional):
   * **Total Flow:** Data transfer limit in GB (e.g., enter `100` to limit that specific user to 100 GB).
   * **Expiry Time:** The exact date when the user's key should automatically expire.
3. After saving, click the **"QR Code"** or **"Link"** icon right next to the user's name.
4. Copy the generated string link (starting with `vless://...`) or scan the QR code directly into your client application.

---

### 📱 Recommended Client Applications

The subscription links and QR codes exported by 3X-UI are fully compliant with all modern anti-censorship VPN clients:

| Platform | Recommended App |
| :--- | :--- |
| **Android** | Hiddify, v2rayNG, Nekobox |
| **iOS (iPhone)** | FoXray, Streisand, Shadowrocket, V2Box |
| **Windows / macOS** | Hiddify, NekoRay, v2rayN |

---

### ⚙️ Useful Terminal Maintenance Commands
Should you ever need to troubleshoot, restart the service, or reset your panel settings via your SSH console, simply type the following command:
```bash
3x-ui
```
This launches an interactive text-based management menu where you can instantly reset a forgotten password, change the web port, or reboot the panel service daemon.
