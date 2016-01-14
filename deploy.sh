#!/bin/bash
mda=/etc/init.d/birokrazy
if [ ! -h $mda ]; then
  ln -s /home/ubuntu/birokrazy/target/birokrazy-0.0.1-SNAPSHOT.war $mda
fi
$mda stop
git -C /home/ubuntu/birokrazy pull
mvn -f /home/ubuntu/birokrazy clean package -Pprod
$mda start