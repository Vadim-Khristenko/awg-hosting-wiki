# 🚀 Quick Start <span class="green">with VPS</span>

This guide will help you make your first connection to your new Amnezia Hosting server and introduce you to the basic commands for system management.

---

### 🚀 Step 1. Get Server Credentials
After successful activation of your VPS, you will receive the main access details via email:
*   **Server IP Address** (e.g., `192.168.1.100`)
*   **Username** (usually `root`)
*   **Password** or **SSH Key**

---

### 💻 Step 2. Connect to the Server via SSH

#### For Linux / macOS / Windows:
```bash
ssh root@YOUR_SERVER_IP
```

---

### 🔄 Step 3. Update the System
```bash
apt update && apt upgrade -y
```
