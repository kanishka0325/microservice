#!/bin/bash

echo 'run application_start.sh: ' >> /home/ec2-user/monorepo/microservice/deploy.log

echo 'pm2 restart gateway' >> /home/ec2-user/monorepo/microservice/deploy.log
sudo pm2 restart gateway >> /home/ec2-user/monorepo/microservice/deploy.log

echo 'pm2 restart securedoc' >> /home/ec2-user/monorepo/microservice/deploy.log
sudo pm2 restart securedoc >> /home/ec2-user/monorepo/microservice/deploy.log

sudo pm2 save >> /home/ec2-user/nftl/server/deploy.log