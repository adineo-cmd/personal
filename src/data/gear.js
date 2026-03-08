export const gearData = {
  sections: [
    {
      title: "My Machines",
      description: "This includes computers for my personal use as well as homelab/server things.",
      items: [
        {
          text: "My Laptop",
          description: "My current laptop for daily development and personal computing tasks.",
          items: [
            { text: "ASUS TUF Gaming F17 FX706HF" },
            { text: "CPU: 11th Gen Intel® Core™ i5-11400H × 12" },
            { text: "RAM: 8.0 GiB" },
            { text: "OS: Ubuntu 24.04.3 LTS" },
            { text: "Desktop Environment: GNOME 46 on Wayland" },
            { text: "Graphics: Intel® UHD Graphics (TGL GT1)" },
            { text: "Storage: 512.1 GB" },
            { text: "Kernel: Linux 6.14.0-37-generic" }
          ]
        },
        {
          text: "PC (Desktop+Homelab)",
          description: "My desktop PC running Ubuntu Server for homelab and development work.",
          items: [
            { text: "Motherboard: MSI MS-7C52" },
            { text: "CPU: AMD Ryzen 5 5600G × 12" },
            { text: "RAM: 16 GB" },
            { text: "Graphics: AMD Radeon Graphics" },
            { text: "Storage: 500 GB" },
            { text: "OS: Ubuntu Server" }
          ]
        }
      ]
    },
    {
      title: "Mobile Phone",
      items: [
        { text: "Phone: Realme 13 5G" },
        { text: "OS: Realme UI" },
        {
          text: "Apps:",
          children: [
            { text: "Telegram" },
            { text: "WhatsApp" },
            { text: "Tor Browser" },
            { text: "BitTorrent" },
            { text: "GitHub" },
            { text: "Reddit" },
            { text: "Discord" },
            { text: "YouTube" },
            { text: "Spotify" }
          ]
        }
      ]
    },
    {
      title: "Other Services",
      items: [
        { text: "Code Hosting: GitHub" },
        { text: "Email: Google" },
        { text: "Search: DuckDuckGo (sometimes)" },
        {
          text: "VPN:",
          children: [
            { text: "Tailscale" },
            { text: "Mullvad" },
            { text: "Wireguard" }
          ]
        },
        { text: "VPS: Oracle Cloud Free Tier" }
      ]
    },
    {
      title: "Firewall/Router",
      description: "I use my D-Link router for home networking with the stock firmware provided by the manufacturer.",
      items: [
        { text: "Model: D-Link DIR-825" },
        { text: "Hardware Version: G1" },
        { text: "Firmware Version: 7" },
        { text: "OS: Proprietary firmware" }
      ]
    },
    {
      title: "General Software Tools",
      description: "Software that I use for practical purposes, mostly on my laptop.",
      items: [
        { text: "Browser: Tor & Zen" },
        { text: "Documents: LibreOffice" },
        {
          text: "Editors:",
          children: [
            { text: "VS Code(mostly)" },
            { text: "Wave(rare)" },
            { text: "Zed(medium)" }
          ]
        },
        { text: "Notes: website itself!!!" },
        { text: "Password Manager: google password manager" },
        { text: "Shell: bash" },
        {
          text: "Terminals:",
          children: [
            { text: "Kitty(rare)" },
            { text: "Alacritty(rare)" },
            { text: "WezTerm" }
          ]
        },
        {
          text: "Ai Tools:",
          children: [
            { text: "Chatgpt(rare)" },
            { text: "Claude" },
            { text: "Z.ai" }
            { text: "Deepseek" }
            { text: "Qwen" }
          ]
        },
        { text: "Terminal Multiplexer: tmux" }
      ]
    }
  ]
};
