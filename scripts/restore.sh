#!/bin/bash

# Restauration de la base de données MySQL
if [ -z "$1" ]; then
  echo "❌ Veuillez spécifier le fichier de sauvegarde (.sql) en argument."
  echo "Exemple : ./scripts/restore.sh ./backup/db_backup_2025-06-20_17-35.sql"
  exit 1
fi

BACKUP_FILE="$1"

echo "⏳ Restauration en cours..."
docker exec -i mysql mysql -uroot -proot mspr < "$BACKUP_FILE"

if [ $? -eq 0 ]; then
  echo "✅ Restauration terminée depuis : $BACKUP_FILE"
else
  echo "❌ Erreur lors de la restauration."
fi
