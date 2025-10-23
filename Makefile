SOURCE_FILES := index.ts
DIST_FILES := dist/index.js

node_modules: package-lock.json
	npm install --no-save
	@touch node_modules

.PHONY: deps
deps: node_modules

.PHONY: lint
lint: node_modules
	npx eslint .
	npx tsc

.PHONY: test
test: build node_modules
	npx stylelint -c dist/index.js test.css

.PHONY: build
build: $(DIST_FILES)

$(DIST_FILES): $(SOURCE_FILES) package-lock.json vite.config.ts
	npx vite build

.PHONY: watch
watch:
	npx tsdown --watch

.PHONY: update
update: node_modules
	npx updates -cu
	rm -rf node_modules package-lock.json
	npm install
	@touch node_modules

.PHONY: publish
publish: node_modules
	npm publish

.PHONY: path
patch: node_modules lint test
	npx versions patch package.json package-lock.json
	git push -u --tags origin master

.PHONY: minor
minor: node_modules lint test
	npx versions minor package.json package-lock.json
	git push -u --tags origin master

.PHONY: major
major: node_modules lint test
	npx versions major package.json package-lock.json
	git push -u --tags origin master
