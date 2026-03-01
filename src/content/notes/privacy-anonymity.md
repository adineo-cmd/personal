# Privacy & Anonymity Measures

Tools and practices for protecting digital privacy, maintaining anonymity, and securing communications.

## Browser Privacy

| Tool | Purpose | Link |
|------|---------|------|
| **Tor Browser** | Anonymous browsing | torproject.org |
| **Brave** | Privacy-focused browser | brave.com |
| **Firefox + uBlock** | Customizable privacy | mozilla.org |
| **LibreWolf** | Hardened Firefox | librewolf.net |

### Tor Browser Best Practices

✅ Do:

Use default window size
Enable safest security level
Use .onion sites when available
Close browser after sensitive sessions

❌ Don't:

Maximize window (fingerprinting)
Install additional extensions
Log into personal accounts
Download/open documents while online

## Operating Systems

| OS | Privacy Level | Best For |
|----|---------------|----------|
| **Tails** | Maximum | Anonymous activities, Live USB |
| **Qubes OS** | Maximum (VM isolation) | Daily secure computing |
| **Whonix** | High (Tor gateway) | Tor-based applications |
| **Linux (hardened)** | Medium-High | General privacy |

### Tails (The Amnesic Incognito Live System)

-Runs from USB, leaves no trace

-All traffic routed through Tor

-Pre-configured privacy tools

-Persistent storage optional

## Communication Security

| Service | Type | Encryption |
|---------|------|------------|
| **Signal** | Messaging | End-to-end |
| **ProtonMail** | Email | End-to-end |
| **ProtonVPN** | VPN | No-logs policy |
| **Session** | Messaging | Onion-routed |
| **Wire** | Messaging | End-to-end |
| **Element/Matrix** | Messaging | Decentralized |

### Signal Setup

- Install from official source
- Register with phone number
- Enable disappearing messages
- Verify safety numbers with contacts
- Enable screen security (block screenshots)

## VPN Considerations

| Provider | Jurisdiction | Logs | Multi-hop |
|----------|--------------|------|-----------|
| **Mullvad** | Sweden | No | Yes |
| **ProtonVPN** | Switzerland | No | Yes |
| **IVPN** | Gibraltar | No | Yes |
| **AirVPN** | Italy | No | Yes |

**⚠️ Warning:** Free VPNs often sell your data. Pay for reputable services.

## Network Privacy

# Check for DNS leaks
dnsleaktest.com

# Check WebRTC leaks
browserleaks.com/webrtc

# Verify Tor connection
check.torproject.org

# Test VPN connection
ipleak.net


## Email Security

Best Practices:

- Use ProtonMail or Tutanota
- Enable 2FA (not SMS)
- Use aliases for different services
- Never use personal email for sensitive accounts
- Consider self-hosted (Mail-in-a-Box)

## File Encryption

# VeraCrypt (Cross-platform)
veracrypt --create volume.hc

# GPG File Encryption
gpg -c file.txt          # Encrypt
gpg file.txt.gpg         # Decrypt

# Encrypted Archives
7z a -mhe=on -p archive.7z files/


## Operational Security (OPSEC)

Digital Hygiene:
├── Use unique passwords (password manager)
├── Enable 2FA everywhere
├── Separate identities (personal vs anonymous)
├── Clear cookies/history regularly
├── Use VMs for risky activities
├── Avoid public WiFi without VPN
└── Never reuse usernames across platforms

## Metadata Removal

# Remove image metadata
exiftool -all= image.jpg

# Remove PDF metadata
qpdf --linearize input.pdf output.pdf

# Windows: Document Properties → Remove Personal Info

