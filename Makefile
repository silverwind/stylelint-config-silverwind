lint:
	npx eslint --ignore-pattern *.min.js *.js

test:
	$(MAKE) lint

publish:
	if git ls-remote --exit-code origin &>/dev/null; then git push -u -f --tags origin master; fi
	npm publish
	npm i -g .

deps:
	rm -rf node_modules
	npm i

update:
	npx updates -cu
	$(MAKE) deps

patch:
	$(MAKE) lint
	npx versions -Cc 'node build.js' patch
	$(MAKE) publish

minor:
	$(MAKE) lint
	npx versions -Cc 'node build.js' minor
	$(MAKE) publish

major:
	$(MAKE) lint
	npx versions -Cc 'node build.js' major
	$(MAKE) publish

.PHONY: lint test publish update patch minor major
