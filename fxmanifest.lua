fx_version 'cerulean';
games {
  "gta5",
  "rdr3"
};
lua54 'yes';
author 'Vitor Ribeiro && TasoOneAsia <monk@codevitor.dev>';

ui_page 'public/index.html'

client_scripts {
  'utils/cef.utils.lua',
  'Client/Events.lua'
}

files {
	'public/index.html',
	'public/**/*',
}