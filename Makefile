
.PHONY: run-production
run-production:
	yarn run build
	./node_modules/serve/bin/serve.js -s build

.PHONY: run-dev
run-dev:
	yarn start

