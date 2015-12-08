#!/bin/bash
mda=/etc/init.d/hackmdk3
if [ ! -h $mda ]; then
  ln -s /home/ubuntu/hackmdk3/target/hackmdk3-0.0.1-SNAPSHOT.war $mda
fi
$mda stop
git pull
mvn clean package
$mda start