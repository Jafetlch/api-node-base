# Create tables

```bash
 sequelize migration:create --name create_[tableName]_table
```

# Migrate

```bash
sequelize db:migrate
```

# Rollback

```bash
sequelize db:migrate:undo
# or
sequelize db:migrate:undo:all
```

### Delete this file before `sequelize db:migrate`
