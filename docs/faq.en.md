# ❓ Troubleshooting <span class="green">(FAQ)</span>

Answers to frequently asked questions and technical solutions for common issues with VPS and AmneziaVPN.

---

### ❓ Frequently Asked Questions

??? question "Can I use a single server for multiple devices?"
    **Yes.** You can configure AmneziaVPN on your server and then generate configuration files or QR codes for any of your devices (smartphones, tablets, PCs) or share them with others. The number of connected devices is only limited by your VPS performance and bandwidth.

??? question "Why does the app say 'Server connection error'?"
    This is usually due to three main reasons:
    1.  **Incorrect credentials:** Double-check your IP address, username, or password for any accidental spaces.
    2.  **Server is not ready yet:** After purchasing hosting, the OS installation can take 2 to 10 minutes. Please wait a bit and try again.
    3.  **Port 22 is closed:** Ensure that no firewall in your hosting control panel is blocking incoming SSH connections.

??? question "Which VPN protocol should I choose in the Amnezia app?"
    *   **Amnezia WG (WireGuard):** The fastest and most lightweight protocol, ideal if your ISP does not block standard VPN traffic.
    *   **XRay / OpenVPN vmess:** Excellent choice for regions with strict censorship, as these protocols disguise traffic as regular website visits (HTTPS).
