SOURCE_FILES := index.ts
DIST_FILES := dist/index.js

node_modules: pnpm-lock.yaml
	pnpm install
	@touch node_modules

.PHONY: deps
deps: node_modules

.PHONY: lint
lint: node_modules
	pnpm exec eslint .
	pnpm exec tsgo

.PHONY: test
test: build node_modules
	pnpm exec stylelint -c dist/index.js test.css

.PHONY: build
build: $(DIST_FILES)

$(DIST_FILES): $(SOURCE_FILES) pnpm-lock.yaml vite.config.ts
	pnpm exec vite build

.PHONY: watch
watch:
	pnpm exec tsdown --watch

.PHONY: update
update: node_modules
	pnpm exec updates -cu
	rm -rf node_modules pnpm-lock.yaml
	pnpm install
	@touch node_modules

.PHONY: publish
publish: node_modules
	pnpm publish --no-git-checks

.PHONY: path
patch: node_modules lint test
	pnpm exec versions patch package.json
	git push -u --tags origin master

.PHONY: minor
minor: node_modules lint test
	pnpm exec versions minor package.json
	git push -u --tags origin master

.PHONY: major
major: node_modules lint test
	pnpm exec versions major package.json
	git push -u --tags origin master
