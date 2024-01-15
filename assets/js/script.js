function setLanguagePreference(lang) {
	localStorage.setItem('language', lang);
	location.reload();
}

async function fetchLanguageData(lang) {
	const response = await fetch(`assets/languages/${lang}.json`);
	return response.json();
}

function updateContent(langData) {
	document.querySelectorAll('[data-i18n]').forEach(elem => {
		const key = elem.getAttribute('data-i18n');
		elem.textContent = langData[key];
	});
}

async function changeLanguage(lang) {
	await setLanguagePreference(lang);

	const langData = await fetchLanguageData(lang);
	updateContent(langData);
}

window.addEventListener('DOMContentLoaded', async () => {
	const lang = localStorage.getItem('language') || 'en';
	const langData = await fetchLanguageData(lang);
	updateContent(langData);
});
