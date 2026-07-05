#WIP

# Homelab Engineering Notes

**Live:** https://luca-becker.github.io/homelab-engineering-notes/

Öffentliche, statische Portfolio-Seite mit drei Engineering-Case-Studies aus meinem privaten
Homelab (Observability, Backup & Resilience, Public-Edge & Routing).

Gebaut mit [Astro](https://astro.build) → statischer HTML-Output in `dist/`, self-hostbar hinter
jedem Reverse-Proxy (z. B. Caddy). Diagramme als [Mermaid](https://mermaid.js.org) (text-basiert,
versionierbar). Keine externen CDNs zur Laufzeit — Mermaid wird lokal gebündelt.

## Entwicklung

```bash
npm install
npm run dev        # lokaler Dev-Server
npm run build      # statischer Output nach dist/
npm run preview    # dist/ lokal vorschauen
```

## Struktur

```
src/
  pages/
    index.astro                     # Landing
    case-studies/
      observability.mdx
      backup-resilience.mdx
      public-edge.mdx
  layouts/    BaseLayout.astro · CaseStudyLayout.astro
  components/ Mermaid.astro
  styles/     global.css
public/       favicon.svg
```

## Deployment (Kurz)

`npm run build` erzeugt `dist/`. Diesen Ordner statisch ausliefern, z. B.:

```
example.dev {
    root * /var/www/homelab-notes/dist
    file_server
    encode zstd gzip
}
```

### GitHub Pages (aktuell)

Deployt automatisch bei jedem Push auf `main` via `.github/workflows/deploy.yml`
(Astro-Build → GitHub Pages). Pages-Quelle im Repo: **Settings → Pages → Source: GitHub Actions**.

### Umzug auf eigene Domain

In `astro.config.mjs` `site` auf die Domain setzen und `base` auf `'/'` ändern (bzw. entfernen).
Dann `dist/` hinter Caddy ausliefern — z. B.:

```
deine-domain.example {
    root * /var/www/homelab-notes/dist
    file_server
    encode zstd gzip
}
```

## Sanitisierung

Alle Inhalte sind **neu geschrieben**, nicht aus privaten Repos kopiert. Es gibt keine echten
Hostnames, IPs, Domains, Tokens oder Secrets — überall generische Platzhalter. Vor jeder
Veröffentlichung läuft zusätzlich ein Secret-Scan als Backstop.
