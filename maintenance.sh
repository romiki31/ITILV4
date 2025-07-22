#!/bin/bash

# Script de gestion de la maintenance du site ITIL v4

case "$1" in
    "on"|"enable")
        echo "🔧 Activation du mode maintenance..."
        if [ -f "index-original.html" ]; then
            echo "✅ Mode maintenance activé"
            echo "🌐 Le site affiche maintenant la page de maintenance"
        else
            echo "❌ Erreur: fichier index-original.html introuvable"
            exit 1
        fi
        ;;
    "off"|"disable")
        echo "🚀 Désactivation du mode maintenance..."
        if [ -f "index-original.html" ]; then
            cp index-original.html index.html
            echo "✅ Mode maintenance désactivé"
            echo "🌐 Le site est de nouveau en ligne"
        else
            echo "❌ Erreur: fichier index-original.html introuvable"
            exit 1
        fi
        ;;
    "status")
        if grep -q "maintenance.html" index.html 2>/dev/null; then
            echo "🔧 Status: MAINTENANCE ACTIVE"
        else
            echo "🚀 Status: SITE EN LIGNE"
        fi
        ;;
    *)
        echo "📋 Usage: $0 {on|off|status}"
        echo ""
        echo "Commandes:"
        echo "  on/enable   - Active le mode maintenance"
        echo "  off/disable - Désactive le mode maintenance" 
        echo "  status      - Affiche le status actuel"
        echo ""
        echo "Exemple:"
        echo "  $0 on     # Active la maintenance"
        echo "  $0 off    # Remet le site en ligne"
        exit 1
        ;;
esac