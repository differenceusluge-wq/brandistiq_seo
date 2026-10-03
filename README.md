# BrandistiQ V10

Premium BrandistiQ site package for Netlify.

## Što je promijenjeno u V10
- BrandistiQ logo i hero grafika sada su lokalno u `public/assets/` — nema ovisnosti o `brandistiq.eu/assets/...`.
- Portfolio kartice više ne ovise o udaljenim fotografijama; koriste lokalne vizualne covere kako se slike ne bi gubile na Netlifyju.
- Kalkulator zadržava realistične BrandistiQ početne cijene iz V9, ali koristi vizualni layout iz starije, atraktivnije verzije.
- AI demo i Netlify Function ostaju uključeni.

## Deploy
Na Netlifyju postavite:
- Publish directory: `public`
- Environment variable: `OPENAI_API_KEY` za aktiviranje AI demo funkcije.

## BrandistiQ početne cijene u kalkulatoru
- Landing stranica: 150 €
- Poslovna web stranica: 200 €
- SEO web stranica: 250 €
- Napredna web: 350 €
- Web shop: 500 €
- Web aplikacija: 600 €
- Napredna aplikacija: 900 €
- AI rješenje: 400 €


## Portfolio fotografije — V11 update

Portfolio sada koristi lokalne fotografije koje su isporučene uz projekt, bez oslanjanja na vanjske image URL-ove.

- MajstorGuard / Smart-Troškovnik — 5 fotografija
- DriveQ — 3 fotografije
- Novac bez granica — 5 fotografija
- Pro in mont jedan — 3 fotografije

Na `/projekti/` i na početnoj stranici svaka kartica prikazuje naslovnu fotografiju i izravnu poveznicu na stvarnu web lokaciju. Klik na „Pogledaj projekt” otvara zasebnu case-study stranicu s naslovnom fotografijom, kratkim opisom i cijelom galerijom fotografija tog projekta.


## Portfolio additions (V12)
- Dovrši Zagreb — naslovna fotografija + opis projekta
- Gloss & Glow — naslovna stranica + galerija
- ModularHome — naslovna stranica + galerija

All new portfolio images are bundled locally under `public/assets/projects/` so the Netlify deployment does not depend on external image URLs.
