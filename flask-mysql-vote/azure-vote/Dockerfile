FROM ubuntu

ADD /azure-vote /opt/azure-vote/

RUN apt-get update && \
    apt-get install python-pip -y && \
    apt-get install libmysqlclient-dev -y && \
    apt-get install supervisor -y && \
    pip install flask && \
    pip install flask-mysql && \
    pip install gunicorn && \
    mv /opt/azure-vote/supervisord.conf /etc/supervisor/conf.d/

ENTRYPOINT ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]