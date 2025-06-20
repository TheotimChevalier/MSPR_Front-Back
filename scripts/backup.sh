#!/bin/bash

# Sauvegarde de la base de données MySQL
DATE=$(date +"%Y-%m-%d_%H-%M")
BACKUP_DIR="./backup"
BACKUP_FILE="$BACKUP_DIR/db_backup_$DATE.sql"

mkdir -p "$BACKUP_DIR"

echo "⏳ Sauvegarde en cours..."
docker exec mysql mysqldump -uroot -proot mspr > "$BACKUP_FILE"

if [ $? -eq 0 ]; then
  echo "✅ Sauvegarde terminée : $BACKUP_FILE"
else
  echo "❌ Erreur lors de la sauvegarde."
fi
