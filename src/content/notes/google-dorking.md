# Google Dorking Operators

Advanced search operators to find specific information, vulnerable systems, and exposed data using Google Search.

## Basic Operators

| Operator | Purpose | Example |
|----------|---------|---------|
| `site:` | Limit to specific domain | `site:github.com` |
| `intitle:` | Search page titles | `intitle:"index of"` |
| `inurl:` | Search URLs | `inurl:admin` |
| `intext:` | Search page content | `intext:"password"` |
| `filetype:` | Search file types | `filetype:pdf` |
| `ext:` | Search file extensions | `ext:sql` |
| `cache:` | View cached version | `cache:example.com` |
| `related:` | Find related sites | `related:twitter.com` |
| `info:` | Get site information | `info:example.com` |
| `link:` | Find sites linking to URL | `link:example.com` |

## Advanced Combinations

### Finding Exposed Directories

intitle:"index of" /admin
intitle:"index of" "parent directory"
intitle:"index of" password

### Finding Sensitive Files

filetype:env DB_PASSWORD
filetype:sql "INSERT INTO"
filetype:log "error"
filetype:pdf "confidential"
ext:xls "password"

### Finding Login Pages

intitle:"login" intext:"username" "password"
inurl:login.php
intext:"login" site:edu

### Finding Vulnerable Systems

intext:"SQL syntax" site:com
intext:"Warning: mysql_connect()"
intext:"PHP Error" site:gov
inurl:"id=" intext:"warning"

### Finding Config Files

filetype:config password
filetype:ini "password"
ext:xml "credential"
filetype:yml "secret"

### Finding Backup Files

ext:bak "config"
filetype:old "database"
ext:backup "site"
inurl:backup site:com

## Targeted Searches

### GitHub Dorks

site:github.com "api_key"
site:github.com "AWS_SECRET"
site:github.com "password" extension:py
site:github.com "shodan_api_key"

### Pastebin Dorks

site:pastebin.com "password"
site:pastebin.com "credential"
site:pastebin.com "@gmail.com"

### Government/Education

site:gov confidential
site:edu "social security"
site:ac.uk "internal"

### Cloud Storage

site:.s3.amazonaws.com
site:.blob.core.windows.net
site:drive.google.com "confidential"
site:dropbox.com "password"

### Find your company's exposed files

site:yourcompany.com filetype:pdf confidential

### Check for leaked credentials

site:pastebin.com "@yourcompany.com"

### Find exposed admin panels

site:yourcompany.com intitle:admin

## Tools for Dorking

| Tool | Purpose |
|------|---------|
| **GHDB**  | Google Hacking Database |
| **DorkSearch** | Dork generator |
| **Exploit-DB** | Vulnerability database with dorks |
| **AutoDork** | Automated dork scanning |

### Google Hacking Database

Access at exploit-db.com/google-hacking-database

### Categories:

-Footholds

-File Containing 

-Usernames

-Sensitive Online Files

-Vulnerable Servers

-Error Messages


## Best Practices

1. **Use Quotes** for exact phrases: `"exact phrase"`
2. **Combine Operators** for precision: `site:com intitle:admin`
3. **Exclude Terms** with minus: `-site:facebook.com`
4. **Use Wildcards**: `inurl:admin*`
5. **Date Range**: Tools → Any time → Custom range

## Legal Warning ⚠️

- Only search for information you have authorization to access
- Do not attempt to access found vulnerabilities without permission
- Document findings for legitimate security research
- Respect robots.txt and terms of service

---

> **Remember:** Google Dorking is legal for research, but acting on discovered vulnerabilities without authorization is illegal. Use responsibly.
