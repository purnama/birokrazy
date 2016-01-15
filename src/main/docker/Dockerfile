FROM java:8
VOLUME /tmp
ADD bdocker  birokrazy.war
RUN bash -c 'touch /birokrazy.war'
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/birokrazy.war"]