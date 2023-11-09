#!/bin/bash
echo 'run after_install.sh: ' >> /home/ec2-user/monorepo/microservice/deploy.log

echo 'cd /home/ec2-user/monorepo/microservice/' >> /home/ec2-user/monorepo/microservice/deploy.log
cd /home/ec2-user/monorepo/microservice >> /home/ec2-user/monorepo/microservice/deploy.log

echo 'npm install' >> /home/ec2-user/monorepo/microservice/deploy.log 
npm i --legacy-peer-deps >> /home/ec2-user/monorepo/microservice/deploy.log 