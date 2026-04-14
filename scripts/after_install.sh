#!/bin/bash
set -e

chown -R www-data:www-data /var/www/ironworksinsider
find /var/www/ironworksinsider -type d -exec chmod 755 {} \;
find /var/www/ironworksinsider -type f -exec chmod 644 {} \;

nginx -t && systemctl reload nginx
