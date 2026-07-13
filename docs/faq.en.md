# ❓ Troubleshooting <span class="green">(FAQ)</span>

Answers to frequently asked questions and technical solutions for common issues with VPS and AmneziaVPN.

---

### ❓ Frequently Asked Questions

??? question "Can I use a single server for multiple devices?"
    **Yes.** You can configure AmneziaVPN on your server and then generate configuration files or QR codes for any of your devices (smartphones, tablets, PCs) or share them with others. Our plans are tuned for smooth performance with **up to 10 devices** connected simultaneously.

??? question "Why does the app say 'Server connection error'?"
    This is usually due to three main reasons:
    1.  **Incorrect credentials:** Double-check your IP address, username, or password for any accidental spaces.
    2.  **Server is not ready yet:** After purchasing hosting, the OS installation can take 2 to 10 minutes. Please wait a bit and try again.
    3.  **Port 22 is closed:** Ensure that no firewall in your hosting control panel is blocking incoming SSH connections.

??? question "Which VPN protocol should I choose in the Amnezia app?"
    *   **Amnezia WG (WireGuard):** The fastest and most lightweight protocol, ideal if your ISP does not block standard VPN traffic.
    *   **XRay / OpenVPN vmess:** Excellent choice for regions with strict censorship, as these protocols disguise traffic as regular website visits (HTTPS).

??? question "How much traffic does running a VPN on the server consume?"
    The VPN server itself does not generate traffic. Consumption depends entirely on your activity: if you download a 1 GB file through the VPN, the server spends 1 GB downloading it and another 1 GB delivering it to you (2 GB total from your hosting limit). Choose plans with unlimited traffic.

??? question "The Ping command doesn't work! 'Request timed out' or '100% loss'"
    ICMP traffic is blocked on our servers. Check the server's availability via `ssh root@server-ip` instead.

??? question "How can I pay for Amnezia Hosting?"
    We accept **Visa** and **Mastercard** bank cards, as well as the **Freekassa** payment service. All invoices and payment history are available in your **Client Area** under the "Invoices" section.

??? question "How do I get a refund for a server?"
    Refund conditions are described in the **Refund and Compensation Policy**. To request a refund, open a ticket in your **Client Area** — the support team will guide you through the process.

---

### 🔧 Technical Support

If your problem is not listed here, or you need personalized assistance with your Amnezia Hosting servers:

*   💻 Open a ticket in the **Client Area** of your hosting provider.
*   💬 Visit the official Amnezia user community on Telegram.
*   📂 Check the **[Server Management](server-management.md)** section for self-diagnosis of the OS.
