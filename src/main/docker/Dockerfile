FROM java:8
VOLUME /tmp
ADD birokrazy-0.0.1-SNAPSHOT.war birokrazy.war
RUN bash -c 'touch /birokrazy.war'
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/birokrazy.war"]