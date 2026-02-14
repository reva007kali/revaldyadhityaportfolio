## Goal
- Duplicate this Laravel/Livewire portfolio project for a different person and update all naming/branding without breaking dependencies.

## Copy The Project Safely
- Create a new folder (e.g., `otherperson-portfolio`) and copy the whole project into it.
- Do not copy bulky/generated folders if you’re doing a clean clone: `vendor/`, `node_modules/`, `storage/logs/`, `storage/framework/` (they will be regenerated).
- If the project is a git repo and you want a fresh repo: delete the `.git` folder in the copy, then initialize a new repo later.

## Update Project Identity ("name")
- Update app display name:
  - In `.env`: set `APP_NAME="Other Person"`
  - If present, update `config/app.php` (some projects hardcode the name or fallback).
- Update package metadata:
  - `composer.json`: change `name`, `description`, `authors`.
  - `package.json`: change `name` (and optionally `description`).

## Update Branding Content (the person’s info)
- Search/replace old person’s name, email, social links, and domain across:
  - `resources/views/**` (Blade)
  - `app/**` (controllers/livewire)
  - `config/**`
  - `database/seeders/**` (if portfolio data is seeded)
- If portfolio content is database-driven (looks likely: `$features`), decide one:
  - Use a new database for the new person (recommended)
  - Or wipe existing portfolio tables and re-enter content

## Environment And Database For The New Copy
- Create a new `.env` for the copied project:
  - Set `APP_URL` to the new local URL
  - Set new `DB_DATABASE` (recommended) and credentials
- Run setup commands in the copied folder:
  - `composer install`
  - `php artisan key:generate`
  - `php artisan migrate --seed` (only if you have seeders)
  - `php artisan storage:link` (if icons/images use `storage`)
  - `npm install` and `npm run build` (or `npm run dev` for development)
- Clear caches if the old name/config keeps showing:
  - `php artisan optimize:clear`

## Verification
- Open the site and confirm:
  - Title/branding shows the new `APP_NAME`
  - Old person’s name/social links don’t appear anywhere
  - Feature icons load correctly from `storage`

## Optional Improvement (makes future copying easier)
- Move “person profile” fields (name, role, email, socials) into a single config or database table so you only change them in one place.

If you confirm, I’ll scan this repo for where the name/branding is defined (Blade, config, seeders, Livewire components) and provide a precise checklist of files/lines to edit for your specific project layout.