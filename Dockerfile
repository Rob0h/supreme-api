FROM centos:latest
LABEL AUTHOR rob0h
ENV DOCKERIZE_VERSION v0.6.0

RUN yum -y install wget

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN curl --silent --location https://rpm.nodesource.com/setup_6.x | bash -
RUN wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo
RUN yum install -y nodejs yarn which git make gcc-c++
RUN npm install -g n

RUN useradd docker

WORKDIR /home/api

ADD .nvmrc /home/api/
RUN n $(cat .nvmrc)

ADD package.json yarn.lock /home/api/
RUN yarn --pure-lockfile

ENV NODE_ENV=production
ENV PORT=8912
ENV SEMAPHORE="true"
EXPOSE 8912

ADD . /home/api
RUN yarn build

CMD dockerize -wait tcp://db:5432 -timeout 90s yarn test:ci
