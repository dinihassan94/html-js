Utiliser une image Nginx comme base
FROM nginx:alpine

# Copier les fichiers HTML dans le répertoire Nginx par défaut
COPY html-app/ /usr/share/nginx/html/edd-dev
# Copier les fichiers JavaScript (et HTML si nécessaire) dans le répertoire Nginx par défaut
COPY js-app/ /usr/share/nginx/html/edd-dev

# Exposer le port 80 pour l'accès à l'application
EXPOSE 80