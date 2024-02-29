import csv
import os
import re

# Fonction pour extraire les données de spécimen à partir d'un fichier JavaScript
def extract_specimen_data(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()
        specimens = re.findall(r'const\s+(\w+)\s+=\s+(\[.*?\]);', content, re.DOTALL)
        for name, data in specimens:
            yield name, eval(data)

# Définir les noms de colonnes pour le fichier CSV
header = ["map", "specie", "type", "min", "max", "season", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

# Créer un fichier CSV et écrire les en-têtes de colonnes
with open("output.csv", "w", newline="", encoding="utf-8") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(header)

    # Parcourir tous les fichiers JavaScript dans le répertoire actuel
    for filename in os.listdir("."):
        if filename.endswith(".js"):
            for name, specimens in extract_specimen_data(filename):
                # Parcourir chaque spécimen dans le fichier JavaScript
                for specimen in specimens:
                    # Créer une ligne pour chaque spécimen
                    row = [
                        specimen["map"],
                        specimen["name"]["fr"],
                        specimen["type"],
                        specimen["kgs"]["min"],
                        specimen["kgs"]["max"],
                        "", "", "", "", "", "", "", "", "", "", "", "", "",
                    ]
                    # Ajouter les saisons
                    for i, season in enumerate(specimen["seasons"], start=1):
                        row[i + 5] = "true" if season else "false"

                    # Écrire la ligne dans le fichier CSV
                    writer.writerow(row)
