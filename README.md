# Birokrazy
Sebuah contoh produk aplikasi web birokrasi kepengurusan dokumen di instansi pemerintahan. Dibuat sebagai bagian dari partisipasi acara Hackathon Merdeka 3.0 tanggal 5-6 Desember 2015.

Birokrazy adalah sebuah "social platform" untuk memberikan informasi kepada masyarakat umum mengenai persyaratan dan proses kepengurusan dokumen di instansi pemerintah. Masyarakat dapat memberikan komentar, menilai dan memberikan laporan terhadap pelayanan publik. Informasi yang terkumpul disajikan kembali berupa statistik yang dapat berguna untuk transparansi dan perbaikan birokrasi.

## Installation dependencies

The following dependencies are necessary: 

* Java 8
* Node JS (npm)
* Grunt
* Bower
* maven 3
* docker

### Installation dependencies on Windows or OSX

* Docker Toolbox
* Git Bash
* VirtualBox
 
## Clone the Project
    git clone https://github.com/purnama/birokrazy.git

## Installing frontend dependencies

After cloning the repository, the following command installs the Javascript dependencies:
    bower install 

## Run the application 

### With HSQL Database
    mvn spring-boot:run -Drun.jvmArguments="-Dspring.profiles.active=main,hsql"
    
### With MySQL Database
Run the MySQL Database Docker Container, give it a container name, map the port 3306 and detach it.

    docker run --name database -p 3306:3306 -d purnama/birokrazy-database

Run the application

    mvn spring-boot:run

stop the Docker Database container with this command

    docker stop database

### With Docker container
In windows or mac the application running in docker container can be access under the Docker Toolbox IP Address. To check the assigned ip address run following command

    docker-machine ls

Run the MySQL Database Docker Container first. Then run the application docker container, map to port 8080 and detach it

    docker run --name web -p 8080:8080 -d purnama/birokrazy-web
    
stop the docker container with this command

    docker stop web

### With Docker Compose
Run docker compose with this command
    
    (cd src/main/docker/ && docker-compose up -d )

Stop docker compose with this command
    
    (cd src/main/docker/ && docker-compose stop)