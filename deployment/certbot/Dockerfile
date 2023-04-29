FROM certbot/certbot

RUN mkdir -p /usr/src/certbot
COPY /etc/letsencrypt/live/dancesport/. /etc/letsencrypt/live/dancesport/.

VOLUME /etc/letsencrypt
VOLUME /usr/src/certbot

ENTRYPOINT ["certbot"]
CMD ["--help"]