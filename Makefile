
.PHONY: run-production
run-production:
	yarn run build
	./node_modules/serve/bin/serve.js -s build -p 8081

.PHONY: run-dev
run-dev:
	yarn start

.PHONY: deploy-gh-pages
deploy-gh-pages:
	yarn run deploy


