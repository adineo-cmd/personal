# Wget Website Cloning Commands

`wget` is a powerful command-line utility for retrieving files using HTTP, HTTPS, and FTP. Below are common use cases for scraping and mirroring websites.

## Mirror a Website

Download an entire website for offline viewing.

wget --mirror --convert-links --adjust-extension --page-requisites --no-parent https://example.com

## Text-Only Scraping

Download only HTML text content without images or media.


wget --mirror --convert-links --adjust-extension --page-requisites --no-parent --reject-regex '.*\.(jpg|png|gif|mp4)' https://example.com


## Polite Scraping

Add delays to avoid overloading the server.

wget --wait=2 --limit-rate=100K --mirror https://example.com


## Usage with Tor

Route requests through the Tor network for anonymity.

wget --proxy=on --mirror https://example.onion

