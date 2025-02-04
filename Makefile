node_modules: package-lock.json
	npm install --no-save
	@touch node_modules

.PHONY: deps
deps: node_modules

.PHONY: lint
lint: node_modules
	npx eslint .
	npx stylelint test.css
	npx tsc

.PHONY: test
test: node_modules
	npx eslint .
	npx stylelint test.css
	npx tsc

.PHONY: publish
publish: node_modules
	if git ls-remote --exit-code origin &>/dev/null; then git push -u -f --tags origin master; fi
	npm publish

.PHONY: update
update: node_modules
	npx updates -cu
	rm -rf node_modules package-lock.json
	npm install
	@touch node_modules

.PHONY: patch
patch: node_modules test
	npx versions patch package.json package-lock.json
	$(MAKE) --no-print-directory publish

.PHONY: minor
minor: node_modules test
	npx versions minor package.json package-lock.json
	$(MAKE) --no-print-directory publish

.PHONY: major
major: node_modules test
	npx versions major package.json package-lock.json
	$(MAKE) --no-print-directory publish
