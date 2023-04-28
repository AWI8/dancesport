FROM certbot/certbot

RUN mkdir -p /usr/src/certdir

VOLUME /etc/letsencrypt
VOLUME /usr/src/certdir

ENTRYPOINT ["certbot"]
CMD ["--help"]