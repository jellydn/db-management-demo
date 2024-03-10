<h1 align="center">Welcome to db-management-demo 👋</h1>
<p>
  This is simple demo of how to manage database using prisma and tbls for documentation.
</p>

[![IT Man - Mastering Database Documentation with tbls: A Complete Guide](https://i.ytimg.com/vi/qMJAiOx9ET0/hqdefault.jpg)](https://www.youtube.com/watch?v=qMJAiOx9ET0)

## Prerequisites

- [Bun — A fast all-in-one JavaScript runtime](https://bun.sh/)
- [OrbStack · Fast, light, simple Docker & Linux on macOS](https://orbstack.dev/)

## Install

```sh
bun install
```

## Usage

1. Start the database using docker-compose:

```sh
docker-compose up -d
```

2. Create a `.env` file based on the `.env.example` file.

3. Generate the Prisma client:

```sh
make migrate-dev
```

4. Generate the documentation:

```sh
make db-doc
```

Alternatively, seed the database with:

```sh
make seed
```

More commands can be found in the [`Makefile`](./Makefile).

# Resources

- [Quickstart with TypeScript & SQLite | Prisma Docs](https://www.prisma.io/docs/getting-started/quickstart)
- [k1LoW/tbls: tbls is a CI-Friendly tool for document a database, written in Go.](https://github.com/k1LoW/tbls#quick-start)
- [bruin-data/ingestr: ingestr is a CLI tool to copy data between any databases with a single command seamlessly.](https://github.com/bruin-data/ingestr)
- [Creating PostgreSQL service containers](https://docs.github.com/en/actions/using-containerized-services/creating-postgresql-service-containers)
- [Automatically commit and push changed files back to GitHub with GitHub Action](https://github.com/stefanzweifel/git-auto-commit-action)

## Author

👤 **Huynh Duc Dung**

- Website: https://productsway.com/
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## Show your support

Give a ⭐️ if this project helped you!

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)
