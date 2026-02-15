# DNS Configuration Guide for SecureMeet.io

This guide will help you configure DNS records to point your custom domain `securemeet.io` to GitHub Pages with SSL support.

## Overview

GitHub Pages supports custom domains with free SSL certificates via Let's Encrypt. You need to configure DNS records at your domain registrar.

## Step-by-Step DNS Configuration

### Step 1: Access Your Domain Registrar

Log in to your domain registrar where you purchased `securemeet.io`. Common registrars include:
- GoDaddy
- Namecheap
- Google Domains
- Cloudflare
- AWS Route 53

### Step 2: Configure A Records (Apex Domain)

Add four A records to point `securemeet.io` to GitHub Pages servers:

```
Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.108.153
TTL: 3600 (or automatic)

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

### Step 3: Configure CNAME Record (www subdomain)

Add a CNAME record for the www subdomain:

```
Type: CNAME
Name: www
Value: banti27.github.io
TTL: 3600
```

### Step 4: Save DNS Changes

After adding all records, save your changes. DNS propagation can take:
- **Minimum**: 15-30 minutes
- **Typical**: 2-4 hours
- **Maximum**: 24-48 hours

## Verify DNS Configuration

### Using nslookup (Mac/Linux/Windows)

```bash
# Check A records
nslookup securemeet.io

# Expected output should show GitHub Pages IPs:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

### Using dig (Mac/Linux)

```bash
# Check A records
dig securemeet.io +noall +answer

# Check CNAME record
dig www.securemeet.io +noall +answer
```

### Using Online Tools

- [whatsmydns.net](https://www.whatsmydns.net/#A/securemeet.io)
- [dnschecker.org](https://dnschecker.org/)

## GitHub Pages Configuration

### Step 1: Navigate to Repository Settings

1. Go to https://github.com/banti27/securemeet-website
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)

### Step 2: Configure Custom Domain

1. Under "Custom domain", enter: `securemeet.io`
2. Click **Save**
3. GitHub will perform a DNS check (may take a few minutes)

### Step 3: Enable HTTPS

1. Wait for DNS verification to complete (green checkmark)
2. Check the box: **Enforce HTTPS**
3. GitHub will automatically provision an SSL certificate

⚠️ **Important**: If you see an error, wait for full DNS propagation (up to 24 hours) and try again.

## CNAME File

The `public/CNAME` file in your repository should contain:

```
securemeet.io
```

This file is automatically copied to the build output when you run `npm run build`.

## Common DNS Configurations by Provider

### GoDaddy

1. Go to **DNS Management**
2. Click **Add** button
3. Select record type (A or CNAME)
4. Enter name and value
5. Click **Save**

### Namecheap

1. Go to **Advanced DNS**
2. Click **Add New Record**
3. Select Type, Host, Value
4. Save All Changes

### Cloudflare

1. Go to **DNS** tab
2. Click **Add record**
3. Select Type, Name, Content
4. Turn **Proxy status** OFF (gray cloud) for GitHub Pages
5. Click **Save**

⚠️ **Cloudflare Note**: Use DNS Only mode (gray cloud), not Proxied (orange cloud), for proper SSL certificate provisioning.

### Google Domains

1. Go to **DNS** settings
2. Scroll to **Custom resource records**
3. Add @ A records and www CNAME
4. Click **Add**

## SSL Certificate

### Automatic SSL with Let's Encrypt

GitHub Pages automatically provides free SSL certificates via Let's Encrypt when:
- DNS is properly configured
- DNS propagation is complete
- "Enforce HTTPS" is enabled

### SSL Certificate Provisioning Time

- **Minimum**: 30 minutes
- **Typical**: 1-2 hours
- **Maximum**: 24 hours

### Verify SSL Certificate

```bash
# Check SSL certificate
curl -I https://securemeet.io

# Should return: HTTP/2 200
```

Or visit: https://www.ssllabs.com/ssltest/analyze.html?d=securemeet.io

## Troubleshooting

### DNS Not Propagating

```bash
# Clear local DNS cache

# macOS
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder

# Windows (run as admin)
ipconfig /flushdns

# Linux
sudo systemd-resolve --flush-caches
```

### DNS Check Fails on GitHub

1. Verify all 4 A records are correct
2. Wait 24 hours for full propagation
3. Remove and re-add custom domain in GitHub settings

### HTTPS Not Available

1. Ensure DNS is fully propagated
2. Uncheck and re-check "Enforce HTTPS"
3. Wait additional time for SSL provisioning
4. Contact GitHub Support if issue persists

### Domain Shows 404 Error

1. Verify `CNAME` file exists in `public/` folder
2. Rebuild and redeploy: `npm run deploy`
3. Check GitHub Pages source is set to `gh-pages` branch

## Security Best Practices

### Enable DNSSEC (if supported)

DNSSEC adds cryptographic signatures to DNS records:
1. Check if your registrar supports DNSSEC
2. Enable in domain settings
3. Add DS records to registrar

### CAA Records (Optional)

Restrict which Certificate Authorities can issue certificates:

```
Type: CAA
Name: @
Value: 0 issue "letsencrypt.org"
TTL: 3600
```

## DNS Record Summary

Here's a complete DNS configuration for `securemeet.io`:

| Type  | Name | Value              | TTL  |
|-------|------|--------------------|------|
| A     | @    | 185.199.108.153    | 3600 |
| A     | @    | 185.199.109.153    | 3600 |
| A     | @    | 185.199.110.153    | 3600 |
| A     | @    | 185.199.111.153    | 3600 |
| CNAME | www  | banti27.github.io  | 3600 |

## Testing Your Setup

### 1. Test DNS Resolution

```bash
nslookup securemeet.io
```

### 2. Test HTTP Access

```bash
curl -I http://securemeet.io
```

### 3. Test HTTPS Access

```bash
curl -I https://securemeet.io
```

### 4. Test Redirect (www to apex)

```bash
curl -I http://www.securemeet.io
```

## Support

If you encounter issues:

1. **Check DNS Propagation**: Use online tools
2. **GitHub Status**: https://www.githubstatus.com/
3. **GitHub Support**: https://support.github.com/
4. **Repository Issues**: https://github.com/banti27/securemeet-website/issues

---

Last updated: February 15, 2026
