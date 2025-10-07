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

.PHONY: publish
publish: node_modules build test
	if git ls-remote --exit-code origin &>/dev/null; then git push -u -f --tags origin master; fi
	npm publish

.PHONY: update
update: node_modules
	npx updates -cu
	rm -rf node_modules package-lock.json
	npm install
	@touch node_modules

.PHONY: patch
patch: node_modules build test
	npx versions patch package.json package-lock.json
	$(MAKE) --no-print-directory publish

.PHONY: minor
minor: node_modules build test
	npx versions minor package.json package-lock.json
	$(MAKE) --no-print-directory publish

.PHONY: major
major: node_modules build test
	npx versions major package.json package-lock.json
	$(MAKE) --no-print-directory publish
