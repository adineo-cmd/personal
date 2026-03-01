# Security Operating Systems

Specialized Linux distributions designed for penetration testing, security research, and digital forensics.

## Mainstream Security Distros

| Distro | Based On | Best For | Size |
|--------|----------|----------|------|
| **Kali Linux** | Debian | Penetration testing, security audits | 3-4 GB |
| **Parrot Security** | Debian | Daily use + security tools | 2-3 GB |
| **BlackArch** | Arch | Advanced users, tool variety | 15 GB+ (full) |
| **BackBox** | Ubuntu | Simplicity, Ubuntu familiarity | 2 GB |
| **Buscador** | Ubuntu | OSINT, privacy-focused | 2 GB |
| **AttifyOS** | Ubuntu | IoT security testing | 3 GB |

## Kali Linux

**The industry standard for penetration testing.**


# Official Docker Image
docker pull kalilinux/kali-rolling

# Run Kali container
docker run -ti kalilinux/kali-rolling bash

# Install tools inside container
apt update && apt install -y nmap metasploit-framework


⚠️ Warning: Do not use as daily driver. Run via VM or Live USB.

## Parrot Security OS

Lighter alternative to Kali, suitable for daily use.
Lower resource consumption
Privacy tools built-in
Development environment ready
Multiple editions (Security, Home, Architect)

## BlackArch

Arch-based with 3000+ security tools.


# Install on existing Arch Linux
curl -O https://blackarch.org/strap.sh
chmod +x strap.sh
sudo ./strap.sh

# Install tool categories
sudo pacman -S blackarch-recon blackarch-webapp

⚠️ Warning: Not beginner-friendly. Can break easily.

## Docker Security Tools

Run security tools without installing distros:

# OWASP ZAP (Web Scanner)
docker run -t owasp/zap2docker-stable zap-baseline.py -t https://example.com

# WPScan (WordPress Scanner)
docker run -it --rm wpscanteam/wpscan --url https://example.com

# Nmap
docker run -it --rm --network host instrumentisto/nmap -sV https://example.com

