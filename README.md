# MP4C App Generator

Dieses Repository enthält eine minimale React-Anwendung zur Umsetzung des Masterprotokoll Kontrollsystems (MP4C). Die App speichert Daten lokal und bietet folgende Module:

- **Onboarding** zur Erfassung von Benutzerdaten
- **Tagesprotokoll** mit Eingaben zu Nahrung, Getränken, Medikamenten, Schlaf, Beschwerden und Bewegung
- **Übersicht** der aktuellen Tagesdaten
- **Analyse** als Platzhalter für spätere Auswertungen
- **Entwicklerbereich** mit Code-Sperre (Standardcode: `1234`)

Zur Installation innerhalb dieser Umgebung:

```bash
cd mp4c-app
npm install
npm run dev
```

Die Anwendung läuft anschließend unter der angegebenen Port-URL und speichert alle Daten ausschließlich im Browser.
