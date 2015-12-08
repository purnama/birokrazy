#!/bin/bash
mda=/etc/init.d/hackmdk3
if [ ! -h $mda ]; then
  ln -s /home/ubuntu/hackmdk3/target/hackmdk3-0.0.1-SNAPSHOT.war $mda
fi
$mda stop
git -C /home/ubuntu/hackmdk3 pull
mvn -f /home/ubuntu/hackmdk3 clean package
$mda start