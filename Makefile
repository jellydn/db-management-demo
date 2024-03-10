.PHONY: setup
setup:
	@echo "Setting up environment"
	@bun install

.PHONY: migrate-dev
migrate-dev:
	@echo "generate database"
	@bun prisma migrate dev

.PHONY: migrate-status	
migrate-status:
	@echo "check migration status"
	@bun prisma migrate status

.PHONY: reset
reset:
	@echo "reset database"
	@bun prisma migrate reset --force

.PHONY: seed
seed:
	@echo "seed database"
	@bun prisma db seed

.PHONY: dev
dev:
	@echo "start development"
	@bun tsx index.ts

.PHONY: db-doc
db-doc:
	@echo "generate database documentation"
	@bun prisma db pull
	@bun prisma generate
	@tbls doc --rm-dist

.PHONY: studio
studio:
	@echo "open prisma studio"
	@bun prisma studio
