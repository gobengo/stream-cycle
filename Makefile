.PHONY: all build

all: build

build: node_modules lib

lib: node_modules
	./node_modules/bower/bin/bower install

dist: build src config/requirejs.conf.js
	./node_modules/requirejs/bin/r.js -o ./config/build.conf.js	

# if package.json changes, install
node_modules: package.json
	npm install
	touch $@

server: build
	npm start

test: build
	npm test

watch: build
	mocha test/spec/* -w

clean:
	rm -rf node_modules lib dist

package: dist

env=dev
deploy: dist
	./node_modules/.bin/lfcdn -e $(env)

